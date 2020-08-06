import React from "react";
import { ProductConsumer } from "../../context";
import Title from "../title";
import Product from "../Product";
import FilteredProducts from "./FilteredProducts";

export default function Products() {
  return (
    <ProductConsumer>
      {(value) => {
        const { filteredProducts } = value;

        return (
          <section className="py-5">
            <div className="container">
              <Title center title="our products" />
              <FilteredProducts />
              <div className="row">
                <div className="col-10 mx-auto">
                  <h6 className="text-title ">
                    total products : {filteredProducts.length}
                  </h6>
                </div>
              </div>

              <div className="row py-5">
                {filteredProducts.length === 0 ? (
                  <div className="col text-title text-center">
                    sorry,no items matched your search
                  </div>
                ) : (
                  filteredProducts.map((item) => {
                    return <Product key={item.id} product={item} />;
                  })
                )}
              </div>
            </div>
          </section>
        );
      }}
    </ProductConsumer>
  );
}
