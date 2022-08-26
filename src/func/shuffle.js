const shuffle = (arr) => {  
  for (let i = 0; i < arr.length; i++) {
    let tempCard = arr[i];
    let randomIndex = Math.floor(Math.random() * arr.length);
    arr[i] = arr[randomIndex];
    arr[randomIndex] = tempCard;
  };
};

export { shuffle };