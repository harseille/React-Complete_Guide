const redux = require('redux');

// 리듀서 함수는 2개의 입력즉, 2개의 파라미터를 받는다. => (old State, Dispatched Action)
// 그리고 새로운 상태 객체를 반환한다.

// 리듀서는 순수함수여야한다. => 항상 새로운 객체를 리턴해야하기 때문에. 즉, 동일한 입력값을 넣으면 동일한 출력이 산출되어야 한다.
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
    };
  }
};
// reducer Fn이 새로운 상태의 스냅샷을 뱉어내야한다.
// 초기 상태를 받아야하기 때문에 리듀서를 추가해야한다.
const store = redux.createStore(counterReducer); //저장소 생성

// 이 구독 함수는 상태가 변경될 때마다 트리거된다.
const counterSubscriber = () => {
  // getState()는 createStore에서 생성된 저장소에서 사용할 수 있는 메소드
  // 최신 상태의 스냅샷을 제송
  const latestStore = store.getState();
  console.log(latestStore);
};

store.subscribe(counterSubscriber);

// 새로운 액션 방생
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });
