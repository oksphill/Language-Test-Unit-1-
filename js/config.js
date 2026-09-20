/**
 * Language Test Application - Global Configuration
 * 
 * To receive test results in your Google Sheet and by Email:
 * 1. Create a Google Sheet and paste the code from `google-apps-script.js`.
 * 2. Deploy as Web App ("Anyone" access) and copy the Web App URL.
 * 3. Paste the URL into `sheetsWebhookUrl` below:
 */
const APP_CONFIG = {
  // 1. Ваша личная таблица (по умолчанию):
  sheetsWebhookUrl: "https://script.google.com/macros/s/AKfycbwgEW927naXpaJhrA7CZ7K9EVMsyhYmrXZCjc7okevisCvmKbALItnxDaDnCrX-OKehEA/exec",

  // 2. Таблица для школы (когда ссылка открыта с ?school=1):
  schoolWebhookUrl: "https://script.google.com/macros/s/AKfycbxFgF7Y96BrWH9NuVSlWNQv1fqDhwYTu1nYNwPV8aLnEcdZO3PAWmD8vzTUxhVcET0/exec"
};
