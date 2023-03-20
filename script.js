let bufferedNumber = ''
let savedOperator = ''
let savedNumber = ''
let resultExisting = false

function reset() {
    savedOperator = ''
    savedNumber = ''
    bufferedNumber = ''
    displayResult()
}

function input(buttonPushed) {
    switch (buttonPushed) {
        case '*':
        case '/':
        case '+':
        case '-':
            saveOperator(buttonPushed)
            break
        case 'equals':
            equals()
            break
        case 'c':
            reset()
            break
        case 'back':
            deleteCharacter()
            break
        default:
            typeNumbers(buttonPushed)
            break
    }
}

function calculate() {
    if (savedNumber != '' && savedOperator != '') {
        const var2 = parseInt(bufferedNumber)
        const var1 = parseInt(savedNumber)
        let operator = savedOperator
        reset()
        switch (operator) {
            case '*':
                bufferedNumber = (var1 * var2).toString()
                break
            case '/':
                bufferedNumber = (var1 / var2).toString()
                break
            case '+':
                bufferedNumber = (var1 + var2).toString()
                break
            case '-':
                bufferedNumber = (var1 - var2).toString()
                break
        }
    }
}

function typeNumbers(numberPressed) {
    if (resultExisting && savedOperator == '') {
        bufferedNumber = ''
        resultExisting = false
    }
    bufferedNumber = bufferedNumber + numberPressed
    displayResult()
}

function deleteCharacter() {
    if (bufferedNumber != '') {
        bufferedNumber = bufferedNumber.substring(0, bufferedNumber.length - 1)
        displayResult()
    }
}

function saveOperator(x) {
    calculate()
    displayResult()
    savedOperator = x
    savedNumber = bufferedNumber
    bufferedNumber = ''
}

function equals() {
    resultExisting = true
    calculate()
    displayResult()
}

function displayResult() {
    if (bufferedNumber == '') {
        // eslint-disable-next-line no-undef
        document.getElementById('output-field').innerHTML = '0'
    } else {
        // eslint-disable-next-line no-undef
        document.getElementById('output-field').innerHTML = bufferedNumber
    }
}
