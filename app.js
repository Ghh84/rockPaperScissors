window.onload = startGame();
let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;

let buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
const main = document.querySelector("main");
const endAlrt = document.querySelector("#end-alert");
const endDesc = document.querySelector("#end-desc");
const returnMainBtn = document.querySelector("#retry-btn");
const desc = document.querySelector("#desc3");
const container = document.querySelector("#results-container");

body.addEventListener("click", skipAnime());
body.addEventListener("keydown", skipAnime());

function startGame() {
  const desc1 = document.querySelector("#desc1");
  let desc1Span = desc1.querySelectorAll("span");

  desc1Span = Array.from(desc1Span);

  const desc2 = document.querySelector("#desc2");
  const desc3 = document.querySelector("#desc3");

  desc1Span[desc1Span.length - 1].ontransitionend = () => {
    desc1.classList.add("fade-out");

    desc1.addEventListener("animationend", () => {
      desc1.classList.add("disappear");
      desc1.classList.remove("animate");
      desc2.classList.remove("disappear");
      desc2.classList.add("animate");
      let desc2Span = desc2.querySelectorAll("span");
      desc2Span = Array.from(desc2Span);

      desc2Span[desc2Span.length - 1].ontransitionend = () => {
        desc2.classList.add("fade-out");
        desc2.addEventListener("animationend", () => {
          desc2.classList.add("disappear");
          desc2.classList.remove("animate");
          desc3.classList.remove("disappear");
          desc3.classList.add("animate");
          
          let desc3Span = desc3.querySelectorAll("span");
          desc3Span = Array.from(desc3Span);

          desc3Span[desc3Span.length - 1].ontransitionend = () => {
            const cta = document.querySelector("#cta");

            cta.classList.add("drop-down");

            cta.addEventListener("animationend", () => {
              const gameCtn = document.querySelector("#game-container");

              setTimeout(function () {
                gameCtn.classList.add("fade-in");
              }, 300);
            });
          };
        });
      };
    });
  };
}
