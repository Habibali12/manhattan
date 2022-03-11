import React from "react";
import Logo from "../images/logo.svg";
import Cart from "../components/cart";
import { Link } from "react-router-dom";
import $ from "jquery";
import Wish from "../images/best1.jpg";

const Header = () => {
  const styles = {
    border: {
      borderLeft: "1px solid #dde1e2",
    },
  };

  const opensidebarwish = (e) => {
    e.preventDefault();
    /*document.getElementById("mySidenavwish").style.width = "400px";*/
    document.getElementById("sidenavwish").style.transform = "translate(0,0)";
    document.getElementById("overlay").style.display = "block";
    $("body").addClass("sideopened");
    document.documentElement.style.overflow = "hidden";
  };
  const closesidebarwish = () => {
    /*document.getElementById("mySidenavwish").style.width = "0px";*/
    document.getElementById("sidenavwish").style.transform =
      "translate(100%, 0) scale(1)";
    document.getElementById("overlay").style.display = "none";
    document.documentElement.style.overflow = "auto";
    $("body").removeClass("sideopened");
  };

  return (
    <>
      <div id="overlay"></div>
      <header className="desktopheader header">
        <div className="topheader">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <a
                  href="mailto:info@designmanhattan.com"
                  className="topheaderinfo"
                  style={styles.border}
                >
                  <i className="fas fa-envelope"></i>
                  &nbsp;&nbsp;info@designmanhattan.com
                </a>
              </div>
              <div className="col-md-6 text-end">
                {/* <a href="javascript:void(0)" onClick="$zopim.livechat.window.show()" className="topheaderinfo" style="border-left: 1px solid #dde1e2;"><i className="fas fa-comments"></i>&nbsp;&nbsp;Live Chat</a> */}
                <a href="tel:347-781-5954" className="topheaderinfo">
                  <i className="fas fa-phone-alt"></i>&nbsp;&nbsp;347-781-5954
                </a>
              </div>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <Link to={"/"} className="navbar-brand">
              <img
                className="headerlogoimg"
                src={Logo}
                alt=""
                style={{ width: "100%" }}
              />
            </Link>
            {/* <a className="navbar-brand" href="index.html"></a> */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>
            <div
              className="collapse navbar-collapse position-rel"
              id="navbarNav"
            >
              <ul className="navbar-nav headerlinks">
                {/* <li className="nav-item"> <a className="nav-link" href="tel:347-781-5954"><i className="fas fa-phone-alt"></i>&nbsp;&nbsp;347-781-5954</a> </li> */}

                <li className="nav-item">
                  <hr />
                  <a className="nav-link" id="" onClick={opensidebarwish}>
                    <i className="fas fa-heart"></i>{" "}
                    <span className="cartnum" id="wishNum">
                      4
                    </span>{" "}
                  </a>
                </li>
                <li className="nav-item">
                  <Link to="/Cart" className="link nav-link">
                    <i className="fas fa-shopping-cart"></i>
                    <span className="cartnum" id="cartNum">
                      2
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <div className="sidenavwish" id="sidenavwish">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="headingdiv">
                <h2>Wishlist: </h2>
              </div>
            </div>
            <div className="col-md-6">
              <a
                // href="javascript:void(0)"
                className="closebtn"
                onClick={closesidebarwish}
              >
                &times;
              </a>
            </div>
          </div>
        </div>

        <div className="filterdiv">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="filter-box">
                  <div className="img-div">
                    <img src={Wish} alt="" />
                  </div>
                  <div className="details">
                    <h6>Lorem ipsum dolor sit amet...</h6>
                    <p className="pricing">
                      <strong>USD 12.80</strong>{" "}
                      <span className="discount">USD 20.00</span>
                      <span className="">(60% Off)</span>
                    </p>
                    <p className="popular">
                      <span>Popular</span> (12345 Sales)
                    </p>
                  </div>
                  <div className="btn-div">
                    <button>
                      <i className="fas fa-heart"></i>
                    </button>
                    <button className="cart">
                      <i className="fas fa-shopping-cart"></i>
                    </button>
                  </div>
                </div>
                <div className="filter-box mt-4">
                  <div className="img-div">
                    <img src={Wish} alt="" />
                  </div>
                  <div className="details">
                    <h6>Lorem ipsum dolor sit amet...</h6>
                    <p className="pricing">
                      <strong>USD 12.80</strong>{" "}
                      <span className="discount">USD 20.00</span>
                      <span className="">(60% Off)</span>
                    </p>
                    <p className="popular">
                      <span>Popular</span> (12345 Sales)
                    </p>
                  </div>
                  <div className="btn-div">
                    <button>
                      <i className="fas fa-heart"></i>
                    </button>
                    <button className="cart">
                      <i className="fas fa-shopping-cart"></i>
                    </button>
                  </div>
                </div>
                <div className="filter-box mt-4">
                  <div className="img-div">
                    <img src={Wish} alt="" />
                  </div>
                  <div className="details">
                    <h6>Lorem ipsum dolor sit amet...</h6>
                    <p className="pricing">
                      <strong>USD 12.80</strong>{" "}
                      <span className="discount">USD 20.00</span>
                      <span className="">(60% Off)</span>
                    </p>
                    <p className="popular">
                      <span>Popular</span> (12345 Sales)
                    </p>
                  </div>
                  <div className="btn-div">
                    <button>
                      <i className="fas fa-heart"></i>
                    </button>
                    <button className="cart">
                      <i className="fas fa-shopping-cart"></i>
                    </button>
                  </div>
                </div>
                <div className="filter-box mt-4">
                  <div className="img-div">
                    <img src={Wish} alt="" />
                  </div>
                  <div className="details">
                    <h6>Lorem ipsum dolor sit amet...</h6>
                    <p className="pricing">
                      <strong>USD 12.80</strong>{" "}
                      <span className="discount">USD 20.00</span>
                      <span className="">(60% Off)</span>
                    </p>
                    <p className="popular">
                      <span>Popular</span> (12345 Sales)
                    </p>
                  </div>
                  <div className="btn-div">
                    <button>
                      <i className="fas fa-heart"></i>
                    </button>
                    <button className="cart">
                      <i className="fas fa-shopping-cart"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
