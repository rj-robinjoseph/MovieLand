import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./home.scss";
import List from "../../components/list/List";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = ({type}) => {
  const [lists,setLists] = useState([]);
  const [genre,setGenre] = useState(null);

  useEffect(()=>{
    const getRandomLists = async ()=>{
      try{
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,{
            headers:{
              token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZmQ5NWQ0ZDM2MzBkMDliODg5YTAzNCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2Mjc1NDY5MDcsImV4cCI6MTYyNzk3ODkwN30.Ic-wwxtAlX2aDLeBKU3hp79Z9lwK97miJAxeHljpJMA"
            }
          }
        )
        setLists(res.data);
      }catch(err){
        console.log(err)
      }
    };
    getRandomLists();
  },[type, genre]);
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {lists.map((list)=>(
      <List list={list}/>
      ))};
    </div>
  );
};

export default Home;
