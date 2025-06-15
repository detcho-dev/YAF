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
        head: '<script src="https://yaf-zeta.vercel.app/effects.js"></script>\n<script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js"></script>',
        body: '<div class="yafa-effect" data-effect="confetti" data-token="YOUR_TOKEN"></div>'
      }
    ];

    const container = document.getElementById("effectsContainer");

    effects.forEach(effect => {
      // الكارت
      const card = document.createElement("div");
      card.className = "bg-gray-800 rounded p-4 shadow";

      // العنوان
      const header = document.createElement("h2");
      header.className = "font-bold text-xl cursor-pointer mb-2";
      header.textContent = effect.name;
      card.appendChild(header);

      // المحتوى المخفي
      const content = document.createElement("div");
      content.className = "space-y-4 hidden";

      // Add This in <head>
      const headTitle = document.createElement("p");
      headTitle.className = "font-semibold text-sm";
      headTitle.textContent = "Add This in <head>";
      const headCode = document.createElement("pre");
      headCode.className = "bg-gray-700 p-3 rounded text-sm overflow-x-auto whitespace-pre-wrap";
      const headInner = document.createElement("code");
      headInner.textContent = effect.head;
      headCode.appendChild(headInner);

      // Add This in <body>
      const bodyTitle = document.createElement("p");
      bodyTitle.className = "font-semibold text-sm";
      bodyTitle.textContent = "Add This in <body>";
      const bodyCode = document.createElement("pre");
      bodyCode.className = "bg-gray-700 p-3 rounded text-sm overflow-x-auto whitespace-pre-wrap";
      const bodyInner = document.createElement("code");
      bodyInner.textContent = effect.body;
      bodyCode.appendChild(bodyInner);

      // Your Token
      const tokenTitle = document.createElement("p");
      tokenTitle.className = "font-semibold text-sm";
      tokenTitle.textContent = "Your Token";
      const tokenCode = document.createElement("code");
      tokenCode.className = "text-green-400 break-words block";
      tokenCode.textContent = effect.token;

      // تجميع العناصر
      content.append(headTitle, headCode, bodyTitle, bodyCode, tokenTitle, tokenCode);
      header.addEventListener("click", () => content.classList.toggle("hidden"));
      card.append(content);
      container.append(card);
    });
