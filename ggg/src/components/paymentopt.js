import React from "react";

const PaymentOpt = () => {
  return (
    <div className="col-lg-5 col-sm-12 paymentcol">
      <div className="cartpaymentoption">
        {/* <p>
                Contact Shop<span>Keep Shopping</span>
              </p> */}
        <div className="cartamountdiv mt-4">
          <p className="howupay">Item List</p>
          <p className="processpayment">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
          {/* <div className="inlineimgs">
                  <i className="fab fa-cc-paypal"></i>
                </div> */}
          <p className="itemtotal">
            Item(s) total <span>USD 1991.50</span>
          </p>
          <p className="shopdiscount">
            Shop discount <span>-USD 1394.50</span>
          </p>
          <hr />
          <p className="subtotal">
            Subtotal <span>USD 597.5</span>
          </p>
          <p className="delivery">
            Delivery
            <br />
            (To Pakistan)<span>FREE</span>
          </p>
          <hr />
          <p className="totalitem">
            Total <span>-USD 1394.50</span>
          </p>
          <button className="commonbtn check" style={{ width: "100%" }}>
            {" "}
            <a href="checkout.html" className="combtn">
              Checkout <span>Now</span>
            </a>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentOpt;
