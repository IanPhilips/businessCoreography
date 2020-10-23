import React from 'react';
import config from '../../config';
import book from "../assets/images/Cover JPEG.jpg";

export default function Footer() {
  return (
    <footer>
      <div className="container text-left">
        <br/> <br/>

      <div className="row">
        <div className={"col-lg-6"}>
          <div className="row">

          <h4 className={"mb-4 ml-2"}> Choreography for Business </h4>
          <br/> <br/>
          <div className={"col-lg-6"}>
            <p>
              VIRTUAL
              <br/>
              <br/>
              PROGRAMS
              <br/>
              <br/>
              VIDEOS
            </p>
            </div>
            <div className={"col-lg-6"}>
              <p >
                225 FRANKLIN STREET
              <br/>
              <br/>
                BOSTON, MA
              <br/>
              <br/>
                02110
              </p>
            </div>
          </div>
        </div>
        <div className={"col-lg-6 text-center"}>
          <div className="row">
          <div className={"col-lg-6"}>
            <h4> When You Can't Meet In Person </h4>
            <br/>
            <p className={"text-center"}>
              The tools and techniques outlined in this eBook will allow you to
              immediately elevate your virtual presence, and hone your ability
              to have a positive impact on the world.
            </p>
          <br/>
          <br/>
          <h4>
          DOWNLOAD YOUR COPY
          </h4>
          </div>
          <div className={"col-lg-6"}>
            <img src={book} alt={""} style={{width:"100%",
              padding:"10px"}}/>
          </div>

          </div>
        </div>
      </div>


        <p> &copy; {config.siteTitle} 2020. All Rights Reserved. </p>

      </div>
    </footer>
  );
}
