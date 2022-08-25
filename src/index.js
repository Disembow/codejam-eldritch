import { ancientsData as Ancients } from "./data/ancients.js";
import { difficulties as Diff } from "./data/difficulties.js";
import { brownCards, blueCards, greenCards } from "./data/mythicCards/index.js";
import { sumCards, sumGreenCards, sumBlueCards, sumBrownCards } from "./func/cardsum";
// import { getRandomCard, shuffle  } from "./func/shuffle";
import { shuffle  } from "./func/shuffle";

// console.log(Ancients)
// console.log(Diff)
console.log(brownCards)
console.log(blueCards)
console.log(greenCards)


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
// Get conditions for cards set------------------------------------------------
//-----------------------------------------------------------------------------

let playsConditions = [];
let cardsNumber = [];

const getActiveAncientObj = () => {
  let activeAncient = document.querySelector('.active').id;
  for (let i = 0; i < Ancients.length; i++) {
    if (Ancients[i].name == activeAncient) {
      playsConditions = [Ancients[i].firstStage, Ancients[i].secondStage, Ancients[i].thirdStage];
      cardsNumber = [sumGreenCards(playsConditions), sumBlueCards(playsConditions), sumBrownCards(playsConditions)]
      // console.log(sumCards(playsConditions));
      // console.log(playsConditions);
      // console.log(cardsNumber);
    };
  };
};

ancient1.addEventListener('click', getActiveAncientObj);
ancient2.addEventListener('click', getActiveAncientObj);
ancient3.addEventListener('click', getActiveAncientObj);
ancient4.addEventListener('click', getActiveAncientObj);

//-----------------------------------------------------------------------------
// Get set of cards to play depending on the difficulty------------------------
//-----------------------------------------------------------------------------

let greenCardsSet = [];
let blueCardsSet = [];
let brownCardsSet = [];

console.log(greenCardsSet);
console.log(blueCardsSet);
console.log(brownCardsSet);


//-----------------------------------------------------------------------------
// Get numbers of cards by condition of Ancient--------------------------------
//-----------------------------------------------------------------------------



//-----------------------------------------------------------------------------
// Get difficulty level--------------------------------------------------------
//-----------------------------------------------------------------------------
// const getDifficultyLevel = () => {
//   let difficultyLevel = document.querySelector('.active2').id;
//   console.log(difficultyLevel);
//   return difficultyLevel;
// };

// lvl1.addEventListener('click', getDifficultyLevel);
// lvl2.addEventListener('click', getDifficultyLevel);
// lvl3.addEventListener('click', getDifficultyLevel);
// lvl4.addEventListener('click', getDifficultyLevel);
// lvl5.addEventListener('click', getDifficultyLevel);


//-----------------------------------------------------------------------------
// Number of cards by Ancient--------------------------------------------------
//-----------------------------------------------------------------------------

// const greenDotLVL1 = document.querySelector('.dots, .green, .first');
// const blueDotLVL1 = document.querySelector('.dots, .blue, .first');
// const brownDotLVL1 = document.querySelector('.dots, .brown, .first');
// const greenDotLVL2 = document.querySelector('.dots, .green, .second');
// const blueDotLVL2 = document.querySelector('.dots, .blue, .second');
// const brownDotLVL2 = document.querySelector('.dots, .brown, .second');
// const greenDotLVL3 = document.querySelector('.dots, .green, .third');
// const blueDotLVL3 = document.querySelector('.dots, .blue, .third');
// const brownDotLVL3 = document.querySelector('.dots, .brown, .third');


