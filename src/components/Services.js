import React, { useEffect } from "react";
import ServiceCard from "./ServiceCard";
import Aos from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column"
        }}
      >
        <h1 style={{ margin: "4rem 0rem 1rem 0rem" }}>WHAT WE OFFER</h1>
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          style={{
            width: "14rem",
            marginBottom: "3rem",
            height: "5px",
            backgroundColor: "orange",
            alignSelf: "center"
          }}
        ></div>
      </div>
      <div style={styles.serviceContainer}>
        <ServiceCard
          title="Production"
          sum='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
          link="#"
        />

        <ServiceCard
          title="Songwriting"
          sum="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          link="#"
        />
        <ServiceCard
          title="Vocal Production"
          sum="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
          link="#"
        />
        <ServiceCard
          title="Live Instrument"
          sum="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          link="#"
        />
        <ServiceCard
          title="Mixing"
          sum="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          link="#"
        />
      </div>
    </div>
  );
};

const styles = {
  services: {
    width: "100vw",
    height: "auto"
  },
  serviceContainer: {
    margin: "2rem 0rem 6rem 0rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap"
  }
};

export default Services;
