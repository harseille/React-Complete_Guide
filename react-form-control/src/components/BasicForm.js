import useInput from '../hooks/use-input';

const BasicForm = (props) => {
  const {
    enteredValue: enteredFirstName,
    changeInputValueHandler: changeFirstNameValueHandler,
    blurInputHandler: blurFirstNameHandler,
    isInValid: isFirstNameInValid,
    hasError: hasFirstNameError,
    reset: resetFirstName,
  } = useInput((value) => value.trim() !== '');
  const {
    enteredValue: enteredLastName,
    changeInputValueHandler: changeLastNameValueHandler,
    blurInputHandler: blurLastNameHandler,
    isInValid: isLastNameInValid,
    hasError: hasLastNameError,
    reset: resetLastName,
  } = useInput((value) => value.trim() !== '');

  const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const {
    enteredValue: enteredEmail,
    changeInputValueHandler: changeEmailValueHandler,
    blurInputHandler: blurEmailHandler,
    hasError: hasEamailError,
    isInValid: isEmailInValid,
    reset: resetEmail,
  } = useInput((value) => emailFormat.test(value));

  const isFormActive =
    !hasFirstNameError && !hasLastNameError && !hasEamailError && true;

  const submitFormHandler = (event) => {
    event.preventDefault();

    if (!isFormActive) {
      return;
    }

    console.log('[Submit]' + enteredFirstName, enteredLastName, enteredEmail);

    resetFirstName();
    resetLastName();
    resetEmail();
  };

  const firstNameInputClasses = isFirstNameInValid
    ? 'form-control invalid'
    : 'form-control';

  const lastNameInputClasses = isLastNameInValid
    ? 'form-control invalid'
    : 'form-control';

  const emailInputClasses = isEmailInValid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={submitFormHandler}>
      <div className="control-group">
        <div className={firstNameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enteredFirstName}
            onChange={changeFirstNameValueHandler}
            onBlur={blurFirstNameHandler}
          />
          {isFirstNameInValid && (
            <p className="error-text">Please Check Input</p>
          )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={enteredLastName}
            onChange={changeLastNameValueHandler}
            onBlur={blurLastNameHandler}
          />
          {isLastNameInValid && (
            <p className="error-text">Please Check Input</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="email"
          id="name"
          value={enteredEmail}
          onChange={changeEmailValueHandler}
          onBlur={blurEmailHandler}
        />
        {isEmailInValid && <p className="error-text">Please Check Input</p>}
      </div>
      <div className="form-actions">
        <button disabled={!isFormActive}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
