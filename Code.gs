/**
 * ============================================================================
 * Language Test Unit 1 - Google Apps Script (Code.gs)
 * ============================================================================
 * 
 * INSTRUCTIONS FOR TEACHERS:
 * 1. Open your Google Drive and create a new Google Spreadsheet (e.g. "English Test Unit 1 Results").
 * 2. In the top menu, click: Extensions -> Apps Script.
 * 3. Delete any code in the editor, and paste this entire file content.
 * 4. Click the "Save" (disk) icon.
 * 5. Click the blue "Deploy" button (top-right) -> "New deployment".
 * 6. Under "Select type", choose "Web app".
 * 7. Set:
 *    - Description: "English Test Webhook"
 *    - Execute as: "Me" (your Google account)
 *    - Who has access: "Anyone" (allows pupils' browsers to send results without signing into Google)
 * 8. Click "Deploy". Authorize permissions when prompted.
 * 9. Copy the "Web app URL" (ends in `/exec`).
 * 10. Open the English Test web application, click the ⚙️ icon in the header,
 *     paste the Web App URL, and click "Test"!
 * ============================================================================
 */

function doPost(e) {
  try {
    var rawData = e.postData.contents;
    var data = JSON.parse(rawData);
    var ss = SpreadsheetApp.getActiveSpreadsheet();

    // 1. Handle Ping Test
    if (data.type === "PING_TEST") {
      return ContentService
        .createTextOutput(JSON.stringify({ status: "ok", message: "Google Sheets Webhook is active!" }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // 2. Handle Test Submissions
    if (data.type === "TEST_SUBMISSION") {
      var sheet = ss.getSheetByName("Test Results");
      if (!sheet) {
        sheet = ss.insertSheet("Test Results");
        sheet.appendRow([
          "Timestamp",
          "Student Name",
          "Class / Group",
          "Test Variant",
          "Total Score",
          "Percentage",
          "Grade / Status",
          "Vocabulary (16)",
          "Grammar (14)",
          "Communication (5)",
          "Mistakes Count",
          "Mistakes Summary"
        ]);
        var headerRange = sheet.getRange(1, 1, 1, 12);
        headerRange.setFontWeight("bold");
        headerRange.setBackground("#4F46E5");
        headerRange.setFontColor("#FFFFFF");
        sheet.setFrozenRows(1);
      }

      sheet.appendRow([
        data.timestamp || new Date().toLocaleString(),
        data.studentName || "N/A",
        data.studentClass || "N/A",
        data.variant || "N/A",
        data.totalScore || "0",
        data.percentage || "0%",
        data.grade || "",
        data.vocabScore || "0",
        data.grammarScore || "0",
        data.commScore || "0",
        data.mistakesCount || 0,
        data.mistakesSummary || "None"
      ]);

      return ContentService
        .createTextOutput(JSON.stringify({ status: "success", message: "Submission recorded" }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // 3. Handle Student Questions ("Ask Teacher")
    if (data.type === "STUDENT_QUESTION") {
      var qSheet = ss.getSheetByName("Questions");
      if (!qSheet) {
        qSheet = ss.insertSheet("Questions");
        qSheet.appendRow([
          "Timestamp",
          "Student Name",
          "Class / Group",
          "Test Variant",
          "Task / Item",
          "Question",
          "Status"
        ]);
        var qHeaderRange = qSheet.getRange(1, 1, 1, 7);
        qHeaderRange.setFontWeight("bold");
        qHeaderRange.setBackground("#0D9488");
        qHeaderRange.setFontColor("#FFFFFF");
        qSheet.setFrozenRows(1);
      }

      qSheet.appendRow([
        data.timestamp || new Date().toLocaleString(),
        data.studentName || "N/A",
        data.studentClass || "N/A",
        data.variant || "N/A",
        data.taskInfo || "N/A",
        data.questionText || "",
        "Pending"
      ]);

      return ContentService
        .createTextOutput(JSON.stringify({ status: "success", message: "Question recorded" }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    return ContentService
      .createTextOutput(JSON.stringify({ status: "ignored", message: "Unknown payload type" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      status: "online",
      service: "English Test Unit 1 - Google Sheets Webhook",
      timestamp: new Date().toISOString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
