import { useState } from "react";

export default function Login() {

  const[enteredValues, setEnteredValues] =  useState({
    email: '',
    password: ''
  })

  const[didEdit, setDidEdit] = useState({
    email: false,
    password: false
  })

  const emailInvalid = didEdit.email && !enteredValues.email.includes('@');

  function handeSubmit(event){
    event.preventDefault();
  }


  function handleInputChange(identifier, value){
    setEnteredValues((preValues) => ({
        ...preValues,
        [identifier]: value,
      
    }))
    setDidEdit((preValues) => ({
      ...preValues,
      [identifier]: false
    }))

  }
  function handleInputBlur(identifier){
    setDidEdit((prevValues) => ({
      ...prevValues,
      [identifier]: true
    }))
  }

  return (
    <form>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input 
            id="email" 
            type="email" 
            name="email" 
            onChange={(event) => handleInputChange("email", event.target.value)}
            onBlur={() => handleInputBlur('email')}
          />
          <div className="control-error">{emailInvalid && <p>Please Enter a valid email address</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" onChange={(event) => handleInputChange("password", event.target.value)} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button onClick={handeSubmit} className="button">Login</button>
      </p>
    </form>
  );
}
