let display = document.getElementById("display");

function appendNumber(number) {
    if (display.value === "0" && number !== ".") {
        display.value = number;
    } else {
        display.value += number;
    }
}

function appendOperator(operator) {
    let lastChar = display.value[display.value.length - 1];
    if ("+-*/%".includes(lastChar)) {
        display.value = display.value.slice(0, -1);
    }
    display.value += operator;
}

function calculate() {
    try {
        display.value = eval(display.value.replace("%", "/100"));
    } catch (error) {
        display.value = "Error";
    }
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function toggleSign() {
    if (display.value) {
        display.value = display.value.startsWith("-") ? display.value.slice(1) : "-" + display.value;
    }
}
