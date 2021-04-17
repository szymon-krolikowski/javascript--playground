const buttonClear = document.querySelector(".buttonClear");
const buttonPercent = document.querySelector(".buttonPercent");
const buttonRemoveLastSign = document.querySelector(".buttonRemoveLastSign");
const buttonDivision = document.querySelector(".buttonDivision");
const buttonMultiplication = document.querySelector(".buttonMultiplication");
const buttonSubtraction = document.querySelector(".buttonSubtraction");
const buttonAddition = document.querySelector(".buttonAddition");
const buttonBrackets = document.querySelector(".buttonBrackets");
const buttonEqual = document.querySelector(".buttonEqual");
const buttonDot = document.querySelector(".buttonDot");
const buttonsNumber = document.querySelectorAll(".buttonNumber");
const buttonsFunction = document.querySelectorAll(".buttonFunction");
const paragraphAction = document.querySelector(".paragraphAction")
const paragraphScore = document.querySelector(".paragraphScore");
const toggleImageSun = document.querySelector(".toggleImageSun");
const toggleImageMoon = document.querySelector(".toggleImageMoon");
const buttonTheme = document.querySelector(".toggleButton");
const body = document.querySelector(".body");

let bracketNumber = 0;
let currentAction = "";
let score = "";

const addNumber = (number) => {
    currentAction = currentAction.toString() + number.toString();
    paragraphAction.textContent = currentAction;
};

const clearAll = () => {
    currentAction = "";
    score = "";
    paragraphAction.textContent = currentAction;
    paragraphScore.textContent = score;
}

const deleteLastSign = () => {
    let sliceCurrentAction = currentAction.slice(0, -1);
    currentAction = sliceCurrentAction;
    paragraphAction.textContent = currentAction;
};

const isEqualTo = () => {
    score = eval(currentAction);
    console.log(score);
    buttonDot.removeAttribute("disabled", false);
    paragraphScore.textContent = "= " + score;
}

const addPercent = () => {
    if(currentAction === "" || currentAction.endsWith("+") || currentAction.endsWith("-") || currentAction.endsWith("*") || currentAction.endsWith("/") || currentAction.endsWith("(") || currentAction.endsWith(")")) {
        addNumber("0.1*");
    } else {
        addNumber("*0.1");
    };
}

const changeTheme = () => {
    toggleImageMoon.classList.toggle("active");
    toggleImageSun.classList.toggle("active");
    body.classList.toggle("lightModeTheme");
    buttonsNumber.forEach(button => {
        button.classList.toggle("lightModeButtonNumber");
    });
    buttonsFunction.forEach(button => {
        button.classList.toggle("lightModeButtonFunction");
    });
    buttonClear.classList.toggle("lightModeButtonFunction");
    buttonBrackets.classList.toggle("lightModeButtonFunction");
    buttonDot.classList.toggle("lightModeButtonDot");
    buttonTheme.classList.toggle("lightModeButtonFunction");
    paragraphScore.classList.toggle("lightModeParagraphScore");
}

buttonAddition.addEventListener("click", () => {
    if(currentAction === "") {
        return;
    };
    addNumber(buttonAddition.textContent);
    buttonDot.removeAttribute("disabled", false);
});

buttonSubtraction.addEventListener("click", () => {
    if(currentAction === "") {
        return;
    };
    let substraction = "-";
    addNumber(substraction);
    buttonDot.removeAttribute("disabled", false);
});

buttonMultiplication.addEventListener("click", () => {
    if(currentAction === "") {
        return;
    }
    let multiplication = "*";
    addNumber(multiplication);
    buttonDot.removeAttribute("disabled", false);
});

buttonDivision.addEventListener("click", () => {
    if(currentAction === "") {
        return;
    };
    addNumber(buttonDivision.textContent);
    buttonDot.removeAttribute("disabled", false);
});

buttonPercent.addEventListener("click", () => {
    addPercent();
});

buttonDot.addEventListener("click", () => {
    if(currentAction === "") {
        addNumber("0.");
        buttonDot.setAttribute("disabled", true);
    } else {
        let dot = ".";
        addNumber(dot);
        buttonDot.setAttribute("disabled", true);
    };
});

buttonBrackets.addEventListener("click", () => {
    let bracketsArr = ["(", ")"];

    addNumber(bracketsArr[bracketNumber]);
    bracketNumber++;
    if(bracketNumber === 2) {
        bracketNumber = 0;
    };
});

buttonEqual.addEventListener("click", () => {
    isEqualTo();
});

buttonClear.addEventListener("click", () => {
    clearAll();
});

buttonRemoveLastSign.addEventListener("click", () => {
    deleteLastSign();
});

buttonTheme.addEventListener("click", () => {
    changeTheme()
});

buttonsNumber.forEach(button => {
    button.addEventListener("click", () => {
        addNumber(button.textContent);
        buttonAddition.removeAttribute("disabled", false);
        buttonDivision.removeAttribute("disabled", false);
        buttonMultiplication.removeAttribute("disabled", false);
        buttonSubtraction.removeAttribute("disabled", false);
    });
});

buttonsFunction.forEach(button => {
    button.addEventListener("click", () => {
        buttonAddition.setAttribute("disabled", true);
        buttonDivision.setAttribute("disabled", true);
        buttonMultiplication.setAttribute("disabled", true);
        buttonSubtraction.setAttribute("disabled", true);
    });
});

const keyboardDetection = (button) => {
    switch(button.key) {
        case "1":
            addNumber("1");
            break;
        case "2":
            addNumber("2");
            break;
        case "3":
            addNumber("3");
            break;
        case "4":
            addNumber("4");
            break;
        case "5":
            addNumber("5");
            break;
        case "6":
            addNumber("6");
            break;
        case "7":
            addNumber("7");
            break;
        case "8":
            addNumber("8");
            break;
        case "9":
            addNumber("9");
            break;
        case "0":
            addNumber("0");
            break;
        case ".":
            addNumber(".");
            break;
        case "+":
            addNumber("+");
            break;
        case "-":
            addNumber("-");
            break;
        case "%":
            addPercent();
            break;
        case "/":
            addNumber("/");
            break;
        case "(":
            addNumber("(");
            break;
        case ")":
            addNumber(")");
            break;
        case "Enter":
            isEqualTo();
            break;
    };
};

document.addEventListener("keydown", (event) => {
    if(event.key === "Backspace") {
        if(paragraphScore.textContent === "") {
            deleteLastSign();
        } else {
            clearAll();
        };
    };
});

document.addEventListener('keydown', keyboardDetection);