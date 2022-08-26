const colorCounter = (arr, color) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].color === color) {
      sum++;
    };
  };
  return sum;
};

export { colorCounter };