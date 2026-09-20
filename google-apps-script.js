/**
 * ============================================================================
 * GOOGLE APPS SCRIPT — БАЗА ДАННЫХ ДЛЯ ТЕСТОВ ПО АНГЛИЙСКОМУ (БЕЗ УВЕДОМЛЕНИЙ)
 * ============================================================================
 * Тихо сохраняет все результаты в Google Таблицу БЕЗ писем и уведомлений:
 * 1. Дата и время сдачи
 * 2. ФИО студента
 * 3. Учитель (по желанию, колонка и отдельная вкладка «Учитель»)
 * 4. Тест / Вариант
 * 5. Баллы (набрано / максимум и процент)
 * 6. Количество ошибок
 * 7. Список ошибок (детали каждого неверного ответа)
 *
 * ВКЛАДКИ ТАБЛИЦЫ:
 * - Основной лист («Все результаты» / активный лист) — содержит все работы.
 * - Вкладка «Учитель» — автоматически собирает все тесты с указанным учителем.
 * ============================================================================
 */

/**
 * Обработчик GET-запросов (проверка доступности вебхука)
 */
function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: "ok",
    message: "English Test Webhook is active with Teacher tab support!"
  })).setMimeType(ContentService.MimeType.JSON);
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
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var mainSheet = ss.getActiveSheet();

    // 1. Инициализация / проверка основной таблицы («Все результаты»)
    setupMainSheetHeader(mainSheet);

    var timestamp = data.timestamp || new Date().toLocaleString("ru-RU");
    var studentName = data.studentName || "Не указано";
    var teacher = (data.teacher && data.teacher.trim() && data.teacher.trim() !== "—")
      ? data.teacher.trim()
      : "—";
    var variant = data.variant || "—";
    var scoreText = (data.totalScore || "0") + " (" + (data.percentage || "0%") + ")";
    var mistakesCount = data.mistakesCount !== undefined ? data.mistakesCount : 0;
    var mistakesSummary = data.mistakesSummary || "No mistakes (100% score)";

    // Добавляем строку в основную таблицу
    mainSheet.appendRow([
      timestamp,
      studentName,
      teacher,
      variant,
      scoreText,
      mistakesCount,
      mistakesSummary
    ]);

    var mainLastRow = mainSheet.getLastRow();
    mainSheet.getRange(mainLastRow, 1).setHorizontalAlignment("center");
    mainSheet.getRange(mainLastRow, 3).setHorizontalAlignment("center");
    mainSheet.getRange(mainLastRow, 5).setHorizontalAlignment("center");
    mainSheet.getRange(mainLastRow, 6).setHorizontalAlignment("center");

    // 2. Отдельная вкладка «Учитель»
    var teacherSheet = ss.getSheetByName("Учитель");
    if (!teacherSheet) {
      teacherSheet = ss.insertSheet("Учитель");
      setupTeacherSheetHeader(teacherSheet);
    } else if (teacherSheet.getLastRow() === 0) {
      setupTeacherSheetHeader(teacherSheet);
    }

    // Если учитель указан учеником — дублируем результат во вкладку «Учитель»
    if (teacher !== "—") {
      teacherSheet.appendRow([
        timestamp,
        teacher,
        studentName,
        variant,
        scoreText,
        mistakesCount,
        mistakesSummary
      ]);

      var tLastRow = teacherSheet.getLastRow();
      teacherSheet.getRange(tLastRow, 1).setHorizontalAlignment("center");
      teacherSheet.getRange(tLastRow, 2).setHorizontalAlignment("center");
      teacherSheet.getRange(tLastRow, 5).setHorizontalAlignment("center");
      teacherSheet.getRange(tLastRow, 6).setHorizontalAlignment("center");
    }

    return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Настройка шапки основного листа с поддержкой автомиграции
 */
function setupMainSheetHeader(sheet) {
  // Если лист пустой — создаем 7 колонок
  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "Дата и время",
      "ФИО студента",
      "Учитель",
      "Тест / Вариант",
      "Баллы",
      "Количество ошибок",
      "Список ошибок"
    ]);
    var headerRange = sheet.getRange(1, 1, 1, 7);
    headerRange.setFontWeight("bold");
    headerRange.setBackground("#4F46E5");
    headerRange.setFontColor("#FFFFFF");
    headerRange.setHorizontalAlignment("center");
    sheet.setFrozenRows(1);
    sheet.setColumnWidth(1, 140);
    sheet.setColumnWidth(2, 220);
    sheet.setColumnWidth(3, 180);
    sheet.setColumnWidth(4, 220);
    sheet.setColumnWidth(5, 140);
    sheet.setColumnWidth(6, 140);
    sheet.setColumnWidth(7, 450);
    return;
  }

  // Если в старой таблице 3-я колонка была «Тест / Вариант» — аккуратно вставляем колонку «Учитель» на 3 позицию
  if (sheet.getRange(1, 3).getValue() === "Тест / Вариант") {
    sheet.insertColumnBefore(3);
    var newColCell = sheet.getRange(1, 3);
    newColCell.setValue("Учитель");
    newColCell.setFontWeight("bold");
    newColCell.setBackground("#4F46E5");
    newColCell.setFontColor("#FFFFFF");
    newColCell.setHorizontalAlignment("center");
    sheet.setColumnWidth(3, 180);
  }
}

/**
 * Настройка шапки отдельной вкладки «Учитель» (изумрудная тема)
 */
function setupTeacherSheetHeader(sheet) {
  sheet.clear();
  sheet.appendRow([
    "Дата и время",
    "Учитель",
    "ФИО студента",
    "Тест / Вариант",
    "Баллы",
    "Количество ошибок",
    "Список ошибок"
  ]);
  var headerRange = sheet.getRange(1, 1, 1, 7);
  headerRange.setFontWeight("bold");
  headerRange.setBackground("#059669"); // Изумрудный цвет шапки
  headerRange.setFontColor("#FFFFFF");
  headerRange.setHorizontalAlignment("center");
  sheet.setFrozenRows(1);
  sheet.setColumnWidth(1, 140);
  sheet.setColumnWidth(2, 180);
  sheet.setColumnWidth(3, 220);
  sheet.setColumnWidth(4, 220);
  sheet.setColumnWidth(5, 140);
  sheet.setColumnWidth(6, 140);
  sheet.setColumnWidth(7, 450);
}

/**
 * Ручная инициализация обеих вкладок («Все результаты» и «Учитель»)
 */
function resetTable() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var mainSheet = ss.getActiveSheet();
  mainSheet.clear();
  setupMainSheetHeader(mainSheet);

  var teacherSheet = ss.getSheetByName("Учитель");
  if (!teacherSheet) {
    teacherSheet = ss.insertSheet("Учитель");
  }
  setupTeacherSheetHeader(teacherSheet);
}
