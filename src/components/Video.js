import React, { Component } from 'react';
import { MDBBtn, MDBCard } from 'mdbreact';
import dollars from '../assets/images/29dollars.png';
import hours from '../assets/images/24HOURS.png';
import vid from '../assets/videos/VPAssessment Intro.mp4';
import countdown from '../assets/videos/JumboShortMRF.mp4';
// import VideomailClient from 'videomail-client';

export default class Video extends Component {

  state = {
    stage: 0,
    topic:"Sports / Activities",
    // videomailClient: new VideomailClient({        // instantiate with some options
    //   verbose:       true,                         // prints additional info to console
    //   disableSubmit: true                          // disable submissions to keep example simple
    // })
  };

  stepZero(){
    return(
      <div className={"row"}>
        <div className={"col-lg-3"}>
          <img src={dollars} alt={""} style={{width:"175px"}}/>
        </div>
        <div className={"col-lg-6"}>
          <h4> How This Works</h4>
          <br/>
          <br/>
          <p className={"mb-5"}>
            1. Select your topic
            <br/>
            <br/>
            2. Record your 30-60 second video
            <br/>
            <br/>
            3. Enter your details and payment
          </p>
          <MDBBtn onClick={()=>this.setState({stage:1})} className={"text-white my-5"}>
            AGREE & BEGIN
          </MDBBtn>
          <h4>Terms & Conditions</h4>
          <p>
            Your video and data are private and will not be shared with any third parties.
          </p>
        </div>
        <div className={"col-lg-3"}>
          <img src={hours} alt={""} style={{width:"175px"}}/>
        </div>
      </div>
    )
  }
  stepOne(){
    return(
      <div className={"row"}>
        <div className={"col-lg-12 text-left "}>
          <MDBBtn onClick={()=>this.setState({stage:0})}>
            GO BACK
          </MDBBtn>
        </div>
        <div className={"col-lg-12"}>
          <video autoPlay={"autoplay"} src={vid} />
        </div>
        <div className={"col-lg-4"}>
          <MDBBtn  className={"text-white"} onClick={()=>this.setState({stage:2, topic:"Sports / Activities" })}>
            Sport / ACTIVITY
          </MDBBtn>
        </div>
        <div className={"col-lg-4"}>
          <MDBBtn  className={"text-white"} onClick={()=>this.setState({stage:2, topic:"Elevator Pitch" })}>
            ELEVATOR PITCH
          </MDBBtn>
        </div>
        <div className={"col-lg-4"}>
          <MDBBtn  className={"text-white"} onClick={()=>this.setState({stage:2, topic:"Mmm, Breakfast" })}>
            MMM, BREAKFAST
          </MDBBtn>
        </div>
      </div>
    )
  }
  stepTwo(){
    return(
      <div className={"row"}>
        <div className={"col-lg-12 text-left "}>
          <MDBBtn onClick={()=>this.setState({stage:1})}>
            GO BACK
          </MDBBtn>
        </div>
        <div className={"col-lg-12"}>
          <video autoPlay={"autoplay"} src={countdown} />
          {/*{this.state.videomailClient.show()}*/}
        </div>

        <div className={"col-lg-6"}>
          <MDBBtn  className={"text-white "} onClick={()=>this.setState({stage:2, topic:"Mmm, Breakfast" })}>
            RETAKE
          </MDBBtn>
        </div>
          <div className={"col-lg-6"}>
            <MDBBtn  className={"text-white"} onClick={()=>this.setState({stage:2, topic:"Mmm, Breakfast" })}>
              CONTINUE
            </MDBBtn>
        </div>
      </div>

    )
  }

  returnStage(){
    switch(this.state.stage){
      case 1:
        return this.stepOne();
      case 2:
        return this.stepTwo();
      default:
        return this.stepZero();
    }
  }

  render(){
    return(
      <div className={"col-lg-12"}>
        <MDBCard className={"video-card text-center"}>
          {this.returnStage()}
        </MDBCard>
      </div>


    )
  }
}
