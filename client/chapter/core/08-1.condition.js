/* ---------------------------------------------------------------------- */
/* Condition                                                              */
/* ---------------------------------------------------------------------- */

const num = parseInt(prompt("숫자를 입력해주세요", 0), 10);
if (num > 0) {
      alert(1); }
    else if (num < 0) {
      alert(-1); }
    else if (num === 0) { 
      alert(0); 
  }

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
let didWatchMovie = prompt('너 영화봤니?', 'yes');

if(didWatchMovie=='yes') {
  alert('알았어')
} else {
  
}

// 영화 볼거니?
let goingToWatchMovie =  prompt("보셨나요? 그 띵작을?");

if(goingToWatchMovie=='yes') {
  alert('영잘알');
} else if (goingToWatchMovie=='no') {
  alert('영알못');
} else {'말 돌리지 말고 똑바른 값을 얘기하거라'}




// if 문(statement)

// else 절(caluse)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식

