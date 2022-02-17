function calculateBtn() {

    const incomeInput = getInput('income-input');


    const foodInput = getInput('food-input');
    const rentInput = getInput('rent-input');
    const clothesInput = getInput('clothes-input');


    const totalCost = foodInput + rentInput + clothesInput;

    const displayTotalCost = displayOutput('total-expenses');
    displayTotalCost.innerText = totalCost;

    const displayRest = incomeInput - totalCost;

    const balense = displayOutput('balance');
    balense.innerText = displayRest;

}

function displayOutput(outputId) {
    const output = document.getElementById(outputId);
    return output;
}

function getInput(inputId) {
    const inputs = document.getElementById(inputId).value;

    const transFlotValue = parseFloat(inputs);

    return transFlotValue;
}