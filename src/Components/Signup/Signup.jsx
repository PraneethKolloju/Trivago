import { useContext, useState } from "react"
import { useHistory } from "react-router";
import { AuthContext, link } from "../../Contexts/AuthContext";
import { Link } from "react-router-dom"
import "./Signup.css";
import axios from "axios";

export default function Signup() {
    return (
        <>
            <div className="Block">
                <div className="Logoimage">
                    <img className="loginimage" alt="kbh" src="http://mma.prnewswire.com/media/437948/trivago___Logo.jpg?p=facebook"></img>
                </div>
                <div className="Blockb">
                    <div className="left">
                        <div className="account">Create an account</div>
                        <div className="emailpassword">Enter your email address and password to start</div>
                        <div className="email">Email address</div>

                        <input type="text" placeholder="Enter email" name="email" />
                        <div className="password">Password</div>
                        <input type="text" placeholder="Enter password" name="password" />
                        <button className="loginbutton" >Signup</button>
                    </div>
                    <div className="right">
                        <div className="usetrivago">or Use trivago with another account</div>
                        <button>Continue with google</button>
                        <button>Continue with Facebook</button>
                        <button>Continue with Apple</button>
                    </div>
                </div>
                <div>Remember by signing up, you are agreeing to our Privacy Policy and Terms of Use.</div>
            </div>
        </>
    )

}