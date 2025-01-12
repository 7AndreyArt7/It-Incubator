function add(n) {
    return function (m) {
      return n+m;
    }
  };
  

  const array = [true, true, false];
const op = 'AND';
function logicalCalc(array, op){
   var result = array[0];
   for(var i = 1; i < array.length; i++){
      if(op == "AND"){
         result = result && array[i];
      }
      if(op == "OR"){
         result = result || array[i];
      }
      if(op == "XOR"){
         result = result != array[i];
      }
   }
   return result;
}
console.log(logicalCalc(array, op));




let arr1 = [1, 2, 2, 2, 3];
let arr2 = [2];

function arrayDiff(a, b) {
    let result = []
    for (let i = 0; i < a.length; i++) {
        if (b.indexOf(a[i]) === -1) {
            result.push(a[i])
        }
    }
    return result;
}
console.log(arrayDiff(arr1, arr2))



function createPhoneNumber(numbers) {
  if (numbers.length !== 10) {
      return "Invalid input.";
  }
  let firstPart = numbers.slice(0, 3).join('');
  let secondPart = numbers.slice(3, 6).join('');
  let thirdPart = numbers.slice(6).join('');

  const phoneNumber = `(${firstPart}) ${secondPart}-${thirdPart}`;

  return phoneNumber;
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));


function maskify(cc) {
   return cc.split("").map((x,i) => (i<cc.length-4)?x="#":x).join("");
}


function solution(str){
   var arr = str.split('')
   var res = []

   for(let i = 0; i<arr.length; i+=2){
     if(arr[i+1]) res.push(arr[i]+arr[i+1])
     else res.push(arr[i]+'_')
   }

  return res
}



