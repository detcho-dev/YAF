document.addEventListener("DOMContentLoaded", () => {
    const effects = document.querySelectorAll(".yafa-effect");
  
    effects.forEach((el) => {
      const effect = el.dataset.effect;
      const token = el.dataset.token;
  
      // تحقق من التوكن
      if (!verifyToken(effect, token)) {
        console.warn(`Invalid token for effect: ${effect}`);
        return;
      }
  
      // نفذ التأثير المناسب
      switch (effect) {
        case "typing":
          startTypingEffect(el);
          break;
      }
    });
  });
  
  // ✅ التحقق من التوكن
  function verifyToken(effect, token) {
    const validTokens = {
      typing: "dHlwaW5nLTE3NDk5MjM4MTItSk5LaGRISGs=",
    };
    return validTokens[effect] === token;
  }
  
  // ✍️ تأثير الكتابة
  function startTypingEffect(el) {
    const texts = JSON.parse(el.dataset.text || "[]");
    let i = 0, j = 0, isDeleting = false;
    const speed = 100;
  
    function type() {
      if (!texts[i]) return;
      const current = texts[i];
      el.textContent = isDeleting
        ? current.substring(0, j--)
        : current.substring(0, j++);
  
      if (!isDeleting && j === current.length + 1) {
        isDeleting = true;
        setTimeout(type, 1000);
      } else if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % texts.length;
        setTimeout(type, 300);
      } else {
        setTimeout(type, speed);
      }
    }
  
    type();
  }
  
  // 🌫️ تأثير التلاشي عند Scroll
  function startFadeEffect(el) {
    const delay = parseInt(el.dataset.delay) || 0;
  
    const fadeIn = () => {
      el.classList.remove("opacity-0");
      el.classList.add("opacity-100");
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(fadeIn, delay);
          observer.unobserve(el);
        }
      });
    });
  
    observer.observe(el);
  }  
