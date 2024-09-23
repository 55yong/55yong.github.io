---
sidebar_position: 6
---

## Create React App을 이용해서 리액트 설치하기

### 리액트 앱 설치 방법

```bash
npm create-react-app <폴더 이름>
yarn create react-app <폴더 이름>
```

### 과거 리액트 앱 설치 방법

- Webpack이나 Babel 같은 모듈을 설치 후 설정해야 리액트 앱을 시작할 수 있었음
- **Webpack :** 오픈 소스 자바스크립트 모듈 번들러, 여러 개로 나누어져 있는 파일들을 하나의 자바스크립트 코드로 압축하고 최적화하는 라이브러리
- **Webpack 장점**
  - 여러 파일의 자바스크립트 코드를 압축하여 최적화할 수 있기 때문에 로딩에 대한 네트워크 비용을 줄일 수 있음
  - 모듈 단위로 개발이 가능하여 가독성과 유지보수가 쉬움
- **Babel** : 최신 자바스크립트 문법을 지원하지 않는 브라우저를 위해 최신 자바스크립트 문법을 구형 브라우저에서도 구동할 수 있게 변환시켜주는 라이브러리

```jsx
// Babel Input: ES6(ES2015) arrow function
[1, 2, 3].map((n) => n + 1);

// Babel Output: ES5 equivalent
[1, 2, 3].map(function (n) {
  return n + 1;
});
```

### npx란?

- **npx** : 노드 패키지 실행을 도와주는 도구
- `create-react-app`이란 npm 레지스트리에 있는 패키지를 내가 지정한 폴더에서 실행하여 리액트를 설치해줌
