const score = document.getElementById('score');
const highScoreText = document.getElementById('highScore');


//AJAX


function fetchHighScore() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/highscore', true);
    xhr.onload = function () {
      if (xhr.status === 200) {
        highScore = parseInt(xhr.responseText, 10);
        highScoreText.textContent = highScore.toString().padStart(3, '0');
      }
    };
    xhr.send();
  }
  
  // Update high score on the server
  function updateHighScoreOnServer(newHighScore) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/highscore', true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.send(JSON.stringify({ highScore: newHighScore }));
  }
  