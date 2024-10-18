// script.js
document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Formani yuborishni to'xtatish
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const email = document.getElementById('email').value;
  
    // Username va email validatsiyasi
    if (username.length < 2) {
      alert("Username kamida 2 ta belgi bo'lishi kerak.");
      return;
    }
  
    // Password validatsiyasi
    if (password.length < 8) {
      alert("Password kamida 8 ta belgi bo'lishi kerak.");
      return;
    }
  
    // E-mail validatsiyasi
    if (!email.includes("@gmail.com")) {
      alert("E-mail manzilingizda @gmail.com bo'lishi kerak.");
      return;
    }
  
    // Password va Confirm Password tekshirish
    if (password !== confirmPassword) {
      alert("Passwordlar mos kelmaydi.");
      return;
    }
  
    // Formani muvaffaqiyatli yuborish
    alert("Formani muvaffaqiyatli yubordik!");
  });
  document.getElementById("togglePassword").addEventListener("click", function () {
    const passwordField = document.getElementById("password");
    const passwordIcon = this.querySelector("i");
    
    if (passwordField.type === "password") {
      passwordField.type = "text"; // Parolni ko'rsatish
      passwordIcon.classList.remove("fa-eye"); // Ko'z iconcasini o'zgartirish
      passwordIcon.classList.add("fa-eye-slash"); // Yashirish iconcasini qo'shish
    } else {
      passwordField.type = "password"; // Parolni yashirish
      passwordIcon.classList.remove("fa-eye-slash"); // Yashirish iconcasini olib tashlash
      passwordIcon.classList.add("fa-eye"); // Ko'z iconcasini qo'shish
    }
  });
  
  document.getElementById("toggleConfirmPassword").addEventListener("click", function () {
    const confirmPasswordField = document.getElementById("confirmPassword");
    const confirmPasswordIcon = this.querySelector("i");
  
    if (confirmPasswordField.type === "password") {
      confirmPasswordField.type = "text"; // Parolni ko'rsatish
      confirmPasswordIcon.classList.remove("fa-eye"); // Ko'z iconcasini o'zgartirish
      confirmPasswordIcon.classList.add("fa-eye-slash"); // Yashirish iconcasini qo'shish
    } else {
      confirmPasswordField.type = "password"; // Parolni yashirish
      confirmPasswordIcon.classList.remove("fa-eye-slash"); // Yashirish iconcasini olib tashlash
      confirmPasswordIcon.classList.add("fa-eye"); // Ko'z iconcasini qo'shish
    }
  });
  