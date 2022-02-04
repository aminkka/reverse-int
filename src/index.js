module.exports = function reverse (n) {
  const nAbs = Math.abs(n);
  const array = nAbs.toString().split('');
  const reverseArray = array.reverse();
  const reverseStr = reverseArray.join('');
  const reverseNum = parseInt(reverseStr);
  return reverseNum;
}