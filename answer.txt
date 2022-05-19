

function guessingGame(){
  
  const guessingDom = document.getElementById("guessing");
  const playingDom  = document.getElementById("playing");
  const guessDom    = document.getElementById("guess");
  const triesDom    = document.getElementById("tries");
  const hintDom     = document.getElementById("hint");
  const score       = document.getElementById("score");
  const ansDom      = document.getElementById("answer");
  const yesDom      = document.getElementById("yes");
  const guessesDom  = document.getElementById("guesses");
  const bestDom     = document.getElementById("best");

  let answer = -1; 
  let tries  = 0;
  play();

  guessDom.addEventListener("change",makeGuess);
  yesDom.addEventListener("click",play);
  
  function play(){
    guessDom.setAttribute("placeholder", "1-100");
    hintDom.innerHTML = "Give it a guess!";
    guessDom.value = "";
    guessingDom.style.display = "unset";
    playingDom.style.display = "none";

    answer = Math.floor(Math.random() * 100) +1;
    ansDom.value = answer;
    tries = 1;
  }
  function setTries(soFar){
    return soFar;
  }
  function makeGuess(e){
    this.setAttribute("placeholder",this.value);
    
    if      (this.value < answer) hintDom.innerHTML = "HIGHER! The answer is higher!";
    else if (this.value > answer) hintDom.innerHTML = "LOWER! The answer is lower!";
    else    showGameResults(tries);
  
    triesDom.value = tries++;
    this.value = "";

    setTimeout(function(){
      guessDom.focus();
    },10);
  }

  function showGameResults(tries){
    guessingDom.style.display = "none";
    playingDom.style.display  = "unset";
    score.value = tries;
    guessesDom.value = tries + parseInt(guessesDom.value);
    bestDom.value = getBest(tries);
    gamesDom.value = parseInt(gamesDom.value) + 1;
    yesDom.focus();
  }
  
  function getBest(count){
    const check = parseInt(bestDom.value);
    if(check === 0 || count < check) return count;
    else return check;
  }
  
}



guessingGame();