import React from "react";
import Media from "react-media";
import "../App.css";
import Smoke from "../assets/images/smoke.jpg";

const Contact = () => {
  let contactStyle = {
    borderWidth: "1px",
    borderRadius: "1rem",
    lineHeight: "2rem",
    color: "white",
    fontSize: "1.5rem",
    position: "absolute",
    top: '3rem'
  };

  return (
    <div
      
      data-aos="fade-up"
      data-aos-duration="500"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundSize: "cover",
        backgroundColor: "#0f9b0f",
        background: "black",
        backgroundBlendMode: "multiply",
        position: "relative"
      }}
    >
      <Media
        queries={{
          small: "(max-width: 1080px)",
          larger: "(max-width:1080px)"
        }}
      >
        {matches =>
          matches.small ? (
            <>
            <div className={"formTopType"} style={contactStyle}>
              <h4 style={{ fontSize: "1.5rem" }}>TELL US ABOUT YOUR PROJECT</h4>
            </div>

<form name="contact" method="post" style={styles.smallForm}>
<input type="hidden" name="form-name" value="contact" />

<input
  placeholder={"Name"}
  type="text"
  name="name"
  style={styles.input}
></input>

<input
  placeholder={"Email"}
  type="text"
  name="email"
  style={styles.input}
></input>

<input
  placeholder={"Phone number"}
  type="text"
  name="phone"
  style={styles.input}
></input>

<input
  placeholder={"Company"}
  type="text"
  name="company"
  style={styles.input}
></input>

<textarea
  placeholder={"Project details"}
  name="message"
  style={styles.messageInput}
></textarea>

<button type="submit" style={styles.button}>
  Send
</button>
      </form></>
          ) : (
              <>
            <div className={"formTopType"} style={styles.formType}>
              <h3 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>
                TELL US ABOUT YOUR PROJECT
              </h3>
              <p>
                We started with only one goal in mind, to amplify the voice of
                brands and inspire consumers through digital imagery and
                storytelling.
              </p>

              <img
                style={{
                  height: "100%",
                  width: "50%",
                  opacity: "0.1",
                  position: "absolute",
                  bottom: 0,
                  left: 0
                }}
                src={Smoke}
              />
              </div>
               <form name="contact" method="post" style={styles.form}>
               <input type="hidden" name="form-name" value="contact" />
       
               <input
                 placeholder={"Name"}
                 type="text"
                 name="name"
                 style={styles.input}
               ></input>
       
               <input
                 placeholder={"Email"}
                 type="text"
                 name="email"
                 style={styles.input}
               ></input>
       
               <input
                 placeholder={"Phone number"}
                 type="text"
                 name="phone"
                 style={styles.input}
               ></input>
       
               <input
                 placeholder={"Company"}
                 type="text"
                 name="company"
                 style={styles.input}
               ></input>
       
               <textarea
                 placeholder={"Project details"}
                 name="message"
                 style={styles.messageInput}
               ></textarea>
       
               <button type="submit" style={styles.button}>
                 Send
               </button>
                </form>
                <p style={{position: 'absolute', bottom:0, color:'white', fontSize: ".5rem"}}>Designed by <a style={{color:'white',}} href="https://rdevdesigns.com/">RdevDesigns</a></p>
              </>
          )
        }
      </Media>
    </div>
  );
};

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    margin: "4rem 2rem",
    width: "100%",
    maxWidth: "400px",
    backgroundColor: "white",
    padding: "4rem 2rem",
    textAlign: "left"
  },

  smallForm: {
    display: "flex",
    flexDirection: "column",
    margin: "8rem 2rem 2rem 2rem",
    width: "100%",
    maxWidth: "400px",
    backgroundColor: "white",
    padding: "4rem 2rem",
    textAlign: "left"
  },
  formType: {
    margin: "0rem 4rem",
    borderWidth: "1px",
    padding: "4rem",
    borderRadius: "1rem",
    lineHeight: "2rem",
    color: "white",
    fontSize: "1.5rem",
    marginBottom: "1.5rem"
  },
  input: {
    margin: ".5rem 0rem",
    borderWidth: "1px",
    borderColor: "#D3D3D3",
    borderStyle: "solid"
  },

  label: { margin: "10px " },
  messageInput: {
    margin: "0rem 0rem",
    height: "6rem",
    borderWidth: "1px",
    borderColor: "#D3D3D3",
    borderStyle: "solid",
    textAlign: "left",
    position: "relative",
    top: 10
  },
  button: {
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: "#D3D3D3",
    borderStyle: "solid",
    height: "3rem",
    backgroundColor: "black",
    color: "white",
    marginTop: "2rem"
  },
  social: {
    width: "1.5rem",
    marginLeft: "1rem",
    marginRight: "1rem"
  }
};

export default Contact;
