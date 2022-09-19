# Effects, Reducers & Context

react-simple-login

## Side Effect와 useEffect

### Side Effect

react의 목적: UI 렌더링 & user의 동작에 반응하는 것
side effect: 렌더링을 제외한 애플리케이션에서 일어나는 다른 모른 것
일반적인 컴포넌트 평가의 밖에서 일어나는 일
ex) http request, storage에 저장하는 것, 키 입력을 듣고 입력된 데이터를 저장하는 것, 유효성검사

### useEffect

무언가(로드되는 컴포넌트, 업데이트 되는 입력값)에 대한 응답으로 실행되는 코드를 다루는데 도움

side effect를 처리하는 내장 hook

```js
useEffect(()=>{...}, [dependencies]);
```

첫 번쨰 인수: 모든 컴포넌트 평가 후에 실행되어야 하는 함수
두 번째 인수: 의존성 배열

의존성이 변경 될 때마다 첫 번쨰 함수가 다시 실행된다.

재평가 후에 실행?
-> 컴포넌트 함수가 실행된 후에 실행, state를 업데이트하면 컴포넌트가 다시 실행,
그러나 모든 컴포넌트 평가 후에 useEffect가 실행되는 것은 아님
-> 의존성이 변경된 경우에만 실행
ex) 앱이 실행되었을 때(의존성이 없는 경우에서 초기 값으로 변경), 특정 데이터(state, prop)이 변경 되었을 때 로직을 다시 실행하는 경우

### 의존성으로 추가할 항목과 추가하지 않을 항목

기본적으로 effect함수에서 사용하는 모든것을 종속성으로 추가해야한다.
그러나 몇 가지 에외

1. 상태 업테이트 함수를 추가할 필요가 없다. -> react에서 해당 함수가 절대 변경되지 않도록 보장
2. 내장 API 또는 함수를 추가할 필요가 없다. -> fetch(), localStorage 같은 브라우저 API/전역 기능은 React 구성 요소 렌더링 주기외 관련이 없어 변경되지 않는다.
3. 변수나 함수를 추가할 필요가 없다. 함수 또는 변수도 구성 요소 함수 내부에서 생성되지 않으므로 변경해도 구성 요소에 영향을 주지 않는다.

effect 함수에서 사용하는 모든 것들을 추가해야 한다. 구성 요소(또는 일부 상위 구성요소)가 다시 렌더링 되어 이러한 "것들"이 변경될 수 있는 경우. 그렇기 때문에 컴포넌트 함수에 정의된 변수나 상태, 컴포넌트 함수에 정의된 props 또는 함수는 종속성으로 추가되어야 한다.

다음은 위에서 언급한 시나리오를 더 명확히 하기 위해 구성된 더미 예입니다.

```js
import { useEffect, useState } from 'react';

let myTimer;

const MyComponent = (props) => {
  const [timerIsActive, setTimerIsActive] = useState(false);

  const { timerDuration } = props; // using destructuring to pull out specific props values

  useEffect(() => {
    if (!timerIsActive) {
      setTimerIsActive(true);
      myTimer = setTimeout(() => {
        setTimerIsActive(false);
      }, timerDuration);
    }
  }, [timerIsActive, timerDuration]);
};
```

이 예에서:

timerIsActive 는 종속성으로 추가되었습니다. 왜냐하면 구성 요소가 변경될 때 변경될 수 있는 구성 요소 상태이기 때문이죠(예: 상태가 업데이트되었기 때문에)

timerDuration 은 종속성으로 추가되었습니다. 왜냐하면 해당 구성 요소의 prop 값이기 때문입니다 - 따라서 상위 구성 요소가 해당 값을 변경하면 변경될 수 있습니다(이 MyComponent 구성 요소도 다시 렌더링되도록 함).

setTimerIsActive 는 종속성으로 추가되지 않습니다. 왜냐하면예외 조건이기 때문입니다: 상태 업데이트 기능을 추가할 수 있지만 React는 기능 자체가 절대 변경되지 않음을 보장하므로 추가할 필요가 없습니다.

myTimer 는 종속성으로 추가되지 않습니다. 왜냐하면 그것은 구성 요소 내부 변수가 아니기 때문이죠. (즉, 어떤 상태나 prop 값이 아님) - 구성 요소 외부에서 정의되고 이를 변경합니다(어디에서든). 구성 요소가 다시 평가되도록 하지 않습니다.

setTimeout 은 종속성으로 추가되지 않습니다 왜냐하면 그것은 내장 API이기 때문입니다. (브라우저에 내장) - React 및 구성 요소와 독립적이며 변경되지 않습니다.

### clean up function

useEffect 함수가 실행될때마다(처음 제외) 클린업 함수가 실행
effect를 특정한 컴포넌트가 DOM에서 unmount 할 때 실행
즉, 모든 side effect 함수가 실행되기 전(처음 제외)과, 컴포넌트가 제거되기전에 실행

## Reducer를 활용하여 복잡한 state 관리하기

state 관리 useState와 약간 비슷. 그러나 더 많은 기능
여러 state들이 함께 속해 있는 state는 관리 하기 힘들다.

특별한 경우가 아니면 useState를 사용하는 것이 좋다

### useReducer가 사용 될 수 있는 경우

폼 유효성 state는 두 개의 다른 state(email, password)를 기반으로 state를 업데이트한다.
이전 state 기반으로 state를 업데이트 할때 함수 폼을 사용했었다.
그러나 지금과 같이 두 개의 다른 state 스냅샷에 의존하고 있을 경우 문제가 된다.
폼 유효성의 가장 최근 state 스냅샷을 바라보는 것이 아니다.

> 이렇게 함께 속하는 state가 있는 경우, 다른 state에 의존하여 state를 업데이트 하는 경우에 useRecuder를 사용해야한다.

useState를 사용하면 너무 번거로운 경우(너무 많은 일들을 처리)
관련 state 스냅샷들이 서로 독립적이고 같이 업데이트가 잘 안되는 경우

### useReducer

```js
const [state, dispatchFn] = useReducer(reducerFn, initialState, initFn);
```

state: 최신 state 스냅샷
dispatchFn: state를 업데이트 해주는 함수 -> 새로운 state 값을 설정하는 것이 아니라 **액션을 디스패치한다**

reducerFn: 액션을 소비하는 함수 -> 최신 state 스냅샷을 자동으로 가져오는 함수
react가 reducerFn를 호출 -> 디스페치된 액션을 가져온다 -> 새로운 state를 반환
initialState, initFn: 초기 state, 초기 함수 설정

## 컨텍스트: 여러 개의 컴포넌트에 영향을 주는 state 관리

전역 state를 만들어 긴 props chain을 만들지 않고 state를 관련된 컴포넌트에 직접전달

공급 파트: JSX컴포넌트로 만들어 다른 컴포넌트를 감싼다.
리스닝 파트: 소비자 또는 react hook을 사용하여 리스닝

store 디렉토리를 만들어 관리

### Context의 한계

1. 컴포넌트 구성을 대체할 수 없다
   구성(configuration)을 하려면 props를 사용
   컴포넌트 혹은 전체 앱에서 state 관리(긴 props chain을 교체)를 하면 context 사용

2. 변경이 잦은 경우에는 적합하지 않다
   변경이 잦고 전역으로 상태를 관리하고 싶은경우 => 리덕스 사용

## Hooks의 규칙

use로 시작하는 함수

규칙1. 리액트 훅은 리액트 합수에서만 호출해야 한다.

- react component 함수
- custom Hooks

규칙2. 함수의 최상위 수준에서 호출해야한다.

- 중첩함수에서 호출하면 안된다.
- block 문에서 호출하면 안된다.

규칙3. useEffect는 참조하는 모든 항목을 의존성으로 useEffect 내부에 추가해야한다

## useImperativeHandle

컴포넌트 나 컴포넌트 내부에서 오는 기능들을 명령적으로 사용할 수 있게 해준다.

일반적인 부모 컴포넌트의 state를 통해 컴포넌트를 제어하지 않고 프로그래밍적으로 컴포넌트에서 무언가를 직접 호출하거나 조작해서 사용하게 해주는 기능

## forwordRef()

---

## 더 공부할 것

이 섹션은 다시 한 번 정독할 것
