/* ---------------------------------------------------------------------- */
/* Array's Methods                                                        */
/* ---------------------------------------------------------------------- */

// Array.isArray
const arr = [10, 100, 1000, 10000]

function isArray(data) {
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase()
}

/* 요소 순환 -------------------------------------------------------------- */

// forEach

const user = {};

arr.forEach(function (item, index) {
  this[index] = item
},user);

/* 원형 파괴 -------------------------------------------------------------- */

// push
// pop
// unshift
// shift
// reverse
// splice
// sort

/* 새로운 배열 반환 --------------------------------------------------------- */

// concat
// slice
// map

arr.map((item) => {
 console.log(item);
})

/* 요소 포함 여부 확인 ------------------------------------------------------ */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 -------------------------------------------------------------- */

const users = [
  {id:1,name:'로운'},
  {id:2,name:'승택'},
  {id:3,name:'연주'},
]

// find

const find = users.find((item) => {
  return item.id < 5
})

console.log(find)

// findIndex

/* 요소 걸러내기 ----------------------------------------------------------- */

// filter



/* 요소별 리듀서(reducer) 실행 ---------------------------------------------- */

// reduce

const friends = [
  {
    name: '윤보라',
    age: 28,
    job: '작꼬져',
  },
  {
    name: '이로운',
    age: 23,
    job: '배고픈 개발자',
  },
  {
    name: '오승택',
    age: 21,
    job: '물음표살인마',
  }
];

let age = friends.reduce((acc, cur)=> {
  return acc + cur.age;
})

// reduceRight

/* string ←→ array 변환 ------------------------------------------------- */

// split
// join