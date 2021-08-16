import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
  MovieFilter,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import MovieCreationIcon from '@material-ui/icons/MovieCreation';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
            {/* <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li> */}
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <MovieFilter className="sidebarIcon" />
                Movies
              </li>
            </Link>
            <Link to="/lists" className="link">
              <li className="sidebarListItem">
                <FormatListBulletedIcon className="sidebarIcon" />
                Lists
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Creative Head</h3>
          <ul className="sidebarList">
          <Link to="/newproduct" className="link">
            <li className="sidebarListItem">
              <MovieCreationIcon className="sidebarIcon" />
              Create Movies
            </li>
          </Link>
            <Link to="/newList" className="link">
            <li className="sidebarListItem">
              <PlaylistAddIcon className="sidebarIcon" />
              Create Lists
            </li>
          </Link>
          <Link to="/newUser" className="link">
            <li className="sidebarListItem">
              <PersonAddIcon className="sidebarIcon" />
              Create User
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Editing</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Edit Lists
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
