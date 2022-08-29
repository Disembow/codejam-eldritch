const sumGreenCards = (arr) => {
  let cardsSum = 0;
  for (let i = 0; i < arr.length; i++) {
    cardsSum += arr[i].greenCards;
  }
  return cardsSum;
};

const sumBlueCards = (arr) => {
  let cardsSum = 0;
  for (let i = 0; i < arr.length; i++) {
    cardsSum += arr[i].blueCards;
  }
  return cardsSum;
};

const sumBrownCards = (arr) => {
  let cardsSum = 0;
  for (let i = 0; i < arr.length; i++) {
    cardsSum += arr[i].brownCards;
  }
  return cardsSum;
};

const sumAllCards = (arr) => {
  let cardsSum = 0;
  for (let i = 0; i < arr.length; i++) {
    cardsSum += arr[i];
  }
  return cardsSum;
};


export { sumGreenCards, sumBlueCards, sumBrownCards, sumAllCards };