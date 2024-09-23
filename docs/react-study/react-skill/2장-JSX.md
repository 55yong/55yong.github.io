---
sidebar_position: 2
---

## JSX란

- 자바스크립트의 확장 문법, XML과 비슷하게 생김
- 이런 형식의 코드는 브라우저에서 실행되기 전 코드가 번들링 되는 과정에서 **바벨**을 사용하여 일반 자바스크립트 형태의 코드로 변환됨

```jsx
// JSX 코드
function App() {
	return (
		<div>
			Hello <b>react</b>
		</div>
	);
}

// 위 코드가 아래 형식으로 변환됨
function App() {
	return React.createElement("div", null, "Hello ", React.createElement("b", null, "react"));
```

## JSX의 장점

### 보기 쉽고 익숙함

- HTML 코드를 작성하는 것과 비슷함

### 더욱 높은 활용도

- HTML 태그를 사용할 수 있고 앞으로 만들 컴포넌트도 JSX 안에서 작성할 수 있음

## JSX 문법

### 감싸인 요소

- 컴포넌트에 여러 요소가 있다면 반드시 부모 요소 하나로 감싸야 함
- 컴포넌트 내부는 하나의 DOM 트리 구조로 이루어져야 한다는 규칙이 있기 때문

```jsx
// 잘못된 코드
function App() {
	return (
		<h1>Hello</h1>
		<h2>World!</h2>
	)
}

export default App;

/* ------------------------------- */

// 부모 요소 하나에 의해 감싸져 있는 코드
function App() {
	return (
		<div>
			<h1>Hello</h1>
			<h2>World!</h2>
		</div>
	);
}

export default App;

/* ------------------------------- */

// 무조건 <div> 태그를 사용하지 않아도 됨
import { Fragment } from 'react';

function App() {
	return (
		// Fragment 태그는 <> </>와 같은 형태로 표현할 수 있음
		<Fragment>
			<h1>Hello</h1>
			<h2>World!</h2>
		</Fragment>
	);
}

export default App;
```

### 자바스크립트 표현

- JSX 내부에서 자바스크립트 표현식을 사용할 수 있음
- JSX 내부에서 코드를 `{ }`로 감싸면 됨

```jsx
function App() {
  const name = "리액트";
  return (
    <div>
      <h1>{name} Hello</h1>
      <h2>World!</h2>
    </div>
  );
}

export default App;
```

### if문 대신 조건부 연산자(삼항 연산자)

- JSX 내부의 자바스크립트 표현식에서 if문을 사용할 수 없음
  - JSX 밖에서 if문을 사용하여 사전에 값을 설정하거나 `{ }`안에 조건부 연산자를 사용하면 됨

```jsx
function App() {
  const name = "리액트";
  return (
    <div>
      {name === "리액트" ? <h1>리액트입니다.</h1> : <h2>리액트가 아닙니다.</h2>}
    </div>
  );
}

export default App;
```

### AND 연산자(&&)를 사용한 조건부 렌더링

- 특정 조건을 만족할 때 내용을 보여 주고, 만족하지 않을 때 아무것도 렌더링하지 않아야 하는 상황일 때 사용
- 리액트에서 false를 렌더링할 때는 null과 마찬가지로 아무것도 나타나지 않기 때문
  - 하지만 Falsy 값인 0은 예외적으로 화면에 나타남

```jsx
// 조건부 연산자를 이용한 방식
function App() {
	const name = 'asd';
	return <div>{name === '리액트' ? <h1>리액트입니다.</h1> : null}</div>
}

export default App;

// AND 연산자를 이용한 방식
function App() {
	const name = 'asd';
	return <div>{name === '리액트' && <h1>리액트입니다.</h1>}</div>
}

export default App;
```

### undefined를 렌더링하지 않기

- 함수에서 undefined만 반환하여 렌더링하는 상황을 만들면 안됨

```jsx
// 잘못된 코드
function App() {
	const name = undefined;
	return name;
}

export default App;

// undefined 방지
function App() {
	const name = undefined;
	return name || '값이 undefined입니다.';
}

export default App;
```

- 하지만 JSX 내부에서 undefined를 렌더링하는 것은 괜찮음

```jsx
// 가능한 코드
function App() {
	const name = undefined;
	return <div>{name}</div>;
}

export default App;

// 값이 undefined일 때 보여 주고 싶은 문구가 있을 때
function App() {
	const name = undefined;
	return <div>{name || '보여주고 싶은 문구'}</div>;
}

export default App;
```

### 인라인 스타일링

- DOM 요소에 스타일을 적용할 땐 문자열 형태로 넣는 것이 아니라 객체 형태로 넣어야 함
- `background-color`같이 `-`가 포함된 이름은 카멜표기법으로 작성해야 함

```jsx
function App() {
	const name = '리액트';
	const style = {
		backgroundColor: 'black';
		color: 'aqua';
		fontSize: '48px';
		fontWeight: 'bold';
		padding: 16;
	};
	return <div style={style}>{name}</div>;
}

export default App;
```

### class 대신 className

- HTML에서 CSS 클래스를 사용할 때는 `<div class=’myclass’></div>`와 같이 설정해야 하지만
- JSX에서는 `className`으로 설정해 줘야 함
- `class`라고 표기해도 스타일이 적용은 되지만 콘솔에서 경고가 나타남
  - 이전 버전에서는 오류가 발생했지만 리액트 v16부터는 `class`를 `className`으로 변환시켜 주고 경고를 띄움

```jsx
function App() {
  const name = "리액트";
  return <div className="react">{name}</div>;
}

export default App;
```

### 꼭 닫아야 하는 태그

- HTML에서는 `<br>`태그같이 닫지 않는 태그를 사용하지만 JSX에서는 오류가 발생함
- **self-closing 태그** : `<br></br>` 로 닫아줘도 되긴 하지만 별도의 내용이 들어가지 않는 경우에는 `<br />`과 같이 작성할 수도 있는 태그

```jsx
function App() {
  const name = "리액트";
  return (
    <>
      <div className="react">{name}</div>
      <input />
    </>
  );
}

export default App;
```

### 주석

- `{ /* */ }`과 같은 형식으로 적어줘야 함
