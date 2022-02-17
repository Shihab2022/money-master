// calculate btn

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


// saving 

function saveBtn() {
    const incomeInput = getInput('income-input');

    const savingInput = getInput('saving-input');

    const savingAmount = (incomeInput * savingInput) / 100;
    const displayOutput1 = displayOutput('saving-amount');
    displayOutput1.innerText = savingAmount;

    const balense = document.getElementById('balance').innerText;
    const balenseValue = parseFloat(balense);


    const reminingBalance = balenseValue - savingAmount;

    const displayOutput2 = displayOutput('remaining-balance');
    displayOutput2.innerText = reminingBalance;


}




// common function


function displayOutput(outputId) {
    const output = document.getElementById(outputId);
    return output;
}

function getInput(inputId) {
    const inputs = document.getElementById(inputId).value;
    const parseFlotValue = parseFloat(inputs);

    if (isNaN(parseFlotValue)) {
        alert(inputs + ' is a string value. Please inter a number.')
    } else if (parseFlotValue < 0) {

        alert(parseFlotValue + ' is a negative number . Please put a positive number.');
        const newNumber = Math.abs(parseFlotValue);
        return newNumber;

    } else {
        return parseFlotValue;

    }

}