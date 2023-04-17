export const checkIncrementArray = (array: number[]) => {
  const isArray = Array.isArray(array);
  const isNumberArray = array?.every((item) => isNaN(item) === false);
  if (!isArray || !isNumberArray || array.length === 0) {
    return false;
  } else {
    return array.every(function (item, index) {
      return index === 0 || item >= array[index - 1];
    });
  }
};
