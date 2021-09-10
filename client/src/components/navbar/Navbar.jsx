import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { useContext, useState } from "react";
import "./navbar.scss";
import {Link} from "react-router-dom"
import { AuthContext } from "../../authContext/AuthContext";
import { logout } from "../../authContext/AuthActions";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { dispatch, user } = useContext(AuthContext);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://res.cloudinary.com/robinjoseph/image/upload/v1628619460/MovielandLogo_556d2be32a95caeed3d95826ed836f31_ppaayr.png"
            alt=""
          />
          <Link to="/" className="link">
          <span>Homepage</span>
          </Link>
          <Link to="/series" className="link">
          <span className="navbarmainlinks">Series</span>
          </Link>
          <Link to="/movies" className="link">
          <span className="navbarmainlinks">Movies</span>
          </Link>
          <Link to="/upcoming" className="link">
          <span>Upcoming</span>
          </Link>
          <span>My List</span>
        </div>
        <div className="right">
          {/* <Search className="icon" />
          <span>KID</span>
          <Notifications className="icon" /> */}
          <img
            src={user.profilePic || "https://res.cloudinary.com/robinjoseph/image/upload/v1629368620/Movieland/1bdc9a33850498.56ba69ac2ba5b_wzbbxh.png"}
            alt=""
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
            <span>Hello, {user.username}</span>
              <span>Settings</span>
              <span onClick={()=>dispatch(logout())}>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
