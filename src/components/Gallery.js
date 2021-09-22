import React, { useState, useEffect } from "react";
import LikeButton from "./LikeButton";
import Loading from "./Loading";

const nasaKey = process.env.REACT_APP_NASA_KEY;

const Gallery = () => {
  const [picturesData, setPictures] = useState(null);

  useEffect(() => {
    fetchPicture();

    async function fetchPicture() {
      let today = new Date().toISOString().slice(0, 10);
      const pictures = await fetch(
        `https://api.nasa.gov/planetary/apod/?start_date=2021-09-01&end_date=${today}&api_key=${nasaKey}`
      );
      const data = await pictures.json();
      setPictures(data);
    }
  }, []);

  if (!picturesData) {
    return (
      <div className="loading-container">
        <Loading />
      </div>
    );
  }

  return (
    <>
      <div className="gallery-container">
        <div className="title-container">
          <h1 className="title">Skyview</h1>
          <p className="credits">Daily images from NASA's API</p>
        </div>
        <div className="gallery-picture-container">
          {picturesData.map((picture) => {
            return (
              <div className="picture-container" key={picture.date}>
                <div className="image">
                  <img
                    src={picture.url}
                    alt={picture.title}
                    className="picture"
                  />
                </div>
                <div className="picture-details">
                  <h3 className="picture-title">{picture.title}</h3>
                  <p className="picture-date">{picture.date}</p>
                  <p className="picture-explanation">{picture.explanation}</p>
                  <LikeButton date={picture.date} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Gallery;
