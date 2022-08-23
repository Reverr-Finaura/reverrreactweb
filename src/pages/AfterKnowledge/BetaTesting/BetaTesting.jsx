import React from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../Footer/Footer";
import "./betatesting.css";

const BetaTesting = () => {
  return (
    <div>
      <Header />

      <div>
        <div>
          <img className="img" src="/images/betatesting.png" alt="" />
        </div>
        <div className="sec2">
          <div className="leftbar">
            <h1 className="leftbar__heading">
              Beta Testing-Learn from the basic level to the best
            </h1>
            <p className="leftbar__para">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. Feel free to drag and drop
              anywhere you like on your page.
            </p>
            <div className="stars">
              <img src="/images/star.png" alt="" />
              <img src="/images/star.png" alt="" />
              <img src="/images/star.png" alt="" />
              <img src="/images/star.png" alt="" />
              <p>(270+ ratings)</p>
            </div>
          </div>

          <div className="rightbar">
            <h1 className="rightbar__heading">What will you learn</h1>
            <p className="rightbar__para">I am a feature</p>
            <p className="rightbar__para">I am a feature</p>
            <p className="rightbar__para">I am a feature</p>
            <p className="rightbar__para">I am a feature</p>
            <div className="btns">
              <button className="btn1">Save to Courses</button>
              <button className="btn2">Learn Now</button>
            </div>
          </div>
        </div>
        <div className="sec3">
          <div className="leftbar"></div>
          <div className="rightbar"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BetaTesting;
