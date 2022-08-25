let сardsSet = [];
// const getRandomCard = (arr) => {
//   const shuffle = (arr) => {  
//     for (let i = 0; i < arr.length; i++) {
//       let tempCard = arr[i];
//       let randomIndex = Math.floor(Math.random() * arr.length);
//       arr[i] = arr[randomIndex];
//       arr[randomIndex] = tempCard;
//     };
//   };
//   shuffle(arr);
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].difficulty === 'easy') {
//       сardsSet.push(arr[i].cardFace);
//     };
//   };
//   if (сardsSet.length < 9) {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i].difficulty === 'normal') {
//         сardsSet.push(arr[i].cardFace);
//       };
//     };
//   };
//   сardsSet = сardsSet.slice(0, 9);
//   return сardsSet;
// };

// let brownCards = getRandomCard(cardsData);

// const shuffle = (arr) => {  
//   for (let i = 0; i < arr.length; i++) {
//     let tempCard = arr[i];
//     let randomIndex = Math.floor(Math.random() * arr.length);
//     arr[i] = arr[randomIndex];
//     arr[randomIndex] = tempCard;
//   };
// };
// shuffle(brownCards);

// export { getRandomCard, shuffle };


const shuffle = (arr) => {  
  for (let i = 0; i < arr.length; i++) {
    let tempCard = arr[i].cardFace;
    let randomIndex = Math.floor(Math.random() * arr.length);
    arr[i].cardFace = arr[randomIndex];
    arr[randomIndex] = tempCard;
  };
};



export { shuffle };