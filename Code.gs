/**
 * ============================================================================
 * Language Test Unit 1 - Google Apps Script (Code.gs)
 * ============================================================================
 */

// Укажите ваш email, куда присылать результаты учеников.
// Если оставить "", скрипт автоматически отправит на почту владельца таблицы.
var TEACHER_EMAIL = "";

/**
 * Обработчик GET-запросов (проверка связи)
 */
function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({ status: "ok", message: "English Test Webhook is active!" }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Обработчик входящих POST-запросов от сайта с тестами
 */
function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return ContentService.createTextOutput(JSON.stringify({ status: "error", message: "No data received" }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Если таблица пустая или в ней старая шапка с лишней колонкой "Класс" — создаем чистую шапку
    if (sheet.getLastRow() === 0 || sheet.getRange(1, 3).getValue() === "Класс") {
      sheet.clear();
      sheet.appendRow([
        "Дата и время",
        "ФИО студента",
        "Тест / Вариант",
        "Баллы",
        "Количество ошибок",
        "Список ошибок"
      ]);
      var headerRange = sheet.getRange(1, 1, 1, 6);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#4F46E5");
      headerRange.setFontColor("#FFFFFF");
      headerRange.setHorizontalAlignment("center");
      sheet.setFrozenRows(1);
      sheet.setColumnWidth(1, 140); // Дата
      sheet.setColumnWidth(2, 220); // ФИО
      sheet.setColumnWidth(3, 220); // Тест
      sheet.setColumnWidth(4, 140); // Баллы
      sheet.setColumnWidth(5, 140); // Ошибок
      sheet.setColumnWidth(6, 450); // Список ошибок
    }

    var scoreText = (data.totalScore || "0") + " (" + (data.percentage || "0%") + ")";

    // Добавляем строку с результатами ученика: только баллы и ошибки
    sheet.appendRow([
      data.timestamp || new Date().toLocaleString("ru-RU"),
      data.studentName || "Не указано",
      data.variant || "—",
      scoreText,
      data.mistakesCount !== undefined ? data.mistakesCount : 0,
      data.mistakesSummary || "Нет ошибок (100% результат)"
    ]);

    var lastRow = sheet.getLastRow();
    sheet.getRange(lastRow, 1).setHorizontalAlignment("center");
    sheet.getRange(lastRow, 4).setHorizontalAlignment("center");
    sheet.getRange(lastRow, 5).setHorizontalAlignment("center");

    sendEmailNotification(data);

    return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function resetTable() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.clear();
  sheet.appendRow([
    "Дата и время",
    "ФИО студента",
    "Тест / Вариант",
    "Баллы",
    "Количество ошибок",
    "Список ошибок"
  ]);
  var headerRange = sheet.getRange(1, 1, 1, 6);
  headerRange.setFontWeight("bold");
  headerRange.setBackground("#4F46E5");
  headerRange.setFontColor("#FFFFFF");
  headerRange.setHorizontalAlignment("center");
  sheet.setFrozenRows(1);
  sheet.setColumnWidth(1, 140);
  sheet.setColumnWidth(2, 220);
  sheet.setColumnWidth(3, 220);
  sheet.setColumnWidth(4, 140);
  sheet.setColumnWidth(5, 140);
  sheet.setColumnWidth(6, 450);
}

function sendEmailNotification(data) {
  try {
    var recipient = TEACHER_EMAIL;
    if (!recipient || recipient.trim() === "") {
      recipient = SpreadsheetApp.getActiveSpreadsheet().getOwner().getEmail();
    }
    if (!recipient) return;

    var scoreDisplay = (data.totalScore || "0") + " (" + (data.percentage || "0%") + ")";
    var subject = "📝 Сдан тест: " + (data.studentName || "Ученик") + " — " + (data.variant || "English Test") + " [" + scoreDisplay + "]";

    var mistakesBlock = "";
    if (data.mistakesCount > 0 && data.mistakesSummary) {
      mistakesBlock = `
        <div style="margin-top: 16px; background-color: #FEF2F2; border-left: 4px solid #EF4444; padding: 14px 18px; border-radius: 8px;">
          <h4 style="margin: 0 0 10px 0; color: #991B1B; font-size: 15px;">❌ Допущенные ошибки (${data.mistakesCount}):</h4>
          <pre style="margin: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 13px; line-height: 1.6; color: #1F2937; white-space: pre-wrap;">${escapeHtml(data.mistakesSummary)}</pre>
        </div>
      `;
    } else {
      mistakesBlock = `
        <div style="margin-top: 16px; background-color: #ECFDF5; border-left: 4px solid #10B981; padding: 14px 18px; border-radius: 8px; color: #065F46; font-size: 14px; font-weight: bold;">
          🎉 Идеальный результат! 100% правильных ответов, ошибок нет!
        </div>
      `;
    }

    var sheetUrl = SpreadsheetApp.getActiveSpreadsheet().getUrl();

    var htmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #F8FAFC; padding: 24px;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #FFFFFF; border-radius: 12px; border: 1px solid #E2E8F0; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
          
          <div style="background-color: #4F46E5; color: #FFFFFF; padding: 20px 24px; text-align: center;">
            <h2 style="margin: 0; font-size: 20px; font-weight: 700;">Результаты теста по английскому</h2>
            <p style="margin: 6px 0 0 0; opacity: 0.9; font-size: 14px;">${escapeHtml(data.variant || 'English Test')}</p>
          </div>

          <div style="padding: 24px;">
            <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
              <tr>
                <td style="padding: 10px 0; color: #64748B; width: 140px;">👤 Студент:</td>
                <td style="padding: 10px 0; font-weight: 700; color: #0F172A; font-size: 16px;">${escapeHtml(data.studentName)}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #64748B;">📑 Тест:</td>
                <td style="padding: 10px 0; font-weight: 600; color: #334155; font-size: 15px;">${escapeHtml(data.variant)}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #64748B;">🏆 Баллы:</td>
                <td style="padding: 10px 0; font-weight: 800; color: #4F46E5; font-size: 18px;">
                  ${escapeHtml(scoreDisplay)}
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #64748B;">❌ Ошибок:</td>
                <td style="padding: 10px 0; font-weight: 700; color: ${data.mistakesCount > 0 ? '#DC2626' : '#16A34A'}; font-size: 15px;">
                  ${data.mistakesCount}
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #64748B;">⏰ Время:</td>
                <td style="padding: 10px 0; color: #64748B; font-size: 13px;">${escapeHtml(data.timestamp)}</td>
              </tr>
            </table>

            ${mistakesBlock}

            <div style="margin-top: 24px; text-align: center;">
              <a href="${sheetUrl}" style="display: inline-block; background-color: #4F46E5; color: #FFFFFF; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 700; font-size: 14px;">
                📊 Открыть Google Таблицу
              </a>
            </div>
          </div>

          <div style="background-color: #F1F5F9; padding: 12px; text-align: center; font-size: 12px; color: #94A3B8;">
            Уведомление сгенерировано автоматически системой English Language Tests
          </div>
        </div>
      </div>
    `;

    MailApp.sendEmail({
      to: recipient,
      subject: subject,
      htmlBody: htmlContent
    });
  } catch (mailErr) {
    Logger.log("Ошибка отправки письма: " + mailErr);
  }
}

function escapeHtml(text) {
  if (!text) return "";
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
