---
sidebar_position: 10
---

## 비동기 작업의 이해

**작업을 동기적으로 처리하는 경우**

- 요청이 끝날 때까지 기다리는 동안 중지 상태가 되기 때문에 다른 작업을 할 수 없음
- 요청이 끝나야 그다음 예정된 작업을 할 수 있음

**작업을 비동기적으로 처리하는 경우**

- 웹 애플리케이션이 멈추지 않기 때문에 동시에 여러 가지 요청을 처리할 수 있고, 기다리는 과정에서 다른 함수도 호출할 수 있음

**서버 API를 호출하는 것 외의 작업을 비동기로 처리하는 경우**

- `setTimeout` 함수를 사용하여 특정 작업을 예약할 때

```jsx
function printMe() {
  console.log("Hello World!");
}
setTimeout(printMe, 3000);
console.log("대기 중...");
```

- `setTimeout`이 사용되는 시점에서 코드가 3초 동안 멈추는 것이 아니라, 코드가 위부터 아래까지 다 호출되고 3초 뒤에 지정해준 작업이 호출되고 있음
- 비동기 작업을 할 때 가장 흔히 사용하는 방법 : 콜백 함수를 사용하는 방법
  - 위 코드에서 `setTimeout`함수의 인자로 `printMe`함수를 전달해주고 있는데, 이런 함수를 콜백 함수라고 부름

### 콜백 함수

- 파라미터 값이 주어지면 1초 뒤에 10을 더해서 반환하는 함수
- 해당 함수가 처리된 직후 어떠한 작업을 하고 싶다면 아래와 같이 콜백 함수를 사용해서 작업함

```jsx
function increase(number, callback) {
  setTimeout(() => {
    const result = number + 10;
    if (callback) {
      callback(result);
    }
  }, 1000);
}

increase(0, (result) => {
  console.log(result);
});
```

- 1초에 걸쳐서 10, 20, 30, 40과 같은 형태로 여러 번 순차적으로 처리하고 싶으면 콜백 함수를 중첩하여 구현할 수 있음

```jsx
function increase(number, callback) {
  setTimeout(() => {
    const result = number + 10;
    if (callback) {
      callback(result);
    }
  }, 1000);
}

console.log("작업 시작");
increase(0, (result) => {
  console.log(result);
  increase(result, (result) => {
    console.log(result);
    increase(result, (result) => {
      console.log(result);
      increase(result, (result) => {
        console.log(result);
        console.log("작업 완료");
      });
    });
  });
});
```

- 위와 같이 콜백 안에 콜백을 넣어서 구현할 수 있지만 코드의 가독성이 나빠짐
- 이러한 코드를 ‘콜백 지옥’이라고 부르며, 지양해야 할 형태의 코드임

### Promise

- 콜백 지옥 같은 코드가 형성되지 않게 하는 방안으로 ES6에서 도입된 기능

```jsx
function increase(number) {
  const promise = new Promise((resolve, reject) => {
    // resolve는 성공, reject는 실패
    setTimeout(() => {
      const result = number + 10;
      if (result > 50) {
        const e = new Error("NumberTooBig");
        return reject(e);
      }
      resolve(result); // number 값에 +10 후 성공 처리
    }, 1000);
  });
  return promise;
}

increase(0)
  .then((number) => {
    // Promise에서 resolve된 값은 .then을 통해 받아 올 수 있음
    console.log(number);
    return increase(number); // Promise를 리턴하면
  })
  .then((number) => {
    // 또 .then으로 처리 가능
    console.log(number);
    return increase(number);
  })
  .then((number) => {
    console.log(number);
    return increase(number);
  })
  .then((number) => {
    console.log(number);
    return increase(number);
  })
  .then((number) => {
    console.log(number);
    return increase(number);
  })
  .catch((e) => {
    // 도중에 에러가 발생한다면 .catch를 통해 알 수 있음
    console.log(e);
  });
```

- 여러 작업을 연달아 처리한다고 해서 함수를 여러 번 감싸는 것이 아니라 `.then`을 사용하여 그다음 작업을 설정하기 때문에 콜백 지옥이 형성되지 않음

### async/await

- Promise를 더욱 쉽게 사용할 수 있도록 해 주는 ES2017(ES8) 문법임
- 이 문법을 사용하려면 함수의 앞부분에 `async`키워드를 추가하고, 해당 함수 내부에서 Promise의 앞부분에 `await` 키워드를 사용하면 됨
  - 이렇게 하면 Promise가 끝날 때 까지 기다린 후 결과 값을 특정 변수에 담을 수 있음

```jsx
function increase(number) {
  const promise = new Promise((resolve, reject) => {
    // resolve는 성공, reject는 실패
    setTimeout(() => {
      const result = number + 10;
      if (result > 50) {
        const e = new Error("NumberTooBig");
        return reject(e);
      }
      resolve(result); // number 값에 +10 후 성공 처리
    }, 1000);
  });
  return promise;
}

async function runTasks() {
  try {
    // try/catch 구문을 사용하여 에러를 처리합니다.
    let result = await increase(0);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}
```
