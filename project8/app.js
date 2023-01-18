let paragraphElement = document.querySelector('p');

function changeParagraphText() {
    paragraphElement.textContent = 'clicked';
    console.log('paragraph clicked');
    console.log(Event); 
}

paragraphElement.addEventListener('click', changeParagraphText);

let inputElement = document.querySelector('input');

function retrieveUserInput(event) {
    let enteredText = inputElement.value;
    console.log(enteredText);
    console.log(event);
}

inputElement.addEventListener('input', retrieveUserInput);