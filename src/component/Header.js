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
          top: "170px",
          zIndex: 1,
          left: "10px",
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
