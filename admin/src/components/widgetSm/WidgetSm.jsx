import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";

export default function WidgetSm() {

  const [newUsers, setNewUsers] = useState([])

  useEffect(()=>{
    const getNewUsers = async ()=>{
      try{
        const res = await axios.get("/users?new=true",{
          headers:{
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZmM0NmUxMzJiMTEyMjczY2U5N2NiYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyNzYzMDc1NCwiZXhwIjoxNjI4MDYyNzU0fQ.Qqu9Abin0P7SURz56bR2b0XMF05iKjs_qNit-o8IseM"
          }
        });
        setNewUsers(res.data)
    }catch(err){
      console.log(err);
    }
    };
    getNewUsers();
  },[]);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map(user=>(
        <li className="widgetSmListItem">
          <img
            src={user.profilePic || "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"}
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{user.username}</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        ))}
      </ul>
    </div>
  );
}
