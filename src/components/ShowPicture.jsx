import { useEffect, useState } from "react";

const ShowPicture = (props) => {
  const [apod, setApod] = useState("");

  useEffect(() => {
    props.apod && setApod(props.apod);
  }, [props]);

  return (
    <div style={{ maxWidth: 900, padding: 30 }}>
      <h1>NASA API</h1>
      <h2>Astronomy Picture of the Day</h2>
      {apod && (
        <article>
          <header>
            {apod.title} - <i>{apod.date}</i>
          </header>
          {apod.media_type !== "video" ? (
            <img src={apod.url} alt="APOD" width="800" height="auto" />
          ) : (
            <iframe
              src={apod.url}
              width="800"
              height="300"
              allow="fullscreen"
              allowFullScreen
            ></iframe>
          )}
          <p>{apod.explanation}</p>
          <pre
            style={{
              overflowX: "auto",
              whiteSpace: "pre-wrap",
              wordWrap: "break-word",
            }}
          >
            <hr />
            {JSON.stringify(apod, null, 2)}
          </pre>
        </article>
      )}
    </div>
  );
};

export default ShowPicture;
