/* ---------------------------------------------------------------------- */
/* Data Types                                                             */
/* ---------------------------------------------------------------------- */


/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
console.log(typeof null)

// 2. 값이 할당되지 않은 상태
console.log(typeof undefined)

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
console.log(typeof 'LMAO')

// 4. 정수, 부동 소수점 숫자(길이 제약)
console.log(typeof 123)

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
console.log(typeof 123n)

// 6. 참(true, yes) 또는 거짓(false, no)
console.log(typeof true)

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
console.log(typeof {})

// 8. 고유한 식별자(unique identifier)
console.log(typeof Symbol("a"))

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류




// Object
const user = {
  name: 'tiger',
  age: 32,
}


// Array
const list = [10, 100, 1000, 1, 2, 3]

// function
function sum(x, y) {
  return x + y
}

console.log(sum(1, 12));


function 붕어빵틀(재료) {
  return `이것은 ${재료} 붕어빵 입니다.`
}

console.log(붕어빵틀('슈크림'));

// this
