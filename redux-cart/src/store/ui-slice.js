import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: { cartIsVisible: false, notification: null },
  reducers: {
    toggle(state) {
      // 변경하는 것 같이 보이지만 , 리덕스 툴킷은 이 코드를 캡처하고
      // 제 3의 라이브러리인 imer를 사용하여 이것이 실제로 기존 상태 개체를 조작하는 대신,
      // 새 상태 개체를 생산하는 일부 변경 불가능한 코드로 변환되도록 한다.
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiAction = uiSlice.actions;

export default uiSlice;
