/* ---------------------------------------------------------------------- */
/* Logical Operators                                                      */
/* ---------------------------------------------------------------------- */

// let age = prompt('몇살이에요?', '13');

/* if (age < 14) {
  alert('유치원으로 들어가세요');
} else if ( age >= 14 && 90 >= age) {
  alert('환영해요');
} else {
  alert('박물관으로 들어가세요');
}
 */
//

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;

// 논리합(또는) 연산자
let AorB = a || b;

// 부정 연산자
let reverseValue = !value;


// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && {thisIsFalsy:false};

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2,3].length || {thisIsTruthy:true};



let userName = prompt("Who's there?", "Admin");

if(userName === "Admin"){
  let pw = prompt('password?', "TheMaster");
  if (pw === "TheMaster") {
    alert('welcome')
  }
} else if (userName === null || userName === " ") {
  alert("I don't know");
} else {
  alert("zzz누굴속여");
}