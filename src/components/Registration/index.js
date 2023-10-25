import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import RegistrationImage from "../../Images/registrationlmage.jpg";
import "./index.css";

const Registration = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [userEmail, setEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPhoneNumber, setUserPhoneNumber] = useState("");

  const [userNameError, setUserNameError] = useState(false);
  const [userEmailError, setUserEmailError] = useState(false);
  const [userPhoneNumberError, setUserPhoneNumberError] = useState(false);
  const [userPasswordError, setUserPasswordError] = useState(false);

  const onCallNameError = () => {
    if (userName === "") {
      setUserNameError(true);
    } else {
      setUserNameError(false);
    }
  };

  const onCallEmailError = () => {
    if (userEmail === "") {
      setUserEmailError(true);
    } else {
      setUserEmailError(false);
    }
  };

  const onCallPhoneNumberError = () => {
    if (userPhoneNumber === "") {
      setUserPhoneNumberError(true);
    } else {
      setUserPhoneNumberError(false);
    }
  };

  const onCallPasswordError = () => {
    if (userPassword === "") {
      setUserPasswordError(true);
    } else {
      setUserPasswordError(false);
    }
  };

  const onChangeName = (event) => {
    setUserName(event.target.value);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePhoneNumber = (event) => {
    setUserPhoneNumber(event.target.value);
  };

  const onChangePassword = (event) => {
    setUserPassword(event.target.value);
  };

  const formSubmission = (event) => {
    event.preventDefault();
    if (
      userName !== "" &&
      userEmail !== "" &&
      userPhoneNumber !== "" &&
      userPassword !== ""
    ) {
      const goToLogin = () => {
        navigate("/login");
      };
      let users = JSON.parse(localStorage.getItem("users"));
      let exits = false;
      for (let i = 0; i < users.length; i++) {
        if (users[i].userEmail === userEmail) {
          exits = true;
        }
      }
      if (!exits) {
        let newArray = [...users];
        newArray.push({ userName, userEmail, userPhoneNumber, userPassword });
        localStorage.setItem("users", JSON.stringify(newArray));
        setUserName("");
        setEmail("");
        setUserPassword("");
        setUserPhoneNumber("");
        alert("User Added Successfully");
        goToLogin();
      } else {
        alert("User Already Exits");
      }
    } else {
      onCallNameError();
      onCallEmailError();
      onCallPhoneNumberError();
      onCallPasswordError();
    }
  };

  useEffect(() => {
    if (localStorage.getItem("users") === null) {
      localStorage.setItem("users", JSON.stringify([]));
    }
  }, []);

  return (
    <div className="registration-container">
      <div className="image-container">
        <img
          src={RegistrationImage}
          alt="registrationImage"
          className="registration-image"
        />
      </div>
      <div>
        <form className="registration-form" onSubmit={formSubmission}>
          <h1 className="registration-heading">Registration</h1>
          <div className="inputs-container">
            <div className="input-box">
              <label htmlFor="name" className="registration-label">
                Name
              </label>
              <input
                type="text"
                value={userName}
                id="name"
                className="input-field"
                placeholder="Please Enter Name"
                onBlur={onCallNameError}
                onChange={onChangeName}
              />
              {userNameError && (
                <span className="registration-error">*Name is Required</span>
              )}
            </div>
            <div className="input-box">
              <label htmlFor="email" className="registration-label">
                Email
              </label>
              <input
                type="email"
                value={userEmail}
                id="email"
                className="input-field"
                placeholder="Please Enter Email"
                onBlur={onCallEmailError}
                onChange={onChangeEmail}
              />
              {userEmailError && (
                <span className="registration-error">*Email is Required</span>
              )}
            </div>
            <div className="input-box">
              <label htmlFor="phone" className="registration-label">
                Phone
              </label>
              <input
                type="text"
                value={userPhoneNumber}
                id="phone"
                className="input-field"
                placeholder="Please Enter Phone Number"
                onBlur={onCallPhoneNumberError}
                onChange={onChangePhoneNumber}
              />
              {userPhoneNumberError && (
                <span className="registration-error">
                  *Phone Number is Required
                </span>
              )}
            </div>
            <div className="input-box">
              <label htmlFor="password" className="registration-label">
                Password
              </label>
              <input
                type="password"
                value={userPassword}
                id="password"
                className="input-field"
                placeholder="Please Enter Password"
                onBlur={onCallPasswordError}
                onChange={onChangePassword}
              />
              {userPasswordError && (
                <span className="registration-error">
                  *Password is Required
                </span>
              )}
            </div>
            <button className="registration-button" type="submit">
              Registration Here
            </button>
            <p className="description">
              Already have an Account <Link to="/login">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
