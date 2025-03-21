document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault(); // منع إعادة تحميل الصفحة عند الإرسال

        // الحصول على القيم من الإدخال
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
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
                window.location.href = "https://yaf.vercel.app"; // استبدل بالصفحة اللي عايزهم يروحوا ليها
            }, 3000);
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
