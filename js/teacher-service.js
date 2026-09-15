/**
 * Language Test Unit 1 - Teacher Communication & Webhooks Service
 * Integrates Google Sheets (Apps Script) and Telegram Bot API
 */

const TeacherService = {
  /**
   * Sends the test results to Google Sheets and/or Telegram based on configured settings.
   */
  async submitTestResults(student, evaluation) {
    const config = Storage.getTeacherConfig();
    const payload = {
      type: "TEST_SUBMISSION",
      timestamp: new Date().toLocaleString(),
      studentName: `${student.firstName} ${student.lastName}`.trim(),
      studentClass: student.studentClass || "N/A",
      variant: evaluation.variantTitle,
      totalScore: `${evaluation.totalScore} / ${evaluation.totalMax}`,
      percentage: `${evaluation.percentage}%`,
      grade: evaluation.gradeTier.badge,
      vocabScore: `${evaluation.sections.vocabulary.score} / ${evaluation.sections.vocabulary.maxScore}`,
      grammarScore: `${evaluation.sections.grammar.score} / ${evaluation.sections.grammar.maxScore}`,
      commScore: `${evaluation.sections.communication.score} / ${evaluation.sections.communication.maxScore}`,
      mistakesCount: evaluation.mistakes.length,
      mistakesSummary: evaluation.mistakes.map(m => 
        `Task ${m.taskNumber} [q:${m.id}] - Student: "${m.userAnswer || '(blank)'}" | Correct: "${m.expected}"`
      ).join("; ")
    };

    // Always archive locally first
    Storage.archiveSubmission({
      student,
      evaluation,
      payload
    });

    const status = {
      sheets: { attempted: false, success: false, error: null },
      telegram: { attempted: false, success: false, error: null }
    };

    // 1. Google Sheets Webhook
    if (config.sheetsWebhookUrl && config.sheetsWebhookUrl.trim().startsWith("http")) {
      status.sheets.attempted = true;
      try {
        await fetch(config.sheetsWebhookUrl.trim(), {
          method: "POST",
          mode: "no-cors", // Google Apps Script redirects (302) on POST; no-cors allows sending without CORS errors
          headers: {
            "Content-Type": "text/plain;charset=utf-8"
          },
          body: JSON.stringify(payload)
        });
        status.sheets.success = true;
      } catch (err) {
        console.warn("Google Sheets submission failed:", err);
        status.sheets.error = err.message || "Network error";
      }
    }

    // 2. Telegram Bot API
    if (config.telegramBotToken && config.telegramChatId) {
      status.telegram.attempted = true;
      try {
        const message = this.formatTelegramSubmission(payload, evaluation);
        const res = await this.sendTelegramMessage(
          config.telegramBotToken.trim(),
          config.telegramChatId.trim(),
          message
        );
        if (res.ok) {
          status.telegram.success = true;
        } else {
          status.telegram.error = res.description || "Telegram API rejected message";
        }
      } catch (err) {
        console.warn("Telegram submission failed:", err);
        status.telegram.error = err.message || "Network error";
      }
    }

    return status;
  },

  /**
   * Sends a student question ("Ask Teacher") to teacher's Telegram and/or Sheets.
   */
  async sendStudentQuestion({ student, variantTitle, taskInfo, questionText }) {
    const config = Storage.getTeacherConfig();
    const payload = {
      type: "STUDENT_QUESTION",
      timestamp: new Date().toLocaleString(),
      studentName: `${student.firstName} ${student.lastName}`.trim(),
      studentClass: student.studentClass || "N/A",
      variant: variantTitle,
      taskInfo: taskInfo || "General question",
      questionText: questionText.trim()
    };

    const status = {
      sheets: { attempted: false, success: false },
      telegram: { attempted: false, success: false }
    };

    // Send to Google Sheets if configured
    if (config.sheetsWebhookUrl && config.sheetsWebhookUrl.trim().startsWith("http")) {
      status.sheets.attempted = true;
      try {
        await fetch(config.sheetsWebhookUrl.trim(), {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify(payload)
        });
        status.sheets.success = true;
      } catch (err) {
        console.warn("Google Sheets question submission failed:", err);
      }
    }

    // Send to Telegram if configured
    if (config.telegramBotToken && config.telegramChatId) {
      status.telegram.attempted = true;
      try {
        const text = `❓ *New Question from Student!*\n\n` +
          `👤 *Student:* ${payload.studentName} (${payload.studentClass})\n` +
          `📑 *Test:* ${payload.variant}\n` +
          `🔢 *Task / Item:* ${payload.taskInfo}\n\n` +
          `💬 *Question:* \n"${payload.questionText}"\n\n` +
          `⏰ _${payload.timestamp}_`;

        const res = await this.sendTelegramMessage(
          config.telegramBotToken.trim(),
          config.telegramChatId.trim(),
          text
        );
        status.telegram.success = res.ok;
      } catch (err) {
        console.warn("Telegram question submission failed:", err);
      }
    }

    return status;
  },

  /**
   * Helper to format a Telegram message for a completed test.
   */
  formatTelegramSubmission(payload, evaluation) {
    let msg = `📝 *New Test Submission Received!*\n\n` +
      `👤 *Student:* ${payload.studentName}\n` +
      `🏫 *Class:* ${payload.studentClass}\n` +
      `📑 *Test:* ${payload.variant}\n` +
      `🏆 *Total Score:* *${payload.totalScore}* (${payload.percentage}) — ${payload.grade}\n\n` +
      `📊 *Section Results:*\n` +
      `• *Vocabulary:* ${payload.vocabScore}\n` +
      `• *Grammar:* ${payload.grammarScore}\n` +
      `• *Communication:* ${payload.commScore}\n`;

    if (evaluation.mistakes && evaluation.mistakes.length > 0) {
      msg += `\n❌ *Mistakes (${evaluation.mistakes.length}):*\n`;
      evaluation.mistakes.slice(0, 10).forEach((m, idx) => {
        msg += `${idx + 1}. Task ${m.taskNumber} (Item ${m.id}): wrote "${m.userAnswer || 'BLANK'}" ➔ *${m.expected}*\n`;
      });
      if (evaluation.mistakes.length > 10) {
        msg += `...and ${evaluation.mistakes.length - 10} more items.\n`;
      }
    } else {
      msg += `\n🎉 *Perfect Score! No mistakes!* 🌟\n`;
    }

    msg += `\n⏰ _Submitted: ${payload.timestamp}_`;
    return msg;
  },

  /**
   * Directly posts to Telegram Bot API.
   */
  async sendTelegramMessage(botToken, chatId, text) {
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: "Markdown"
      })
    });
    return await response.json();
  },

  /**
   * Tests Google Sheets webhook.
   */
  async testSheetsWebhook(url) {
    if (!url || !url.startsWith("http")) {
      return { ok: false, message: "Please enter a valid HTTP/HTTPS URL." };
    }
    try {
      await fetch(url.trim(), {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          type: "PING_TEST",
          timestamp: new Date().toLocaleString(),
          message: "Test connection from English Test App"
        })
      });
      return { ok: true, message: "Ping sent successfully (no-cors mode)." };
    } catch (err) {
      return { ok: false, message: err.message || "Failed to reach endpoint." };
    }
  },

  /**
   * Tests Telegram bot connection by sending a short test message.
   */
  async testTelegramBot(token, chatId) {
    if (!token || !chatId) {
      return { ok: false, message: "Both Bot Token and Chat ID are required." };
    }
    try {
      const res = await this.sendTelegramMessage(
        token.trim(),
        chatId.trim(),
        "👋 *English Test System:* Test connection successful! Ready to receive student scores."
      );
      if (res.ok) {
        return { ok: true, message: "Test message sent to Telegram successfully!" };
      } else {
        return { ok: false, message: res.description || "Telegram API error" };
      }
    } catch (err) {
      return { ok: false, message: err.message || "Network error connecting to Telegram" };
    }
  }
};
