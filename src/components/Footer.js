import React from 'react';
import config from '../../config';
import book from "../assets/images/Cover JPEG.jpg";
import privacy from "../assets/images/PRIVACY POLICY FINAL.pdf"
export default function Footer() {
  return (
    <footer>
      <div className="container text-left">
        <br/> <br/>

      <div className="row ">
        <div className={"col-lg-6"}>
          <div className="row">

          <h4 className={"mb-4 ml-2 text-white"}> Choreography for Business </h4>
          <br/> <br/>
          <div className={"col-lg-6"}>
            <p>
              <a  href={"https://choreographyforbusiness.com/cfbprograms"}>PROGRAMS</a>
              <br/>
              <br/>
              <a href={"https://choreographyforbusiness.com/events"}>EVENTS</a>
              <br/>
              <br/>
              <a href={"https://choreographyforbusiness.com/media"}>MEDIA</a>
              <br/>
              <br/>
              <a href={"https://choreographyforbusiness.com/aboutcfb"}>ABOUT</a>
              <br/>
              <br/>
              <a href={privacy}>PRIVACY POLICY</a>
            </p>
            </div>
            <div className={"col-lg-6"}>
              <p >
                75 STATE STREET SUITE 100
              <br/>
              <br/>
                BOSTON, MA
              <br/>
              <br/>
                02109
              </p>
            </div>
          </div>
        </div>
        <div className={"col-lg-6 text-center"}>
          <div className="row">
          <div className={"col-lg-6"}>
            <h4 className={"text-white"}> When You Can't Meet In Person </h4>
            <br/>
            <p className={"text-center"}>
              The tools and techniques outlined in this eBook will allow you to
              immediately elevate your virtual presence, and hone your ability
              to have a positive impact on the world.
            </p>
          <br/>
          <br/>
          <h4 style={{fontSize:"16px"}} className={"text-white"}>
            <a href={"https://choreographyforbusiness.com/ebook"}> DOWNLOAD YOUR COPY</a>
          </h4>
          </div>
          <div className={"col-lg-6"}>
            <img src={book} alt={""} style={{width:"100%",
              padding:"10px"}}/>
          </div>

          </div>
        </div>
      </div>


        <p className={"basker"} > &copy; {config.siteTitle} 2020. All Rights Reserved. </p>

      </div>
    </footer>
  );
}
