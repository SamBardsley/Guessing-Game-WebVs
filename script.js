

function guessingGame(){
  const btn         = document.getElementById('toggle_b');
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
  const gamesDom    = document.getElementById("games");  

  let total  = 0;
  let answer = -1; 
  let tries  = 0;
  play();

  guessDom.addEventListener("change", makeGuess);
  yesDom.addEventListener("click", play);

  btn.addEventListener('click', function handleClick() {
    btn.textContent = 'toggle';
    if (document.body.className == "dark") {
      document.body.className = "light";
    } else {
      document.body.className = "dark";
    }
  });
  
  function play(){
    guessDom.setAttribute("placeholder", "1-100");
    hintDom.innerHTML = "Give it a guess!";
    guessDom.value = "";
    guessingDom.style.display = "unset";
    playingDom.style.display = "none";

    answer = Math.floor(Math.random() * 100) +1;
    ansDom.value = answer;
    console.log(ansDom.value);
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
    total++;
    gamesDom.value   = total;
    score.value      = tries;
    guessesDom.value = tries + parseInt(guessesDom.value);
    bestDom.value    = getBest(tries);
    //  gamesDom.value   = parseInt(gamesDom.value);
    yesDom.focus();
  }
  
  function getBest(count){
    const check = parseInt(bestDom.value);
    if(check === 0 || count < check) return count;
    else return check;
  }
  
}



guessingGame();