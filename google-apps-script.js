/**
 * ============================================================================
 * GOOGLE APPS SCRIPT — БАЗА ДАННЫХ ДЛЯ ТЕСТОВ ПО АНГЛИЙСКОМУ (БЕЗ УВЕДОМЛЕНИЙ)
 * ============================================================================
 * Тихо сохраняет все результаты в Google Таблицу БЕЗ писем и уведомлений:
 * 1. Дата и время сдачи
 * 2. ФИО студента
 * 3. Тест / Вариант
 * 4. Баллы (набрано / максимум и процент)
 * 5. Количество ошибок
 * 6. Список ошибок (детали каждого неверного ответа)
 * ============================================================================
 */

/**
 * Обработчик GET-запросов (проверка доступности вебхука)
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

    // Если таблица пустая или в ней старая шапка — автоматически форматируем под 6 чистых колонок
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
      data.mistakesSummary || "No mistakes (100% score)"
    ]);

    // Выравнивание для аккуратного вида
    var lastRow = sheet.getLastRow();
    sheet.getRange(lastRow, 1).setHorizontalAlignment("center");
    sheet.getRange(lastRow, 4).setHorizontalAlignment("center");
    sheet.getRange(lastRow, 5).setHorizontalAlignment("center");

    // Уведомления отключены: все результаты сохраняются бесшумно в таблицу

    return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Ручная очистка и сброс шапки таблицы (при необходимости)
 */
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
