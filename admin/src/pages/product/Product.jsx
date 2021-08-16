import { Link, useHistory, useLocation } from "react-router-dom";
import "./product.css";
import { Publish } from "@material-ui/icons";
import { useContext, useState } from "react";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { updateMovie } from "../../context/movieContext/apiCalls";

export default function Product() {
    const location = useLocation();
    const movieList = location.movie;

    const [movie, setMovie] = useState(null);
    const history = useHistory()
    

    const {dispatch} = useContext(MovieContext);

    const handleChange =(e)=>{
      const value = e.target.value;
      setMovie({...movie, [e.target.name]:value});
    };

    console.log(movie)

    const handleSubmit = (e) => {
      e.preventDefault();
      updateMovie(movie, dispatch);
      history.push("/movies")
    }

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Movie</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src={movieList.img} alt="" className="productInfoImg" />
                  <span className="productName">{movieList.title}</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">Id:</span>
                      <span className="productInfoValue">{movieList._id}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Genre:</span>
                      <span className="productInfoValue">{movieList.genre}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Year:</span>
                      <span className="productInfoValue">{movieList.year}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Limit:</span>
                      <span className="productInfoValue">{movieList.limit}</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="text" name="img" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Title Image</label>
          <input type="text" name="imgTitle" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Tumbnail Image</label>
          <input type="text" name="imgSm" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input type="text" placeholder="John Wick" name="title" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input type="text" placeholder="description" name="desc" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Year</label>
          <input type="text" placeholder="Year" name="year" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Genre</label>
          <input type="text" placeholder="Genre" name="genre" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Duration</label>
          <input type="text" placeholder="Duration" name="duration" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Limit</label>
          <input type="text" placeholder="Limit" name="limit" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Is Series?</label>
          <select name="isSeries" onChange={handleChange}>
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Trailer</label>
          <input type="text" name="trailer" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Video</label>
          <input type="text" name="video" onChange={handleChange}/>
        </div>
        <button className="addProductButton" onClick={handleSubmit}>Create</button>
        
      </form>
      </div>
    </div>
  );
}
