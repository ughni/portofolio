document.addEventListener("DOMContentLoaded", () => {
  const texts = document.querySelectorAll(".text");
  let index = 0;

  function animateText() {
      texts[index].style.opacity = 0;
      index = (index + 1) % texts.length;
      texts[index].style.opacity = 1;

      setTimeout(animateText, 800);
  }

  animateText();
});




const colors = ['red', 'green', 'blue', 'orange', 'purple'];
let currentIndex = 0;

function changeColor() {
    const textElement = document.getElementById('animatedText');
    textElement.style.color = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
}

setInterval(changeColor, 1000);



