import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { useContext } from "react";
import { logout } from "../../context/authContext/AuthActions";
import { AuthContext } from "../../context/authContext/AuthContext";
import { useHistory } from "react-router-dom";


export default function Topbar() {
  const {dispatch} = useContext(AuthContext);
  const history = useHistory();
    const logoutHandler = ()=>{
      
      dispatch(logout());
      history.push("/login");
  }

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">MovieLand-admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img onClick={logoutHandler} src="https://ih0.redbubble.net/image.618369215.1083/flat,1000x1000,075,f.u2.jpg" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  )
}
