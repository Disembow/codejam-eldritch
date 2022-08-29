import { ancientsData as Ancients } from "./data/ancients.js";
import { difficulties as Diff } from "./data/difficulties.js";
import { brownCards, blueCards, greenCards } from "./data/mythicCards/index.js";
import { shuffle } from "./func/shuffle";
import { sumGreenCards, sumBlueCards, sumBrownCards } from "./func/cardsum";
import { colorCounter } from "./func/colorCounter";

// console.log(Ancients)
// console.log(Diff)
// console.log(brownCards)
// console.log(blueCards)
// console.log(greenCards)

//-----------------------------------------------------------------------------
// Choose the Ancient----------------------------------------------------------
//-----------------------------------------------------------------------------
const ancient1 = document.getElementById('azathoth');
const ancient2 = document.getElementById('cthulhu');
const ancient3 = document.getElementById('iogSothoth');
const ancient4 = document.getElementById('shubNiggurath');
const chooseDiff = (e) => {
  const ancientsAll = document.querySelectorAll('.ancients-cards');
  for(let i = 0; i < ancientsAll.length; i++) {
    ancientsAll[i].classList.remove('active');
  };
  e.target.classList.add('active');
}
ancient1.addEventListener('click', chooseDiff);
ancient2.addEventListener('click', chooseDiff);
ancient3.addEventListener('click', chooseDiff);
ancient4.addEventListener('click', chooseDiff);

//-----------------------------------------------------------------------------
// Choose difficulty level-----------------------------------------------------
//-----------------------------------------------------------------------------
const lvl1 = document.getElementById('readily');
const lvl2 = document.getElementById('easy');
const lvl3 = document.getElementById('normal');
const lvl4 = document.getElementById('hard');
const lvl5 = document.getElementById('nightmare');
const chooseLVL = (e) => {
  const lvlAll = document.querySelectorAll('.difficulty-level');
  for(let i = 0; i < lvlAll.length; i++) {
    lvlAll[i].classList.remove('active2');
  };
  e.target.classList.add('active2');
};

lvl1.addEventListener('click', chooseLVL);
lvl2.addEventListener('click', chooseLVL);
lvl3.addEventListener('click', chooseLVL);
lvl4.addEventListener('click', chooseLVL);
lvl5.addEventListener('click', chooseLVL);

//-----------------------------------------------------------------------------
// Get conditions for cards set -----------------------------------------------
//-----------------------------------------------------------------------------

const cardFace = document.querySelector('.open-deck');
let playsConditions = [];

const getActiveAncientObj = () => {
  let activeAncient = document.querySelector('.active').id;
  for (let i = 0; i < Ancients.length; i++) {
    if (Ancients[i].name == activeAncient) {
      playsConditions = [Ancients[i].firstStage, Ancients[i].secondStage, Ancients[i].thirdStage];
      // console.log('Условия согласно древнему');
      // console.log(playsConditions);
    };
  };
  cardFace.classList.contains('hidden') ? '' : cardFace.classList.add('hidden');
};
getActiveAncientObj();
// console.log(playsConditions);

ancient1.addEventListener('click', getActiveAncientObj);
ancient2.addEventListener('click', getActiveAncientObj);
ancient3.addEventListener('click', getActiveAncientObj);
ancient4.addEventListener('click', getActiveAncientObj);

//-----------------------------------------------------------------------------
// Shuffle cards & create deck ------------------------------------------------
//-----------------------------------------------------------------------------

// Get deck for each level


let levelOneDeck = [];
let levelTwoDeck = [];
let levelThreeDeck = [];
let finalDeck = [];
let sum = 0;

const shuffleDeck = () => {
  levelOneDeck = []
  finalDeck = [];
  levelTwoDeck = [];
  levelThreeDeck = [];
  console.log('Условия перед шафлом');
  console.log(playsConditions);
  shuffle(greenCards);
  shuffle(blueCards);
  shuffle(brownCards);

  let playDeck = [
    greenCards.slice(0, sumGreenCards(playsConditions)), 
    blueCards.slice(0, sumBlueCards(playsConditions)), 
    brownCards.slice(0, sumBrownCards(playsConditions))
  ];
  // console.log('Рука перед распределением на этапы');
  // console.log(playDeck);
  
  // stage#1
  for (let i = 0; i < playsConditions[0].greenCards; i++) {
    levelOneDeck.push(playDeck[0].pop());
  };
  for (let i = 0; i < playsConditions[1].greenCards; i++) {
    levelTwoDeck.push(playDeck[0].pop());
  };
  for (let i = 0; i < playsConditions[2].greenCards; i++) {
    levelThreeDeck.push(playDeck[0].pop());
  };
  // stage#2
  for (let i = 0; i < playsConditions[0].blueCards; i++) {
    levelOneDeck.push(playDeck[1].pop());
  };
  for (let i = 0; i < playsConditions[1].blueCards; i++) {
    levelTwoDeck.push(playDeck[1].pop());
  };
  for (let i = 0; i < playsConditions[2].blueCards; i++) {
    levelThreeDeck.push(playDeck[1].pop());
  };
  // stage#3
  for (let i = 0; i < playsConditions[0].brownCards; i++) {
    levelOneDeck.push(playDeck[2].pop());
  };
  for (let i = 0; i < playsConditions[1].brownCards; i++) {
    levelTwoDeck.push(playDeck[2].pop());
  };
  for (let i = 0; i < playsConditions[2].brownCards; i++) {
    levelThreeDeck.push(playDeck[2].pop());
  };
  
  shuffle(levelOneDeck);
  shuffle(levelTwoDeck);
  shuffle(levelThreeDeck);
  finalDeck.push(levelThreeDeck);
  finalDeck.push(levelTwoDeck);
  finalDeck.push(levelOneDeck);
  finalDeck = finalDeck.flat();
  console.log('Финальная рука');
  console.log(finalDeck);
  sum = finalDeck.length - 1;
}
shuffleDeck();
ancient1.addEventListener('click', shuffleDeck);
ancient2.addEventListener('click', shuffleDeck);
ancient3.addEventListener('click', shuffleDeck);
ancient4.addEventListener('click', shuffleDeck);


// Set the number of cards into the counter
const greenDotLVL1 = document.querySelector('.dots.green.first');
const blueDotLVL1 = document.querySelector('.dots.blue.first');
const brownDotLVL1 = document.querySelector('.dots.brown.first');
const greenDotLVL2 = document.querySelector('.dots.green.second');
const blueDotLVL2 = document.querySelector('.dots.blue.second');
const brownDotLVL2 = document.querySelector('.dots.brown.second');
const greenDotLVL3 = document.querySelector('.dots.green.third');
const blueDotLVL3 = document.querySelector('.dots.blue.third');
const brownDotLVL3 = document.querySelector('.dots.brown.third');

const fillDots = () => {
  greenDotLVL1.innerText = `${colorCounter(levelOneDeck, 'green')}`;
  greenDotLVL2.innerText = `${colorCounter(levelTwoDeck, 'green')}`;
  greenDotLVL3.innerText = `${colorCounter(levelThreeDeck, 'green')}`;
  
  brownDotLVL1.innerText = `${colorCounter(levelOneDeck, 'brown')}`;
  brownDotLVL2.innerText = `${colorCounter(levelTwoDeck, 'brown')}`;
  brownDotLVL3.innerText = `${colorCounter(levelThreeDeck, 'brown')}`;
  
  blueDotLVL1.innerText = `${colorCounter(levelOneDeck, 'blue')}`;
  blueDotLVL2.innerText = `${colorCounter(levelTwoDeck, 'blue')}`;
  blueDotLVL3.innerText = `${colorCounter(levelThreeDeck, 'blue')}`
};
fillDots();

ancient1.addEventListener('click', fillDots);
ancient2.addEventListener('click', fillDots);
ancient3.addEventListener('click', fillDots);
ancient4.addEventListener('click', fillDots);

//-----------------------------------------------------------------------------
// Turn cards -----------------------------------------------------------------
//-----------------------------------------------------------------------------

const cardShirt = document.querySelector('.deck');

cardShirt.addEventListener('click', () => {
  cardFace.classList.remove('hidden');
  cardFace.setAttribute('src', finalDeck[sum].cardFace);
  if (sum === 0) {
    cardShirt.classList.add('hidden');
  };
  if (+document.querySelector(`.${finalDeck[sum].color}.first`).innerText > 0) {
    document.querySelector(`.${finalDeck[sum].color}.first`).innerText = +document.querySelector(`.${finalDeck[sum].color}.first`).innerText - 1;
  } else if (+document.querySelector(`.${finalDeck[sum].color}.second`).innerText > 0) {
    document.querySelector(`.${finalDeck[sum].color}.second`).innerText = +document.querySelector(`.${finalDeck[sum].color}.second`).innerText - 1;
  } else {
    document.querySelector(`.${finalDeck[sum].color}.third`).innerText = +document.querySelector(`.${finalDeck[sum].color}.third`).innerText - 1;
  }
  sum--;
});