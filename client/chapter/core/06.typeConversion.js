/* ---------------------------------------------------------------------- */
/* Type Conversion                                                        */
/* ---------------------------------------------------------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2022;

console.log(String(YEAR));

// undefined, null
let days = null;
console.log(String(undefined));
console.log(String(days));

// boolean
let isKind = true;
console.log(String(!isKind));
console.log(String(1 < 4));
console.log(String(1 > 4));


/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined
console.log(Number(undefined));

// null
console.log(Number(null));

// boolean
console.log(Number(true));

// string
console.log(Number('0'));
console.log('2' * 1);

// numeric string
let width = '320.28383px';
console.log(parseInt(width,10));

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean('0'));
console.log(Boolean(-Infinity));

// 위에 나열한 것 이외의 것들 