document.addEventListener('DOMContentLoaded', function() {
    /*
    const div1 = document.querySelector('.grid-container > div:nth-child(1)');
    const div2 = document.querySelector('.grid-container > div:nth-child(2)');
    const div3 = document.querySelector('.grid-container > div:nth-child(3)');
    const div3Height = div3.offsetHeight;
    const div1Height = div1.offsetHeight;
    const totalHeight = div1Height + div3Height;
    div1.style.lineHeight = `${totalHeight}px`;
    */
   /*
    const primaryColors = ["#00abbb", "#5aaa5b", "#bb8c00","#ec5f49","#cf63c4","#6d87ff"];
    const phrases = document.querySelectorAll("#colorize span");
    const circles = document.querySelectorAll("svg circle");
    const randomColors = [];

    phrases.forEach((phrase) => {
        const randomColor = primaryColors[Math.floor(Math.random() * primaryColors.length)];
        phrase.style.backgroundColor = randomColor;
        phrase.style.cursor = 'default';
        randomColors.push(randomColor);
        phrase.addEventListener("mouseover", function() {
            phrase.style.backgroundColor = "#fff";
        });
        phrase.addEventListener("mouseout", function() {
            phrase.style.backgroundColor = randomColor;
        });
    });
    circles.forEach((circle) => {
        const randomColor = randomColors[Math.floor(Math.random() * randomColors.length)];
        circle.setAttribute("fill", randomColor);
    });
*/
    /*
    function scrollGallerySlowly() {
        const gallery = document.querySelector('.gallery');
        let scrollAmount = 0;
        const slideTimer = setInterval(function() {
            gallery.scrollLeft += 1;
            scrollAmount += 1;
            if(scrollAmount >= (gallery.childElementCount * gallery.children[0].offsetWidth)) {
                clearInterval(slideTimer);
            }
        }, 10);
    }

    function scrollGallerySlowly2(el) {
        const element = document.querySelector(el);
        let isPaused = false;
        
        element.addEventListener('mouseover', function() {
          isPaused = true;
        });
        
        element.addEventListener('mouseout', function() {
          isPaused = false;
        });
      
        function scroll() {
          if (!isPaused) {
            element.scrollLeft += 1;
            setTimeout(scroll, 50);
          } else {
            setTimeout(scroll, 200);
          }
        }
      
        scroll();
      }
    
    scrollGallerySlowly2('.gallery');

    function hideSecondChildren(parent) {
        let children = parent.children;
        for (let i = 1; i < children.length; i += 2) {
            children[i].style.display = 'none';
        }
    }

    hideSecondChildren(document.querySelector('.gallery'));
    */

    
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


    function displayDivOnHover(){
      const div = document.querySelector('.tile-gallery');
      for (let i = 0; i < div.children.length; i += 1) {
        div.children[i].addEventListener('mouseover', function() {
          div.children[i].children[0].children[0].style.opacity = .9;
        });
        div.children[i].addEventListener('mouseout', function() {
          div.children[i].children[0].children[0].style.opacity = 0;
        });
      }
    }
    displayDivOnHover();

    function zoomBackgroundOnHover() {
      const div = document.querySelector('.tile-gallery');
      for (let i = 0; i < div.children.length; i += 1) {
        div.children[i].addEventListener('mouseover', function() {
          //div.children[i].children[0].style.backgroundSize = '120%';
          div.children[i].querySelector('div:first-child').style.transform = 'scale(1.025)';
          //div.children[i].children[0].style.zIndex = '1';
        });
        div.children[i].addEventListener('mouseout', function() {
          //div.children[i].children[0].style.backgroundSize = 'cover';
          div.children[i].querySelector('div:first-child').style.transform = 'scale(1.0)';
          //div.children[i].children[0].style.zIndex = '0';
        });
      }
    }
    zoomBackgroundOnHover();
    //var container = document.querySelector('.container');
    //var text = document.querySelector('#truncated-text');

});

  