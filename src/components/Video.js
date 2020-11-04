import React, { Component } from 'react';
import { MDBAnimation, MDBCard } from 'mdbreact';
import { Helmet } from "react-helmet"
import { loadStripe } from '@stripe/stripe-js/pure';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import emailjs from 'emailjs-com';

import dollars from '../assets/images/150dollars.png';
import hours from '../assets/images/24HOURS.png';
import vid from '../assets/videos/intro-vp-asessment.mp4';
import left from "../assets/images/Left side.jpg";
import right from "../assets/images/Right side.jpg";
import config from '../../config';

const url="https://www.virtualbycfb.com";
let price = "";
let stripePromise = loadStripe('pk_live_51H0C4qF6ssRQC0xGxth5iYYDgTmvJW41Ll5ok6DVLmpvqv9IgWEfb1r3Ns9OhvjJyLZ5gfY5ECIj0atgMQjpaOqq004vy2fDoq');
const emailjsVPARequestID="template_d3wtbo1";

export default class Video extends Component {

  state = {
    stage: 0,
    topic:"Sports / Activities",
    videomailClient:null,
    email:"",
    name:"",
    waitlist:false,
    videomailURL:null,
  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.onVideomailSubmitted = this.onVideomailSubmitted.bind(this);
    this.redirectToStripe = this.redirectToStripe.bind(this);
    this.sendEmailJS = this.sendEmailJS.bind(this);
    this.handleFormSubmissionExtras = this.handleFormSubmissionExtras.bind(this);
  }

  // changes to state
  handleChange(event) {
    const name = event.target["name"];
    this.setState({[name]: event.target.value});
  }


  engageTestModeAndSetPrice(testKey){
    price = this.props.price;
    if (testKey!==null){
      stripePromise = loadStripe(testKey);
    }
  }

  componentDidMount() {
    this.engageTestModeAndSetPrice(this.props.testMode);
    let width=640, height=480;
    if (window.innerWidth<700){
      width=426; height=240;
    }

    (async() => {
      console.log("waiting for videomail client library");
      while(window.VideomailClient === undefined) // define the condition as you like
        await new Promise(resolve => setTimeout(resolve, 500));
      const videomailClient = new window.VideomailClient({        // instantiate with some options
        verbose:       true,
        video:{width:width, height: height, fps:20, limitSeconds:60},
        audio:{enabled:true},
        selectors:{
          formId:'videoSubmission',
        },
        defaults:{
          from:"videomail@virtualcfb.com",
          subject:"New Virtual Submission",
        },
        siteName:"virtualbycfb"
      });


      videomailClient.on(
        videomailClient.events.SUBMITTED,
        this.onVideomailSubmitted.bind(videomailClient)
      )

      this.setState({
        videomailClient:videomailClient
      })
    })();
  }



  // INTRO
  stepZero(){
    return(
      <div className={"row d-flex justify-content-center align-content-center"}>
        <div className={"col-3"}>
          <img src={dollars} alt={""} className={"img-fluid mb-5"}/>
        </div>
        <div className={"col-6 text-center "}>
          <h3 className={"mt-5"}> How This Works</h3>
          <br/>
          <br/>
          <h5 style={{fontSize:20}} className={"mb-5"}>
            1. Select your topic
            <br/>
            <br/>
            2. Record your 30-60 second video
            <br/>
            <br/>
            3. Enter your details and payment
          </h5>
          <br/><br/><br/>

          <div className={"d-flex justify-content-center align-content-center"}>
          <button onClick={()=>this.setState({stage:1})}
                  className={"text-white btn mt-5 btn-xl mx-auto" }>

            AGREE & BEGIN
          </button>
          </div>

          <br/><br/><br/>
          <b style={{cursor:"pointer"}} onClick={()=>this.props.toggleParentModal("Terms & Conditions")} className={"mt-5"}>Terms & Conditions</b>
          <p style={{fontSize:"14px", color:"#818181"}}>
            Your video and data are private and will not be shared with any third parties.
          </p>
        </div>
        <div className={"col-3"}>
          <img src={hours} alt={""}  className={"img-fluid mb-5"}/>
        </div>
      </div>
    )
  }

  // INTRO VIDEO AND TOPIC OPTIONS
  stepOne(){
    return(
      <div className={"row text-center"}>
        <div className={"col-lg-12 text-left "}>
          <button className={"btn btn-outline  gray "} onClick={()=>this.setState({stage:0})}>
            GO BACK
          </button>
        </div>
        <div className={"col-12 img-fluid"}>
          <video autoPlay={"autoplay"} controls={true} className={"intro-video img-fluid "} src={vid} />
        </div>
        <div className={"col-12 col-md-6 col-xl-4 "}>
          <button  className={"text-white btn"} onClick={()=>this.setState({stage:2, topic:"Sports / Activities" })}>
            Sport / ACTIVITY
          </button>
        </div>
        <div className={"col-12 col-md-6 col-xl-4 "}>
          <button  className={"text-white btn"} onClick={()=>this.setState({stage:2, topic:"Elevator Pitch" })}>
            ELEVATOR PITCH
          </button>
        </div>
        <div className={"col-12 col-md-6 col-xl-4 "}>
          <button  className={"text-white btn"} onClick={()=>this.setState({stage:2, topic:"Mmm, Breakfast" })}>
            MMM, BREAKFAST
          </button>
        </div>
      </div>
    )
  }

  // RECORDING
  stepTwo(){
    return(
      <div className={"row"}>
          <div className={"col-lg-12 text-right"}>
            <button  className={"text-white btn"} onClick={()=>this.setState({stage:this.state.stage+1 })}>
              CONTINUE
            </button>
        </div>
      </div>

    )
  }

  // CHECKOUT
  stepThree(){
    return(
      <div className={"row"}>

        <div className={"col-lg-12"}>

        <MDBAnimation type={"fadeIn"} duration={"1s"} reveal={true} >
          <div className="container mb-5">
            <h3 className={"text-left mb-4"}> Contact Information</h3>
            <p className={"text-left"} style={{maxWidth:"60vw", fontWeight:"bold"}}>
              Please complete the below fields to receive your Personalized Assessment. Your Assessment will be sent to the provided email within 24 hours.
            </p>

              {/*NAME*/}
              <div className={"row"}>
                <label htmlFor={"name"} className={"col-2 col-lg-3 m-3 mt-4"}> Name </label>
                <input className={"mt-3 col-lg-6 col-8 "} type="text" id={"name"}
                       placeholder={"First Last"} name="name"
                       value={this.state.name}
                       onChange={this.handleChange}
                       style={{borderRadius:"5px", borderWidth:"1.5px"}}/>
                <div className={"col-lg-2"}/>
              </div>
              {/*EMAIL*/}
              <div className={"row"}>
                <label htmlFor={"email"} className={"col-2 col-lg-3 m-3 mt-4"}> Email </label>
                <input className={"mt-3 col-lg-6 col-8 "} type="email" id={"email"}
                       placeholder={"Email@email.com"} name="email"
                       value={this.state.email}
                       onChange={this.handleChange}
                       style={{borderRadius:"5px", borderWidth:"1.5px"}}/>
                <div className={"col-lg-2"}/>
              </div>


              {/*BETA*/}
              <div className={"row my-2"}>
                <label htmlFor={"beta"} className={"ml-5 mt-3"}>Interested in more consistent feedback and coaching?  </label>
                <div className={"row ml-5 col-12 text-left mt-3 mr-2 "}>
                  <input type="checkbox" style={{width:"30px", height:"30px", marginTop:"0px"}}
                         id="waitlist" name="waitlist" checked={this.state.waitlist}
                         onChange={()=>this.setState({"waitlist":!this.state.waitlist})}
                  />
                  <p className={"my-1 ml-2"}> Add me to your Virtual Sapiens waitlist!</p>
                </div>

              </div>
              <div className={"col-12"}>
              <hr style={{width:"100%", maxWidth:"100%"}}/>
              </div>
              <h3 className={"text-left mb-4"}> Payment Information</h3>
              <p className={"text-left"} style={{maxWidth:"60vw", fontWeight:"bold"}}>
                By clicking checkout below, you will be redirected to a third party website to submit your payment.
              </p>
              {/*SUBMIT*/}
              <div className={"col-lg-12 text-center"}>
                  <button className={"btn btn-outline  gray"}
                      onClick={()=>this.setState({stage:this.state.stage-1})}>
                    GO BACK
                  </button>
                <input type="submit"  value="Checkout"
                       className="text-white mt-3 btn"
                       style={{width:"200px"}}
                       onClick={this.handleFormSubmissionExtras}
                />
              </div>

          </div>
        </MDBAnimation>
        </div>
      </div>
    )
  }


  onVideomailSubmitted(videomail) {
    console.log("On submit videomail", videomail);
    this.setState({videomailURL:videomail.url},
      ()=>{this.sendEmailJS()}
      );
  }

  async handleFormSubmissionExtras(){
    let mailchimpResponse = {"result":null};
    if (this.state.waitlist){
      mailchimpResponse = await this.signUpEmail(this.state.name, this.state.email)
    }
    console.log("mailchimp response is:", mailchimpResponse["result"]);

    if (mailchimpResponse["result"]==="error"){
      this.props.toggleParentModal("Error", mailchimpResponse["msg"])
    }
    else{
      this.state.videomailClient.submit();
    }
  }

  sendEmailJS() {
    console.log("email sent");
    emailjs.send(config.emailjsServiceID,
      emailjsVPARequestID,
      {
        name:this.state.name,
        email:this.state.email,
        videomail_url: this.state.videomailURL
      },
      config.emailjsUserID)
      .then((result) => {
        console.log(result.text);
        this.redirectToStripe();
      }, (error) => {
        console.log("EMAILJS ERROR:",error.text);
        this.props.toggleParentModal("Error", error.text)
      });
  }

   async redirectToStripe ()  {
    console.log("doing stripe!", price);
    console.log("test mode?", this.props.testMode);


    // When the customer clicks on the button, redirect them to Checkout.
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{
        price: price,
        quantity: 1,
      }],
      mode: 'payment',
      successUrl: url+'?PaymentStatus=success',
      cancelUrl: url+'?PaymentStatus=fail',
    });
    console.log("stripe error",error);
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
  };



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

  // Must render this at top level (not via step#) or videomail won't load properly!
  conditionallyRenderVideoMail(){
    if (this.state.videomailClient!=null && this.state.stage===2){
      this.state.videomailClient.show();
    }
    if (this.state.videomailClient!=null && this.state.stage!==2){
      this.state.videomailClient.hide();
    }
    return(
      <div className={"row d-flex justify-content-center  "}>
        {this.state.stage===2 ?
        <div className={"col-12 text-center "}>
          <div className={"col-12 text-left "}>
          <button className={"btn btn-outline  gray"} onClick={()=>this.setState({stage:1})}>
            GO BACK
          </button>
          <div className={"col-12 text-center "}>
            <h2>{this.state.topic}</h2>
          </div>
          </div>

        </div>

          :
          <div/>
        }
        <div className={"videomail d-flex align-content-center "}>
          {this.state.videomailClient!=null ?
            <div className={"videomail text-center "}
                 style={
                   this.state.stage!==2 ? {display:"none"} : {}

                 }
                 id="videomail"> </div>
            : <div/> }
        </div>
      </div>
    )
  }

  async signUpEmail(name, email){
    let fullName = name.split(' '),
      firstName = fullName[0],
      lastName = fullName[fullName.length - 1];
    if (lastName===firstName){
      lastName = "";
    }

   return addToMailchimp(email, {FNAME:firstName, LNAME: lastName})
     .then(data => {
       return data;
      })
      .catch(() => {
        // unnecessary because Mailchimp only ever
        // returns a 200 status code
        // see below for how to handle errors
      })
  }


  render(){
    return(
      <div className={"col-lg-9 mx-auto"}>
        <Helmet>
          <script src="https://cdn.rawgit.com/binarykitchen/videomail-client/2.14.2/prototype/js/videomail-client.min.js" />

        </Helmet>


        <div className={"curtain-left"}>
          <MDBAnimation type={"slideInRight"} duration={"3s"} reveal={true}  className={"curtain"} >
            <img  src={right} alt={"curtains"} className={"video-curtain "} />
          </MDBAnimation>
        </div>

        <div className={"curtain-right"}>
          <MDBAnimation type={"slideInRight"} duration={"3s"} reveal={true}  className={"curtain"}>
            <img  src={left} alt={"curtains"}  className={"video-curtain"} />
          </MDBAnimation>
        </div>

        <MDBCard className={"video-card text-center"}>
          <form className="contact-form text-right" id={"videoSubmission"}
                // onSubmit={this.redirectToStripe}
                onSubmit={this.stopDefault}
            >

          {this.conditionallyRenderVideoMail()}
          {this.returnStage()}
          </form>
        </MDBCard>
      </div>


    )

  }
  stopDefault(e){
    e.preventDefault();
  }
}