function removeOddSum(array, key1, key2) {

result = array.slice(0);
  for (i = 0 ; i < array.length ; i++) {
    if ((array[i][key1] + array[i][key2]) % 2 !==0) {
      result.splice(array.indexOf(result[i]), 1);
    }
  }
  return result
}

module.exports = removeOddSum;
