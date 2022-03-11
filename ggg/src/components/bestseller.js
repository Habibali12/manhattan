import React from "react";
import Image1 from "../images/1.png";
import Image2 from "../images/2.png";
import Image3 from "../images/3.png";
import Image4 from "../images/4.png";
import { Link } from "react-router-dom";
import SingleProd from "./singleprod";
import OwlCarousel from "react-owl-carousel";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const BestSeller = () => {
  return (
    <section className="mb-35">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-sm-12 mb-3">
            <div className="headingdivinnersec">
              <h4>Weekly Bestsellers</h4>
            </div>
          </div>
        </div>
        <div className="row sellerrow">
          <div className="col">
            <div className="card bestsellercard">
              <div className="img-div">
                <OwlCarousel
                  className="owl-theme img-carousel-details"
                  items={1}
                  loop={true}
                  margin={50}
                  nav={false}
                  dots={false}
                  autoplay={false}
                  autoplayHoverPause={false}
                  autoplayTimeout={1200}
                  autoplaySpeed={800}
                  animateIn={"fadeIn"}
                  animateOut={"fadeOut"}
                  smartSpeed={600}
                >
                  <div className="item">
                    <img src={Image1} />
                  </div>
                  <div className="item">
                    <img src={Image2} />
                  </div>
                  <div className="item">
                    <img src={Image4} />
                  </div>
                </OwlCarousel>
                {/* <div className="owl-carousel  owl-theme">
                  <div className="item">
                    <img
                      src={Image1}
                      className="card-img-top"
                      alt="Bestsellers"
                    />
                  </div>
                  {/* <div className="item">
                    <img
                      src={Image2}
                      className="card-img-top"
                      alt="Bestsellers"
                    />
                  </div>
                  <div className="item">
                    <img
                      src={Image3}
                      className="card-img-top"
                      alt="Bestsellers"
                    />
                  </div> */}
                {/* </div>  */}
                {/* <OwlCarousel
                  items={3}
                  className="owl-theme"
                  loop
                  nav
                  margin={8}
                  key={0}
                >
                  <div>
                    <img className="img" src={Image1} />
                  </div>
                  <div>
                    <img className="img" src={Image2} />
                  </div>
                  <div>
                    <img className="img" src={Image4} />
                  </div>
                </OwlCarousel> */}
              </div>

              <div className="card-body">
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                </p>
                <h6>
                  <span>Popular</span> (12345 sales)
                </h6>
                <h5>
                  USD 12.80{" "}
                  <span>
                    <del>USD 31.99</del> (60% OFF)
                  </span>
                </h5>

                <div className="btn-div">
                  <div className="details-btn">
                    {/* {/*<a href="single-product.html" className="detailbtn">
                      View Details
                    </a>*/}
                    <Link to="SingleProd">View Details</Link>
                  </div>
                  <div className="side-div d-flex">
                    <a className="sellercartbtn" data-tog-for="cart">
                      <i className="fas fa-shopping-cart"></i>
                    </a>
                    <a className="sellercartbtn" data-tog-for="wish">
                      <i className="fas fa-heart"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card bestsellercard">
              <div className="img-div">
                <OwlCarousel
                  className="owl-theme img-carousel-details"
                  items={1}
                  loop={true}
                  margin={50}
                  nav={false}
                  dots={false}
                  autoplay={false}
                  autoplayHoverPause={false}
                  autoplayTimeout={1200}
                  autoplaySpeed={800}
                  animateIn={"fadeIn"}
                  animateOut={"fadeOut"}
                  smartSpeed={600}
                >
                  <div className="item">
                    <img src={Image1} />
                  </div>
                  <div className="item">
                    <img src={Image2} />
                  </div>
                  <div className="item">
                    <img src={Image4} />
                  </div>
                </OwlCarousel>
                {/* <div className="owl-carousel img-carousel-details owl-theme">
                  <div className="item">
                    <img
                      src={Image2}
                      className="card-img-top"
                      alt="Bestsellers"
                    />
                  </div> */}
                {/* <div className="item">
                    <img
                      src="img/1.png"
                      className="card-img-top"
                      alt="Bestsellers"
                    />
                  </div>
                  <div className="item">
                    <img
                      src="img/4.png"
                      className="card-img-top"
                      alt="Bestsellers"
                    />
                  </div> */}
                {/* </div> */}
              </div>

              <div className="card-body">
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                </p>
                <h6>
                  <span>Popular</span> (12345 sales)
                </h6>
                <h5>
                  USD 12.80{" "}
                  <span>
                    <del>USD 31.99</del> (60% OFF)
                  </span>
                </h5>

                <div className="btn-div">
                  <div className="details-btn">
                    {/* {/*<a href="single-product.html" className="detailbtn">
                      View Details
                    </a>*/}
                    <Link to="SingleProd">View Details</Link>
                  </div>
                  <div className="side-div d-flex">
                    <a className="sellercartbtn" data-tog-for="cart">
                      <i className="fas fa-shopping-cart"></i>
                    </a>
                    <a className="sellercartbtn" data-tog-for="wish">
                      <i className="fas fa-heart"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card bestsellercard">
              <div className="img-div">
                <OwlCarousel
                  className="owl-theme img-carousel-details"
                  items={1}
                  loop={true}
                  margin={50}
                  nav={false}
                  dots={false}
                  autoplay={false}
                  autoplayHoverPause={false}
                  autoplayTimeout={1200}
                  autoplaySpeed={800}
                  animateIn={"fadeIn"}
                  animateOut={"fadeOut"}
                  smartSpeed={600}
                >
                  <div className="item">
                    <img src={Image1} />
                  </div>
                  <div className="item">
                    <img src={Image2} />
                  </div>
                  <div className="item">
                    <img src={Image4} />
                  </div>
                </OwlCarousel>
                {/* <div className="owl-carousel img-carousel-details owl-theme">
                  <div className="item">
                    <img
                      src={Image4}
                      className="card-img-top"
                      alt="Bestsellers"
                    />
                  </div> */}
                {/* <div className="item">
                    <img
                      src="img/2.png"
                      className="card-img-top"
                      alt="Bestsellers"
                    />
                  </div>
                  <div className="item">
                    <img
                      src="img/1.png"
                      className="card-img-top"
                      alt="Bestsellers"
                    />
                  </div> */}
                {/* </div> */}
              </div>

              <div className="card-body">
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                </p>
                <h6>
                  <span>Popular</span> (12345 sales)
                </h6>
                <h5>
                  USD 12.80{" "}
                  <span>
                    <del>USD 31.99</del> (60% OFF)
                  </span>
                </h5>

                <div className="btn-div">
                  <div className="details-btn">
                    {/*<a href="single-product.html" className="detailbtn">
                      View Details
                    </a>*/}
                    <Link to="SingleProd">View Details</Link>
                  </div>
                  <div className="side-div d-flex">
                    <a className="sellercartbtn" data-tog-for="cart">
                      <i className="fas fa-shopping-cart"></i>
                    </a>
                    <a className="sellercartbtn" data-tog-for="wish">
                      <i className="fas fa-heart"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card bestsellercard">
              <div className="img-div">
                <OwlCarousel
                  className="owl-theme img-carousel-details"
                  items={1}
                  loop={true}
                  margin={50}
                  nav={false}
                  dots={false}
                  autoplay={false}
                  autoplayHoverPause={false}
                  autoplayTimeout={1200}
                  autoplaySpeed={800}
                  animateIn={"fadeIn"}
                  animateOut={"fadeOut"}
                  smartSpeed={600}
                >
                  <div className="item">
                    <img src={Image1} />
                  </div>
                  <div className="item">
                    <img src={Image2} />
                  </div>
                  <div className="item">
                    <img src={Image4} />
                  </div>
                </OwlCarousel>
                {/* <div className="owl-carousel img-carousel-details owl-theme">
                  <div className="item">
                    <img
                      src={Image1}
                      className="card-img-top"
                      alt="Bestsellers"
                    />
                  </div> */}
                {/* <div className="item">
                    <img
                      src="img/2.png"
                      className="card-img-top"
                      alt="Bestsellers"
                    />
                  </div>
                  <div className="item">
                    <img
                      src="img/4.png"
                      className="card-img-top"
                      alt="Bestsellers"
                    />
                  </div> */}
                {/* </div> */}
              </div>

              <div className="card-body">
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                </p>
                <h6>
                  <span>Popular</span> (12345 sales)
                </h6>
                <h5>
                  USD 12.80{" "}
                  <span>
                    <del>USD 31.99</del> (60% OFF)
                  </span>
                </h5>

                <div className="btn-div">
                  <div className="details-btn">
                    {/*<a href="single-product.html" className="detailbtn">
                      View Details
                    </a>*/}
                    <Link to="SingleProd">View Details</Link>
                  </div>
                  <div className="side-div d-flex">
                    <a className="sellercartbtn" data-tog-for="cart">
                      <i className="fas fa-shopping-cart"></i>
                    </a>
                    <a className="sellercartbtn" data-tog-for="wish">
                      <i className="fas fa-heart"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card bestsellercard">
              <div className="img-div">
                <OwlCarousel
                  className="owl-theme img-carousel-details"
                  items={1}
                  loop={true}
                  margin={50}
                  nav={false}
                  dots={false}
                  autoplay={false}
                  autoplayHoverPause={false}
                  autoplayTimeout={1200}
                  autoplaySpeed={800}
                  animateIn={"fadeIn"}
                  animateOut={"fadeOut"}
                  smartSpeed={600}
                >
                  <div className="item">
                    <img src={Image1} />
                  </div>
                  <div className="item">
                    <img src={Image2} />
                  </div>
                  <div className="item">
                    <img src={Image4} />
                  </div>
                </OwlCarousel>
                {/* <div className="owl-carousel img-carousel-details owl-theme">
                  <div className="item">
                    <img
                      src={Image2}
                      className="card-img-top"
                      alt="Bestsellers"
                    />
                  </div> */}
                {/* <div className="item">
                    <img
                      src="img/1.png"
                      className="card-img-top"
                      alt="Bestsellers"
                    />
                  </div>
                  <div className="item">
                    <img
                      src="img/4.png"
                      className="card-img-top"
                      alt="Bestsellers"
                    />
                  </div> */}
                {/* </div> */}
              </div>

              <div className="card-body">
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                </p>
                <h6>
                  <span>Popular</span> (12345 sales)
                </h6>
                <h5>
                  USD 12.80{" "}
                  <span>
                    <del>USD 31.99</del> (60% OFF)
                  </span>
                </h5>

                <div className="btn-div">
                  <div className="details-btn">
                    {/*<a href="single-product.html" className="detailbtn">
                      View Details
                    </a>*/}
                    <Link to="SingleProd">View Details</Link>
                  </div>
                  <div className="side-div d-flex">
                    <a className="sellercartbtn" data-tog-for="cart">
                      <i className="fas fa-shopping-cart"></i>
                    </a>
                    <a className="sellercartbtn" data-tog-for="wish">
                      <i className="fas fa-heart"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row sellerrow">
          <div className="col">
            <div className="card bestsellercard">
              <div className="img-div">
                <OwlCarousel
                  className="owl-theme img-carousel-details"
                  items={1}
                  loop={true}
                  margin={50}
                  nav={false}
                  dots={false}
                  autoplay={false}
                  autoplayHoverPause={false}
                  autoplayTimeout={1200}
                  autoplaySpeed={800}
                  animateIn={"fadeIn"}
                  animateOut={"fadeOut"}
                  smartSpeed={600}
                >
                  <div className="item">
                    <img src={Image1} />
                  </div>
                  <div className="item">
                    <img src={Image2} />
                  </div>
                  <div className="item">
                    <img src={Image4} />
                  </div>
                </OwlCarousel>
                {/* <div className="owl-carousel img-carousel-details owl-theme">
                  <div className="item">
                    <img
                      src={Image3}
                      className="card-img-top"
                      alt="Bestsellers"
                    />
                  </div> */}
                {/* <div className="item">
                    <img
                      src="img/2.png"
                      className="card-img-top"
                      alt="Bestsellers"
                    />
                  </div>
                  <div className="item">
                    <img
                      src="img/4.png"
                      className="card-img-top"
                      alt="Bestsellers"
                    />
                  </div> */}
                {/* </div> */}
              </div>

              <div className="card-body">
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                </p>
                <h6>
                  <span>Popular</span> (12345 sales)
                </h6>
                <h5>
                  USD 12.80{" "}
                  <span>
                    <del>USD 31.99</del> (60% OFF)
                  </span>
                </h5>

                <div className="btn-div">
                  <div className="details-btn">
                    {/*<a href="single-product.html" className="detailbtn">
                      View Details
                    </a>*/}
                    <Link to="SingleProd">View Details</Link>
                  </div>
                  <div className="side-div d-flex">
                    <a className="sellercartbtn" data-tog-for="cart">
                      <i className="fas fa-shopping-cart"></i>
                    </a>
                    <a className="sellercartbtn" data-tog-for="wish">
                      <i className="fas fa-heart"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card bestsellercard">
              <div className="img-div">
                <OwlCarousel
                  className="owl-theme img-carousel-details"
                  items={1}
                  loop={true}
                  margin={50}
                  nav={false}
                  dots={false}
                  autoplay={false}
                  autoplayHoverPause={false}
                  autoplayTimeout={1200}
                  autoplaySpeed={800}
                  animateIn={"fadeIn"}
                  animateOut={"fadeOut"}
                  smartSpeed={600}
                >
                  <div className="item">
                    <img src={Image1} />
                  </div>
                  <div className="item">
                    <img src={Image2} />
                  </div>
                  <div className="item">
                    <img src={Image4} />
                  </div>
                </OwlCarousel>
                {/* <div className="owl-carousel img-carousel-details owl-theme">
                  <div className="item">
                    <img
                      src={Image2}
                      className="card-img-top"
                      alt="Bestsellers"
                    />
                  </div> */}
                {/* <div className="item">
                    <img
                      src="img/1.png"
                      className="card-img-top"
                      alt="Bestsellers"
                    />
                  </div>
                  <div className="item">
                    <img
                      src="img/4.png"
                      className="card-img-top"
                      alt="Bestsellers"
                    />
                  </div> */}
                {/* </div> */}
              </div>

              <div className="card-body">
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                </p>
                <h6>
                  <span>Popular</span> (12345 sales)
                </h6>
                <h5>
                  USD 12.80{" "}
                  <span>
                    <del>USD 31.99</del> (60% OFF)
                  </span>
                </h5>

                <div className="btn-div">
                  <div className="details-btn">
                    {/*<a href="single-product.html" className="detailbtn">
                      View Details
                    </a>*/}
                    <Link to="SingleProd">View Details</Link>
                  </div>
                  <div className="side-div d-flex">
                    <a className="sellercartbtn" data-tog-for="cart">
                      <i className="fas fa-shopping-cart"></i>
                    </a>
                    <a className="sellercartbtn" data-tog-for="wish">
                      <i className="fas fa-heart"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card bestsellercard">
              <div className="img-div">
                <OwlCarousel
                  className="owl-theme img-carousel-details"
                  items={1}
                  loop={true}
                  margin={50}
                  nav={false}
                  dots={false}
                  autoplay={false}
                  autoplayHoverPause={false}
                  autoplayTimeout={1200}
                  autoplaySpeed={800}
                  animateIn={"fadeIn"}
                  animateOut={"fadeOut"}
                  smartSpeed={600}
                >
                  <div className="item">
                    <img src={Image1} />
                  </div>
                  <div className="item">
                    <img src={Image2} />
                  </div>
                  <div className="item">
                    <img src={Image4} />
                  </div>
                </OwlCarousel>
                {/* <div className="owl-carousel img-carousel-details owl-theme">
                  <div className="item">
                    <img
                      src={Image2}
                      className="card-img-top"
                      alt="Bestsellers"
                    />
                  </div> */}
                {/* <div className="item">
                    <img
                      src="img/2.png"
                      className="card-img-top"
                      alt="Bestsellers"
                    />
                  </div>
                  <div className="item">
                    <img
                      src="img/1.png"
                      className="card-img-top"
                      alt="Bestsellers"
                    />
                  </div> */}
                {/* </div> */}
              </div>

              <div className="card-body">
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                </p>
                <h6>
                  <span>Popular</span> (12345 sales)
                </h6>
                <h5>
                  USD 12.80{" "}
                  <span>
                    <del>USD 31.99</del> (60% OFF)
                  </span>
                </h5>

                <div className="btn-div">
                  <div className="details-btn">
                    {/*<a href="single-product.html" className="detailbtn">
                      View Details
                    </a>*/}
                    <Link to="SingleProd">View Details</Link>
                  </div>
                  <div className="side-div d-flex">
                    <a className="sellercartbtn" data-tog-for="cart">
                      <i className="fas fa-shopping-cart"></i>
                    </a>
                    <a className="sellercartbtn" data-tog-for="wish">
                      <i className="fas fa-heart"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card bestsellercard">
              <div className="img-div">
                <OwlCarousel
                  className="owl-theme img-carousel-details"
                  items={1}
                  loop={true}
                  margin={50}
                  nav={false}
                  dots={false}
                  autoplay={false}
                  autoplayHoverPause={false}
                  autoplayTimeout={1200}
                  autoplaySpeed={800}
                  animateIn={"fadeIn"}
                  animateOut={"fadeOut"}
                  smartSpeed={600}
                >
                  <div className="item">
                    <img src={Image1} />
                  </div>
                  <div className="item">
                    <img src={Image2} />
                  </div>
                  <div className="item">
                    <img src={Image4} />
                  </div>
                </OwlCarousel>
                {/* <div className="owl-carousel img-carousel-details owl-theme">
                  <div className="item">
                    <img
                      src={Image1}
                      className="card-img-top"
                      alt="Bestsellers"
                    />
                  </div> */}
                {/* <div className="item">
                    <img
                      src="img/2.png"
                      className="card-img-top"
                      alt="Bestsellers"
                    />
                  </div>
                  <div className="item">
                    <img
                      src="img/4.png"
                      className="card-img-top"
                      alt="Bestsellers"
                    />
                  </div> */}
                {/* </div> */}
              </div>

              <div className="card-body">
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                </p>
                <h6>
                  <span>Popular</span> (12345 sales)
                </h6>
                <h5>
                  USD 12.80{" "}
                  <span>
                    <del>USD 31.99</del> (60% OFF)
                  </span>
                </h5>

                <div className="btn-div">
                  <div className="details-btn">
                    {/*<a href="single-product.html" className="detailbtn">
                      View Details
                    </a>*/}
                    <Link to="SingleProd">View Details</Link>
                  </div>
                  <div className="side-div d-flex">
                    <a className="sellercartbtn" data-tog-for="cart">
                      <i className="fas fa-shopping-cart"></i>
                    </a>
                    <a className="sellercartbtn" data-tog-for="wish">
                      <i className="fas fa-heart"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card bestsellercard">
              <div className="img-div">
                <OwlCarousel
                  className="owl-theme img-carousel-details"
                  items={1}
                  loop={true}
                  margin={50}
                  nav={false}
                  dots={false}
                  autoplay={false}
                  autoplayHoverPause={false}
                  autoplayTimeout={1200}
                  autoplaySpeed={800}
                  animateIn={"fadeIn"}
                  animateOut={"fadeOut"}
                  smartSpeed={600}
                >
                  <div className="item">
                    <img src={Image1} />
                  </div>
                  <div className="item">
                    <img src={Image2} />
                  </div>
                  <div className="item">
                    <img src={Image4} />
                  </div>
                </OwlCarousel>
                {/* <div className="owl-carousel img-carousel-details owl-theme">
                  <div className="item">
                    <img
                      src={Image2}
                      className="card-img-top"
                      alt="Bestsellers"
                    />
                  </div> */}
                {/* <div className="item">
                    <img
                      src="img/1.png"
                      className="card-img-top"
                      alt="Bestsellers"
                    />
                  </div>
                  <div className="item">
                    <img
                      src="img/4.png"
                      className="card-img-top"
                      alt="Bestsellers"
                    />
                  </div> */}
                {/* </div> */}
              </div>

              <div className="card-body">
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                </p>
                <h6>
                  <span>Popular</span> (12345 sales)
                </h6>
                <h5>
                  USD 12.80
                  <span>
                    <del>USD 31.99</del> (60% OFF)
                  </span>
                </h5>

                <div className="btn-div">
                  <div className="details-btn">
                    {/*<a href="single-product.html" className="detailbtn">
                      View Details
                    </a>*/}
                    <Link to="SingleProd">View Details</Link>
                  </div>
                  <div className="side-div d-flex">
                    <a className="sellercartbtn" data-tog-for="cart">
                      <i className="fas fa-shopping-cart"></i>
                    </a>
                    <a className="sellercartbtn" data-tog-for="wish">
                      <i className="fas fa-heart"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
