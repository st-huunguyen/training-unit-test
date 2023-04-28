export const checkIncrementArray = (array?: any) => {
  const isArray = Array.isArray(array);
  const isNumberArray = isArray && array?.every((item) => typeof item === 'number');
  if (!isArray || !isNumberArray || array.length <= 1) {
    return false;
  }
  return array?.every(function (item, index) {
    return index === 0 || item >= array[index - 1];
  });
};
