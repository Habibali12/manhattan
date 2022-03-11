import React from "react";
import Image1 from "../images/1.png";
import Image2 from "../images/2.png";
import Image3 from "../images/3.png";
import Image4 from "../images/4.png";

const ProdList = () => {
  return (
    <div className="col-lg-7 col-sm-12 cartpagelistcol">
      <div className="row mb-5">
        <div className="col-lg-4 col-sm-12">
          <img className="cartproductimg" src={Image1} width="100%" />
        </div>
        <div className="col-lg-5 col-sm-12">
          <div className="cartproduct">
            <h6>Custom Logo Design, Business Logo Design</h6>
            <p>Logo Packages: Logo Design [USD 11.95]</p>
            <a>Add Ons:</a>
            <a href="#">Business Card</a>
            <a href="#">Flyer</a>
            <a href="#">Envelope</a>
            <div className="qty mt-3">
              <span className="minus">-</span>
              <input type="number" className="count" name="qty" value="1" />
              <span className="plus">+</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-12 text-end">
          <div className="cartcontent">
            <a href="#">
              <i className="fal fa-trash-alt"></i>
            </a>
            <h5>USD 595.97</h5>
            <h6>
              <del>USD 1195.5</del>
            </h6>
            <p>(USD 11.95 Each)</p>
          </div>
          <div className="cartdelivery my-auto">
            <p>Delivery Time: 20 Jan</p>
            <p>From United States</p>
          </div>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-lg-4 col-sm-12">
          <img className="cartproductimg" src={Image1} width="100%" />
        </div>
        <div className="col-lg-5 col-sm-12">
          <div className="cartproduct">
            <h6>Custom Logo Design, Business Logo Design</h6>
            <p>Logo Packages: Logo Design [USD 11.95]</p>
            <a>Add Ons:</a>
            <a href="#">Business Card</a>
            <a href="#">Flyer</a>
            <a href="#">Envelope</a>
            <div className="qty mt-3">
              <span className="minus">-</span>
              <input type="number" className="count" name="qty" value="1" />
              <span className="plus">+</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-12 text-end">
          <div className="cartcontent">
            <a href="#">
              <i className="fal fa-trash-alt"></i>
            </a>
            <h5>USD 595.97</h5>
            <h6>
              <del>USD 1195.5</del>
            </h6>
            <p>(USD 11.95 Each)</p>
          </div>
          <div className="cartdelivery my-auto">
            <p>Delivery Time: 20 Jan</p>
            <p>From United States</p>
          </div>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-lg-4 col-sm-12">
          <img className="cartproductimg" src={Image2} width="100%" />
        </div>
        <div className="col-lg-5 col-sm-12">
          <div className="cartproduct">
            <h6>Custom Logo Design, Business Logo Design</h6>
            <p>Logo Packages: Logo Design [USD 11.95]</p>
            <a>Add Ons:</a>
            <a href="#">Business Card</a>
            <a href="#">Flyer</a>
            <a href="#">Envelope</a>
            <div className="qty mt-3">
              <span className="minus">-</span>
              <input type="number" className="count" name="qty" value="1" />
              <span className="plus">+</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-12 text-end">
          <div className="cartcontent">
            <a href="#">
              <i className="fal fa-trash-alt"></i>
            </a>
            <h5>USD 595.97</h5>
            <h6>
              <del>USD 1195.5</del>
            </h6>
            <p>(USD 11.95 Each)</p>
          </div>
          <div className="cartdelivery my-auto">
            <p>Delivery Time: 20 Jan</p>
            <p>From United States</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProdList;
