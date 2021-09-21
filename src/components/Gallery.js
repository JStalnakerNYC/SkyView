import React, { useState, useEffect } from "react";

const nasaKey = process.env.REACT_APP_NASA_KEY;

const Gallery = () => {
  const [picturesData, setPictures] = useState(null);

  useEffect(() => {
    fetchPicture();

    async function fetchPicture() {
      let today = new Date().toISOString().slice(0, 10);
      console.log(today);
      const pictures = await fetch(
        `https://api.nasa.gov/planetary/apod/?start_date=2021-09-01&end_date=${today}&api_key=${nasaKey}`
      );
      const data = await pictures.json();
      console.log("here is data", data);
      setPictures(data);
    }
  }, []);

  if (!picturesData) {
    return <div />;
  }

  return (
    <>
      {picturesData.map((picture) => {
        return (
          <div className="picture-container" key={picture.id}>
            <div className="image">
              <img src={picture.url} alt={picture.title} className="picture" />
            </div>
            <div className="picture-details">
              <h2>{picture.title}</h2>
              <h3>{picture.date}</h3>
              <p>{picture.explanation}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Gallery;