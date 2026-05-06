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
    title: "Minimal Mono",
    code: `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Minimal Mono</title>
  <style>
    :root {
      --bg: #f7f7f5;
      --paper: #ffffff;
      --text: #1f1f1f;
      --muted: #666666;
      --line: #d9d9d4;
    }

    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      min-height: 100vh;
      background: var(--bg);
      color: var(--text);
      font-family: Georgia, "Times New Roman", serif;
      line-height: 1.8;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    .site {
      width: min(100% - 40px, 920px);
      margin: 0 auto;
      padding: 56px 0 34px;
    }

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 24px;
      padding-bottom: 26px;
      border-bottom: 1px solid var(--line);
      font-family: Arial, sans-serif;
      font-size: 0.78rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    nav {
      display: flex;
      gap: 18px;
      flex-wrap: wrap;
    }

    .hero {
      padding: 92px 0 84px;
      border-bottom: 1px solid var(--line);
    }

    .eyebrow {
      margin: 0 0 18px;
      color: var(--muted);
      font-family: Arial, sans-serif;
      font-size: 0.72rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
    }

    h1 {
      max-width: 760px;
      margin: 0;
      font-size: clamp(3.2rem, 9vw, 7.2rem);
      font-weight: 400;
      line-height: 0.95;
      letter-spacing: -0.04em;
    }

    .intro {
      max-width: 520px;
      margin: 28px 0 0 auto;
      color: var(--muted);
      font-size: 1.05rem;
    }

    section {
      display: grid;
      grid-template-columns: 160px 1fr;
      gap: 42px;
      padding: 42px 0;
      border-bottom: 1px solid var(--line);
    }

    h2 {
      margin: 0;
      font-family: Arial, sans-serif;
      font-size: 0.74rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
    }

    .works {
      display: grid;
      gap: 14px;
    }

    .work {
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 18px;
      padding: 18px 0;
      border-top: 1px solid var(--line);
    }

    .work:first-child {
      border-top: 0;
      padding-top: 0;
    }

    .work strong {
      font-weight: 400;
      font-size: 1.15rem;
    }

    .work span,
    .about,
    footer {
      color: var(--muted);
    }

    .links {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
    }

    .links a {
      padding: 9px 14px;
      border: 1px solid var(--text);
      border-radius: 2px;
      font-family: Arial, sans-serif;
      font-size: 0.78rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    footer {
      padding-top: 28px;
      font-family: Arial, sans-serif;
      font-size: 0.76rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    @media (max-width: 680px) {
      .site {
        width: min(100% - 28px, 920px);
        padding-top: 32px;
      }

      header,
      section {
        grid-template-columns: 1fr;
      }

      header {
        display: grid;
      }

      .hero {
        padding: 62px 0;
      }

      .intro {
        margin-left: 0;
      }

      section {
        gap: 18px;
      }
    }
  </style>
</head>
<body>
  <div class="site">
    <header>
      <a href="#">Minimal Mono</a>
      <nav>
        <a href="#works">Works</a>
        <a href="#about">About</a>
        <a href="#links">Links</a>
      </nav>
    </header>

    <main>
      <div class="hero">
        <p class="eyebrow">Portfolio / Profile</p>
        <h1>Your Name</h1>
        <p class="intro">写真、文章、制作物を静かにまとめるためのミニマルな個人サイトです。</p>
      </div>

      <section id="works">
        <h2>Works</h2>
        <div class="works">
          <article class="work">
            <strong>Project One</strong>
            <span>Photography</span>
          </article>
          <article class="work">
            <strong>Project Two</strong>
            <span>Writing</span>
          </article>
          <article class="work">
            <strong>Project Three</strong>
            <span>Design</span>
          </article>
        </div>
      </section>

      <section id="about">
        <h2>About</h2>
        <p class="about">ここに短い自己紹介を書きます。活動内容、好きな表現、制作の姿勢などを余白を持って見せられます。</p>
      </section>

      <section id="links">
        <h2>Links</h2>
        <div class="links">
          <a href="#">Instagram</a>
          <a href="#">Portfolio</a>
          <a href="#">Contact</a>
        </div>
      </section>
    </main>

    <footer>© Your Name</footer>
  </div>
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
