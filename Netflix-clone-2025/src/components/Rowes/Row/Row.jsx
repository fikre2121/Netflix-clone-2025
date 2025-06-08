import React, { useEffect, useState } from "react";
import axios from "../../../utiles/axios";
import "./row.css";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
function Row({ title, fetchUrl, isLargeRow }) {
  const [fmovie, setFmovie] = useState([]);
  const [trailerUrl, setTrailer] = useState("");

  const basimage = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(fetchUrl);
        console.log(request);
        setFmovie(request.data.results);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, [fetchUrl]);

  const hundleclick=(movie)=>{

if(trailerUrl){
setTrailer('')
}else{
   movieTrailer(movie?.title||movie?.name||movie?.original_name).then((url)=>{
    console.log(url)
    const urlparams=new URLSearchParams(new URL(url).search)
    console.log(urlparams)
    console.log(urlparams.get('v'))
    setTrailer(urlparams.get('v'))
   })

}

  }

  const opts = {
    height: "300",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <>
      <div className="row">
        <h2 className="row__title">{title}</h2>
        <div className="row__posters">
          {fmovie?.map((movie, index) => (
            <img
              onClick={() => hundleclick(movie)}
              key={index}
              src={`${basimage}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name || movie.title || movie.original_name}
              className={`row__poster ${isLargeRow ? "row__posterLarge" : ""}`}
            />
          ))}
        </div>
        <div style={{padding:"40px"}}>
          {trailerUrl &&<YouTube videoId={trailerUrl} opts={opts}/>}
        </div>
      </div>
    </>
  );
}
export default Row;
