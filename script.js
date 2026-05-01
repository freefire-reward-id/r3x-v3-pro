document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const submitBtn = document.getElementById('submitBtn');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Visual feedback for users
        submitBtn.innerText = 'Verifying...';
        submitBtn.disabled = true;

        const username = document.getElementById('username').value;

        // Simulate a server request
        setTimeout(() => {
            alert(`Welcome back, ${username}!`);

            // Reset button state
            submitBtn.innerText = 'Sign In';
            submitBtn.disabled = false;

            // Reset form
            loginForm.reset();
        }, 1200);
    });
});/* Terminal Style */
.terminal-box {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 250px;
    height: 150px;
    background: rgba(0, 0, 0, 0.8);
    border: 1px solid #38bdf8;
    border-radius: 5px;
    color: #38bdf8;
    font-family: 'Courier New', monospace;
    font-size: 10px;
    padding: 10px;
    z-index: 100;
    overflow-y: auto;
    box-shadow: 0 0 10px rgba(56, 189, 248, 0.5);
}
.terminal-header { border-bottom: 1px solid #38bdf8; margin-bottom: 5px; font-weight: bold; }
#terminal-content { line-height: 1.2; }

/* Animasi Tombol saat Click */
.login-btn:active {
    transform: scale(0.95);
    background: #7dd3fc;
        }
