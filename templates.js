const templateCodes = {
  simple: {
    title: "Simple Profile",
    code: `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Simple Profile</title>
  <style>
    body {
      margin: 0;
      min-height: 100vh;
      display: grid;
      place-items: center;
      background: #f7f3ee;
      color: #33272a;
      font-family: system-ui, sans-serif;
    }
    main {
      width: min(92%, 520px);
      padding: 36px;
      border-radius: 24px;
      background: #fffffe;
      text-align: center;
      box-shadow: 0 18px 40px rgba(51, 39, 42, 0.08);
    }
    .avatar {
      width: 96px;
      height: 96px;
      margin: 0 auto 20px;
      border-radius: 50%;
      background: #ff8ba7;
    }
    h1 { margin: 0 0 10px; font-size: 2.2rem; }
    p { color: #594a4e; line-height: 1.8; }
    .links { display: grid; gap: 12px; margin-top: 24px; }
    a {
      padding: 14px 18px;
      border-radius: 999px;
      background: #c3f0ca;
      color: #33272a;
      text-decoration: none;
      font-weight: 700;
    }
  </style>
</head>
<body>
  <main>
    <div class="avatar"></div>
    <h1>Your Name</h1>
    <p>好きなことや作っているものを、短くやさしく紹介します。</p>
    <div class="links">
      <a href="#">Works</a>
      <a href="#">SNS</a>
      <a href="#">Contact</a>
    </div>
  </main>
</body>
</html>`
  },
  retro: {
    title: "Retro Game",
    code: `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Retro Game</title>
  <style>
    body {
      margin: 0;
      min-height: 100vh;
      background: #16151c;
      color: #fffffe;
      font-family: "Courier New", monospace;
    }
    main {
      width: min(92%, 760px);
      margin: 0 auto;
      padding: 48px 0;
    }
    .window {
      padding: 28px;
      border: 4px solid #ff8ba7;
      box-shadow: 0 0 0 8px rgba(255, 139, 167, 0.18);
      background: #24202a;
    }
    h1 { margin-top: 0; color: #c3f0ca; }
    .game-list { display: grid; gap: 14px; margin-top: 24px; }
    a {
      display: block;
      padding: 16px;
      border: 2px solid #ffc6c7;
      color: #fffffe;
      text-decoration: none;
    }
    a:hover { background: rgba(255, 139, 167, 0.18); }
  </style>
</head>
<body>
  <main>
    <section class="window">
      <h1>MY GAMES</h1>
      <p>ゲーム作品をレトロなメニュー風に並べます。</p>
      <div class="game-list">
        <a href="#">01 / Game Title</a>
        <a href="#">02 / Game Title</a>
        <a href="#">03 / Game Title</a>
      </div>
    </section>
  </main>
</body>
</html>`
  },
  dark: {
    title: "Dark Cute",
    code: `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dark Cute</title>
  <style>
    body {
      margin: 0;
      min-height: 100vh;
      display: grid;
      place-items: center;
      background: radial-gradient(circle at top right, #5c2639, #161116 46%);
      color: #fffffe;
      font-family: system-ui, sans-serif;
    }
    .profile {
      width: min(90%, 460px);
      padding: 32px;
      border: 1px solid rgba(255, 139, 167, 0.5);
      border-radius: 24px;
      background: rgba(255, 255, 254, 0.06);
      box-shadow: 0 22px 60px rgba(0, 0, 0, 0.28);
    }
    .mark {
      width: 72px;
      height: 72px;
      border-radius: 22px;
      background: #ff8ba7;
    }
    h1 { margin-bottom: 8px; }
    p { color: #ffc6c7; line-height: 1.8; }
    .tag {
      display: inline-block;
      margin-top: 18px;
      padding: 10px 16px;
      border-radius: 999px;
      background: #ff8ba7;
      color: #33272a;
      font-weight: 700;
    }
  </style>
</head>
<body>
  <main class="profile">
    <div class="mark"></div>
    <h1>Dark Cute Profile</h1>
    <p>創作活動、好きな世界観、リンクをまとめる自己紹介ページです。</p>
    <span class="tag">portfolio</span>
  </main>
</body>
</html>`
  }
};

const codeTitle = document.querySelector("#codeTitle");
const templateCode = document.querySelector("#templateCode");
const copyStatus = document.querySelector("#copyStatus");
const previewTitle = document.querySelector("#previewTitle");
const templatePreview = document.querySelector("#templatePreview");

function showCode(templateKey) {
  const template = templateCodes[templateKey];
  if (!template) return;
  codeTitle.textContent = template.title;
  templateCode.textContent = template.code;
  copyStatus.textContent = "";
  document.querySelector("#codePanel").scrollIntoView({ behavior: "smooth", block: "start" });
}

async function copyCode(templateKey) {
  const template = templateCodes[templateKey];
  if (!template) return;
  showCode(templateKey);
  try {
    await navigator.clipboard.writeText(template.code);
    copyStatus.textContent = "コピーしました！";
  } catch {
    copyStatus.textContent = "コードを選択してコピーしてください";
  }
}

function focusPreview(button) {
  const card = button.closest(".template-card");
  const preview = card?.querySelector(".template-preview");
  if (!preview) return;
  preview.classList.remove("preview-focus");
  void preview.offsetWidth;
  preview.classList.add("preview-focus");
}

function showPreview(templateKey, button) {
  const template = templateCodes[templateKey];
  if (!template) return;
  focusPreview(button);
  previewTitle.textContent = `${template.title} Preview`;
  templatePreview.srcdoc = template.code;
  document.querySelector("#previewPanel").scrollIntoView({ behavior: "smooth", block: "start" });
}

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-action]");
  if (!button) return;

  const action = button.dataset.action;
  const templateKey = button.dataset.template;

  if (action === "preview") {
    showPreview(templateKey, button);
  }

  if (action === "code") {
    showCode(templateKey);
  }

  if (action === "copy") {
    copyCode(templateKey);
  }
});
