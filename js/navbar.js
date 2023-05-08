document.addEventListener('DOMContentLoaded', () => {
    const navbarContainer = document.getElementsByClassName('navbar-container')[0];
    const currentWidth = parseInt(window.getComputedStyle(navbarContainer).width, 10);
    const expandWidth = currentWidth + 200;

    const navBtn = document.getElementById('navBtn');
    const navbarIcons = document.getElementById('navbar-icons');

    navBtn.addEventListener('click', () => {
        if (navbarIcons.style.height === '50%') {
            navbarIcons.style.height = '0';
            navBtn.classList.remove('expanded');
        } else {
            navbarIcons.style.height = '50%';
            navBtn.classList.add('expanded');
        }
        navbarContainer.style.width = `${currentWidth}px`;
        accountInput.style.display = 'none';
        accountInput.style.width = '0';
        passwordInput.style.display = 'none';
            passwordInput.style.width = '0';
        loginBtn.style.display = 'none';
    });

    const accountBtn = document.getElementById('account-icon');
    const accountInput = document.getElementById('account-input');
    const passwordInput = document.getElementById('password-input');
    const loginBtn = document.getElementById('login-btn');
    const navBtnContainer = document.getElementById('navBtnContainer');

    accountBtn.addEventListener('click', () => {
        if (navbarContainer.style.width === `${currentWidth}px`) {
            navbarContainer.style.width = `${expandWidth}px`;
            accountInput.style.display = 'block';
            accountInput.style.width = '200px';
            passwordInput.style.display = 'block';
            passwordInput.style.width = '160px';
            loginBtn.style.display = 'block';
        } else {
            navbarContainer.style.width = `${currentWidth}px`;
            accountInput.style.display = 'none';
            accountInput.style.width = '0';
            passwordInput.style.display = 'none';
            passwordInput.style.width = '0';
            loginBtn.style.display = 'none';
        }
    });
});
