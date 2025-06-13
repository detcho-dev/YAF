// Toggle mobile menu
document.getElementById("menu-toggle").addEventListener("click", function () {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("hidden");
});

// Show/hide back to top button
const backToTopButton = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
  }
});

// Scroll to top on button click
backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.addEventListener("DOMContentLoaded", function() {
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); // منع إعادة تحميل الصفحة عند الإرسال

  // الحصول على القيم من الإدخال
  const name = document.getElementById("user_name").value;
  const email = document.getElementById("user_email").value;
  const message = document.getElementById("message").value;

  // إرسال البيانات عبر EmailJS
  emailjs.sendForm("service_2tj6rpw", "template_f3hidas", "#contact-form")
  .then(function(response) {
      console.log("✅ Email sent successfully!", response);

      
      // عرض رسالة نجاح داخل الفورم بدلاً من alert
      const form = document.getElementById("contact-form");
      form.innerHTML = `
          <div class="text-center p-4 bg-green-100 border border-green-400 text-green-700 rounded-sm">
              ✅ Your message has been sent successfully! We will get back to you soon.
          </div>
      `;
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 1000);
  }, function(error) {
      console.log("❌ Failed to send email:", error);

      // عرض رسالة خطأ داخل الفورم
      const form = document.getElementById("contact-form");
      form.innerHTML += `
          <div class="text-center p-4 mt-4 bg-red-100 border border-red-400 text-red-700 rounded-sm">
              ❌ An error occurred while sending your message. Please try again later.
          </div>
      `;
  });
});
})
