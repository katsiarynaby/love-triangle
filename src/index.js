/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
var triangle = 0;

for (i=0; i < preferences.length; i++) {
  let n = i+1;
  let k = preferences[n-1];
  let m = preferences[k-1];
  let f = preferences[m-1];

  if ((n==f) && (n!==k) && (n!==m) && (k!==m)) {
    triangle++;
  }
};

return triangle/3;


};
