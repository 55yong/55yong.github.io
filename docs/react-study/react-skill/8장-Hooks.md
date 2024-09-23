---
sidebar_position: 8
---

## 개요

- 함수 컴포넌트에서도 상태 관리를 할 수 있는 useState, 렌더링 직후 작업을 설정하는 useEffect 등의 기능을 제공하여 기존의 함수 컴포넌트에서 할 수 없었던 다양한 작업을 할 수 있게 해 줌

## useState

- 가장 기본적인 Hook이며 함수 컴포넌트에서도 가변적인 상태를 지닐 수 있게 해줌

```jsx
// Counter.js
import { useState } from "react";

const Counter = () => {
  // useState 파라미터는 상태의 기본값
  // 배열의 첫 번째 원소는 상태 값, 두 번쨰 원소는 상태를 설정하는 함수
  const [value, setValue] = useState(0);

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{value}</b>입니다.
      </p>
      <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}>-1</button>
    </div>
  );
};

export default Counter;
```

### useState를 여러 번 사용하기

- 하나의 useState 함수는 하나의 상태 값만 관리함
- 컴포넌트에서 관리해야 할 상태가 여러 개라면 useState를 여러 번 사용하면 됨

```jsx
// Info.js
import { useState } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>이름 : </b> {name}
        </div>
        <div>
          <b>닉네임 : </b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
```

## useEffect

- 리액트 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook
- 클래스형 컴포넌트의 componentDidMount와 componentDidUpdate를 합친 형태로 봐도 무방함

```jsx
// Info.js
import { useState, useEffect } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  useEffect(() => {
    console.log("렌더링이 완료되었습니다!");
    console.log({
      name,
      nickname,
    });
  });

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>이름 : </b> {name}
        </div>
        <div>
          <b>닉네임 : </b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
```

- 개발자 도구를 확인해 보면 컴포넌트가 처음 나타났을 때 문구가 2번 출력됨
  - React.StrictMode가 적용된 개발 환경에서만 발생하는 현상으로, useEffect를 사용한 코드에 문제가 있는지 확인하기 위해 두 번 실행이 됨

### 마운트 될 때만 실행하고 싶을 때

- useEffect에서 설정한 함수를 컴포넌트가 화면에 맨 처음 렌더링될 때만 실행하고 업데이트 될 때는 실행하지 않으려면 함수의 두 번째 파라미터로 비어 있는 배열을 넣어주면 됨

```jsx
// Info.js -> useEffect
useEffect(() => {
  console.log("마운트 될 때만 실행됩니다.");
}, []);
```

### 특정 값이 업데이트 될 때만 실행하고 싶을 때

- 클래스형 컴포넌트의 경우

```jsx
componentDidUpdate(prevProps, prevState) {
	if(prevProps.value !== this.props.value) {
		doSomething();
	}
}
```

- useEffect에서는 두 번째 파라미터로 전달되는 배열 안에 검사하고 싶은 값을 넣어주면 됨

```jsx
// Info.js -> useEffect
useEffect(() => {
  console.log(name);
}, [name]);
```

- 배열 안에는 useState를 통해 관리하고 있는 상태를 넣어줘도 되고 props로 전달받은 값을 넣어줘도 됨
  - 대부분의 경우 useEffect를 사용할 때는 배열에 의존하는 값을 넣어줌
  - 빈 배열이나 의존 값이 들어있는 배열을 넣는 경우는 있어도 배열을 아예 생략하는 상황은 거의 없음

### 뒷정리하기

- useEffect는 기본적으로 렌더링되고 난 직후마다 실행되며 두 번째 파라미터 배열에 무엇을 넣는지에 따라 실행되는 조건이 달라짐
- 컴포넌트가 언마운트되기 전이나 업데이트 되기 직전에 어떠한 작업을 수행하고 싶다면 useEffect에서 뒷정리(cleanup) 함수를 반환해 주어야 함

```jsx
// Info.js -> useEffect
useEffect(() => {
  console.log("effect");
  console.log(name);
  return () => {
    console.log("cleanup");
    console.log(name);
  };
}, [name]);
```

```jsx
// App.js
import { useState } from "react";
import Info from "./prac08/Info";

const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "숨기기" : "보이기"}
      </button>
      <hr />
      {visible && <Info />}
    </div>
  );
};

export default App;
```

- 렌더링될 때마다 뒷정리 함수가 계속 나타나는 것을 확인할 수 있음
- 뒷정리 함수가 호출될 때는 업데이트되기 직전의 값을 보여줌
- 오직 언마운트될 때만 뒷정리 함수를 호출하고 싶다면 useEffect 함수의 두 번째 파라미터에 비어있는 배열을 넣으면 됨

```jsx
// Info.js -> useEffect
useEffect(() => {
  console.log("effect");
  return () => {
    console.log("cleanup");
  };
}, []);
```

## useReducer

- useState보다 더 다양한 컴포넌트 상황에 따라 다양한 상태를 다른 값으로 업데이트해 주고 싶을 때 사용하는 Hook
- 현재 상태, 업데이트를 위해 필요한 정보를 담은 액션 값을 전달받아 새로운 상태를 반환하는 함수
- 리듀서 함수에서 새로운 상태를 만들 때는 반드시 불변성을 지켜 주어야 함

```jsx
function reducer(state, action) {
	return { ... }; // 불변성을 지키면서 업데이트한 새로운 상태를 반환
}
```

### 카운터 구현하기

```jsx
// Counter.js
import { useReducer } from "react";

function reducer(state, action) {
  // action.type에 따라 다른 작업 수행
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      // 아무것도 해당되지 않을 때 기존 상태 반환
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b>입니다.
      </p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
    </div>
  );
};

export default Counter;
```

- useReducer의 첫 번째 파라미터에는 리듀서 함수를 넣고 두 번째 파라미터에는 해당 리듀서의 기본값을 넣어줌
- 이 Hook을 사용하면 state 값과 dispatch 함수를 받아옴
  - **state** : 현재 가리키고 있는 상태
  - **dispatch** : 액션을 발생시키는 함수
- **useReducer를 사용했을 때 가장 큰 장점** : 컴포넌트 업데이트 로직을 컴포넌트 바깥으로 빼낼 수 있음

### 인풋 상태 관리하기

- useRender를 사용해서 Info 컴포넌트의 인풋 상태 관리
- 기존에는 인풋이 여러 개여서 useState를 여러 번 사용했지만 useReducer를 사용하면 기존의 클래스형 컴포넌트에서 input 태그에 name 값을 할당하고 e.target.name을 참조하여 setState를 해 준 것과 유사하게 처리할 수 있음

```jsx
// Info.js
import { useReducer } from "react";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const Info = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    nickname: "",
  });

  const { name, nickname } = state;

  const onChange = (e) => {
    dispatch(e.target);
  };
  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름 : </b> {name}
        </div>
        <div>
          <b>닉네임 : </b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
```

- useReducer에서의 액션은 그 어떤 값도 사용 가능
- 이런 식으로 인풋을 관리하면 아무리 인풋의 개수가 많아져도 코드를 짧고 깔끔하게 유지할 수 있음

## useMemo

- useMemo를 사용하면 함수 컴포넌트 내부에서 발생하는 연산을 최적화할 수 있음

```jsx
// Average.js
import { useState } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산 중...");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  const onChange = (e) => {
    setNumber(e.target.value);
  };

  const onInsert = (e) => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
  };

  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b> {getAverage(list)}
      </div>
    </div>
  );
};

export default Average;
```

- 하지만 이 코드는 인풋 내용이 수정될 때도 getAverage 함수가 호출됨
- useMemo Hook을 사용하면 이러한 작업을 최소화할 수 있음
  - 렌더링하는 과정에서 특정 값이 바뀌었을 때만 연산을 실행하고, 원하는 값이 바뀌지 않았다면 이전에 연산했던 결과를 다시 사용하는 방식

```jsx
// Average.js
import { useState, useMemo } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산 중...");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  const onChange = (e) => {
    setNumber(e.target.value);
  };

  const onInsert = (e) => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
  };

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b> {avg}
      </div>
    </div>
  );
};

export default Average;
```

## useCallback

- useMemo와 상당히 비슷한 함수
- 렌더링 성능을 최적화해야 하는 상황에서 사용
- 이 Hook을 사용하면 만들어 놨던 함수를 재사용할 수 있음
- 방금 구현한 Average 컴포넌트의 경우 onChange와 onInsert 함수를 선언했는데, 이렇게 선언하면 컴포넌트가 리렌더링될 때마다 새로 만들어진 함수를 사용함
  - 대부분의 경우 이러한 방식은 문제없지만, 컴포넌트의 렌더링이 자주 발생하거나 렌더링해야 할 컴포넌트의 개수가 많아지면 최적화해 주는 것이 좋음

```jsx
// Average.js
import { useState, useMemo, useCallback } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산 중...");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []); // 컴포넌트가 처음 렌더링될 때만 함수 생성
  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
  }, [number, list]);

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b> {avg}
      </div>
    </div>
  );
};

export default Average;
```

- useCallback의 첫 파라미터에는 생성하고 싶은 함수를 넣고, 두 번째 파라미터에는 배열을 넣으면 됨
  - 이 배열에는 어떤 값이 바뀌었을 때 함수를 새로 생성해야 하는지 명시해야 함
- onChange처럼 비어 있는 배열을 넣게 되면 컴포넌트가 렌더링될 때 만들었던 함수를 계속해서 재사용하게 됨
- onInsert처럼 배열 안에 number와 list를 넣게 되면 인풋 내용이 바뀌거나 새로운 항목이 추가될 때 새로 만들어진 함수를 사용하게 됨
- 함수 내부에서 상태 값에 의존해야 할 때는 그 값을 반드시 두 번째 파라미터 안에 포함시켜 줘야 함

## useRef

- useRef Hook은 함수 컴포넌트에서 ref를 쉽게 사용할 수 있도록 해줌
- Average 컴포넌트에서 **등록**버튼을 눌렀을 때 포커스가 인풋 쪽으로 넘어가도록 설계

```jsx
// Average.js
import { useState, useMemo, useCallback, useRef } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산 중...");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const inputEl = useRef(null);

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []); // 컴포넌트가 처음 렌더링될 때만 함수 생성
  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
    inputEl.current.focus();
  }, [number, list]);

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b> {avg}
      </div>
    </div>
  );
};

export default Average;
```

### 로컬 변수 사용하기

- 컴포넌트를 로컬 변수로 사용해야 할 때도 useRef를 활용할 수 있음
- **로컬 변수** : 렌더링과 상관없이 바뀔 수 있는 값

```jsx
// 클래스형 컴포넌트 예시 코드
import { Component } from "react";

class MyComponent extends Component {
  id = 1;
  setId = (n) => {
    this.id = n;
  };
  printId = () => {
    console.log(this.id);
  };
  render() {
    return <div>MyComponent</div>;
  }
}

export default MyComponent;
```

```jsx
// 함수 컴포넌트 예시 코드
import { useRef } from "react";

const RefSample = () => {
  const id = useRef(1);
  const setId = (n) => {
    id.current = n;
  };
  const printId = () => {
    console.log(id.current);
  };
  return <div>RefSample</div>;
};

export default RefSample;
```

## 커스텀 Hooks 만들기

- 어떤 컴포넌트에서 비슷한 기능을 공유할 경우, 이를 커스텀 Hook으로 작성하여 로직을 재사용할 수 있음
- 기존의 Info 컴포넌트에서 여러 개의 인풋을 관리하기 위해 useReducer로 작성했던 로직을 useInputs라는 Hook으로 따로 분리하는 코드

```jsx
// useInputs.js
import { useReducer } from "react";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

export default function useInputs(initialForm) {
  const [state, dispatch] = useReducer(reducer, initialForm);

  const onChange = (e) => {
    dispatch(e.target);
  };
  return [state, onChange];
}
```

- 위 Hook을 Info 컴포넌트에서 사용

```jsx
// Info.js
import useInputs from "./useInputs";

const Info = () => {
  const [state, onChange] = useInputs({
    name: "",
    nickname: "",
  });
  const { name, nickname } = state;

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름 : </b> {name}
        </div>
        <div>
          <b>닉네임 : </b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
```

## 다른 Hooks

- 다른 개발자가 만든 Hooks도 라이브러리로 설치하여 사용할 수 있음
  - https://nikgraf.github.io/react-hooks
  - https://github.com/rehooks/awesome-react-hooks

## 정리

- 리액트에서 Hooks 패턴을 사용하면 클래스형 컴포넌트를 작성하지 않고도 대부분의 기능을 구현할 수 있음
  - 하지만 기존의 setState를 사용하는 방식이 잘못된 것은 아님 (useState나 useReducer를 통해 구현할 수 있어도)
- 기존의 클래스형 컴포넌트는 앞으로도 계속 지원될 예정이고, 유지 보수하고 있는 프로젝트에서 굳이 함수 컴포넌트와 Hooks를 사용하는 형태로 전환할 필요는 없음
- 하지만 새로 작성하는 컴포넌트의 경우 함수 컴포넌트와 Hooks를 사용할 것을 권장하고 있음
