var sumCurrentScore, activePlayer, finalScore, activeState;
function initional () {
    sumCurrentScore = 0;
    activePlayer = 0;
    finalScore = [0,0];
    activeState = true;
    // beggining with hidden the dice
    document.querySelector('.dice img').style.visibility = 'hidden';

    document.querySelector('.player-0 .current .score').textContent = 0;
    document.querySelector('.player-1 .current .score').textContent = 0;

    document.querySelector('.player-0 .final-score').textContent = 0;
    document.querySelector('.player-1 .final-score').textContent = 0;

    document.querySelector('.name-p-0 .name').textContent = 'player 1';
    document.querySelector('.name-p-1 .name').textContent = 'player 2';

    
    document.querySelector('.player-0').classList.remove('active');
    document.querySelector('.player-1').classList.remove('active');

    document.querySelector('.player-0').classList.add('active');

    document.querySelector('.name-p-0 .name').classList.remove('winner');
    document.querySelector('.name-p-1 .name').classList.remove('winner');
}
initional();

    
/*************
1- roll Button
**************/

// Click Roll Button
document.querySelector('.btn-roll').addEventListener('click', function() {
    if(activeState) {
        // show the dice
        document.querySelector('.dice img').style.visibility = 'visible';
        //Generate a rundome val and change the src of dice img to show a spicsific num
        var numDice = Math.floor(Math.random()*6 +1);
        document.querySelector('.dice img').src = 'img/dice-' + numDice +'.png';

        // if the value be 1
        if(numDice === 1) {
            // the active player lost all his current score
            sumCurrentScore = 0;
            document.querySelector('.active .current .score').textContent = sumCurrentScore;

            //the other player turn
            document.querySelector('.player-' + activePlayer).classList.toggle('active');
            activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
            console.log(activePlayer);
            document.querySelector('.player-' + activePlayer).classList.toggle('active');
            
        // if the value is any of other numbers
        } else {

            // store this value in the current score of the active player and sum the valuse
            sumCurrentScore += numDice;
            document.querySelector('.active .current .score').textContent = sumCurrentScore;
        }
    }
});

/*************
2-Hold Button
**************/

// Click Roll Button
document.querySelector('.btn-hold').addEventListener('click', function() {
    if(activeState) {

        //store the current score for the active player in his score and sum the valuse
        finalScore[activePlayer] += sumCurrentScore;
        document.querySelector('.active .final-score').textContent = finalScore[activePlayer];

        //turn the current score to zero
        sumCurrentScore = 0;
        document.querySelector('.active .current .score').textContent = sumCurrentScore;

        //and if the score of the active player be => 100
        if(finalScore[activePlayer] >= 10) {

            //change his name to winner
            document.querySelector('.active .name').textContent = 'Winner !';
            document.querySelector('.active .name').classList.add('winner');
            //document.querySelector('.active .name').style.color = '#c52424';

            //hidden the dice
            document.querySelector('.dice img').style.visibility = 'hidden';

            //stop the game(click on roll and hold button)
            activeState = false;
        } else {
            //hidden the dice
            document.querySelector('.dice img').style.visibility = 'hidden';

            //the other player turn
            document.querySelector('.player-' + activePlayer).classList.toggle('active');
            activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
            document.querySelector('.player-' + activePlayer).classList.toggle('active');
        }
    }

    
});


/*************
3-New Game Button
**************/

// Click New Game Button
document.querySelector('.btn-new').addEventListener('click', initional);
//turn all the values(current, final score) to 0 or the initional state
//turn roll and hold button to clichable agan (active state to true)
//dice to hidden