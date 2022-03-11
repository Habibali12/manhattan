import React from "react";
import Image from "../images/Image_17.png";
import Image1 from "../images/3.png";
import Header from "../components/header";
const Checkout = () => {
  return (
    <>
      <Header />
      <section className="payment">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              {/* <ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link1" id="delivery-tab" data-bs-toggle="tab" data-bs-target="#delivery" type="button" role="tab" aria-controls="delivery" aria-selected="true"> <span>01</span>Personal Info
                              </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link2" id="payment-tab" data-bs-toggle="tab" data-bs-target="#payment" type="button" role="tab" aria-controls="payment" aria-selected="false"><span>02</span>Payment</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link3" id="review-tab" data-bs-toggle="tab" data-bs-target="#review" type="button" role="tab" aria-controls="review" aria-selected="false"><span>03</span>Success</button>
                            </li>
                        </ul>  */}
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active delivery-tab"
                  id="delivery"
                  role="tabpanel"
                  aria-labelledby="delivery-tab"
                >
                  <div className="payment-method back">
                    <h3>Enter Tour Delivery Address</h3>
                    <div className="select-method">
                      <div className="expiration-left mt-3 chevron">
                        <label htmlFor="5" className="name-label">
                          Country<span>*</span>
                        </label>
                        <select className="to-select mt-2" id="">
                          <option value="industry">Pakistan</option>
                          <option value="industry">Pakistan</option>
                          <option value="industry">Pakistan</option>
                          <option value="industry">Pakistan</option>
                          <option value="industry">Pakistan</option>
                        </select>
                        <label htmlFor="5" className="name-label mt-3">
                          Full Name<span>*</span>
                        </label>
                        <input
                          type="text"
                          className="px-4  to-select mt-2"
                          id="2"
                        />
                        <label htmlFor="5" className="name-label mt-3">
                          Street Address<span>*</span>
                        </label>
                        <input
                          type="text"
                          className="px-4  to-select mt-2"
                          id="2"
                        />
                        <label htmlFor="5" className="name-label mt-3">
                          Flat/Other (Optional)
                        </label>
                        <input
                          type="text"
                          className="px-4  to-select mt-2"
                          id="2"
                        />
                        <label htmlFor="5" className="name-label mt-3">
                          City<span>*</span>
                        </label>
                        <input
                          type="text"
                          className="px-4  to-select mt-2"
                          id="2"
                        />
                        <label htmlFor="5" className="name-label mt-3">
                          Postal Code (Optional)
                        </label>
                        <input
                          type="text"
                          className="px-4  to-select mt-2"
                          id="2"
                        />
                      </div>
                    </div>
                    {/* <div className="btn-div d-grid mt-4">
                                        <button>
                                            <a href="#">Continue To Payment</a>
                                        </button>
                                    </div>  */}
                  </div>
                  <h3 className="mt-md-5">Choose A Payment Method</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                    nostrum.
                  </p>
                  <div className="payment-method payment-tab">
                    <div className="select-method">
                      <div className="cards-div bg-white">
                        <div className="d-flex align-items-center justify-content-between">
                          <input
                            type="radio"
                            className="px-2"
                            id="4"
                            name="payment-radio"
                          />
                          <label htmlFor="4" className="label-four">
                            Card
                          </label>
                          <div className="img-div">
                            <img src={Image} alt="" />
                          </div>
                        </div>
                        <div className="payment-card">
                          <div className="display-click mt-3">
                            <input type="checkbox" className="px-2" id="5" />
                            <label htmlFor="5" className="name-label">
                              Name On Card<span>*</span>
                            </label>
                            <input type="text" className="to-select mt-2" />
                            <div className="payment-card payment-card-img mt-3">
                              <div className="img-div1">
                                <i className="fa-solid fa-credit-card"></i>
                              </div>
                              <input type="checkbox" className="px-2" id="5" />
                              <label htmlFor="5" className="name-label">
                                Card Number<span>*</span>
                              </label>
                              <input type="text" className="to-select mt-2" />
                              <div className="img-div2">
                                <i className="fa-solid fa-lock"></i>
                              </div>
                            </div>
                            <div className="payment-card  mt-3">
                              <input type="checkbox" className="px-2" id="5" />
                              <div className="row">
                                <div className="col-md-3">
                                  <label htmlFor="5" className="name-label">
                                    Expiration Date<span>*</span>
                                  </label>
                                  <div className="expiration-left  mt-2">
                                    <select className="to-select" id="">
                                      <option value="industry">1</option>
                                      <option value="industry">1</option>
                                      <option value="industry">1</option>
                                      <option value="industry">1</option>
                                      <option value="industry">1</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="col-md-3">
                                  <label htmlFor=""> </label>
                                  <div className="expiration-left mt-2">
                                    <select className="to-select" id="">
                                      <option value="industry">2022</option>
                                      <option value="industry">2022</option>
                                      <option value="industry">2022</option>
                                      <option value="industry">2022</option>
                                      <option value="industry">2022</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="col-md-3"></div>
                                <div className="col-md-3">
                                  <div className="code mt-3 mt-md-0">
                                    <label htmlFor="number">
                                      Security Code<span>*</span>
                                    </label>
                                    <input
                                      type="number"
                                      name=""
                                      className="to-select mt-2"
                                      id=""
                                    />
                                    <div className="img-div2">
                                      <i className="fa-solid fa-lock"></i>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="deliver-policy mt-3 d-grid">
                              <input type="checkbox" className="px-2" id="10" />
                              <label htmlFor="10" className="policy-label">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Doloribus, quam.
                              </label>
                              <input type="checkbox" className="px-2" id="11" />
                              <label htmlFor="11" className="policy-label mt-3">
                                Lorem ipsum dolor sit
                              </label>
                            </div>
                            <div className="btn-div d-grid mt-4">
                              <button>
                                <a href="#">Review Your Order</a>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div className="bg-white mt-4 mt-md-5 d-flex align-items-center justify-content-between payment-div">
                                            <input type="radio" className="px-2" id="15" name="payment-radio">
                                            <label className="label-four" htmlFor="15">Pay with PayPal</label>
                                            <div className="img-div">
                                                <img src="img/Image_18.png" alt="">
                                            </div>
                                        </div>  */}
                      <div className="gift-cards mt-4">
                        <h3>Gift Cards</h3>
                        <div className="bg-white to-select  mt-3 d-flex align-items-center">
                          <a href="#">
                            <i className="fa-solid fa-gift"></i>Redeem a gift
                            card
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="tab-pane fade" id="payment" role="tabpanel" aria-labelledby="payment-tab">  */}
                {/* <h3>Choose A Payment Method</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, nostrum.</p>
                                <div className="payment-method payment-tab">

                                    <div className="select-method">
                                        <div className="cards-div bg-white">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <input type="radio" className="px-2" id="4" name="payment-radio">
                                                <label htmlFor="4" className="label-four">Card</label>
                                                <div className="img-div">
                                                    <img src="img/Image_17.png" alt="">
                                                </div>
                                            </div>
                                            <div className="payment-card">
                                                <div className="display-click mt-3">
                                                    <input type="checkbox" className="px-2" id="5">
                                                    <label htmlFor="5" className="name-label">Name On Card<span>*</span></label>
                                                    <input type="text" className="to-select mt-2">
                                                    <div className="payment-card payment-card-img mt-3">
                                                        <div className="img-div1"><i className="fa-solid fa-credit-card"></i></div>
                                                        <input type="checkbox" className="px-2" id="5">
                                                        <label htmlFor="5" className="name-label">Card Number<span>*</span></label>
                                                        <input type="text" className="to-select mt-2">
                                                        <div className="img-div2"><i className="fa-solid fa-lock"></i></div>
                                                    </div>
                                                    <div className="payment-card  mt-3">
                                                        <input type="checkbox" className="px-2" id="5">
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <label htmlFor="5" className="name-label">Expiration Date<span>*</span></label>
                                                                <div className="expiration-left  mt-2">
                                                                    <select className="to-select" id="">
                                                                                <option value="industry" >1</option>
                                                                                <option value="industry" >1</option>
                                                                                <option value="industry" >1</option>
                                                                                <option value="industry" >1</option>
                                                                                <option value="industry">1</option>
                                                                            </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <label htmlFor=""> </label>
                                                                <div className="expiration-left mt-2">
                                                                    <select className="to-select" id="">
                                                                                <option value="industry" >2022</option>
                                                                                <option value="industry" >2022</option>
                                                                                <option value="industry" >2022</option>
                                                                                <option value="industry" >2022</option>
                                                                                <option value="industry">2022</option>
                                                                            </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3"></div>
                                                            <div className="col-md-3">
                                                                <div className="code mt-3 mt-md-0">
                                                                    <label htmlFor="number">Security Code<span>*</span></label>
                                                                    <input type="number" name="" className="to-select mt-2" id="">
                                                                    <div className="img-div2"><i className="fa-solid fa-lock"></i></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="deliver-policy mt-3 d-grid">
                                                        <input type="checkbox" className="px-2" id="10">
                                                        <label htmlFor="10" className="policy-label">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, quam.</label>
                                                        <input type="checkbox" className="px-2" id="11">
                                                        <label htmlFor="11" className="policy-label mt-3">Lorem ipsum dolor sit</label>
                                                    </div>
                                                    <div className="btn-div d-grid mt-4">
                                                        <button>
                                                            <a href="#">Review Your Order</a>
                                                        </button>
                                                    </div>
                                                </div>

                                            </div>


                                        </div>
                                         <div className="bg-white mt-4 mt-md-5 d-flex align-items-center justify-content-between payment-div">
                                            <input type="radio" className="px-2" id="15" name="payment-radio">
                                            <label className="label-four" htmlFor="15">Pay with PayPal</label>
                                            <div className="img-div">
                                                <img src="img/Image_18.png" alt="">
                                            </div>
                                        </div>  */}
                {/* <div className="gift-cards mt-4">
                                            <h3>Gift Cards</h3>
                                            <div className="bg-white to-select  mt-3 d-flex align-items-center">
                                                <a href="#"><i className="fa-solid fa-gift"></i>Redeem a gift card</a>
                                            </div>
                                        </div>
                                    </div> */}
                {/* </div>   */}
              </div>
              {/* <div className="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">...</div> */}
            </div>
            <div className="col-md-6">
              <div className="right-detail">
                <div className="check-prod ">
                  <div className="row">
                    <div className="col-lg-3 col-sm-12">
                      <img
                        className="cartproductimg"
                        src={Image1}
                        width="100%"
                      />
                    </div>
                    <div className="col-lg-6 col-sm-12">
                      <div className="cartproduct">
                        <h6>Custom Logo Design, Business Logo Design</h6>
                        <p>Logo Packages: Logo Design [USD 11.95]</p>
                        {/* <a>Add Ons:</a>
                                                <a href="#">Business Card</a>
                                                <a href="#">Flyer</a>
                                                <a href="#">Envelope</a>  */}
                        {/* <div className="qty mt-3">
                                                    <span className="minus">-</span>
                                                    <input type="number" className="count" name="qty" value="1">
                                                    <span className="plus">+</span>
                                                </div>  */}
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-12 text-end">
                      <div className="cartcontent check-del">
                        <a href="#">
                          <i className="fa-solid fa-trash-can"></i>
                        </a>
                        <h5>USD 595.97</h5>
                        <h6>
                          <del>USD 1195.5</del>
                        </h6>
                        {/* <p>(USD 11.95 Each)</p> */}
                      </div>
                      {/* <div className="cartdelivery my-auto">
                                                <p>Delivery Time: 20 Jan</p>
                                                <p>From United States</p>
                                            </div> */}
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  {/* <p className="howupay">Item List</p>
                                    <p className="processpayment">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>  */}
                  {/* <div className="inlineimgs">
                                        <i className="fab fa-cc-paypal"></i>
                                    </div>  */}
                  <p className="itemtotal">
                    Item(s) total <span>USD 1991.50</span>
                  </p>
                  {/* <p className="shopdiscount">Shop discount <span>-USD 1394.50</span></p>  */}
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
                  <button className="commonbtn" style={{ width: "100%" }}>
                    <a href="checkout.html" className="combtn">
                      Checkout <span>Now</span>
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
