import axios from "axios"
import { useRef } from "react"
import { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import "./register.scss"
import Footer from "../../components/footer/Footer";

export default function Register() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")
  const history = useHistory()

  const emailRef = useRef()
  const passwordRef = useRef()
  const usernameRef = useRef()

  const handleStart = (e) => {
    e.preventDefault()
    setEmail(emailRef.current.value)
  }
  const handleFinish = async (e) => {
    e.preventDefault()
    setPassword(passwordRef.current.value)
    setUsername(usernameRef.current.value)
    try {
      await axios.post("auth/register", { email, username, password })
      history.push("/login")
    } catch (err) {}
  }

  
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://res.cloudinary.com/robinjoseph/image/upload/v1628619460/MovielandLogo_556d2be32a95caeed3d95826ed836f31_ppaayr.png"
            alt=""
          />
          <Link to="/login">
            <button className="loginButton">Sign In</button>
          </Link>
        </div>
      </div>
      <div className="container">
        <div className="content-wrapper">
          <h1>Online Entertainment Platform.</h1>
          <h2>Watch anywhere.</h2>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          {!email ? (
            <div className="input">
              <input type="email" placeholder="Email address" ref={emailRef} />
              <button className="registerButton" onClick={handleStart}>
                Get Started
              </button>
            </div>
          ) : (
            <form className="input">
              <input type="username" placeholder="username" ref={usernameRef} required/>
              <input type="password" placeholder="password" minLength="6" ref={passwordRef} required/>
              <button className="registerButton" onClick={handleFinish}>
                Start
              </button>
            </form>
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}