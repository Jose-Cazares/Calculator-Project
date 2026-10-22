let container = document.querySelector(".calc-base");
let display = document.querySelector(".res");

// Allows to recive de click of the buttons.
container.addEventListener('click', (event) => {
    if(event.target.matches("#num")){
        if(display.textContent === '0'){ // If the content of display 0, add de content of the button that has been clicked. 
            display.textContent = event.target.textContent;
        }else{
            display.textContent += event.target.textContent;
        }
    }
    else if(event.target.matches(".DEL")){
        let operation = display.textContent;
        if(operation.length === 1){
            display.textContent = '0'; // Default value of display.
        }else{
            let newOperation = operation.slice(0, -1); // Returns the new String deleting the last character. 
            display.textContent = newOperation;
        }
    }
    else if(event.target.matches(".reset")){
        display.textContent = '0';
    }


});