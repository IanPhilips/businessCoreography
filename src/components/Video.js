import React, { Component } from 'react';
import { MDBAnimation, MDBBtn, MDBCard, MDBContainer, MDBModal, MDBModalFooter } from 'mdbreact';
import dollars from '../assets/images/29dollars.png';
import hours from '../assets/images/24HOURS.png';
import vid from '../assets/videos/VPAssessment Intro.mp4';
import countdown from '../assets/videos/countdown.mp4';
// import VideomailClient from 'videomail-client';
import left from "../assets/images/Left side.jpg";
import right from "../assets/images/Right side.jpg";
import Layout from './Layout';

export default class Video extends Component {

  componentDidMount() {
    // let VideomailClient = require('videomail-client');
    // const videomailClient = new VideomailClient({        // instantiate with some options
    //   verbose:       true,                         // prints additional info to console
    //   disableSubmit: true                          // disable submissions to keep example simple
    // })
  }

  state = {
    stage: 0,
    topic:"Sports / Activities"
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
          <MDBBtn onClick={()=>this.setState({stage:1})} className={"text-white btn-primary my-5"}>
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
          <MDBBtn className={"btn-outline gray"} onClick={()=>this.setState({stage:0})}>
            GO BACK
          </MDBBtn>
        </div>
        <div className={"col-lg-12"}>
          <video autoPlay={"autoplay"} src={vid} />
        </div>
        <div className={"col-lg-4"}>
          <MDBBtn  className={"text-white btn-primary"} onClick={()=>this.setState({stage:2, topic:"Sports / Activities" })}>
            Sport / ACTIVITY
          </MDBBtn>
        </div>
        <div className={"col-lg-4"}>
          <MDBBtn  className={"text-white btn-primary"} onClick={()=>this.setState({stage:2, topic:"Elevator Pitch" })}>
            ELEVATOR PITCH
          </MDBBtn>
        </div>
        <div className={"col-lg-4"}>
          <MDBBtn  className={"text-white btn-primary"} onClick={()=>this.setState({stage:2, topic:"Mmm, Breakfast" })}>
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
          <MDBBtn className={"gray btn-outline"} onClick={()=>this.setState({stage:1})}>
            GO BACK
          </MDBBtn>
        </div>
        <div className={"col-lg-12"}>
          <video autoPlay={"autoplay"} src={countdown} />
          {/*{this.state.videomailClient.show()}*/}
        </div>

        <div className={"col-lg-6"}>
          <MDBBtn  className={"text-white btn-primary "} onClick={()=>this.setState({ })}>
            RETAKE
          </MDBBtn>
        </div>
          <div className={"col-lg-6"}>
            <MDBBtn  className={"text-white btn-primary"} onClick={()=>this.setState({stage:this.state.stage+1 })}>
              CONTINUE
            </MDBBtn>
        </div>
      </div>

    )
  }

  stepThree(){
    return(
      <div className={"row"}>

        <div className={"col-lg-12"}>

        <MDBAnimation type={"fadeIn"} duration={"1s"} reveal={"true"} >
          <div className="container mb-5">
            <h4 className={"text-left"}> Contact Information</h4>
            <p className={"text-left"} style={{maxWidth:"50vw"}}>
              Please complete the below fields to receive your Personalized Assessment. Your Assessment will be sent to the provided email within 24 hours.
            </p>

            <form className="contact-form text-right" onSubmit={this.sendEmail}>
              {/*NAME*/}
              <div className={"row"}>
                <label htmlFor={"name"} className={"col-2 col-lg-3 m-3 mt-4"}> Name </label>
                <input className={"mt-3 col-lg-6 col-8 "} type="text" id={"name"}
                       placeholder={"First Last"} name="name"
                       style={{borderRadius:"5px", borderWidth:"1.5px"}}/>
                <div className={"col-lg-2"}/>
              </div>
              {/*EMAIL*/}
              <div className={"row"}>
                <label htmlFor={"email"} className={"col-2 col-lg-3 m-3 mt-4"}> Email </label>
                <input className={"mt-3 col-lg-6 col-8 "} type="email" id={"email"}
                       placeholder={"Email@email.com"} name="email"
                       style={{borderRadius:"5px", borderWidth:"1.5px"}}/>
                <div className={"col-lg-2"}/>
              </div>
              {/*BETA*/}
              <div className={"row my-2"}>
                <label htmlFor={"beta"} className={"ml-5 mt-3"}>Interested in more consistent feedback and coaching?  </label>
                <div className={"row ml-5 col-12 text-left mt-3 mr-2 "}>
                  <input type="checkbox" style={{width:"30px", height:"30px", marginTop:"0px"}}
                         id="waitlist" name="waitlist" value="waitlist"
                  />
                  <p className={"my-1 ml-2"}> Add me to your Virtual Sapiens waitlist!</p>
                </div>

              </div>
              <div className={"col-12"}>
              <hr style={{width:"100%", maxWidth:"100%"}}/>
              </div>
              <h4 className={"text-left"}> Payment Information</h4>
              <p className={"text-left"} style={{maxWidth:"50vw"}}>
                By clicking checkout below, you will be redirected to a third party website to submit your payment.
              </p>
              {/*SUBMIT*/}
              <div className={"col-lg-12 text-center"}>
                  <MDBBtn className={"btn-outline gray"}
                      onClick={()=>this.setState({stage:this.state.stage-1})}>
                    GO BACK
                  </MDBBtn>
                <input type="submit" onClick={ ()=>this.toggle()} value="Checkout"
                       className="btn-default btn text-white mt-3 btn-primary"
                       style={{width:"200px"}}
                />
              </div>
            </form>
          </div>
        </MDBAnimation>
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
      case 3:
        return this.stepThree();
      default:
        return this.stepZero();
    }
  }

  render(){
    return(
      <div className={"col-lg-9 mx-auto"}>

        <div className={"curtain-left"}>
          <MDBAnimation type={"slideInRight"} duration={"3s"} reveal={"true"}  className={"curtain"} >
            <img  src={right} alt={"curtains"} className={"video-curtain "} />
          </MDBAnimation>
        </div>

        <div className={"curtain-right"}>
          <MDBAnimation type={"slideInRight"} duration={"3s"} reveal={"true"}  className={"curtain"}>
            <img  src={left} alt={"curtains"}  className={"video-curtain"} />
          </MDBAnimation>
        </div>

        <MDBCard className={"video-card text-center"}>
          {this.returnStage()}
        </MDBCard>


      </div>


    )
  }
}
