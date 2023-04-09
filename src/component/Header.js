import React from "react";
import { Image, Container } from "react-bootstrap";

function Header() {
  return (
    <Container>
      <Image
        src={require("../images/img1.jpg")}
        alt="Logo"
        height={100}
        style={{
          position: "absolute",
          top: "11rem",
          zIndex: 1,
          left: "0.625rem",
        }}
      />

      <div className="d-flex justify-content-center align-items-center">
        <Image
          src={require("../images/img2.PNG")}
          alt="Logo"
          className="img-fluid w-50 pt-0"
        />
      </div>
    </Container>
  );
}

export default Header;