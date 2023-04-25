document.addEventListener('DOMContentLoaded', () => {
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
    });
});
