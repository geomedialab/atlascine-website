console.log('JS loaded');
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
    
  const open = document.getElementById('open');
  const close = document.getElementById('close');
  navitems = document.querySelectorAll('.nav-items > a');

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