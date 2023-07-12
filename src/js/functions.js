
  /*
  const videoElement = document.getElementById('video');
  videoElement.addEventListener('error', function(event) {
    // Check if the error is related to CORS
    if (event.target.error && event.target.error.message.includes('CORS')) {
      // Handle the CORS error here
      console.log('CORS error occurred');
      // You can display a custom error message or fallback content
      // or take any other appropriate action to handle the error
    }
  });
  
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

  