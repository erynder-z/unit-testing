const analyseArray = (array) => {
  const getAverage = () => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum / array.length;
  };

  const getMin = () => {
    return Math.min(...array);
  };

  const getMax = () => {
    return Math.max(...array);
  };

  const analysedArray = {
    average: getAverage(),
    min: getMin(),
    max: getMax(),
    length: array.length,
  };
  return analysedArray;
};

module.exports = analyseArray;
