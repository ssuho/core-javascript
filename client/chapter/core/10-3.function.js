/* ---------------------------------------------------------------------- */
/* Functions → Arrow                                                      */
/* ---------------------------------------------------------------------- */


const calculateTotal = function(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

console.log(resultX);
console.log(resultY);
console.log(resultZ);


// 함수 선언 → 화살표 함수 (표현)식
let calcAllMoney = (moneyA, moneyB, moneyC, moneyD) => moneyA + moneyB + moneyC + moneyD;


// 화살표 함수와 this
function normalFunction(){
  console.log('일반함수 : ' , this)
}

const arrowFunction(){
  console.log('화살표 함수 : ', this)
}

normalFunction()
arrowFunction()

const user = {
  name: 'tiger',
  age: 32,
  address: '서울시 동작구 면목동',
  grades: [99, 90, 100],
  totalGrades: function(){
    console.log(this);
  }
}

user.totalGrades()


/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow; 

// repeat(text: string, repeatCount: number): string;
let repeat; 