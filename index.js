const computer = document.querySelector(".computerimg img")
const player = document.querySelector(".playerimg img")
const options = document.querySelectorAll(".options button");
let computerpoints = document.querySelector(".computerpoints")
let playerpoints = document.querySelector(".playerpoints")


options.forEach((option) => {

    option.addEventListener("click", () => {
        computer.classList.add("shakecomputer")
        player.classList.add("shakeplayer")

        setTimeout(() => {
            computer.classList.remove("shakecomputer")
            player.classList.remove("shakeplayer")

            player.src = "./" + option.innerHTML + "Player.png";

            const arr = ["STONE", "PAPER", "SCISSORS"]

            let computerinput = arr[Math.floor(Math.random() * 3)];

            computer.src = `./${computerinput}Computer.png`

            let cpoints = parseInt(computerpoints.innerHTML)
            let ppoints = parseInt(playerpoints.innerHTML)
            
           
        
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
