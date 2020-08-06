import React from "react";
import { ProductConsumer } from "../../context";
import PayPalBtn from "./PayPalBtn";
export default function CartTotals({ history }) {
  return (
    <div className="container">
      <div className="row">
        <ProductConsumer>
          {(value) => {
            const { clearCart, cartSubTotal, cartTax, cartTotal } = value;
            return (
              <div className="col text-title text-center my-4">
                <button
                  onClick={clearCart}
                  className="btn btn-outline-danger text-capitalize my-4"
                >
                  Clear Cart
                </button>
                <h3>Subtotal : ${cartSubTotal}</h3>
                <h3>Tax : ${cartTax}</h3>
                <h3>Total Price : ${cartTotal}</h3>
                <PayPalBtn
                  history={history}
                  cartTotal={cartTotal}
                  clearCart={clearCart}
                />
              </div>
            );
          }}
        </ProductConsumer>
      </div>
    </div>
  );
}
