let userScore = 0;
let computerScore = 0; 

const Papier = document.getElementById('Papier');
const Piere = document.getElementById('Piere');
const Ciseaux = document.getElementById('Ciseaux');
const content =document.querySelector('.content');
const gameChoice =document.getElementById('gameChoice');
const scoreElements =[...document.querySelectorAll('.score')];


function buttonClick(button){
    let choices =['Piere','Papier','Ciseaux'];
    var randomIndex = Math.floor(Math.random() * 3) ;  //  Math.ceil: 0.6 -> 1  // Math.floor 0.6 -> 0
    let userSymbol = getSymbol(button.id);
    let computerSymbol = getSymbol(choices[randomIndex]);

    if(button.id===choices[randomIndex]){
        resultText = 'Match Nul';
        resultClass = 'text-warning';
    }
    else if(
        (button.id === 'Papier' && choices[randomIndex]=== 'Piere')||
        (button.id === 'Piere' && choices[randomIndex]=== 'Ciseaux')||
        (button.id === 'Ciseaux' && choices[randomIndex]=== 'Papier')
        ){
            resultText = 'Vous avez Gagne !';
            resultClass = 'text-success'; 
            userScore++;
    }else{
            resultText = 'Vous avez perdu';
            resultClass = 'text-danger';
            computerScore++;
    }
    content.classList.add("display-content");
    gameChoice.innerHTML = `
    <div class="result mb-5">
        <h3 class="${resultClass}">${resultText}</h3>
        <div class="d-flex justify-content-between">
            <button type="button" class="btn btn-outline  game-choice">${computerSymbol}</button>
            <button type="button" class="btn btn-outline  game-choice">${userSymbol}</button>
        </div>
        <button type="button" id="replay" onclick="buttonContinuer()" class="btn btn-outline-primary ">Rejouer</button>
    </div>`;
    updateScore();
}
function updateScore() {
    scoreElements[0].innerHTML = `Ordinateur: ${computerScore}`;
    scoreElements[1].innerHTML = `Moi: ${userScore}`;
}

function buttonContinuer(){
    content.classList.remove("display-content");
    document.querySelector('.result').classList.add("display-content");
}

function getSymbol(choice) {
    switch (choice) {
        case 'Piere':
            return '✊';
        case 'Papier':
            return '✋';
        case 'Ciseaux':
            return '✌';
        default:
            return '';
    }
}