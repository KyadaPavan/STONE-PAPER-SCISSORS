const computer = document.querySelector(".computerimg img")
const player = document.querySelector(".playerimg img")
const options = document.querySelectorAll(".options button");
let computerpoints = document.querySelector(".computerpoints")
let playerpoints = document.querySelector(".playerpoints")


// option is a string of STONE, PAPER, or SCISSORS
options.forEach((option) => {

  // Add event listener for click on the option
 option.addEventListener("click", () => {
  // Shake the computer and player images
  computer.classList.add("shakecomputer");
  player.classList.add("shakeplayer");

  // After 900 milliseconds, remove the shake class and perform the logic
  setTimeout(() => {
    computer.classList.remove("shakecomputer");
    player.classList.remove("shakeplayer");

    // Set the player image source based on the selected option
    player.src = `./${option.textContent}Player.png`;

    // Get the possible computer inputs
   // const arr = ["STONE", "PAPER", "SCISSORS"];

     const arr = ["stone", "paper", "scissors"];

    // Get a random computer input
    let computerinput = arr[Math.floor(Math.random() * 3)];

    // Set the computer image source based on the computer input
    computer.src = `./${computerinput}Computer.png`;

    // Get the current player and computer points
    let cpoints = parseInt(computerpoints.innerHTML);
    let ppoints = parseInt(playerpoints.innerHTML);

    // Compare the player and computer inputs to determine the winner
       
    
        if (option.innerHTML === "STONE") {
            if (computerinput === "PAPER") 
              computerpoints.innerHTML = cpoints + 1; 
            else if (computerinput === "SCISSORS")
              playerpoints.innerHTML = ppoints + 1;
            
        } else if (option.innerHTML === "PAPER") {
            if (computerinput === "SCISSORS")
              computerpoints.innerHTML = cpoints + 1;
            else if (computerinput === "STONE")
              playerpoints.innerHTML = ppoints + 1;

        } else {
            if (computerinput === "STONE")
              computerpoints.innerHTML = cpoints + 1;
            else if (computerinput === "PAPER")
              playerpoints.innerHTML = ppoints + 1;
            } 
        }, 900);
      })
})
