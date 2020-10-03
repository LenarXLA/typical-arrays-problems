
exports.min = function min (array) {
  if (Array.isArray(array) && array.length) {
    let minValue = array[0];
    for (let i = 1; i < array.length; i++) {
      let currentValue = array[i];
      if(currentValue < minValue) {
        minValue = currentValue;
      }
    }
    return minValue;
  } else {
    return 0; 
  } 
}
exports.max = function max (array) {
  if (Array.isArray(array) && array.length) {
    let maxValue = array[0];
    for(let i = 1; i < array.length; i++) {
      let currentValue = array[i];
      if(currentValue > maxValue) {
        maxValue = currentValue;
      }
    }
    return maxValue;
  } else {
    return 0; 
  } 
}

exports.avg = function avg (array) {
  if (Array.isArray(array) && array.length) {
    let result = 0;
    for(let num in array) {
      result += array[num];
    }
    return result / array.length;
  } else {
    return 0; 
  } 
}