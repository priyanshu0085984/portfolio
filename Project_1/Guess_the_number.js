let highscore = document.getElementById("highscore");
let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.getElementById("btn").addEventListener("click", () => {
  const a = Number(document.getElementById("num").value);
  let score = document.getElementById("score");
  const message = document.getElementById("message");
  const mark = document.getElementById("question-mark");
  if (Number(score.textContent) === 0) {
    message.textContent = "😭You lost the game!";
  } else if (a > secretNumber) {
    message.textContent = "⚠️Too High";
    score.textContent = Number(score.textContent) - 1;
  } else if (a < secretNumber) {
    message.textContent = "⚠️Too Low";
    score.textContent = Number(score.textContent) - 1;
  } else {
    message.textContent = "🎉Correct Number";
    mark.textContent = secretNumber;
    mark.style.width = "1.5em";
    document.getElementById("container").style.backgroundColor = "#7ee80c";
    highscore.textContent = score.textContent;
    document.getElementById("num").style.backgroundColor = "#7ee80c";
  }
  console.log(a);
});
document.getElementById("rematch").addEventListener("click", () => {
  let score = document.getElementById("score");
  const message = document.getElementById("message");
  const mark = document.getElementById("question-mark");
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score.textContent = "20";
  message.textContent = "Start guessing...";
  mark.textContent = "?";
  mark.style.width = "1.3em";
  document.getElementById("container").style.backgroundColor = "#222";
  document.getElementById("num").style.backgroundColor = "#222";
});
