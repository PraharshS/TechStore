import React from "react";
import Title from "../title";
import CartColoumns from "./CartColoumn";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

export default function Cart({ history }) {
  return (
    <section className="py-5">
      {/* title  */}
      <div className="container">
        <Title title="Cart items" center />
      </div>
      {/* cart coloumns  */}
      <CartColoumns />
      {/* cart list  */}
      <CartList />
      {/* cart totals  */}
      <CartTotals history={history} />
    </section>
  );
}
