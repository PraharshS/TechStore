import React from "react";
import Title from "../title";
import aboutBcg from "../../images/aboutBcg.jpeg";

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <img
              src={aboutBcg}
              alt="about"
              className="img-fluid img-thumbnail"
              style={{ background: "var(--darkGrey)" }}
            />
          </div>
          <div className="col-10 mx-auto col-md-6 my-3">
            <Title title="about us"></Title>
            <p className="text-lead text-muted my-3">
              At Car store we are also all about giving our customers that
              little bit more after purchasing a car from us. As well as our
              great offers on New and Used cars you will find exclusive news
              from our dealerships and manufacturers. You can also keep up to
              date with our latest blog posts and events. Car store has national
              coverage with over 130 locations across India, Bangladesh and
              Nepal - search for your nearest locations.
            </p>

            <button
              className="main-link"
              type="button"
              style={{ marginTop: "0.2rem" }}
            >
              More Info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
