import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import MessengerCustomerChat from 'react-messenger-customer-chat';
import "./home.scss";
import List from "../../components/list/List";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../components/footer/Footer";

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
              token:
                "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
            },
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
      <Featured type={type} setGenre={setGenre} />
      {lists.map((list)=>(
      <List list={list}/>
      ))};
      <Footer />
      <MessengerCustomerChat
        pageId="104803175250158"
        appId="793496151321400"
       />
    </div>
  );
};

export default Home;
