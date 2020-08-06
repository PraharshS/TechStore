import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";

export default function Footer() {
  return (
    <ProductConsumer>
      {(value) => {
        return (
          <FooterWrapper className="container-fluid py-3">
            <div className="row">
              <div className="col-md-6">
                <p className="text-capitalize">
                  copyright &copy; tech store {new Date().getFullYear()} all
                  rights reserved
                </p>
              </div>
              <div className="col-md-6 d-flex justify-content-around">
                {value.socialLinks.map((link) => (
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={link.id}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </FooterWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const FooterWrapper = styled.footer`
  background: var(--darkGrey);
  color: var(--mainWhite);
  .icon {
    font-size: 1.5rem;
    color: var(--mainWhite);
    transition: var(-mainTransition);
    cursor: pointer;
  }
  .icon:hover {
    color: var(--primaryColor);
  }
`;
