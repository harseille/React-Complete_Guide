# Fragments, Portals, Refs

practice-project-1 코드 기준으로 수업

# Fragments

clean한 코드를 만들어준다.

### JSX의 한계

루트 수준에서 JSX 요소들이 인접해있으면 오류가 발행 (반환 되는 형제 요소들이 여러개면 안된다. 오직 1개만)
JS의 리턴 값은 하나여야 하기 때문에

### `<div>` Soup 문제

wrapping을 하기위해 많은 `<div>`가 중첩되는 현상
불필요한 많은 HTML 요소를 렌더링하게 되고,
css 스타일링에도 영향을 줄 수 있으므로 문제가 된다.

### Wrapper 컴포넌트 추가

약간의 속임수를 사용해서 `<div>` Soup 문제를 해결
그러나 우리가 직접 만들필요는 없다. React가 제공
그러므로 보통 생성하지 않는다

`<React.Fragment></React.Fragment>`, `<></>`: JSX에서 JS의 Fragment처럼 작동

## Portals

Fragment처럼 더 간결한 코드를 작성하는데 도움을 준다.

우리가 만든 모달창은 시멘틱하지 않다
-> 페이지 위에 표시되는 모달창은 오버레이이기 때문에 모든 것 위에 있다.
HTML 코드 안에 중첩되어 있다면, 스타일 상으로는 작동할 지는 몰라도 시멘틱하지 않은 좋은 코드 구조가 아니다.
그러므로 스타일링이나 접근성 관점에서 문제가 될 수 있다.

이런 문제는 모달 뿐 아니라 모든 오버레이 관련 컴포넌트에서 일어날 수 있다.

### portal의 역할

렌더링된 HTML 내용을 다른위치로 이동시키는 기능

### portal을 사용하는 이유

스타일링이나 접근성 관점에서 문제를 해결하기 위해 문서의 상단으로 이동시킨다.

### portal을 사용하기 위해 필요한 두가지

1. 컴포넌트를 이동시킬 장소
2. 컴포넌트에게 그 곳에 포탈을 가져가야한다는 알림

### ReactDOM.createPortal

```js
function createPortal(children: React.ReactNode, container: Element | DocumentFragment, key?: string | null | undefined): React.ReactPortal
```

```js
ReactDOM.createPortal(
  <Backdrop onClick={props.onConfirm} />,
  document.getElementById('backdrop-root')
);
```

## Ref (참조)

다른 DOM 요소에 접근해서 작업할 수 있게 해주는 것
ref를 사용해서 마지막에 렌더링되는 HTML 요소들과 다른 자바스크립트 코드 연결을 설정할 수 있다.

useRef로 ref를 생성하고 JSX코드에 연결한다.

리액트가 이 코드에 처음 도달해서 렌더링 할 때 연결된 ref에 저장된 값을 인풋을 기반으로 렌더링된 네이티브 DOM 요소에 설정한다.
-> ref에 저장된 값이 실제 DOM요소가 될 것이다.

ref의 값은 항상 객체.
ref는 current 프로퍼티를 가지고 있다.
current 프로퍼티의 value는 실제 DOM 노드(어떤 이론적인 것이 아니다)이다.
따라서, DOM을 조작하거나 여러가지 작업을 할 수 있다. (그러나 조작하지 않는것이 좋음, DOM조작은 리액트로만 되어야한다)
단지 데이터를 읽는 용도로 적합

인풋 요소에 키를 입력할 때 마다 state를 업데이트 하는 것은 약간 과한 작업
-> DOM에 있는 값을 가져와서 읽는 것이 나은 방법일 수 있다.

## Uncontroled Component

Uncontroled Component: ref를 사용하여 DOM요소, 특히 입력 요소와 상호작용 하는 방법
-> 내부 state이기 때문에 **리액트에 의해 제어**되지 않는다.(네이티브 DOM 요소에 접근)

---

## 알게 된 것

react-dom: 모든 react 기능들(state 관리, 애드온, 베니크 인 등)을 웹 브라우저로 가져오기 리엑트를 사용
즉, 그것들이 DOM에서 작업들과 호환되도록 해주는 라이브러리

react 라이브러리 자체는 DOM이 있는 환경에서 실행하는지 react native 앱을 빌드하는데 사용하지는 신경을 쓰지 않는다.

react-dom은 브라우저에 대한 리액트용 어잽터의 일종
