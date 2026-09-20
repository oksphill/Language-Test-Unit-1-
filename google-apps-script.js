/**
 * ============================================================================
 * GOOGLE APPS SCRIPT — БАЗА ДАННЫХ И УВЕДОМЛЕНИЯ ДЛЯ ТЕСТОВ ПО АНГЛИЙСКОМУ
 * ============================================================================
 * 
 * ИНСТРУКЦИЯ ПО УСТАНОВКЕ (занимает 3 минуты):
 * 1. Откройте Google Диск (drive.google.com) и создайте новую Google Таблицу.
 *    Назовите её, например: "Результаты тестов по английскому".
 * 2. В меню таблицы нажмите: «Расширения» (Extensions) ➔ «Apps Script».
 * 3. Удалите весь текст в открывшемся окне и вставьте ВЕСЬ этот код целиком.
 * 4. В переменной TEACHER_EMAIL ниже (строка 18) укажите вашу почту,
 *    куда должны приходить письма (или оставьте пустой, тогда письмо пойдёт
 *    на почту владельца таблицы).
 * 5. Нажмите кнопку «Сохранить» (значок дискеты 💾).
 * 6. Нажмите синюю кнопку вверху справа: «Начать развертывание» (Deploy) ➔ «Новое развертывание» (New deployment).
 * 7. Нажмите на шестеренку ⚙️ «Выберите тип» ➔ выберите «Веб-приложение» (Web app).
 * 8. Заполните настройки:
 *    - Описание: "English Tests Webhook"
 *    - Выполнять от имени (Execute as): "Я" (Me)
 *    - У кого есть доступ (Who has access): "Все" (Anyone)   <-- ВАЖНО!
 * 9. Нажмите «Развернуть» (Deploy), разрешите доступ (Authorize access).
 * 10. Скопируйте полученный «URL веб-приложения» (Web app URL, заканчивается на /exec).
 * 11. Вставьте этот URL в файл `js/config.js` в проекте в поле `sheetsWebhookUrl`.
 * ============================================================================
 */

// Укажите ваш email, куда присылать результаты учеников.
// Если оставить "", скрипт автоматически отправит на почту владельца таблицы.
var TEACHER_EMAIL = "";

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

    // Если таблица пустая — создаем аккуратную шапку с оформлением
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Дата и время",
        "ФИО студента",
        "Класс",
        "Тест / Вариант",
        "Баллы",
        "Процент",
        "Оценка",
        "Секции (детали)",
        "Ошибок",
        "Список ошибок"
      ]);
      var headerRange = sheet.getRange(1, 1, 1, 10);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#4F46E5");
      headerRange.setFontColor("#FFFFFF");
      sheet.setFrozenRows(1);
    }

    // Добавляем строку с результатами ученика
    sheet.appendRow([
      data.timestamp || new Date().toLocaleString("ru-RU"),
      data.studentName || "Не указано",
      data.studentClass || "—",
      data.variant || "—",
      data.totalScore || "0",
      data.percentage || "0%",
      data.grade || "—",
      data.sections || "—",
      data.mistakesCount || 0,
      data.mistakesSummary || "Нет ошибок"
    ]);

    // Автоматическая подгонка ширины колонок при первой записи
    if (sheet.getLastRow() <= 2) {
      sheet.autoResizeColumns(1, 8);
    }

    // Отправляем уведомление на email учителя
    sendEmailNotification(data);

    return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Отправка красивого HTML-письма на почту учителю
 */
function sendEmailNotification(data) {
  try {
    var recipient = TEACHER_EMAIL;
    if (!recipient || recipient.trim() === "") {
      recipient = SpreadsheetApp.getActiveSpreadsheet().getOwner().getEmail();
    }
    if (!recipient) return;

    var subject = "📝 Сдан тест: " + (data.studentName || "Ученик") + " — " + (data.variant || "English Test") + " [" + (data.totalScore || "") + " / " + (data.percentage || "") + "]";

    var mistakesBlock = "";
    if (data.mistakesCount > 0 && data.mistakesSummary) {
      mistakesBlock = `
        <div style="margin-top: 16px; background-color: #FEF2F2; border-left: 4px solid #EF4444; padding: 12px 16px; border-radius: 6px;">
          <h4 style="margin: 0 0 8px 0; color: #991B1B; font-size: 15px;">❌ Допущенные ошибки (${data.mistakesCount}):</h4>
          <pre style="margin: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 13px; line-height: 1.6; color: #1F2937; white-space: pre-wrap;">${escapeHtml(data.mistakesSummary)}</pre>
        </div>
      `;
    } else {
      mistakesBlock = `
        <div style="margin-top: 16px; background-color: #ECFDF5; border-left: 4px solid #10B981; padding: 12px 16px; border-radius: 6px; color: #065F46; font-size: 14px; font-weight: bold;">
          🎉 Идеальный результат! 100% правильных ответов, ошибок нет!
        </div>
      `;
    }

    var sheetUrl = SpreadsheetApp.getActiveSpreadsheet().getUrl();

    var htmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #F8FAFC; padding: 24px;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #FFFFFF; border-radius: 12px; border: 1px solid #E2E8F0; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
          
          <!-- Шапка -->
          <div style="background-color: #4F46E5; color: #FFFFFF; padding: 20px 24px; text-align: center;">
            <h2 style="margin: 0; font-size: 20px; font-weight: 700;">Новый результат теста по английскому</h2>
            <p style="margin: 6px 0 0 0; opacity: 0.9; font-size: 14px;">${data.variant || 'English Test'}</p>
          </div>

          <!-- Основные данные -->
          <div style="padding: 24px;">
            <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
              <tr>
                <td style="padding: 8px 0; color: #64748B; width: 140px;">👤 Студент:</td>
                <td style="padding: 8px 0; font-weight: 700; color: #0F172A; font-size: 16px;">${data.studentName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748B;">🏆 Итог:</td>
                <td style="padding: 8px 0; font-weight: 800; color: #4F46E5; font-size: 18px;">
                  ${data.totalScore} (${data.percentage}) — ${data.grade}
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748B;">📊 По разделам:</td>
                <td style="padding: 8px 0; color: #334155; font-size: 14px;">${data.sections}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748B;">⏰ Время сдачи:</td>
                <td style="padding: 8px 0; color: #64748B; font-size: 13px;">${data.timestamp}</td>
              </tr>
            </table>

            <!-- Блок ошибок -->
            ${mistakesBlock}

            <!-- Кнопка перехода к Google Таблице -->
            <div style="margin-top: 24px; text-align: center;">
              <a href="${sheetUrl}" style="display: inline-block; background-color: #4F46E5; color: #FFFFFF; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 700; font-size: 14px;">
                Открыть Google Таблицу 📊
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

/**
 * ============================================================================
 * КРОН-ЗАДАЧА: ЕЖЕДНЕВНАЯ СВОДКА (ОПЦИОНАЛЬНО)
 * ============================================================================
 * Чтобы включить ежедневную сводку (например, каждый вечер в 20:00):
 * 1. В редакторе Apps Script слева нажмите значок ⏰ «Триггеры» (Triggers).
 * 2. Нажмите «Добавить триггер» (Add Trigger).
 * 3. Выберите функцию: `sendDailyDigest`.
 * 4. Источник мероприятия: «По времени» (Time-driven).
 * 5. Тип триггера: «Дневной таймер» (Day timer) ➔ Выберите удобное время (например, с 20:00 до 21:00).
 * 6. Нажмите «Сохранить».
 */
function sendDailyDigest() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var rows = sheet.getDataRange().getValues();
  if (rows.length <= 1) return;

  var todayDateStr = new Date().toLocaleDateString("ru-RU");
  var todaySubmissions = [];

  for (var i = 1; i < rows.length; i++) {
    var rowDate = String(rows[i][0]);
    if (rowDate.indexOf(todayDateStr) !== -1) {
      todaySubmissions.push({
        name: rows[i][1],
        test: rows[i][3],
        score: rows[i][4],
        percent: rows[i][5],
        grade: rows[i][6]
      });
    }
  }

  if (todaySubmissions.length === 0) return; // Сегодня никто не сдавал

  var recipient = TEACHER_EMAIL;
  if (!recipient || recipient.trim() === "") {
    recipient = SpreadsheetApp.getActiveSpreadsheet().getOwner().getEmail();
  }
  if (!recipient) return;

  var listHtml = "";
  todaySubmissions.forEach(function(sub, idx) {
    listHtml += "<tr>" +
      "<td style='padding:8px; border-bottom:1px solid #E2E8F0;'>" + (idx + 1) + ". <strong>" + sub.name + "</strong></td>" +
      "<td style='padding:8px; border-bottom:1px solid #E2E8F0;'>" + sub.test + "</td>" +
      "<td style='padding:8px; border-bottom:1px solid #E2E8F0; color:#4F46E5; font-weight:bold;'>" + sub.score + " (" + sub.percent + ")</td>" +
      "<td style='padding:8px; border-bottom:1px solid #E2E8F0;'>" + sub.grade + "</td>" +
    "</tr>";
  });

  var sheetUrl = SpreadsheetApp.getActiveSpreadsheet().getUrl();

  var digestHtml = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #F8FAFC; padding: 24px;">
      <div style="max-width: 650px; margin: 0 auto; background: #FFFFFF; border-radius: 12px; border: 1px solid #E2E8F0; padding: 24px;">
        <h2 style="color: #4F46E5; margin-top: 0;">📅 Сводка сданных тестов за сегодня (${todayDateStr})</h2>
        <p style="color: #64748B;">Всего сдали тестов: <strong>${todaySubmissions.length}</strong></p>
        <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-top: 16px;">
          <thead>
            <tr style="background-color: #F1F5F9; text-align: left;">
              <th style="padding: 8px;">Студент</th>
              <th style="padding: 8px;">Тест</th>
              <th style="padding: 8px;">Баллы</th>
              <th style="padding: 8px;">Оценка</th>
            </tr>
          </thead>
          <tbody>
            ${listHtml}
          </tbody>
        </table>
        <div style="margin-top: 24px; text-align: center;">
          <a href="${sheetUrl}" style="display: inline-block; background-color: #4F46E5; color: #FFFFFF; text-decoration: none; padding: 10px 20px; border-radius: 6px; font-weight: bold; font-size: 14px;">
            Открыть полную таблицу
          </a>
        </div>
      </div>
    </div>
  `;

  MailApp.sendEmail({
    to: recipient,
    subject: "📅 Ежедневная сводка тестов: сдали " + todaySubmissions.length + " учеников (" + todayDateStr + ")",
    htmlBody: digestHtml
  });
}

/**
 * Экранирование HTML спецсимволов
 */
function escapeHtml(text) {
  if (!text) return "";
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
