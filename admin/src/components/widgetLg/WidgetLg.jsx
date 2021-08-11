import { useContext, useEffect } from "react";
import "./widgetLg.css";
import { DataGrid } from "@material-ui/data-grid";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { getMovies } from "../../context/movieContext/apiCalls";

export default function WidgetLg() {
  const {movies,dispatch} = useContext(MovieContext)


  useEffect(()=>{
    getMovies(dispatch);
  },[dispatch])


  const columns = [
    {
      field: "movie",
      headerName: "Movie",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "genre", headerName: "Genre", width: 120 },
    { field: "year", headerName: "year", width: 120 },
    { field: "limit", headerName: "limit", width: 120 },
    { field: "isSeries", headerName: "IsSeries", width: 120 },
    
  ];
  
  
  return (
    <div className="productList">
      <DataGrid
        rows={movies}
        disableSelectionOnClick
        columns={columns}
        pageSize={5}
        checkboxSelection
        getRowId={(r)=>r._id}
      />
    </div>
  );
}
