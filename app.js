
var score, roundScore, activePlayer, gamePlaying, dice,finalScore;

init();

document.querySelector('.btn-roll').addEventListener('click', function () {

    var inputVal = document.querySelector('.final-score').value;

    if(!inputVal){
        finalScore = 100;
    } else{
        finalScore = inputVal;
    }

    document.querySelector('.final-score').style.display = 'none';

    if (gamePlaying) {
        dice1 = Math.floor(Math.random() * 6) + 1;
        dice2 = Math.floor(Math.random() * 6) + 1;

        document.querySelector('#dice-1').src = 'dice-' + dice1 + '.png';
        document.querySelector('#dice-1').style.display = 'block';
        document.querySelector('#dice-2').src = 'dice-' + dice2 + '.png';
        document.querySelector('#dice-2').style.display = 'block';
        
        if ( dice1 === 1 || dice2 === 1) {
            nextPlayer();
        } else {
            roundScore += dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function () {

    score[activePlayer] += roundScore;
    

    if (gamePlaying) {
        document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];
        if (score[activePlayer] >= finalScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }
});

document.querySelector('.btn-new').addEventListener('click', init);

function nextPlayer() {
    roundScore = 0;
    document.querySelector('#current-' + activePlayer).textContent = '0';
    activePlayer = activePlayer === 0 ? 1 : 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}

function init() {
    score = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    finalScore = 0;
    document.querySelector('.ion-ios-loop').style.display = 'none';
    document.querySelector('#dice-1').style.display = 'none';
    document.querySelector('#dice-2').style.display = 'none';
    document.querySelector('#score-0').textContent = '0';
    document.querySelector('#score-1').textContent = '0';
    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'player-2';
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.final-score').style.display = 'block';
}