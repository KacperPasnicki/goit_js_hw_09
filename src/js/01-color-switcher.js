const startBtn = document.querySelector('[data-start]')
const stopBtn = document.querySelector('[data-stop]')
const body = document.querySelector('body')
let timerId = null;
function getRandomHexColor() {
    // 
    
    body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    return 
  }

  startBtn.addEventListener('click', () => {
    startBtn.disabled = true;
    stopBtn.disabled = false;
      timerId = setInterval(() => {
        getRandomHexColor()
    
}, 1000);



  });

   stopBtn.addEventListener("click", () => {
    stopBtn.disabled = true;
    startBtn.disabled = false;
     clearInterval(timerId);
     
   });