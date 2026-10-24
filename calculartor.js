let container = document.querySelector(".calc-base");
let display = document.querySelector(".res");

// Allows to recive de click of the buttons.
container.addEventListener('click', (event) => {
    if (event.target.matches("#num")) {
        if (display.textContent === '0') { // If the content of display 0, add the content of the button that has been clicked. 
            display.textContent = event.target.textContent;
        } else {
            display.textContent += event.target.textContent;
        }
    }
    else if (event.target.matches(".DEL")) {
        let operation = display.textContent;
        if (operation.length === 1) {
            display.textContent = '0'; // Default value of display.
        } else {
            let newOperation = operation.slice(0, -1); // Returns the new String deleting the last character. 
            display.textContent = newOperation;
        }
    }
    else if (event.target.matches(".reset")) {
        display.textContent = '0';
    }
    else if (event.target.matches(".equal")) {
        const tokens = display.textContent.match(/\d+\.?\d*|[+\-*/]/g); // Gives an array with all the tokens of the operation to resolve.
        console.log(tokens);

        if (tokens[0] === '/' || tokens[0] === '*' || tokens[0] === '+' || tokens[0] === '-') {
            display.textContent = 'Syntax Error!!';
        }
        else {
            for (let token = 0; token < tokens.length; token++) {
                if (tokens[token] === '/') {
                    try {
                        let num1 = parseFloat(tokens[token - 1]);
                        let num2 = parseFloat(tokens[token + 1]);
                        tokens[token - 1] = num1 / num2;
                        tokens.splice(token, 2);
                        token--;
                    } catch (error) {
                        display.textContent = 'Syntax Error!!'
                    }
                }
                else if (tokens[token] === '*') {
                    try {
                        console.log(tokens)
                        let num1 = parseFloat(tokens[token - 1]);
                        let num2 = parseFloat(tokens[token + 1]);
                        console.log(num1);
                        tokens[token - 1] = num1 * num2;
                        tokens.splice(token, 2);
                        token--;
                    } catch (error) {
                        display.textContent = 'Syntax Error!!'
                    }
                }
            }
            if (!tokens.includes('/') && !tokens.includes('*') && tokens.length !== 1) {
                for (let token = 0; token < tokens.length; token++) {
                    if (tokens[token] === '+') {
                        try {
                            let num1 = parseFloat(tokens[token - 1]);
                            let num2 = parseFloat(tokens[token + 1]);
                            tokens[token - 1] = num1 + num2;
                            tokens.splice(token, 2);
                            token--;
                        } catch (error) {
                            display.textContent = 'Syntax Error!!';
                        }
                    }
                    else if(tokens[token] === '-'){
                        try{
                            let num1 = parseFloat(tokens[token - 1]);
                            let num2 = parseFloat(tokens[token + 1]);
                            tokens[token - 1] = num1 - num2;
                            tokens.splice(token, 2);
                            token--;
                        }catch(error){
                            display.textContent = 'Syntax Error!!';
                        }
                    }
                }
            }
            display.textContent = String(tokens[0]);
        }
    }
});