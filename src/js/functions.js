document.addEventListener('DOMContentLoaded', function() {
    const div1 = document.querySelector('.splash-grid-container > div:nth-child(1)');
    const div2 = document.querySelector('.splash-grid-container > div:nth-child(2)');
    const div3 = document.querySelector('.splash-grid-container > div:nth-child(3)');
    const div3Height = div3.offsetHeight;
    const div1Height = div1.offsetHeight;
    const totalHeight = div1Height + div3Height;
    div2.style.lineHeight = `${totalHeight}px`;

    const primaryColors = ["#00abbb", "#5aaa5b", "#bb8c00","#ec5f49","#cf63c4","#6d87ff"];
    const phrases = document.querySelectorAll("#colorize h2 span");
    const circles = document.querySelectorAll("svg circle");

    phrases.forEach((phrase) => {
        const randomColor = primaryColors[Math.floor(Math.random() * primaryColors.length)];
        phrase.style.color = randomColor;
    });

    circles.forEach((circle) => {
        const randomColor = primaryColors[Math.floor(Math.random() * primaryColors.length)];
        circle.setAttribute("fill", randomColor);
    });
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
          div.children[i].children[0].style.backgroundSize = '122%';
          div.children[i].children[0].style.zIndex = '1';
        });
        div.children[i].addEventListener('mouseout', function() {
          div.children[i].children[0].style.backgroundSize = '120%';
          div.children[i].children[0].style.zIndex = '0';
        });
      }
    }
    zoomBackgroundOnHover();
    //var container = document.querySelector('.container');
    //var text = document.querySelector('#truncated-text');

});

  