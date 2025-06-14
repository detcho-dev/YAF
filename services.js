 // توكنات ثابتة لكل إيفيكت
 const tokens = {
    typing: "yafa-typing-2025",
    fade: "yafa-fade-2025"
  };

  // أكواد التأثيرات (HTML كامل)
  const effectCodes = {
    typing: `
  <div class="yafa-effect" 
   data-effect="typing" 
   data-token="${tokens.typing}" 
   data-text='["Welcome!", "Explore more!", "Thanks for visiting!"]'>
  </div>
  <script src="https://yourdomain.com/effects/main.js"></script>
    `.trim(),

    fade: `
  <div class="yafa-effect opacity-0 transition-opacity duration-1000 delay-300 ease-in-out"
   data-effect="fade" 
   data-token="${tokens.fade}" 
   data-trigger="scroll" 
   data-delay="300">
<h2 class="text-3xl font-bold text-center">Fade In From Invisible</h2>
<p class="text-gray-300 mt-2 text-center">This content fades in with a smooth delay and opacity animation.</p>
</div>
<script src="https://yourdomain.com/effects/main.js"></script>
    `.trim()
  };

  // عند تغيير الاختيار
  document.getElementById("effectSelect").addEventListener("change", function () {
    const selected = this.value;
    if (!selected || !effectCodes[selected]) return;

    document.getElementById("finalCode").textContent = effectCodes[selected];
    document.getElementById("resultBox").classList.remove("hidden");
  });

  // زر النسخ
  function copyCode() {
    const text = document.getElementById("finalCode").textContent;
    navigator.clipboard.writeText(text).then(() => {
      alert("Code copied to clipboard!");
    });
  }