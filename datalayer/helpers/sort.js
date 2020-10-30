export default (array) => array.sort(function (a, b) {
  if (a.toLowerCase() < b.toLowerCase()) return -1;
  else if (a > b) return 1;
  return 0;
});
