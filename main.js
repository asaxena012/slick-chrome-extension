"use strict";

//Storing elements

let elPhrase = document.querySelector(".phrase");
let elMeaning = document.querySelector(".meaning");
let elExample = document.querySelector(".example");

//Data Object Array

let data = [
  {
    phrase: "I’ll ghost him",
    meaning: "cut off communication with someone",
    example: "OMG! Did you hear Aadi ghosted Akshay?",
  },
  {
    phrase: "All To Pot",
    meaning:
      "refers to a situation going out of your control and failing miserably.",
    example:
      "the birthday party went all to pot when the clown turned up drunk and everyone was sick from that cheap barbecue stuff",
  },
  {
    phrase: "Don’t be so Salty",
    meaning:
      "You can say someone is salty when they get upset or angry over something minor.",
    example: "Nick is so salty since his parents took away his car!",
  },
  {
    phrase: "Don’t be a Couch potato",
    meaning: "Don’t be a lazy person",
    example: "Don’t be a couch potato! Let’s go for a hike.",
  },
  {
    phrase: "Getting hitched ",
    meaning: "Getting married",
    example: "Tom and Sally are getting hitched.",
  },
  {
    phrase: "I’m down",
    meaning: "I’m able to join",
    example: "I’m down for ping pong.",
  },
  {
    phrase: "Its an Ace ",
    meaning: "Pass a test with 100%",
    example: "I think I’m going to ace the exam.",
  },
  {
    phrase: "Rip-off ",
    meaning: "A purchase that was very overpriced",
    example: "That phone case was a rip-off.",
  },
  {
    phrase: "I’m Shook",
    meaning:
      "When someone is shook it means they are shocked or incredibly surprised",
    example: "I'm shook man! What an episode, amazing.",
  },
  {
    phrase: "It was such a Hassle",
    meaning: ": to annoy or bother someone ",
    example:
      "It was such a hassle to get everyone’s signature on the card when many of them were out of town.",
  },
  {
    phrase: "He is a GOAT ",
    meaning: "GOAT stands for Greates Of All TIme",
    example: "Kobe is the GOAT, may he rest in peace.",
  },
  {
    phrase: "SPILL THE TEA ",
    meaning: "IT IS SLANG FOR GOSSIP OR HOT NEWS CIRCULATING THE SITUATION",
    example: "Would you like to spill the tea of your date from last night?",
  },
  {
    phrase: "It was a wack ",
    meaning: "WACK REFERS TO BORING OR WORSE THAN EXPECTATIONS",
    example: "The movie was wack.",
  },
  {
    phrase: "It was a blast ",
    meaning: "A very fun event",
    example: "Last night was a blast!",
  },
  {
    phrase: "Pig out ",
    meaning: "To eat a lot",
    example: "I pigged out last night at McDonald’s.",
  },
  {
    phrase: "Let’s Score ",
    meaning: "To get something desirable",
    example: "I scored the best seats in the stadium!",
  },
  {
    phrase: "Let’s wrap up",
    meaning: "To finish something",
    example: "Let’s wrap up in five minutes.",
  },
  {
    phrase: "Screw up ",
    meaning: "To make a mistake",
    example: "Sorry I screwed up and forgot our plans.",
  },
  {
    phrase: "Ditch",
    meaning: "To skip an event",
    example: "I’m going to ditch class tomorrow to go to the beach.",
  },
  {
    phrase: "In no time",
    meaning: "Very soon",
    example: "We’ll have our homework done in no time.",
  },
  {
    phrase: "Rule of Thumb",
    meaning:
      "to describe a useful principle that has wide application, but that’s not necessarily reliable in all situations",
    example: "as a rule of thumb, we meet on Fridays.",
  },
  {
    phrase: "Go back to the drawing board",
    meaning: "Start over",
    example: "My experiment was a failure, so I'm back to the drawing board.",
  },
  {
    phrase: "Easy does it",
    meaning: "Slow down",
    example:
      "I was on the back of Suzie's motorbike and she was going really fast, so I said 'Easy does it!'",
  },
  {
    phrase: "get your act together",
    meaning: "organize your life or work better",
    example:
      "You'd better get your act together if you want a raise this year.",
  },
  {
    phrase: "Hit the sack",
    meaning: "go to sleep",
    example: "It's one o'clock - time to hit the sack.",
  },
  {
    phrase: "Under the waster",
    meaning: "Feeling sick",
    example: "I was still feeling a bit under the weather.",
  },
  {
    phrase: "Cutting corners",
    meaning: "Doing something poorly in order to save time or money",
    example:
      "When the boss found out that the accounting department was cutting corners they fired them all.",
  },
  {
    phrase: "Beat around the bush",
    meaning: "Avoid saying what you mean, usually because it is uncomfortable",
    example: "Don't beat around the bush, come straight to the point.",
  },
  {
    phrase: "The devil is in the details",
    meaning:
      "It looks good from a distance, but when you look closer, there are problems",
    example:
      "You need to make sure that your lawyer reads the contracts very carefully. The devil is in the details.",
  },
  {
    phrase: "Throw caution to the wind",
    meaning: "To do something despite the risks",
    example:
      "Although I threw all caution to the winds at the casino, it did not take me long to come back to my senses and not blow off all my savings.",
  },
  {
    phrase: "As right as rain",
    meaning: "Perfect",
    example:
      "You'll be as right as rain as soon as you are back in your own home with your baby.",
  },
  {
    phrase: "slick",
    meaning: "done or operating in an impressively smooth and efficient way",
    example: "Rangers have been entertaining crowds with a slick passing game.",
  },
];

// Functionality

// Pick random index from data array
let currentData = data[Math.trunc(Math.random() * data.length)];

//Fill current data to elements
elPhrase.textContent = currentData.phrase.toLowerCase();
elMeaning.textContent = currentData.meaning.toLowerCase();
elExample.textContent = currentData.example.toLowerCase();

// Dark Mode Functionality

let elBody = document.querySelector("body");
let elBtn = document.querySelector(".btn-theme");

function toggleTheme() {
  elBody.classList.toggle("dark-theme");
  elBtn.classList.toggle("btn-light");

  if (elBtn.classList.contains("btn-light")) {
    elBtn.textContent = "LIGHT MODE";
  } else {
    elBtn.textContent = "DARK MODE";
  }
}

let theme = localStorage.getItem("theme");

//Check is same theme else toggle
if (theme === "dark") {
  if (!elBody.classList.contains("dark-theme")) {
    toggleTheme();
  }
}

elBtn.addEventListener("click", function () {
  toggleTheme();

  if (elBody.classList.contains("dark-theme")) {
    theme = "dark";
  } else {
    theme = "light";
  }

  localStorage.setItem("theme", theme);
});

console.log(data.length);
