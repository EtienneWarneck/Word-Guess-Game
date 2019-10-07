var words = ["windex", "swiffer", "roomba"];

//Index of Current Word in the array
var currentWordIndex = words[Math.floor(Math.random() * words.length)];
console.log("word Variable", currentWordIndex);

var wordToGuess = []; //The word we build
// This for loop fills the length of the word with underscores:
for (var i = 0; i < currentWordIndex.length; i++) {
    wordToGuess[i] = "_";
}

var userGuess;  //any key pressed by the user
var guessedLetters = []; //stores the letters the user guessed
var guessesRemaining = 20;  // guesses remaining



var win = 0;

function startGame() {


    document.getElementById("pressed").innerHTML = "Find the brand. Press any key to get started ";
    document.getElementById("currentWord").innerHTML = "Current word: " + wordToGuess.join(" ");
    document.getElementById("wins").innerHTML = "Wins: " + win;
    document.getElementById("guessesRemaining").innerHTML = "Number of guesses remaining: ";
    document.getElementById("lettersAlreadyPressed").innerHTML = "Letters already pressed: ";
}

var positions = [];

document.addEventListener('keyup', event => {
    var charList = 'abcdefghijklmnopqrstuvwxyz';
    var key = event.key.toLowerCase();
    makeGuess(key)
    // we are only interested in alphanumeric keys
    if (charList.indexOf(key) === -1) return; //limit keys to charlist

    guessedLetters.push(key);

    document.getElementById("guessesRemaining").innerHTML = "Number of guesses remaining: \n" + guessesRemaining--;

    words.push(key);

    document.getElementById("lettersAlreadyPressed").innerHTML = "Letters already pressed: \n" + guessedLetters.join(" ");


    function makeGuess(letter) {
        console.log("MAKE GUESS FUNCTION")
        // Make sure we didn't use this letter yet
        console.log("Make guess GUESSED LETTERS", guessedLetters)
        // if (guessedLetters.indexOf(letter) === -1) {
        //     guessedLetters.push(letter);
        evaluateGuess(letter);
        // }

    };

    //The evaluateGuess method searches through the entire word..
    //..we are guessing to find all instances.
    function evaluateGuess(letter) {
        // Array to store positions of letters in string
        console.log("EVALUATE GUESS FUNCTION")

        // Loop through word finding all instances of guessed letter, store the indicies in an array.
        for (var i = 0; i < currentWordIndex.length; i++) {
            if (currentWordIndex[i] === letter) {
                console.log("EVAL GUESS for loop", currentWordIndex)
                positions.push(currentWordIndex[i]);
                wordToGuess[i] = letter;
                console.log("EVAL GUESS FUNC positions", positions)
                // wordToGuess.join();
                // console.log("TEST JOIN", wordToGuess);
                // document.getElementById("currentWord").innerHTML = "Current word:\n" + wordToGuess.join(" ");
                // if (wordToGuess.indexOf("_") === -1) {
                //     document.getElementById("wins").innerHTML = "Wins: " + win++;
                checkWin();
                // win++;
                // console.log("TEST CHECKWIN" , checkWin);
                document.getElementById("currentWord").innerHTML = "Current word: " + wordToGuess.join(" ");

            }
        }
        // if there are no indices, remove a guess
        if (positions.length <= 0) {
            console.log("REMAINING GUESS --");
            guessesRemaining--;
            // Loop through all the indices and replace the '_' with a letter.
        } else {
            // Loop through all the indices and replace the '_' with a letter.
            for (var i = 0; i < positions.length; i++) {
                console.log("WORD TO GUESS", wordToGuess[positions[i]])
                wordToGuess[positions[i]] = letter;
            }
        }
    };

    function checkWin() {
        if (wordToGuess.indexOf("_") === -1) {
            win++;
            document.getElementById("wins").innerHTML = "Wins: " + win++;
            // console.log("WIN WORKS?" , win)++;
        }
        if (guessesRemaining <= 0) {
            document.body.style.backgroundImage = "url('stain.jpg')";
         }
    }
});
