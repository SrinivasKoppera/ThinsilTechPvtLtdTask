import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginImage from "../../Images/loginimage3.jpg";
import LoginLogo from "../../Images/loginlogo.jpg";
import "./index.css";

const Login = () => {
  const navigate = useNavigate();
  const [emailError, changeEmailError] = useState(false);
  const [passwordError, changePasswordError] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  useEffect(() => {
    if (localStorage.getItem("users") === null) {
      localStorage.setItem("users", JSON.stringify([]));
    }
  }, []);

  const onChangeUserName = () => {
    if (emailValue === "") {
      changeEmailError(true);
    } else {
      changeEmailError(false);
    }
  };
  const onChangePassword = () => {
    if (passwordValue === "") {
      changePasswordError(true);
    } else {
      changePasswordError(false);
    }
  };

  const onChangeUserNameValue = (event) => {
    setEmailValue(event.target.value);
  };

  const onChangePasswordValue = (event) => {
    setPasswordValue(event.target.value);
  };

  const onSubmitFormForLogin = (event) => {
    event.preventDefault();
    if (emailValue !== "" && passwordValue !== "") {
      let exits = false;
      let users = JSON.parse(localStorage.getItem("users"));
      let user = {};
      for (let i = 0; i < users.length; i++) {
        if (users[i].userEmail === emailValue) {
          exits = true;
          user = users[i];
        }
      }
      if (!exits) {
        alert("User Doesn't Exits");
      } else {
        if (user.userPassword === passwordValue) {
          localStorage.setItem("token", JSON.stringify(user));
          setEmailValue("");
          setPasswordValue("");
          navigate("/home");
        } else {
          alert("Password Doesn't Match");
        }
      }
    } else {
      onChangeUserName();
      onChangePassword();
    }
  };

  return (
    <div className="login-container">
      <div className="image-container">
        <img src={LoginImage} alt="loginImage" className="login-image" />
      </div>
      <div>
        <form className="login-form" onSubmit={onSubmitFormForLogin}>
          <img src={LoginLogo} alt="login-logo" className="login-logo-image" />
          <div className="login-inputs-container">
            <div className="login-input-box">
              <label htmlFor="email" className="login-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={emailValue}
                className="input-field"
                placeholder="Please Enter Email"
                onBlur={onChangeUserName}
                onChange={onChangeUserNameValue}
              />
              {emailError && (
                <span className="login-error">*Email is Required</span>
              )}
            </div>
            <div className="login-input-box">
              <label htmlFor="password" className="login-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={passwordValue}
                className="input-field"
                placeholder="Please Enter Password"
                onBlur={onChangePassword}
                onChange={onChangePasswordValue}
              />
              {passwordError && (
                <span className="login-error">*Password is Required</span>
              )}
            </div>
            <button className="login-button" type="submit">
              Login
            </button>
            <p className="login-description">
              You have no Account Please <Link to="/">Register here</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
