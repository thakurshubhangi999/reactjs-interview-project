import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function CardComponent(props) {
  console.log(props);
  return (
    <Container fluid className="mx-0 px-0">
      <Card style={{ width: "12rem", height: "14rem", overflow: "auto" }}>
        <Card.Title style={{ fontSize: "0.8rem", padding: "0.7rem" }}>
          {props.product.title}
        </Card.Title>
        <Card.Img variant="top" src={props.product.thumbnail} />
        <Card.Body>
          <Card.Text>{props.product.description}</Card.Text>
        </Card.Body>
        <Card.Footer
          style={{
            backgroundColor: "#2EFF2E",
            paddingTop: "0rem",
            paddingBottom: "1.5rem",
          }}
        >
          price: {props.product.price}
          <small
            className="text-dark"
            style={{ display: "block", marginTop: "1rem" }}
          >
            Month
          </small>
        </Card.Footer>
      </Card>
    </Container>
  );
}

export default CardComponent;
