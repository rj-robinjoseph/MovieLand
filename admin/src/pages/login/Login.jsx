import React, { useContext, useState } from "react";
import { login } from "../../context/authContext/apiCalls";
import { AuthContext } from "../../context/authContext/AuthContext";
import "./login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  };

  return (
    <div className="login">
      <div className="logo">
      <img 
      className="logo_login"
      src="https://res.cloudinary.com/robinjoseph/image/upload/v1628619460/MovielandLogo_556d2be32a95caeed3d95826ed836f31_ppaayr.png"
       alt="" />
      </div>
    <div className="main">
       <h1 className="sign">Login</h1>

          <form id="login" method="post" action="#" className="form1">
     

              <input 
              className="un"
               type="text" 
               placeholder="Email" 
               required="required"
               align="center"
               onChange={(e) => setEmail(e.target.value)}
              />

              <input
              className="pass"
               type="password" 
               placeholder="Password" 
               required="required" 
               align="center"
               onChange={(e) => setPassword(e.target.value)}
              />
              <button 
              className="submit"
              type="submit"
              align="center"
              onClick={handleLogin}
              disabled={isFetching}
              >
              Let me in.
            </button>
           </form>
      </div>
    </div>
  );
}
