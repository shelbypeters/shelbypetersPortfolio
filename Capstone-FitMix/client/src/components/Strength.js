import Lower from "./Lower";
import Upper from "./Upper";
import Ab from "./Ab";
import Back from "./Back";

import React from "react";

function Strength() {
  return (
    <div>
      {/* <Lower/>
        <Upper/> */}

      {/*Code modification 
        this will create a navbar as tabs that will show the exercises 
        cards.
      */}
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            Upper
          </button>
        </li>

        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#mycode"
            type="button"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
          >
            Lower
          </button>
        </li>

        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#backcode"
            type="button"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
          >
            Back
          </button>
        </li>

        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#abcode"
            type="button"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
          >
            Abs
          </button>
        </li>
      </ul>

      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <Upper />
        </div>

        <div
          className="tab-pane fade"
          id="mycode"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
          <Lower />
        </div>

        <div
          className="tab-pane fade"
          id="backcode"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
          <Back />
        </div>

        <div
          className="tab-pane fade"
          id="abcode"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
          <Ab />
        </div>
      </div>
    </div>
  );
}

export default Strength;
