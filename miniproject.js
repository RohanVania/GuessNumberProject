

function secretRandomNumber(x, y) {
  return (Math.floor(Math.random() * (y - x) + x));
}

function guessNumberGame() {
  let number = secretRandomNumber(1, 100);
  let inp;
  let score = 10;

  while (inp != number && score >= 1) {
    score = score - 1;

    inp = Number.parseInt(prompt("Guess Number (You Get 10 Attempts to Guess): "))
    if (number == inp) {
      console.log("Number Guessed Correctly! You Win !!")
      console.log("Score is " + score)
      return
    }
    else if (number > inp) {
      console.log("Number is Greater then " + inp);
    }
    else if (number < inp) {
      console.log("Number is less then " + inp)
    }
  }
  if (score == 0) {
    console.log("You Exceeded the Attempt Limit: You Lose !!")
  }
}

guessNumberGame()
