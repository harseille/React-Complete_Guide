import { useReducer } from 'react';

const initialInputState = {
  value: '',
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === 'INPUT') {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === 'BLUR') {
    return { isTouched: true, value: state.value };
  }
  if (action.type === 'RESET') {
    return initialInputState;
  }
  return initialInputState;
};

const useInput = (validateInput) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const hasError = !validateInput(inputState.value);
  const isInValid = hasError && inputState.isTouched;

  const changeInputValueHandler = (event) => {
    dispatch({ type: 'INPUT', value: event.target.value });
  };

  const blurInputHandler = (event) => {
    dispatch({ type: 'BLUR' });
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  return {
    enteredValue: inputState.value,
    changeInputValueHandler,
    blurInputHandler,
    hasError,
    isInValid,
    reset,
  };
};
export default useInput;
