# 10.3 프로퍼티

```javascript
//ex 10-03
var person = {
  // JSON 표기법
  // 키 : 값
  name: "Lee",
  age: 20,
};
```

**객체**는 `프로퍼티의 집합`이며, **프로퍼티**는 `키와 값`으로 구성

- 프로퍼티 키: 빈 문자열을 포함하는 모든 문자열 또는 심벌값
- 프로퍼티 값: 자바스크립트에서 사용할 수 있는 모든 값

```javascript
// ex 10-04
var person = {
  firstName: "Ung-mo", // 식별자 네이밍 준수
  "last-name": "Lee", // 식별자 네이밍 준수하지 않을 때
};

console.log(person); // { firstName: 'Ung-mo', 'last-name': 'Lee' }
```

- `식뱔자 네이밍 규칙`을 따르지 않는 이름에는 반드시 따옴표를 사용해야 한다.

### 프로퍼티 키 동적 생성

```javascript
// ex 10-05
var obj = {};
var key = "hello";
//프로퍼티 키 동적 생성 (ES5)
obj[key] = "worlds";

// 계산된 프로퍼티 이름 (ES6)
var obj = { [key]: "world " };

console.log(obj); // { hello: 'world' }
```

빈 문자열도 프로퍼티 키로 사용할 수 있다

```javascript
var foo = {
  "": "",
};
console.log(foo); //{ '': '' }
```

프로퍼티 키로 숫자 리터럴을 사용하면 따옴표는 붙지 않지만, 내부적으로는 문자열로 변환

```javascript
var foo = {
  0: 1,
  1: 2,
  2: 3,
};
console.log(foo); // { '0': 1, '1': 2, '2': 3 }
```

예약어를 프로퍼티 키로 사용가능 (권장 X)

```javascript
var foo = {
  var: "",
  function: "",
};

console.log(foo); // {var: '', function: ''}
```

프로퍼티 덮어쓰기

```javascript
var foo = {
  name: "Lee",
  name: "Kim",
};

console.log(foo); // { name: 'Kim' }
```
