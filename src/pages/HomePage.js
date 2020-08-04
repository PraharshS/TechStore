import React from "react";
import { ProductConsumer } from "../context";

export default function HomePage() {
  return (
    <>
      <ProductConsumer>
        {(value) => {
          return <h1>Hello from homepage</h1>;
        }}
      </ProductConsumer>
    </>
  );
}
