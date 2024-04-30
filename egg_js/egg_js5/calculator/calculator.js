class Calculator {
    constructor() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
        this.display = document.querySelector('.calculator-screen');
        this.clear();
        this.bindEvents();
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
        this.updateDisplay();
    }

    updateDisplay() {
        this.display.value = this.currentOperand;
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand += number.toString();
        this.updateDisplay();
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return;
        if (this.previousOperand !== '') {
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
        this.updateDisplay();
    }

    compute() {
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(current)) return;
        switch (this.operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '*':
                computation = prev * current;
                break;
            case '/':
                computation = prev / current;
                break;
            default:
                return;
        }
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = '';
        this.updateDisplay();
    }

    bindEvents() {
        const buttons = document.querySelectorAll('.calculator-button');
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                if (button.classList.contains('number')) {
                    this.appendNumber(button.innerText);
                } else if (button.classList.contains('operation')) {
                    this.chooseOperation(button.innerText);
                } else if (button.classList.contains('equals')) {
                    this.compute();
                } else if (button.classList.contains('clear')) {
                    this.clear();
                }
            });
        });
    }
}

// Inicializar la calculadora al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const calculator = new Calculator();
});