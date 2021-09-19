import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./featured.scss";
import Skeleton from "../skeleton/Skeleton";

export default function Featured({ type, setGenre }) {
  const [content, setContent] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getRandomContent = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(`/movies/random?type=${type}`, {
          headers: {
            token:
              "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setContent(res.data[0]);
      } catch (err) {
        console.log(err);
      }
      setIsLoading(false);
    };
    getRandomContent();
  }, [type]);

  console.log(content);
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select
            name="genre"
            id="genre"
            onChange={(e) => setGenre(e.target.value)}
          >
            <option>Genre / Languages</option>
            <option value="adventure">Adventure</option>
            <option value="action">Action</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Animation</option>
            <option value="english">English</option>
            <option value="kannada">Kannada</option>
            <option value="tamil">Tamil</option>
            <option value="malayalam">Malayalam</option>
          </select>
        </div>
      )}
     {isLoading ? (
          <Skeleton type="circle" />
        ) : (
      <img src={content.img} alt="" />
        
        )}
      <div className="info">
        <img src={content.imgTitle} alt="" />
        <span className="desc">{content.desc}</span>
        <div className="buttons">
        <Link to={{ pathname: "/watch", movie: content }} className="navbarmainlinks">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
        </Link>
          {/* <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button> */}
        </div>
      </div>
    </div>
  );
}
