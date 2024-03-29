console.log('JS loaded');

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded');

    const open = document.getElementById('open');
    const close = document.getElementById('close');
    const navitems = document.querySelectorAll('.nav-item');

    open.addEventListener('click', function() {
        navitems.forEach((navitem) => {
            navitem.style.display = '';
            navitem.style.opacity = '1';
        });
        open.style.display = 'none';
        close.style.display = 'flex';
    });

    close.addEventListener('click', function() {
    navitems.forEach((navitem) => {
        navitem.style.display = 'none';
        navitem.style.opacity = '0';
    });
    open.style.display = 'flex';
    close.style.display = 'none';
    });
});
