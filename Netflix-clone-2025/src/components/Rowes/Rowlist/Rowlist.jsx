import React from "react";
import Row from "../Row/Row";
import axios from "../../../utiles/axios";
import requests from "../../../utiles/request";
function Rowlist() {
  return (
    <>
      <Row
        title="NETFLIXORIGNALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row
        title="TOP ACTION PICKS"
        fetchUrl={requests.fetchActionMovies}
        isLargeRow={true}
      />
      <Row
        title="TRENDING NOW"
        fetchUrl={requests.fetchTrending}
        isLargeRow={true}
      />
      <Row
        title="COMEDY MOVIES"
        fetchUrl={requests.fetchComedyMovies}
        isLargeRow={true}
      />
      <Row
        title="ROMANTIC MOVIES"
        fetchUrl={requests.fetchRomanceMovies}
        isLargeRow={true}
      />
      <Row title="MUSICS" fetchUrl={requests.getmusic} isLargeRow={true} />
      <Row
        title="HORROR MOVIES"
        fetchUrl={requests.fetchHorrorMovies}
        isLargeRow={true}
      />
    </>
  );
}
export default Rowlist;
("fetchComedyMovies");
