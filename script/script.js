const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

// Hiệu ứng chuyển đổi form
signUpButton.addEventListener('click', () => {
  container.classList.add('right-panel-active');
});
signInButton.addEventListener('click', () => {
  container.classList.remove('right-panel-active');
});

// Hàm kiểm tra email hợp lệ
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Xử lý Sign Up
document.getElementById("signUpForm").addEventListener("submit", (event) => {
  event.preventDefault(); // Ngăn tải lại trang

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("signUpEmail").value.trim();
  const password = document.getElementById("signUpPassword").value;

  // Kiểm tra dữ liệu đầu vào
  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters.");
    return;
  }

  // Lưu dữ liệu vào localStorage
  const user = { name, email, password };
  const users = JSON.parse(localStorage.getItem("users")) || [];
  if (users.some((u) => u.email === email)) {
    alert("This email is already registered.");
    return;
  }

  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));

  // Hiển thị thông báo
  alert("Sign Up Successful! Please log in.");
  window.location.href = "login.html"; // Điều hướng đến trang đăng nhập
});

// Bỏ kiểm tra, tự động chuyển trang khi Sign In
document.getElementById("signInForm").addEventListener("submit", (event) => {
  event.preventDefault();

  // Điều hướng trực tiếp đến trang student-management
  window.location.href = "student-management.html";
});

// Xử lý đăng nhập bằng mạng xã hội
function socialLogin(platform) {
  alert(`Redirecting to ${platform} login page...`);
  switch (platform) {
    case "Facebook":
      window.open("https://facebook.com", "_blank");
      break;
    case "Google":
      window.open("https://accounts.google.com", "_blank");
      break;
    case "LinkedIn":
      window.open("https://linkedin.com", "_blank");
      break;
    default:
      console.error("Invalid platform");
  }
}
