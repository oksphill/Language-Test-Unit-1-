/**
 * Language Test Unit 1 - LocalStorage & State Persistence
 */

const Storage = {
  SESSION_KEY: "english_test_active_session_v1",
  CONFIG_KEY: "english_test_teacher_config_v1",
  ARCHIVE_KEY: "english_test_submissions_archive_v1",

  /**
   * Saves current active student test session.
   */
  saveSession(sessionData) {
    try {
      const data = {
        ...sessionData,
        lastSavedAt: new Date().toISOString()
      };
      localStorage.setItem(this.SESSION_KEY, JSON.stringify(data));
      return true;
    } catch (e) {
      console.error("Storage saveSession error:", e);
      return false;
    }
  },

  /**
   * Retrieves active test session if one exists.
   */
  getSession() {
    try {
      const raw = localStorage.getItem(this.SESSION_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      console.error("Storage getSession error:", e);
      return null;
    }
  },

  /**
   * Clears current active session (e.g. upon final submission or restart).
   */
  clearSession() {
    try {
      localStorage.removeItem(this.SESSION_KEY);
    } catch (e) {
      console.error("Storage clearSession error:", e);
    }
  },

  /**
   * Retrieves teacher configuration for Google Sheets and Telegram.
   */
  getTeacherConfig() {
    try {
      const raw = localStorage.getItem(this.CONFIG_KEY);
      return raw
        ? JSON.parse(raw)
        : {
            sheetsWebhookUrl: "",
            telegramBotToken: "",
            telegramChatId: "",
            notifyOnQuestion: true,
            notifyOnSubmit: true
          };
    } catch (e) {
      console.error("Storage getTeacherConfig error:", e);
      return {
        sheetsWebhookUrl: "",
        telegramBotToken: "",
        telegramChatId: "",
        notifyOnQuestion: true,
        notifyOnSubmit: true
      };
    }
  },

  /**
   * Saves teacher configuration.
   */
  saveTeacherConfig(config) {
    try {
      localStorage.setItem(this.CONFIG_KEY, JSON.stringify(config));
      return true;
    } catch (e) {
      console.error("Storage saveTeacherConfig error:", e);
      return false;
    }
  },

  /**
   * Archives a completed test report into local storage for the teacher.
   */
  archiveSubmission(submissionRecord) {
    try {
      const existing = this.getSubmissionsArchive();
      existing.unshift({
        id: "sub_" + Date.now(),
        timestamp: new Date().toISOString(),
        ...submissionRecord
      });
      // Cap at latest 100 entries to prevent storage overflow
      const capped = existing.slice(0, 100);
      localStorage.setItem(this.ARCHIVE_KEY, JSON.stringify(capped));
      return true;
    } catch (e) {
      console.error("Storage archiveSubmission error:", e);
      return false;
    }
  },

  /**
   * Returns all archived submissions.
   */
  getSubmissionsArchive() {
    try {
      const raw = localStorage.getItem(this.ARCHIVE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      console.error("Storage getSubmissionsArchive error:", e);
      return [];
    }
  },

  /**
   * Clears the submission archive.
   */
  clearArchive() {
    try {
      localStorage.removeItem(this.ARCHIVE_KEY);
      return true;
    } catch (e) {
      console.error("Storage clearArchive error:", e);
      return false;
    }
  }
};
