import React from "react";

export default function CartColoumns() {
  return (
    <div className="container-fluid text-center d-none d-lg-block my-5">
      <div className="row">
        {/* single coloumn  */}
        <div className="col-lg-2">
          <p className="text-uppercase">products</p>
        </div>
        {/* end of single coloumn  */}
        {/* single coloumn  */}
        <div className="col-lg-2">
          <p className="text-uppercase">title</p>
        </div>
        {/* end of single coloumn  */}
        {/* single coloumn  */}
        <div className="col-lg-2">
          <p className="text-uppercase">price</p>
        </div>
        {/* end of single coloumn  */}
        {/* single coloumn  */}
        <div className="col-lg-2">
          <p className="text-uppercase">quantity</p>
        </div>
        {/* end of single coloumn  */}
        {/* single coloumn  */}
        <div className="col-lg-2">
          <p className="text-uppercase">remove</p>
        </div>
        {/* end of single coloumn  */}
        {/* single coloumn  */}
        <div className="col-lg-2">
          <p className="text-uppercase">total</p>
        </div>
        {/* end of single coloumn  */}
      </div>
    </div>
  );
}
