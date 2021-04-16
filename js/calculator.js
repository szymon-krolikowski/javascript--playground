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

let bracketNumber = 0;
let currentAction = "";
let score = "";

const addNumber = (number) => {
    currentAction = currentAction.toString() + number.toString()
    paragraphAction.textContent = currentAction
}

const clearAll = () => {
    currentAction = ""
    score = ""
    paragraphAction.textContent = currentAction
    paragraphScore.textContent = score
}

const deleteLastSign = () => {
    let sliceCurrentAction = currentAction.slice(0, -1)
    currentAction = sliceCurrentAction
}

buttonRemoveLastSign.addEventListener("click", () => {
    deleteLastSign()
    paragraphAction.textContent = currentAction
})

buttonsNumber.forEach(button => {
    button.addEventListener("click", () => {
        addNumber(button.textContent)
        buttonAddition.removeAttribute("disabled", false)
        buttonDivision.removeAttribute("disabled", false)
        buttonMultiplication.removeAttribute("disabled", false)
        buttonSubtraction.removeAttribute("disabled", false)
    })
});

buttonsFunction.forEach(button => {
    button.addEventListener("click", () => {
        buttonAddition.setAttribute("disabled", true)
        buttonDivision.setAttribute("disabled", true)
        buttonMultiplication.setAttribute("disabled", true)
        buttonSubtraction.setAttribute("disabled", true)
    })
})

buttonPercent.addEventListener("click", () => {
    if(currentAction === "" || currentAction.endsWith("+") || currentAction.endsWith("-") || currentAction.endsWith("*") || currentAction.endsWith("/") || currentAction.endsWith("(") || currentAction.endsWith(")")) {
        addNumber("0.1*")
    } else {
        addNumber("*0.1")
    }
})

buttonAddition.addEventListener("click", () => {
    if(currentAction === "") {
        return
    }
    addNumber(buttonAddition.textContent)
    buttonDot.removeAttribute("disabled", false)
})

buttonDivision.addEventListener("click", () => {
    if(currentAction === "") {
        return
    }
    addNumber(buttonDivision.textContent)
    buttonDot.removeAttribute("disabled", false)
})

buttonMultiplication.addEventListener("click", () => {
    if(currentAction === "") {
        return
    }
    let multiplication = "*"
    addNumber(multiplication)
    buttonDot.removeAttribute("disabled", false)
})

buttonDot.addEventListener("click", () => {
    if(currentAction === "") {
        addNumber("0.")
        buttonDot.setAttribute("disabled", true)
    } else {
        let dot = "."
        addNumber(dot)
        buttonDot.setAttribute("disabled", true)
    } 
})

buttonSubtraction.addEventListener("click", () => {
    if(currentAction === "") {
        return
    }
    let substraction = "-"
    addNumber(substraction)
    buttonDot.removeAttribute("disabled", false)
})

buttonBrackets.addEventListener("click", () => {
    let bracketsArr = ["(", ")"];

    addNumber(bracketsArr[bracketNumber])
    bracketNumber++
    if(bracketNumber === 2) {
        bracketNumber = 0
    }
})


buttonClear.addEventListener("click", () => {
    clearAll()
})

buttonEqual.addEventListener("click", () => {
    score = eval(currentAction)
    console.log(score)
    buttonDot.removeAttribute("disabled", false)
    paragraphScore.textContent = "= " + score
})