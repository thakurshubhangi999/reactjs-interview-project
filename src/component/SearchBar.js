import React, { useState, useEffect } from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import CardComponent from "./CardComponent";

function SearchBar() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  async function fetchProducts(event) {
    console.log("fetchProducts", event.target.value);
    const response = await fetch(
      `https://dummyjson.com/products/category/${event.target.value}`
    );
    const data = await response.json();
    console.log(data.products);
    setProducts(data.products);
  }

  useEffect(() => {
    async function fetchCategories() {
      const response = await fetch("https://dummyjson.com/products/categories");
      const data = await response.json();
      setCategories(data);
    }
    fetchCategories();
  }, []);

  return (
    <div id="example-collapse">
      <Form.Select
        onChange={fetchProducts}
        className="form-control"
        style={{ marginTop: "1rem", marginLeft: "1rem", width: "40%" }}
      >
        <option>Filter By...</option>
        {categories.map((category, index) => (
          <option key={index} href={"#" + category}>
            {category}
          </option>
        ))}
      </Form.Select>
      <Container>
        <Row className="justify-content-start mx-0 px-0 my-1">
          {products.map((e, index) => (
            <Col style={{ padding: "0.9rem" }}>
              <CardComponent product={e} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default SearchBar;
