// ex 10-03
var person = {
  // JSON 표기법
  // 키 : 값
  name: "Lee",
  age: 20,
};

// ex 10-04
var person = {
  firstName: "Ung-mo", // 식별자 네이밍 준수
  "last-name": "Lee", // 식별자 네이밍 준수하지 않을 때
};

console.log(person); // { firstName: 'Ung-mo', 'last-name': 'Lee' }

// ex 10-05
var obj = {};
var key = "hello";
//프로퍼티 키 동적 생성 (ES5)
obj[key] = "worlds";

// 계산된 프로퍼티 이름 (ES6)
var obj = { [key]: "world " };

console.log(obj); // { hello: 'world' }

// ex 10- 07,08,09
// 빈 문자열도 프로퍼티 키로 사용할 수 있다
var foo = {
  "": "",
};
console.log(foo); //{ '': '' }

// 프로퍼티 키로 숫자 리터럴을 사용하면 따옴표는 붙지 않지만, 내부적으로는 문자열로 변환
var foo = {
  0: 1,
  1: 2,
  2: 3,
};
console.log(foo); // { '0': 1, '1': 2, '2': 3 }

//예약어를 프로퍼티 키로 사용가능 (권장 X)
var foo = {
  var: "",
  function: "",
};

console.log(foo); // {var: '', function: ''}

// 프로퍼티 덮어쓰기
var foo = {
  name: "Lee",
  name: "Kim",
};

console.log(foo); // { name: 'Kim' }
