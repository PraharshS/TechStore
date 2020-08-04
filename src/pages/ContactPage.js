import React from "react";
import Hero from "../components/Hero";
import Contact from "../components/ContactPage/Contact";
import contactImg from "../images/contactBcg.jpeg";

export default function ContactPage() {
  return (
    <>
      <Hero img={contactImg}></Hero>
      <Contact></Contact>
    </>
  );
}
