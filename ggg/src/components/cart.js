import React from "react";
import Header from "./header";
import PaymentOpt from "./paymentopt";
import ProdList from "./prodlist";

const Cart = () => {
  return (
    <>
      <Header />
      <section className="descriptionsec cart mb-35">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-sm-12 text-left mb-3">
              <div className="headingdiv">
                <h2>1 Item In Your Basket</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <ProdList />
            <PaymentOpt />
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
