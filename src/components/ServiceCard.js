import React from "react";
import "../App.css";

const ServiceCard = props => {
  return (
    <div className="service-card" style={styles.services}>
      <p style={{ marginTop: "2rem" }}>{props.title}</p>

      <p
        style={{
          marginTop: "1rem",
          width: "13rem"
        }}
      >
        {props.sum}
      </p>
    </div>
  );
};

const styles = {
  services: {
    width: "auto",
    padding: "1rem",
    height: "auto",
    margin: "0 ",
    borderStyle: "solid",
    borderWidth: "2px",
    borderRightWidth: "1px",
    borderRadius: "2px",
    borderColor: "rgba(209, 209, 209, 0.667)"
  }
};

export default ServiceCard;
