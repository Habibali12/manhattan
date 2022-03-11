import React from "react";

const Addons = () => {
  return (
    <>
      <div className="addons">
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

        <div className="addon-optional formcoldiv mt-4">
          <select className="form-select select2-icon" id="industryselect">
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
            eligendi. Illum beatae ducimus accusamus eius, enim cupiditate sint
            ex laboriosam?
          </p>
        </div>
        <div className="message-div mt-4">
          <textarea name="" id="" cols="30" rows="3"></textarea>
          <hr />
        </div>
      </div>
    </>
  );
};
export default Addons;
