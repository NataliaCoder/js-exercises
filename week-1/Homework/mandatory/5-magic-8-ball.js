/***
  
Let's peer into the future using a Magic 8 Ball!
https://en.wikipedia.org/wiki/Magic_8-Ball 

There are a few steps to being able view the future though:
* Ask a question
* Shake the ball
* Get an answer
* Decide if it's positive or negative

The question can be anything, but the answers are fixed,
and have different levels of positivity or negativity.

Below are the possible answers:

## Very positive
It is certain.
It is decidedly so.
Without a doubt.
Yes - definitely.
You may rely on it.

## Positive
As I see it, yes.
Most likely.
Outlook good.
Yes.
Signs point to yes.

## Negative
Reply hazy, try again.
Ask again later.
Better not tell you now.
Cannot predict now.
Concentrate and ask again.

## Very negative
Don't count on it.
My reply is no.
My sources say no.
Outlook not so good.
Very doubtful.
*/

// This should log "The ball has shaken!"
// and return the answer.

function shakeBall() {
  let number = Math.random();
  console.log("The ball has shaken!");
  // if (number > 0 && number <= 0.25) {
      if (number > 0 && number <= 0.05) {
      return "It's certain.";
      }else if (number > 0.05 && number <= 0.01) {
      return "It is decidedly so.";
      }else if (number > 0.01 && number <= 0.15) {
      return "Without a doubt.";
      }else if (number > 0.15 && number <= 0.2) {
      return "Yes - definitely.";
      }else if (number > 0.2 && number <=0.25) {
      return "You may rely on it.";
      } else
  // if (number > 0.25 && number <= 0.5) {
      if (number > 0.25 && number <= 0.3) {
      return "As I see it, yes.";  
      }else if (number > 0.3 && number <= 0.35) {
      return "Most likely.";
      }else if (number > 0.35 && number <= 0.4) {
      return "Outlook good.";
      }else if (number > 0.4 && number <= 0.45) {
      return "Yes.";
      }else if (number > 0.45 && number <=0.5) {
      return "Signs point to yes.";
      } else
  // if (number > 0.5 && number <= 0.75) {
      if (number > 0.5 && number <= 0.55) {
      return "Reply hazy, try again.";  
      }else if (number > 0.55 && number <= 0.6) {
      return "Ask again later.";
      }else if (number > 0.6 && number <= 0.65) {
      return "Better not tell you now.";
      }else if (number > 0.65 && number <= 0.7) {
      return "Cannot predict now.";
      }else if (number > 0.7 && number <=0.75) {
      return "Concentrate and ask again.";
      } else
    // if (number > 0.75 && number < 1) {
      if (number > 0.75 && number <= 0.8) {
      return "Don't count on it.";  
      }else if (number > 0.8 && number <= 0.85) {
      return "My reply is no.";
      }else if (number > 0.85 && number <= 0.9) {
      return "My sources say no.";
      }else if (number > 0.9 && number <= 0.95) {
      return "Outlook not so good.";
      }else if (number > 0.95 && number < 1) {
      return "Very doubtful.";
      }
return "Mistake";
}

// The answer should come from shaking the ball
let answer;

// When checking the answer, we should tell someone if the answer is
// - very positive
// - positive
// - negative
// - very negative
function checkAnswer(answer) { 
  if (answer = "It is certain." || "It is decidedly so." || "Without a doubt." || "Yes - definitely." || "You may rely on it.") {
    return "very positive";
  } if (answer = "As I see it, yes." || "Most likely." || "Outlook good." || "Yes." || "Signs point to yes.") {
    return "positive";
  } if (answer = "Reply hazy, try again." || "Ask again later." || "Better not tell you now." || "Cannot predict now." || "Concentrate and ask again.") {
    return "negative";
  } if (answer = "Don't count on it." || "My reply is no." || "My sources say no." || "Outlook not so good." || "Very doubtful.") {
    return "very negative";
  }  
}
/* ======= TESTS - DO NOT MODIFY ===== */
const log = console.log;
let logged;
console.log = function() {
  log(...arguments);
  logged = arguments[0];
};

function test(test_name, expr) {
  let status;
  if (expr) {
    status = "PASSED";
  } else {
    status = "FAILED";
  }

  logged = undefined;
  console.log(`${test_name}: ${status}`);
}

const validAnswers = [];
function testAll() {
  const answer = shakeBall();
  test(
    `shakeBall logs "The ball has shaken!"`,
    logged === "The ball has shaken!"
  );
  test(`shakeBall returns an string answer"`, typeof answer === "string");
  test(
    `checkAnswer returns the level of positivity"`,
    ["very positive", "positive", "negative", "very negative"].includes(
      checkAnswer(answer)
    )
  );
}

testAll();
