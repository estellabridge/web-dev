let procductNameInputElement = document.getElementById('product-name');
let remainingCharsElement = document.getElementById('remaining-chars');

let maxAllowedChars = procductNameInputElement.maxLength;

function updateRemainingCharacters(event) {
    let enteredText = event.target.value;
    let enteredTextLength = enteredText.length;

    let remainingCharacters = maxAllowedChars - enteredTextLength;

    remainingCharsElement.textContent = remainingCharacters;

    if (remainingCharacters <= 10) {
        remainingCharsElement.classList.add('warning');
        procductNameInputElement.classList.add('warning');
    } else if (remainingCharacters === 0) {
        remainingCharsElement.classList.add('error');
        procductNameInputElement.classList.add('error');
    } 
    else {
        remainingCharsElement.classList.remove('warning', 'error');
        procductNameInputElement.classList.remove('warning', 'error');

    }
}


procductNameInputElement.addEventListener('input', updateRemainingCharacters);