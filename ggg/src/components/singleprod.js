import React from "react";
import Image1 from "../images/1.png";
import Image2 from "../images/2.png";
import Image3 from "../images/3.png";
import Image4 from "../images/4.png";
import ImageSmall1 from "../images/s1.png";
import ImageSmall2 from "../images/s2.png";
import ImageSmall3 from "../images/s3.png";
import ImageSmall4 from "../images/s4.png";
import Header from "../components/header";
import SingleProdDesc from "../components/singleproddesc";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import SimilarProd from "./similarprod";
import Addons from "./addons";
import PrivacyPolicy from "./privacyPolicy";
// import fancybox from "@fancyapps/fancybox";

function SingleProd() {
  return (
    <>
      <Header />
      <section className="single-prod descriptionsec">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-12">
                  <div className="right-imgs">
                    <div className="img-div position-relative">
                      {/* <ReactFancyBox thumbnail={Image1} image={Image1} />s */}
                      <a href={Image1} id="img2" data-fancybox="gallery">
                        <div className="hover-div"></div>
                        <i className="fas fa-plus"></i>
                        <img
                          src={Image1}
                          className="animated fadeIn"
                          id="img"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row row-border">
                <div className="col-md-12">
                  <div className="left-imgs mt-4">
                    <OwlCarousel
                      className="owl-theme imgs-slider"
                      items={5}
                      margin={10}
                      autoplay
                      nav={true}
                      dots={false}
                      loop
                    >
                      <div className="item">
                        <div className="img-div">
                          <img src={ImageSmall1} />
                        </div>
                      </div>
                      <div className="item">
                        <div className="img-div">
                          <img src={ImageSmall2} />
                          <div />
                        </div>
                      </div>
                      <div className="item">
                        <div className="img-div">
                          <img src={ImageSmall3} />
                          <div />
                        </div>
                      </div>
                      <div className="item">
                        <div className="img-div">
                          <img src={ImageSmall4} />
                          <div />
                        </div>
                      </div>
                      <div className="item">
                        <div className="img-div">
                          <img src={ImageSmall1} />
                          <div />
                        </div>
                      </div>
                    </OwlCarousel>
                    {/* <div className="owl-carousel imgs-slider owl-theme">
              <div className="item"> */}
                    {/* <!-- <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true"> --> */}
                    {/* <div className="img-div">
                  <img */}
                    {/* src={"img/s1.png"} */}
                    {/* id="img2"
                    //   onclick="clickimg(this.src)"
                    alt=""
                  /> */}
                    {/* </div> */}
                    {/* {/*<!-- </button> -->*/}
                    {/* </div>
              <div className="item"> */}
                    {/* <!-- <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false"> --> */}
                    {/* <div className="img-div">
                  <img
                    src="img/s2.png"
                    id="img2" */}
                    {/* //   onclick="clickimg(this.src)"
                    alt=""
                  />
                </div> */}

                    {/*<!-- </button> -->*/}
                    {/* </div>
              <div className="item"> */}
                    {/* <!-- <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false"> --> */}
                    {/* <div className="img-div">
                  <img
                    src="img/s3.png"
                    id="img2" */}
                    {/* //   onclick="clickimg(this.src)"
                    alt=""
                  />
                </div> */}
                    {/*<!-- </button> -->*/}
                    {/* </div>
              <div className="item"> */}
                    {/* <!-- <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false"> --> */}
                    {/* <div className="img-div">
                  <img
                    src="img/4.png"
                    id="img2" */}
                    {/* //   onclick="clickimg(this.src)"
                    alt=""
                  />
                </div> */}
                    {/*<!-- </button> -->*/}
                    {/* </div>
              <div className="item"> */}
                    {/* <!-- <button className="nav-link" id="v-pills-coke-tab" data-bs-toggle="pill" data-bs-target="#v-pills-coke" type="button" role="tab" aria-controls="v-pills-coke" aria-selected="false"> --> */}
                    {/* <div className="img-div">
                  <img
                    src="img/1.png"
                    id="img2" */}
                    {/* //   onclick="clickimg(this.src)"
                    alt=""
                  />
                </div> */}
                    {/*<!-- </button> -->*/}
                    {/* </div>
          </div> */}
                  </div>
                </div>
              </div>
              {/* <div className="row mt-3 prod-content-row">
                <div className="col-md-12">
                  <div className="prod-content">
                    <div className="prod-desc">
                      <h5>Description: </h5>
                    </div>
                    <div className="prod-details">
                      <p>
                        {" "}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Accusantium quaerat facere dolorum possimus ipsum
                        doloremque tempora at inventore quam suscipit.
                      </p>
                      <p>
                        {" "}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Accusantium quaerat facere dolorum possimus ipsum
                        doloremque tempora at inventore quam suscipit.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Debitis cupiditate cum facere id omnis corrupti et
                        tenetur, sint labore obcaecati saepe repellendus
                        accusamus quibusdam, similique, facilis aperiam. Animi,
                        autem dolorem.
                      </p>
                    </div>
                  </div>
                </div>
              </div> */}
              <SingleProdDesc />
              <SimilarProd />
              {/* <div className="row similar-prod-row">
                <div className="col-md-12">
                  <div className="similar-heading">
                    <h5>Similar Products</h5>
                  </div>
                  <div className="similar-prod-carousel">
                    <div className="owl-carousel similar-carousel owl-theme mt-4">
                      <div className="item">
                        <div className="card">
                          <img
                            src="img/1.png"
                            className="card-img-top"
                            alt="mug-img"
                          />
                          <div className="card-body">
                            <p>Lorem ipsum dolor sit amet...</p>
                            <p>
                              <strong>USD 12.80</strong>{" "}
                              <span className="discount pink fs-sm">
                                USD 20.00
                              </span>
                              <span className="pink fs-sm">(60% Off)</span>
                            </p>
                            <p>
                              <span className="highlight-text fs-sm">
                                popular
                              </span>{" "}
                              (12345 Sales)
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="card">
                          <img
                            src="img/2.png"
                            className="card-img-top"
                            alt="mug-img"
                          />
                          <div className="card-body">
                            <p>Lorem ipsum dolor sit amet...</p>
                            <p>
                              <strong>USD 12.80</strong>{" "}
                              <span className="discount pink fs-sm">
                                USD 20.00
                              </span>
                              <span className="pink fs-sm">(60% Off)</span>
                            </p>
                            <p>
                              <span className="highlight-text fs-sm">
                                popular
                              </span>{" "}
                              (12345 Sales)
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="card">
                          <img
                            src="img/3.png"
                            className="card-img-top"
                            alt="mug-img"
                          />
                          <div className="card-body">
                            <p>Lorem ipsum dolor sit amet...</p>
                            <p>
                              <strong>USD 12.80</strong>{" "}
                              <span className="discount pink fs-sm">
                                USD 20.00
                              </span>
                              <span className="pink fs-sm">(60% Off)</span>
                            </p>
                            <p>
                              <span className="highlight-text fs-sm">
                                popular
                              </span>{" "}
                              (12345 Sales)
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="card">
                          <img
                            src="img/4.png"
                            className="card-img-top"
                            alt="mug-img"
                          />
                          <div className="card-body">
                            <p>Lorem ipsum dolor sit amet...</p>
                            <p>
                              <strong>USD 12.80</strong>{" "}
                              <span className="discount pink fs-sm">
                                USD 20.00
                              </span>
                              <span className="pink fs-sm">(60% Off)</span>
                            </p>
                            <p>
                              <span className="highlight-text fs-sm">
                                popular
                              </span>{" "}
                              (12345 Sales)
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="card">
                          <img
                            src="img/1.png"
                            className="card-img-top"
                            alt="mug-img"
                          />
                          <div className="card-body">
                            <p>Lorem ipsum dolor sit amet...</p>
                            <p>
                              <strong>USD 12.80</strong>{" "}
                              <span className="discount pink fs-sm">
                                USD 20.00
                              </span>
                              <span className="pink fs-sm">(60% Off)</span>
                            </p>
                            <p>
                              <span className="highlight-text fs-sm">
                                popular
                              </span>{" "}
                              (12345 Sales)
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="col-md-6">
              <div className="right-side">
                <div className="right-heading">
                  <h3>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit....
                  </h3>
                </div>
                <div className="btn-div py-2">
                  <a href="#">Best Seller</a>
                </div>
                <div className="right-pricing d-flex justify-content-between align-items-center">
                  <h2 className="pink">
                    USD 12.80
                    <sub>
                      <span className="text-dark">USD 31.99</span>{" "}
                      <span className="text-dark"> (60% Off)</span>
                    </sub>
                  </h2>
                  <h6 className="pink">
                    <i className="fas fa-check"></i> In Stock
                  </h6>
                </div>
                <div className="right-pricing-text">
                  <p>Local Taxes Included (Where Applicable)</p>
                </div>
                <Addons />
                {/* <div className="addons">
                  <h3>Addons:</h3>

                  <div
                    className="shadowshowlistone list-shadow position-relative"
                    id="shadowshowlistone"
                  >
                    <div className="addons-business  d-flex align-items-center">
                      <input type="checkbox" className="px-2" id="1" />
                      <label htmlFor="1">Lorem, ipsum.</label>
                      <p className="ms-auto">$50.00</p>
                    </div>
                    <div className="addons-business  d-flex align-items-center">
                      <input type="checkbox" className="px-2" id="business" />
                      <label htmlFor="business">Lorem, ipsum.</label>
                      <p className="ms-auto">$50.00</p>
                    </div>
                    <div className="addons-business  d-flex align-items-center">
                      <input type="checkbox" className="px-2" id="another" />
                      <label htmlFor="another">Lorem, ipsum.</label>
                      <p className="ms-auto">$50.00</p>
                    </div>
                  </div>
                  <div
                    className="shadowshowlisttwo position-relative seemoreoption"
                    id="shadowshowlisttwo"
                  >
                    <div className="addons-business  d-flex align-items-center">
                      <input type="checkbox" className="px-2" id="2" />
                      <label htmlFor="2">Lorem, ipsum.</label>
                      <p className="ms-auto">$50.00</p>
                    </div>
                    <div className="addons-business  d-flex align-items-center">
                      <input type="checkbox" className="px-2" id="business2" />
                      <label htmlFor="business2">Lorem, ipsum.</label>
                      <p className="ms-auto">$50.00</p>
                    </div>
                    <div className="addons-business  d-flex align-items-center">
                      <input type="checkbox" className="px-2" id="another2" />
                      <label htmlFor="another2">Lorem, ipsum.</label>
                      <p className="ms-auto">$50.00</p>
                    </div>
                    <div className="addons-business  d-flex align-items-center">
                      <input type="checkbox" className="px-2" id="anotherone" />
                      <label htmlFor="anotherone">Lorem, ipsum.</label>
                      <p className="ms-auto">$50.00</p>
                    </div>
                  </div>

                  <div className="see-more-btn">
                    <a>
                      See More <i className="fas fa-chevron-down"></i>
                    </a>
                  </div>
                  <div className="addon-btn-div mt-4 d-grid">
                    <button>
                      <a href="#">Add To Cart</a>
                    </button>
                    <button>
                      <a href="#">Chat With Us</a>
                    </button>
                  </div>

                  <div className="addon-optional htmlFormcoldiv mt-4">
                    <select
                      className="htmlForm-select select2-icon"
                      id="industryselect"
                    >
                      <option value="industry" data-icon="">
                        Add your personalization (optional)
                      </option>
                      <option value="industry" data-icon="">
                        Industry
                      </option>
                      <option value="industry" data-icon="">
                        Industry
                      </option>
                      <option value="industry" data-icon="">
                        Industry
                      </option>
                      <option value="industry" data-icon="">
                        Industry
                      </option>
                    </select>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ut, eligendi. Illum beatae ducimus accusamus eius, enim
                      cupiditate sint ex laboriosam?
                    </p>
                  </div>
                  <div className="message-div mt-4">
                    <textarea name="" id="" cols="30" rows="3"></textarea>
                    <hr />
                  </div>
                </div> */}
                <PrivacyPolicy />
                {/* <div className="policy mt-4">
                  <h3>Privacy Policy:</h3>
                </div>
                <div className="right-prods mt-4">
                  <div className="prod-box d-flex align-items-center">
                    <i className="fas fa-truck"></i>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Sint eos porro reiciendis rerum natus officia?{" "}
                    </p>
                  </div>
                  <div className="prod-box d-flex align-items-center mt-3">
                    <i className="fas fa-truck"></i>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Sint eos porro reiciendis rerum natus officia?{" "}
                    </p>
                  </div>
                  <div className="prod-box d-flex align-items-center mt-3">
                    <i className="fas fa-truck"></i>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Sint eos porro reiciendis rerum natus officia?{" "}
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SingleProd;
