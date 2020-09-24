import React, { useContext, useState } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase,config";
import "./Login.css";
import { userContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom";
firebase.initializeApp(firebaseConfig);
const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);

  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSigned: false,
    name: "",
    email: "",
    password: "",
  });
  const provider = new firebase.auth.GoogleAuthProvider();

  const handleSign = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        const { displayName, photoURL, email } = res.user;
        const singnIn = {
          isSigned: true,
          name: displayName,
          email: email,
        };
        setUser(singnIn);
        setLoggedInUser(singnIn);
      })
      .catch((error) => {
        console.log("errror");
      });
  };

  const handleOut = () => {
    firebase
      .auth()
      .signOut()
      .then((res) => {
        const signOutUSer = {
          isSigned: false,

          name: "",
          email: "",
        };
        setUser(signOutUSer);
        setLoggedInUser(signOutUSer);
      })
      .catch((erorr) => {
        console.log(erorr);
      });
  };

  const handleChange = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);
    let isFormValid = true;
    if (event.target.name === "email") {
      const isFormValid = /\S+@+\S+.com+/.test(event.target.value);
    }
    if (event.target.name === "password") {
      isFormValid = event.target.value.length > 6;
    }

    if (isFormValid) {
      const newUser = { ...user };
      newUser[event.target.name] = event.target.value;
      setUser(newUser);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newUser && user.email && user.password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode, errorMessage);
          // ...
        });
    }

    if (!newUser && user.email && user.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
        });
      setLoggedInUser(user);
    }
  };

  const fbProvider = new firebase.auth.FacebookAuthProvider();
  const handleFbSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(fbProvider)
      .then(function (result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        setLoggedInUser(user);

        // ...
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  };

  return (
    <div className="login-form">
      <div className="text-center">
        <h2>Register App</h2>
        <form action="">
          <input
            type="email"
            onBlur={handleChange}
            placeholder="Email address"
            name="email"
          />

          <br />
          <input
            type="password"
            onBlur={handleChange}
            placeholder="Password"
            name="password"
          />
          <br />
          <input type="submit" onClick={() => handleSubmit} value="Submit" />
        </form>

        {user.isSigned ? (
          <button className="googleBtn" onClick={handleOut}>
            google sign out
          </button>
        ) : (
          <button className="googleBtn" onClick={handleSign}>
            google sign in
          </button>
        )}
        <br />
        <button className="fbBtn" onClick={handleFbSignIn}>
          login with facebook
        </button>
      </div>
    </div>
  );
};

export default Login;
