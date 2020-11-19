import React from "react";
import "../App.css";
import Carousel from "react-bootstrap/Carousel";

const MediaCard = () => {
  return (
    <>
      <Carousel
        style={{
          width: "100vw",
          marginTop: "2rem"
        }}
      >
        <Carousel.Item interval={1000}>
          <iframe
            style={{ borderRadius: "1rem", boxShadow: "7px 7px 7px black" }}
            src="https://open.spotify.com/embed/track/36h4FnJGkK3cAl6Q7R1Now"
            width="300"
            height="380"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <iframe
            style={{ borderRadius: "1rem", boxShadow: "7px 7px 7px black" }}
            src="https://open.spotify.com/embed/track/6hLZzCS4E7AWo3PRBWy6az"
            width="300"
            height="380"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </Carousel.Item>
        <Carousel.Item>
          <iframe
            style={{ borderRadius: "1rem", boxShadow: "7px 7px 7px black" }}
            src="https://open.spotify.com/embed/track/7fEoXCZTZFosUFvFQg1BmW"
            width="300"
            height="380"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

const styles = {
  itemListItem: {
    margin: "0rem 10px",
    color: "grey"
  }
};

export default MediaCard;
