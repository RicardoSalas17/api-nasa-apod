import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HttpClient from "../service/HttpClient";
import ShowPicture from "../components/ShowPicture";
import SearchDate from "../components/SearchDate";

export default function PhotoByDay() {
  let { date } = useParams();
  const [apod, setApod] = useState({});

  useEffect(() => {
    HttpClient.getApodByDate(date).then((apodData) => {
      setApod(apodData.data);
    });
  }, [date]);

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
            width="800"
            height="auto"
          />
        </div>
      )}
    </div>
  );
}
