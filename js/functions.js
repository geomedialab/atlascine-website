
document.addEventListener('DOMContentLoaded', function() {
    const div1 = document.querySelector('.splash-grid-container > div:nth-child(1)');
    const div2 = document.querySelector('.splash-grid-container > div:nth-child(2)');
    const div3 = document.querySelector('.splash-grid-container > div:nth-child(3)');
    const div3Height = div3.offsetHeight;
    const div1Height = div1.offsetHeight;
    const totalHeight = div1Height + div3Height;
    div2.style.lineHeight = `${totalHeight}px`;

    const primaryColors = ["#00abbb", "#5aaa5b", "#bb8c00","#ec5f49","#cf63c4","#6d87ff"];
    const phrases = document.querySelectorAll("#hi2 h2 span");
    const circles = document.querySelectorAll("svg circle");

    phrases.forEach((phrase) => {
        const randomColor = primaryColors[Math.floor(Math.random() * primaryColors.length)];
        phrase.style.color = randomColor;
    });

    circles.forEach((circle) => {
        const randomColor = primaryColors[Math.floor(Math.random() * primaryColors.length)];
        circle.setAttribute("fill", randomColor);
    });
});
  