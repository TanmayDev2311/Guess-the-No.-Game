//Function to generate random number between 1 to 100
function randnum() {
    let x = Math.floor(1 + 99 * Math.random())
    return x
}

let rand = randnum()
let score;

let counter = 1; //counter variable to count no. of guesses

let input; //input variable to take user's guess


//function to start playing when called
function play() {
    //do while loop to ask user to guess continuously until guesses right
    do {
        input = prompt("Enter your guess")

        if (input == rand) {
            alert("Hurrah the guess was correct!")
            score = 100 - counter;
            alert(`Your Score : ${score}`)
        }
        //if guessed no. is bigger
        else if (input < rand) {
            alert("Oops, the actual number is greater than your guess. Try again!")
            counter++;
        }
        //if guessed no. is smaller
        else if (input > rand) {
            alert("Oops, the actual number is smaller than your guess. Try again!")
            counter++;
        }
        //if invalid input
        else {
            alert("Invalid Input try again")
        }
    } while (input != rand);

}

//play button mapped to call play() function on demand
let btn = document.querySelector(".play")
btn.addEventListener("click", () => {
    play()
}
)