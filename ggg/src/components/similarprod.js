import React from "react";
import ImageSmall1 from "../images/s1.png";
import ImageSmall2 from "../images/s2.png";
import ImageSmall3 from "../images/s3.png";
import ImageSmall4 from "../images/s4.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const SimilarProd = () => {
  return (
    <>
      <div className="row similar-prod-row">
        <div className="col-md-12">
          <div className="similar-heading">
            <h5>Similar Products</h5>
          </div>
          <div className="similar-prod-carousel">
            <OwlCarousel
              className="owl-theme similar-carousel"
              items={4}
              loop={true}
              margin={10}
              nav={true}
              dots={false}
              autoplay={false}
            >
              <div className="item">
                <div className="card">
                  <img
                    src={ImageSmall1}
                    className="card-img-top"
                    alt="mug-img"
                  />
                  <div className="card-body">
                    <p>Lorem ipsum dolor sit amet...</p>
                    <p>
                      <strong>USD 12.80</strong>{" "}
                      <span className="discount pink fs-sm">USD 20.00</span>
                      <span className="pink fs-sm">(60% Off)</span>
                    </p>
                    <p>
                      <span className="highlight-text fs-sm">popular</span>{" "}
                      (12345 Sales)
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card">
                  <img
                    src={ImageSmall2}
                    className="card-img-top"
                    alt="mug-img"
                  />
                  <div className="card-body">
                    <p>Lorem ipsum dolor sit amet...</p>
                    <p>
                      <strong>USD 12.80</strong>{" "}
                      <span className="discount pink fs-sm">USD 20.00</span>
                      <span className="pink fs-sm">(60% Off)</span>
                    </p>
                    <p>
                      <span className="highlight-text fs-sm">popular</span>{" "}
                      (12345 Sales)
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card">
                  <img
                    src={ImageSmall3}
                    className="card-img-top"
                    alt="mug-img"
                  />
                  <div className="card-body">
                    <p>Lorem ipsum dolor sit amet...</p>
                    <p>
                      <strong>USD 12.80</strong>{" "}
                      <span className="discount pink fs-sm">USD 20.00</span>
                      <span className="pink fs-sm">(60% Off)</span>
                    </p>
                    <p>
                      <span className="highlight-text fs-sm">popular</span>{" "}
                      (12345 Sales)
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card">
                  <img
                    src={ImageSmall3}
                    className="card-img-top"
                    alt="mug-img"
                  />
                  <div className="card-body">
                    <p>Lorem ipsum dolor sit amet...</p>
                    <p>
                      <strong>USD 12.80</strong>{" "}
                      <span className="discount pink fs-sm">USD 20.00</span>
                      <span className="pink fs-sm">(60% Off)</span>
                    </p>
                    <p>
                      <span className="highlight-text fs-sm">popular</span>{" "}
                      (12345 Sales)
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card">
                  <img
                    src={ImageSmall1}
                    className="card-img-top"
                    alt="mug-img"
                  />
                  <div className="card-body">
                    <p>Lorem ipsum dolor sit amet...</p>
                    <p>
                      <strong>USD 12.80</strong>{" "}
                      <span className="discount pink fs-sm">USD 20.00</span>
                      <span className="pink fs-sm">(60% Off)</span>
                    </p>
                    <p>
                      <span className="highlight-text fs-sm">popular</span>{" "}
                      (12345 Sales)
                    </p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
            {/* <div className="owl-carousel similar-carousel owl-theme mt-4">
              <div className="item">
                <div className="card">
                  <img
                    src={ImageSmall1}
                    className="card-img-top"
                    alt="mug-img"
                  />
                  <div className="card-body">
                    <p>Lorem ipsum dolor sit amet...</p>
                    <p>
                      <strong>USD 12.80</strong>{" "}
                      <span className="discount pink fs-sm">USD 20.00</span>
                      <span className="pink fs-sm">(60% Off)</span>
                    </p>
                    <p>
                      <span className="highlight-text fs-sm">popular</span>{" "}
                      (12345 Sales)
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card">
                  <img
                    src={ImageSmall2}
                    className="card-img-top"
                    alt="mug-img"
                  />
                  <div className="card-body">
                    <p>Lorem ipsum dolor sit amet...</p>
                    <p>
                      <strong>USD 12.80</strong>{" "}
                      <span className="discount pink fs-sm">USD 20.00</span>
                      <span className="pink fs-sm">(60% Off)</span>
                    </p>
                    <p>
                      <span className="highlight-text fs-sm">popular</span>{" "}
                      (12345 Sales)
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card">
                  <img
                    src={ImageSmall3}
                    className="card-img-top"
                    alt="mug-img"
                  />
                  <div className="card-body">
                    <p>Lorem ipsum dolor sit amet...</p>
                    <p>
                      <strong>USD 12.80</strong>{" "}
                      <span className="discount pink fs-sm">USD 20.00</span>
                      <span className="pink fs-sm">(60% Off)</span>
                    </p>
                    <p>
                      <span className="highlight-text fs-sm">popular</span>{" "}
                      (12345 Sales)
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card">
                  <img
                    src={ImageSmall4}
                    className="card-img-top"
                    alt="mug-img"
                  />
                  <div className="card-body">
                    <p>Lorem ipsum dolor sit amet...</p>
                    <p>
                      <strong>USD 12.80</strong>{" "}
                      <span className="discount pink fs-sm">USD 20.00</span>
                      <span className="pink fs-sm">(60% Off)</span>
                    </p>
                    <p>
                      <span className="highlight-text fs-sm">popular</span>{" "}
                      (12345 Sales)
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card">
                  <img
                    src={ImageSmall1}
                    className="card-img-top"
                    alt="mug-img"
                  />
                  <div className="card-body">
                    <p>Lorem ipsum dolor sit amet...</p>
                    <p>
                      <strong>USD 12.80</strong>{" "}
                      <span className="discount pink fs-sm">USD 20.00</span>
                      <span className="pink fs-sm">(60% Off)</span>
                    </p>
                    <p>
                      <span className="highlight-text fs-sm">popular</span>{" "}
                      (12345 Sales)
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default SimilarProd;
