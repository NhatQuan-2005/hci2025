document.getElementById('account-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Kiểm tra và xác thực dữ liệu đầu vào
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value.trim();
    const role = document.getElementById('role').value;

    // Kiểm tra tên đăng nhập
    if (!username) {
        showError('username-error', 'Tên đăng nhập không được để trống');
        return;
    } else {
        hideError('username-error');
    }

    // Kiểm tra mật khẩu
    if (password.length < 6) {
        showError('password-error', 'Mật khẩu phải có ít nhất 6 ký tự');
        return;
    } else {
        hideError('password-error');
    }

    // Kiểm tra định dạng email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showError('email-error', 'Định dạng email không hợp lệ');
        return;
    } else {
        hideError('email-error');
    }

    // Kiểm tra vai trò
    if (!role) {
        showError('role-error', 'Vui lòng chọn vai trò');
        return;
    } else {
        hideError('role-error');
    }

    // Cập nhật ngày cập nhật lần cuối
    document.getElementById('updated-at').value = new Date().toISOString().split('T')[0];

    alert('Thông tin tài khoản đã được lưu.');
});

document.getElementById('toggle-password').addEventListener('click', function() {
    const passwordField = document.getElementById('password');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        this.textContent = 'Ẩn';
    } else {
        passwordField.type = 'password';
        this.textContent = 'Hiển thị';
    }
});

document.getElementById('profile-picture').addEventListener('change', function() {
    const file = this.files[0];
    const preview = document.getElementById('profile-preview');
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            preview.src = e.target.result;
            preview.style.display = 'block';
        };
        reader.readAsDataURL(file);
    } else {
        preview.style.display = 'none';
    }
});

document.getElementById('cancel-btn').addEventListener('click', function() {
    document.getElementById('account-form').reset();
    document.getElementById('profile-preview').style.display = 'none';
});

function showError(id, message) {
    document.getElementById(id).textContent = message;
}

function hideError(id) {
    document.getElementById(id).textContent = '';
}
