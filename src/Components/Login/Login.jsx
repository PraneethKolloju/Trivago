import { useContext, useState } from "react";
import { useHistory } from "react-router";
import { AuthContext, link } from "../../Contexts/AuthContext";
import { Link } from "react-router-dom";
import "./Login.css";
import axios from "axios";

export default function Login() {
  const history = useHistory();
  return (
    <>
      <div className="Block">
        <div className="Logoimage">
          <img
            className="loginimage"
            alt="/"
            src="http://mma.prnewswire.com/media/437948/trivago___Logo.jpg?p=facebook"
          />
        </div>
        <div className="Blockb">
          <div className="left">
            <div className="account">Log into account</div>
            <div className="emailpassword">
              Enter your email address and password to start
            </div>
            <label className="email">Email address</label>
            <input
              type="text"
              placeholder="Enter email"

              name="email"
            />
            <label className="password">Password</label>
            <input
              type="text"
              placeholder="Enter password"

              name="password"
            />
            <button className="loginbutton">
              Login
            </button>
          </div>
          <div className="right">
            <div className="usetrivago">
              or Use trivago with another account
            </div>
            <button className="clogo">
              {/* <div>
                <img src="./google.jpg" alt="" />
              </div> */}
              Continue with google
            </button>
          </div>
        </div>
        <div>
          Remember by signing up, you are agreeing to our Privacy Policy and
          Terms of Use.
        </div>
      </div>

      <div>
        <h1>Dont you have an account yet?</h1>
        <Link to="/signup">
          <button className="sign">Create account</button>
        </Link>
      </div>
    </>
  );
}
