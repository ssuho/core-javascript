/* ---------------------------------------------------------------------- */
/* Switch                                                                 */
/* ---------------------------------------------------------------------- */

const MORNING    = '아침',
      LUNCH      = '점심',
      DINNER     = '저녁',
      NIGHT      = '밤',
      LATE_NIGHT = '심야',
      DAWN       = '새벽';

/* let thisTime = prompt('밥묵자',"");

switch(thisTime) {
  case MORNING :
    alert('아침무야지');
    break;
  case LUNCH :
    alert('점심무야지');
    break;
  case DINNER :
    alert('저녁무야지');
    break;
  case NIGHT :
  case LATE_NIGHT :
    alert('야식무야지');
    break;
  case DAWN :
    alert('고마무라');
    break;
  default:
    alert('머라카노');
} */

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'


/* switch문 → if문 변환 --------------------------------------------------- */

let thisTime = prompt('밥묵자',"");

if(thisTime==="MORNING") {
  alert('아침무야지')
} else if (thisTime===LUNCH) {
  alert('점심무야지');
} else if (thisTime===DINNER) {
  alert('저녁무야지');
} else if (thisTime===NIGHT || thisTime===LATE_NIGHT) {
  alert('야식무야지');
} else if (thisTime===DAWN) {
  alert('고마무라');
} else {
  alert('머라카노');
}

/* switch vs. if -------------------------------------------------------- */

function getRandom(n) {
  return Math.round(Math.random() * n);
}

function getDay(dayValue) {
  switch (dayValue) {
    case 0:
      return "일";

    case 1:
      return "월";

    case 2:
      return "화";

    case 3:
      return "수";

    case 4:
      return "목";

    case 5:
      return "그으으으음";

    case 6:
      return "토토오오오오";
  }
}

let result = getDay(getRandom(6));
console.log(result);