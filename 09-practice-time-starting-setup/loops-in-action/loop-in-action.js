// 더하기

const calculateSumButtonElement = document.querySelector('#calculator button');

function calculateSum() {
    const userNumberInputElement = document.getElementById('user-number');
    const enterNumber = userNumberInputElement.value;

    let sumUpToNumber = 0;

    for (let i = 0; i <= enterNumber; i++) {
        sumUpToNumber = sumUpToNumber + i;
    }

    const outputResultElement = document.getElementById('calculated-sum');

    outputResultElement.textContent = sumUpToNumber;
    outputResultElement.style.display = 'block';

}

calculateSumButtonElement.addEventListener('click', calculateSum);

// 하이라이트 링크

const highlightLinksButtonElement = document.querySelector('#highlight-links button');

function highlightLinks() {
    const anchorElements = document.querySelectorAll('#highlight-links a');

    for (const anchorElement of anchorElements) {
        anchorElement.classList.add('highlight');
    }
}

highlightLinksButtonElement.addEventListener('click', highlightLinks);

// 유저 정보 표시

const dummyUserData = {
    firstName: 'TW',
    lastName: 'LEE',
    age: 23
};

const displayUserDataButtonElement = document.querySelector('#user-data button');

function displayUserData() {
    const outputDataElement = document.getElementById('output-user-data');

    for (const key in dummyUserData) {
        const newUserDataListItemElement = document.createElement('li');
        const outputText = key.toLowerCase() + ':' + dummyUserData[key];
        newUserDataListItemElement.textContent = outputText;
        outputDataElement.append(newUserDataListItemElement);
    }
}

displayUserDataButtonElement.addEventListener('click', displayUserData);

// 통계 / 주사위 굴리기

const rollDiceButtonElement = document.querySelector('#statistics button');

function rollDice() {
    return Math.floor(Math.random() *6) + 1;
}

function deriveNumberOfDiceRolls() {
    const targetNumberInputElement = document.getElementById('user-target-number');
    const diceRollsListElement = document.getElementById('dice-rolls');

    const enteredNumber = targetNumberInputElement.value;
    diceRollsListElement.innerHTML = '';

    let hasPolledTargetNumber = false;
    let numberOfRolls = 0;

    while (!hasPolledTargetNumber) {
        const rolledNumber = rollDice();
        numberOfRolls++;
        const newRollListElement = document.createElement('li');
        const outputText = 'Roll ' + numberOfRolls + ': ' + rolledNumber;
        newRollListElement.textContent = outputText;
        diceRollsListElement.append(newRollListElement);
        if (rolledNumber == enteredNumber) {
            hasPolledTargetNumber = true;
        }
    }

    const outputTotalRollsElement = document.getElementById('output-total-rolls');
    const outputTargetNumberElement = document.getElementById('output-target-number');

    outputTargetNumberElement.textContent = enteredNumber;
    outputTargetNumberElement.textContent=numberOfRolls;
}

rollDiceButtonElement.addEventListener('click', deriveNumberOfDiceRolls);