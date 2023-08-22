
        let currentInput = "";
        let memory = 0;
        let operator = "";

        function appendToDisplay(value) {
            currentInput += value;
            document.getElementById("display").innerText = currentInput;
        }

        function clearEntry() {
            currentInput = "";
            document.getElementById("display").innerText = "";
        }

        function clearAll() {
            clearEntry();
            operator = "";
            memory = 0;
        }

        function operate(op) {
            if (currentInput !== "") {
                if (operator === "") {
                    memory = parseFloat(currentInput);
                } else {
                    performCalculation();
                }
                operator = op;
                clearEntry();
            }
        }

        function performCalculation() {
            const currentValue = parseFloat(currentInput);
            switch (operator) {
                case '+':
                    memory += currentValue;
                    break;
                case '-':
                    memory -= currentValue;
                    break;
                case '*':
                    memory *= currentValue;
                    break;
                case '/':
                    if (currentValue !== 0) {
                        memory /= currentValue;
                    } else {
                        alert("Error: Division by zero");
                        clearAll();
                    }
                    break;
                case 'sqrt':
                    memory = Math.sqrt(currentValue);
                    break;
                case '1/x':
                    if (currentValue !== 0) {
                        memory = 1 / currentValue;
                    } else {
                        alert("Error: Division by zero");
                        clearAll();
                    }
                    break;
                case '%':
                    memory = (memory * currentValue) / 100;
                    break;
            }
        }

        function calculateResult() {
            if (currentInput !== "") {
                performCalculation();
                currentInput = memory.toString();
                operator = "";
                document.getElementById("display").innerText = currentInput;
            }
        }

        function toggleSign() {
            if (currentInput !== "") {
                currentInput = (-parseFloat(currentInput)).toString();
                document.getElementById("display").innerText = currentInput;
            }
        }

        function appendDecimal() {
            if (currentInput.indexOf('.') === -1) {
                if (currentInput === "") {
                    currentInput = "0";
                }
                currentInput += ".";
                document.getElementById("display").innerText = currentInput;
            }
        }

        function memoryClear() {
            memory = 0;
        }

        function memoryStore() {
            memory = parseFloat(currentInput);
        }

        function memoryRecall() {
            currentInput = memory.toString();
            document.getElementById("display").innerText = currentInput;
        }

        function memoryAdd() {
            memory += parseFloat(currentInput);
        }
    