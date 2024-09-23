---
sidebar_position: 5
---

## ref는 어떤 상황에서 사용해야 할까?

- ref : 레퍼런스
- DOM을 꼭 직접적으로 건드려야 할 때

### 예제 컴포넌트

```jsx
// ValidationSample.js
import { Component } from "react";
import "./ValidationSample.css";

class ValidationSample extends Component {
  state = {
    password: "",
    clicked: false,
    validated: false,
  };

  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === "0000",
    });
  };

  render() {
    return (
      <div>
        <input
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? "success"
                : "failure"
              : ""
          }
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}

export default ValidationSample;
```

### DOM을 꼭 사용해야 하는 상황

- 특정 input에 포커스 주기, 스크롤 박스 조작하기, Canvas 요소에 그림 그리기 등의 상황을 위해 ref를 사용함

## ref 사용

### 콜백 함수를 통한 ref 설정

- ref를 달고자 하는 요소에 ref라는 콜백 함수를 props로 전달해 주면 됨

```jsx
<input
  ref={(ref) => {
    this.input = ref;
  }}
/>
```

- 위와 같이 하면 앞으로 this.input은 input 요소의 DOM을 가리키고 ref의 이름은 원하는 것으로 자유롭게 지정할 수 있음

### 예제 코드 수정

- 콜백 함수를 사용하여 input 컴포넌트에 ref를 달았음
- onClick 이벤트가 발생할 때 input에 포커스를 주도록 수정함

```jsx
// ValidationSample.js
import { Component } from "react";
import "./ValidationSample.css";

class ValidationSample extends Component {
  state = {
    password: "",
    clicked: false,
    validated: false,
  };

  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === "0000",
    });
    this.input.focus();
  };

  render() {
    return (
      <div>
        <input
          ref={(ref) => (this.input = ref)}
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? "success"
                : "failure"
              : ""
          }
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}

export default ValidationSample;
```

## 컴포넌트에 ref 달기

- 이 방법은 컴포넌트 내부에 있는 DOM을 컴포넌트 외부에서 사용할 때 사용함
- 컴포넌트에 ref를 다는 방법은 DOM에 ref를 다는 방법과 동일함

### 사용법

```jsx
<MyComponent
  ref={(ref) => {
    this.myComponent = ref;
  }}
/>
```

- 위와 같이 작성하면 MyComponent 내부의 메서드 및 멤버 변수에도 접근할 수 있음 (내부의 ref에도 접근할 수 있음)

### 컴포넌트 파일 생성

- 스크롤 박스가 있는 컴포넌트를 만들고 스크롤바를 아래로 내리는 작업을 부모 컴포넌트에서 실행하는 코드

```jsx
// ScrollBox.js
import { Component } from "react";

class ScrollBox extends Component {
  render() {
    const style = {
      border: "1px solid black",
      height: "300px",
      width: "300px",
      overflow: "auto",
      position: "relative",
    };

    const innerStyle = {
      width: "100%",
      height: "650px",
      background: "linear-gradient(white, black)",
    };

    return (
      <div
        style={style}
        ref={(ref) => {
          this.box = ref;
        }}
      >
        <div style={innerStyle} />
      </div>
    );
  }
}

export default ScrollBox;
```

### 컴포넌트에 메서드 생성

- 자바스크립트로 스크롤을 내릴 때는 DOM 노드가 가진 값을 사용함
  - scrollTop : 세로 스크롤바 위치 (0 ~ 350)
  - scrollHeight : 스크롤이 있는 박스 안의 div 높이 (650)
  - clientHeight : 스크롤이 있는 박스의 높이 (300)
- 스크롤바를 맨 아래쪽으로 내리려면 scrollHeight에서 clientHeight를 빼면 됨

### 예제 코드 수정

- scrollToBottom 함수 추가

```jsx
// ScrollBox.js
import { Component } from "react";

class ScrollBox extends Component {
  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box; // 구조 분해 할당 기법
    this.box.scrollTop = scrollHeight - clientHeight;
  };

  render() {
    const style = {
      border: "1px solid black",
      height: "300px",
      width: "300px",
      overflow: "auto",
      position: "relative",
    };

    const innerStyle = {
      width: "100%",
      height: "650px",
      background: "linear-gradient(white, black)",
    };

    return (
      <div
        style={style}
        ref={(ref) => {
          this.box = ref;
        }}
      >
        <div style={innerStyle} />
      </div>
    );
  }
}

export default ScrollBox;
```

### 컴포넌트에 ref 달고 내부 메서드 사용

- ScrollBox 컴포넌트에 ref를 달아서 내부 메서드를 사용할 수 있게 함

```jsx
// App.js
import { Component } from "react";
import ScrollBox from "./prac05/ScrollBox";

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => (this.ScrollBox = ref)} />
        <button onClick={() => this.ScrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
      </div>
    );
    // return <ValidationSample />;
  }
}

export default App;
```

## 정리

- 컴포넌트 내부에서 DOM에 직접 접근해야 할 때 ref를 사용함
  - ref를 사용하지 않고도 원하는 기능을 구현할 수 있는지 반드시 고려한 후에 활용해야 함
- 서로 다른 컴포넌트끼리 데이터를 교류할 때 ref를 사용하면 잘못된 것임 (리액트 사상에 어긋난 설계)
  - 앱 규모가 커지면 구조가 꼬여 유지 보수가 불가능해짐
