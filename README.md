# Language Test Unit 1 — Pearson English Interactive Testing

An interactive, kid-friendly educational web application based on the official **Pearson English Language Test Unit 1** (Photocopiable materials). Fully responsive, designed in clear and accessible English (A2–B1 level), featuring instant grading with pedagogical explanations, auto-saving, and automated teacher reporting via **Google Sheets** and **Telegram**.

---

## 🌟 Key Features

1. **Dual Test Variants (A & B)**:
   - **Variant A**: Focuses on Mrs Cook (accessories) and Gregory Cook (clothes & appearance).
   - **Variant B**: Focuses on Mrs Smith (accessories) and Lee (clothes & appearance).
   - Exact fidelity to Pearson print sheets (35 points total: 16 Vocabulary, 14 Grammar, 5 Communication).

2. **Interactive Question Types**:
   - **Task 1 (5 pts)**: Picture description with interactive Word Bank (clickable chips or direct typing) and custom vector SVG illustrations.
   - **Task 2 (6 pts)**: Clothes & appearance with letter-count hints (`s _ _ _ t` -> shirt, `c _ _ _ _ _ d` -> checked, `b _ _ _ y` -> baggy, `h _ _ d _ _` -> hoodie, `s _ _ _ _ _ _ t` -> straight, `m _ _ _ _ _ _ _ e` -> moustache).
   - **Task 3 (5 pts)**: Personality adjectives with initial letter prompts (`selfish`, `impatient`, `dishonest`, `generous`, `polite` / `lazy`, `impolite`, `serious`).
   - **Task 4 (7 pts)**: Dialogue in the Past Simple (`Did you have`, `took`, `put`, `Did you drop`, `did`, `forgot`, `found`).
   - **Task 5 (7 pts)**: Past Simple vs. Past Continuous with bracketed prompts (`was waiting / called`, `was cycling / met`, `were you doing`, `were sleeping / got`).
   - **Task 6 (5 pts)**: Everyday communicative dialogue with phrase bank (`First`, `Lucky her!`, `what happened`, `No way!`, `Poor you!`).

3. **Smart Answer Validation**:
   - **Case-insensitive**: Accepts `SHIRT`, `shirt`, or `Shirt`.
   - **Contraction tolerance**: Accepts both `didn't` and `did not`, `wasn't` and `was not`, etc.
   - **Smart apostrophes**: Automatically normalizes curly quotes (`’`, `‘`) and trims trailing periods.

4. **Zero Data Loss (Auto-Save)**:
   - Every keystroke is saved in the browser's `localStorage`.
   - If a student accidentally refreshes or closes the tab, a "Resume Test" banner instantly restores their inputs.

5. **Instant Results & Error Review**:
   - Comprehensive score calculation out of 35 with section breakdowns.
   - Motivational achievement tiers and canvas celebration confetti (🌟 *Outstanding*, 🎉 *Great Job*, 👍 *Good Effort*).
   - **Detailed Review Mode**: Green highlights for correct answers, red for mistakes, with clear explanations of grammar rules and vocabulary meaning.
   - **Print / Save as PDF** support for student portfolios or teacher records.

6. **"Ask Teacher" Help Module**:
   - Available during the test and inside the review screen.
   - Pre-fills student name and task/question number.
   - Sends the question directly to the teacher's Telegram and/or Google Sheet.

7. **Teacher Integration & Submissions Archive**:
   - Real-time submission webhooks to **Google Sheets** and **Telegram Bot**.
   - Built-in **Local Archive** in the Teacher Settings modal (⚙️) to view and export student scores without any internet connection.

---

## 🚀 How to Run the Application

The application is completely self-contained with **zero dependencies or build steps**:

1. **Option A (Instant Open)**:
   - Simply double-click `index.html` in your file explorer. It will open in Google Chrome, Microsoft Edge, Firefox, or Safari on Windows, Mac, iPad, or Android.

2. **Option B (Local Web Server)**:
   - If you prefer serving over HTTP:
     ```bash
     # With Python 3
     python -m http.server 8080
     # Or using any static file server
     ```
   - Open `http://localhost:8080` in your browser.

---

## 📊 Teacher Setup Guide

Click the **⚙️ (Gear icon)** in the top-right corner of the application header to access Teacher Settings.

### 1. Google Sheets Integration (via Google Apps Script)
1. Open [Google Sheets](https://sheets.new) and create a new blank spreadsheet (e.g. *English Test Unit 1 Results*).
2. Click **Extensions ➔ Apps Script**.
3. Replace the default code with the contents of [`Code.gs`](file:///d:/antigravity/%D0%9D%D0%BE%D0%B2%D0%B0%D1%8F%20%D0%BF%D0%B0%D0%BF%D0%BA%D0%B0/Language%20Test%20Unit%201/Code.gs).
4. Click the **Save** icon.
5. Click **Deploy ➔ New deployment**.
6. Select **Web app**:
   - **Description**: `English Test Webhook`
   - **Execute as**: `Me`
   - **Who has access**: `Anyone` *(required for student browsers to send scores)*
7. Click **Deploy** and grant permissions.
8. Copy the generated **Web app URL** (ends in `/exec`).
9. In the test application's **⚙️ Settings**, paste the URL into **Google Apps Script Webhook URL** and click **Test**.

### 2. Telegram Bot Integration
1. Open Telegram and search for `@BotFather`.
2. Send `/newbot`, choose a name and username for your bot, and copy your **Bot Token**.
3. Start a chat with your new bot (click `/start`).
4. Find your Telegram Chat ID (you can message `@userinfobot` to get your numeric ID).
5. In the test application's **⚙️ Settings**:
   - Enter your **Telegram Bot Token**.
   - Enter your **Telegram Chat ID**.
   - Click **Test** to receive a confirmation message!

---

## 📁 Project Structure

```
Language Test Unit 1/
├── index.html              # Main semantic HTML5 interface & dialogs
├── css/
│   ├── style.css           # Core styling, responsive layouts, navigation
│   └── components.css      # Task cards, word bank chips, dialogue, review
├── js/
│   ├── test-data.js        # Unit 1 Test A & Test B data models and keys
│   ├── illustrations.js    # Custom vector SVG illustrations (Mrs Cook, Lee, etc.)
│   ├── validator.js        # Smart text matching, contraction normalization, scoring
│   ├── storage.js          # LocalStorage persistence & submissions archive
│   ├── teacher-service.js  # Google Sheets & Telegram Bot API webhooks
│   ├── ui.js               # View switching, word bank chips, modal controls, confetti
│   └── app.js              # Application entry point & event initialization
├── Code.gs                 # Ready-to-use Google Apps Script for Google Sheets
└── README.md               # Documentation and teacher instructions
```

---

## 📝 Test Content & Answer Key Summary

### Variant A
- **Task 1 (Vocab)**: `1: bracelets`, `2: rings`, `3: floral`, `4: tie`, `5: handbag`
- **Task 2 (Vocab)**: `1: shirt`, `2: checked`, `3: baggy`, `4: hoodie`, `5: straight`, `6: moustache`
- **Task 3 (Vocab)**: `1: selfish`, `2: impatient`, `3: dishonest`, `4: generous`, `5: polite`
- **Task 4 (Grammar)**: `1: Did you have`, `2: took`, `3: put`, `4: Did you drop`, `5: did`, `6: forgot`, `7: found`
- **Task 5 (Grammar)**: `1: was waiting`, `2: called`, `3: was cycling`, `4: met`, `5: were you doing`, `6: were sleeping`, `7: got`
- **Task 6 (Comm)**: `1: First`, `2: Lucky her`, `3: what happened`, `4: No way`, `5: Poor you`

### Variant B
- **Task 1 (Vocab)**: `1: scarf`, `2: bracelets`, `3: rings`, `4: handbag`, `5: spotted`
- **Task 2 (Vocab)**: `1: checked`, `2: shirt`, `3: hoodie`, `4: baggy`, `5: beard`, `6: straight`
- **Task 3 (Vocab)**: `1: lazy`, `2: impolite`, `3: generous`, `4: impatient`, `5: serious`
- **Task 4 (Grammar)**: `1: Did you use`, `2: came`, `3: opened`, `4: Did you put`, `5: went`, `6: fell`, `7: found`
- **Task 5 (Grammar)**: `1: was getting`, `2: got`, `3: was making`, `4: dropped`, `5: were laughing`, `6: came`, `7: was he doing`
- **Task 6 (Comm)**: `1: Then`, `2: Lucky him`, `3: guess what`, `4: No way`, `5: Poor you`
