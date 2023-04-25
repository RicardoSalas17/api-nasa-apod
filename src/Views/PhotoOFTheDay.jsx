import { useState, useEffect } from "react";
import HttpClient from "../service/HttpClient.js";
import ShowPicture from "../components/ShowPicture.jsx";
import SearchDate from "../components/SearchDate.jsx";

export default function PhotoOFTheDay() {
  const [apod, setApod] = useState({});
  useEffect(() => {
    HttpClient.getApod().then((apodData) => {
      setApod(apodData.data);
    });
  }, []);

  return (
    <div>
      {apod.url ? (
        <div>
          <ShowPicture apod={apod}></ShowPicture>
          <SearchDate></SearchDate>
        </div>
      ) : (
        <div>
          <img
            src="https://media0.giphy.com/media/3o7bu3XilJ5BOiSGic/giphy.gif"
            alt="Loading"
            width="80"
            height="auto"
          />
        </div>
      )}
    </div>
  );
}
