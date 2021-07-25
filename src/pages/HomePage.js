import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import Services from "../components/HomePage/Services";
import Featured from "../components/HomePage/Featured";

export default function HomePage() {
  return (
    <>
      <Hero max="true" title="Awesome Cars">
        <Link to="/products" className="main-link" style={{ margin: "2rem" }}>
          Explore
        </Link>
      </Hero>
      <Services />
      <Featured />
    </>
  );
}
