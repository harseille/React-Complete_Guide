import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    /**
     * 기존 상태를 바꾸지 않는다. Redux toolkit은 내부적으로 immer라는 패키지를 사용하는데
     * 코드를 감지하고 자동으로 원래 상태를 복제한다.
     * 모든 상태를 변경할 수 없게 유지하고, 저희가 변경한 상태는 변하지 않도록 오버라이드 한다.
     * 그리해여 직접 코드를 복사할 필요가 없도 불변성을 신경 쓸 필요가 없다.
     */
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
