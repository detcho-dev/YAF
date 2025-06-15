const effects = [
  {
    name: "Typing Effect",
    key: "typing",
    token: "dHlwaW5nLTE3NDk5MjM4MTItSk5LaGRISGs=",
    head: '<script src="https://yaf-zeta.vercel.app/effects.js"></script>',
    body: '<div class="yafa-effect" data-effect="typing" data-token="YOUR_TOKEN" data-text="[&quot;text1&quot;,&quot;text2&quot;,&quot;text3&quot;]"></div>'
  },
  {
    name: "Confetti Effect",
    key: "confetti",
    token: "Y29uZmV0dGktMTc1MDAwMDAwMC1ZT1VSVE9LRU4=",
    head: `<script src="https://yaf-zeta.vercel.app/effects.js"></script>
<script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js"></script>`,
    body: '<div class="yafa-effect" data-effect="confetti" data-token="YOUR_TOKEN"></div>'
  }
];

const container = document.getElementById("effectsContainer");

const copyIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 inline" viewBox="0 0 24 24" fill="currentColor"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 18H8V7h11v16z"/></svg>`;
const checkIcon = `<span class="text-green-400">✅ Copied!</span>`;

effects.forEach(effect => {
  const card = document.createElement("div");
  card.className = "bg-gray-800 rounded p-4 shadow transition-all duration-300 ease-in-out";

  const header = document.createElement("h2");
  header.className = "font-bold text-xl cursor-pointer mb-2";
  header.textContent = effect.name;
  card.appendChild(header);

  const content = document.createElement("div");
  content.className = "space-y-4 transition-max max-h-0 overflow-hidden";

  function addSection(titleText, codeContent) {
    const title = document.createElement("p");
    title.className = "font-semibold text-sm";
    title.textContent = titleText;

    const wrapper = document.createElement("div");
    wrapper.className = "relative";

    const codeBlock = document.createElement("pre");
    codeBlock.className = "bg-gray-700 p-3 rounded text-sm overflow-x-auto whitespace-pre-wrap";
    const code = document.createElement("code");
    code.textContent = codeContent;
    codeBlock.appendChild(code);

    const copyBtn = document.createElement("button");
    copyBtn.innerHTML = copyIcon;
    copyBtn.className = "absolute top-1 right-2 text-white bg-gray-600 hover:bg-gray-500 px-2 py-1 rounded";
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(codeContent);
      copyBtn.innerHTML = checkIcon;
      setTimeout(() => {
        copyBtn.innerHTML = copyIcon;
      }, 1500);
    });

    wrapper.appendChild(codeBlock);
    wrapper.appendChild(copyBtn);
    content.appendChild(title);
    content.appendChild(wrapper);
  }

  addSection("Add This in <head>", effect.head);
  addSection("Add This in <body>", effect.body);

  const tokenTitle = document.createElement("p");
  tokenTitle.className = "font-semibold text-sm";
  tokenTitle.textContent = "Your Token";

  const tokenWrapper = document.createElement("div");
  tokenWrapper.className = "relative";

  const tokenCode = document.createElement("code");
  tokenCode.className = "text-green-400 break-words block bg-gray-700 p-3 rounded text-sm";
  tokenCode.textContent = effect.token;

  const tokenCopyBtn = document.createElement("button");
  tokenCopyBtn.innerHTML = copyIcon;
  tokenCopyBtn.className = "absolute top-1 right-2 text-white bg-gray-600 hover:bg-gray-500 px-2 py-1 rounded";
  tokenCopyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(effect.token);
    tokenCopyBtn.innerHTML = checkIcon;
    setTimeout(() => {
      tokenCopyBtn.innerHTML = copyIcon;
    }, 1500);
  });

  tokenWrapper.appendChild(tokenCode);
  tokenWrapper.appendChild(tokenCopyBtn);
  content.appendChild(tokenTitle);
  content.appendChild(tokenWrapper);

  header.addEventListener("click", () => {
    content.classList.toggle("max-h-0");
    content.classList.toggle("max-h-[1000px]");
  });

  card.appendChild(content);
  container.appendChild(card);
});
