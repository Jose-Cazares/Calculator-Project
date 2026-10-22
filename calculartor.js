let container = document.querySelector(".calc-base");
let display = document.querySelector(".res");

// Allows to recive de click of the buttons.
container.addEventListener('click', (event) => {
    if(event.target.matches("#num")){
        if(display.textContent === '0'){
            display.textContent = event.target.textContent;
        }
    }
});