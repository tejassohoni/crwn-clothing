import React from "react";

import "./homepage.styles.scss";

const HomePage = () => (
  <div className="homepage">
    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <div className="title">
            <h1>Hats</h1>
          </div>
          <span className="subtitle">Shop Now</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <div className="title">
            <h1>Jackets</h1>
          </div>
          <span className="subtitle">Shop Now</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <div className="title">
            <h1>Sneakers</h1>
          </div>
          <span className="subtitle">Shop Now</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <div className="title">
            <h1>Women</h1>
          </div>
          <span className="subtitle">Shop Now</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <div className="title">
            <h1>Men</h1>
          </div>
          <span className="subtitle">Shop Now</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
