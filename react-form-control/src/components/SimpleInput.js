import Input from './UI/Input';

import useInput from '../hooks/use-input-example';

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChageHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== '');

  const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChageHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => emailFormat.test(value));

  let formIsValid = false;

  formIsValid = enteredNameIsValid && enteredEmailIsValid && true;

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid && !enteredEmailIsValid) {
      return;
    }

    console.log('enteredName', enteredName);
    console.log('enteredEmail', enteredEmail);
    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameHasError
    ? 'form-control invalid'
    : 'form-control';

  const emailInputClasses = emailHasError
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <Input
        className={nameInputClasses}
        id="name"
        type="text"
        subTitle="Name"
        onChange={nameChageHandler}
        onBlur={nameBlurHandler}
        value={enteredName}
        isInValid={nameHasError}
        errorText="Name must not be empty."
      />
      <Input
        className={emailInputClasses}
        id="email"
        type="email"
        subTitle="Email"
        onChange={emailChageHandler}
        onBlur={emailBlurHandler}
        value={enteredEmail}
        isInValid={emailHasError}
        errorText="Please enter a valid email"
      />
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
