import "./styles.css";

var lis = ['"cut":8', '"cut":0', '"cut":5'];
var lis2 = [
  '"normal","fontSize":"30"',
  '"normal","fontSize":"40"',
  '"normal","fontSize":"40"'
];
var lis0 = ['"type":"text"', '"type":"i-text"', '"type":"text"'];

console.log(lis);
console.log(lis2);

var del = [];
let resultList = lis0.filter(function (e, i) {
  if (e.indexOf("i-text") != -1) {
    del.push(i);
  }
});
console.log(del);
resultList = del.filter(function (e) {
  lis.splice(e, 1);
});
resultList = del.filter(function (e) {
  lis2.splice(e, 1);
});
console.log(lis);
console.log(lis2);
