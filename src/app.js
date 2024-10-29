document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const logoutBtn = document.getElementById('logoutBtn');

    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            try {
                const response = await fetch('/api/trylogin', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, password })
                });

                const result = await response.json();
                if (response.ok) {
                    alert('로그인 성공');
                    window.location.href = '/communityHome';
                } else {
                    alert(result.message || '로그인 실패');
                }
            } catch (error) {
                alert('서버 오류');
            }
        });
    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            alert('로그아웃 되었습니다');
            window.location.href = '/login';
        });
    }
});
