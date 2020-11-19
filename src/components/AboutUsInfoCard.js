import React from "react";
import Media from "react-media";
import "../App.css";

const AboutCard = props => {
  return (
    <Media queries={{ small: "(max-width: 599px)" }}>
      {matches =>
        matches.small ? (
          <div
            style={{
              width: "100%",
              minWidth: "25%",
              height: "100%",
              backgroundImage: `url(${props.image})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover"
            }}
          >
            <div
              className="about-card-text"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.801)",
                color: "white",
                height: "25rem",
                width: "100%"
              }}
            >
              <p style={{ padding: "8rem 2rem" }}>
                Here would be particular info about the teammember of the studio
                History and what not. Each text would say something different
                blah blah blah.
              </p>
            </div>
          </div>
        ) : (
          <div
            style={{
              width: "25%",

              height: "100%",
              backgroundImage: `url(${props.image})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              padding: 0
            }}
          >
            <div
              className="about-card-text"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.901)",
                backgroundSize: "cover",
                color: "white",
                height: "25rem",
                  width: "100%",
                 
              }}
            >
              <p style={{ padding: "8rem 2rem" }}>
                Here would be particular info about the teammember of the studio
                History and what not. Each text would say something different
                blah blah blah.
              </p>
            </div>
          </div>
        )
      }
    </Media>
  );
};

export default AboutCard;
