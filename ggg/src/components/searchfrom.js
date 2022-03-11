import React from "react";
import IndustryImage from "../images/Industry.svg";
import StyleImage from "../images/Style.svg";
import ColorImage from "../images/Colors.svg";
import TypeImage from "../images/Type.svg";

const SearchFrom = () => {
  return (
    <section className="mb-35">
      <div className="container">
        <div className="row mt-md-0">
          <div className="col-lg-12 col-sm-12">
            <form className="searchform">
              <div className="row">
                <div className="col-lg-2 col-sm-12 formcoldiv left-padd">
                  <select
                    className="form-select select2-icon"
                    id="industryselect"
                  >
                    <option value="industry" data-icon={IndustryImage}>
                      Industry
                    </option>
                    <option value="industry" data-icon={IndustryImage}>
                      Industry
                    </option>
                    <option value="industry" data-icon={IndustryImage}>
                      Industry
                    </option>
                    <option value="industry" data-icon={IndustryImage}>
                      Industry
                    </option>
                    <option value="industry" data-icon={IndustryImage}>
                      Industry
                    </option>
                  </select>
                </div>
                <div className="col-lg-4 col-sm-12 pro-width formcoldiv">
                  <hr />
                  <div className="search">
                    <i className="fas fa-search"></i>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-lg-2 formcoldiv">
                  <hr />
                  <select className="form-select select2-icon" id="styleselect">
                    <option value="style" data-icon={StyleImage}>
                      Style
                    </option>
                    <option value="style" data-icon={StyleImage}>
                      Style
                    </option>
                    <option value="style" data-icon={StyleImage}>
                      Style
                    </option>
                    <option value="style" data-icon={StyleImage}>
                      Style
                    </option>
                    <option value="style" data-icon={StyleImage}>
                      Style
                    </option>
                  </select>
                </div>
                <div className="col-lg-2 formcoldiv">
                  <hr />
                  <select className="form-select select2-icon" id="colorselect">
                    <option value="colors" data-icon={ColorImage}>
                      Colors
                    </option>
                    <option value="colors" data-icon={ColorImage}>
                      Colors
                    </option>
                    <option value="colors" data-icon={ColorImage}>
                      Colors
                    </option>
                    <option value="colors" data-icon={ColorImage}>
                      Colors
                    </option>
                    <option value="colors" data-icon={ColorImage}>
                      Colors
                    </option>
                  </select>
                </div>
                <div className="col-lg-1 formcoldiv">
                  <hr />
                  <select className="form-select select2-icon" id="typeselect">
                    <option value="type" data-icon={TypeImage}>
                      Type
                    </option>
                    <option value="type" data-icon={TypeImage}>
                      Type
                    </option>
                    <option value="type" data-icon={TypeImage}>
                      Type
                    </option>
                    <option value="type" data-icon={TypeImage}>
                      Type
                    </option>
                    <option value="type" data-icon={TypeImage}>
                      Type
                    </option>
                  </select>
                </div>
                <div className="col-lg-1 filterbtndiv text-center">
                  <button className="filtericon">
                    <i className="fal fa-sliders-h"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SearchFrom;
