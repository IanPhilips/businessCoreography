import React, { Component } from 'react';
import { MDBAnimation, MDBCard } from 'mdbreact';
import dollars from '../assets/images/29dollars.png';
import hours from '../assets/images/24HOURS.png';
import vid from '../assets/videos/intro-vp-asessment.mp4';
import left from "../assets/images/Left side.jpg";
import right from "../assets/images/Right side.jpg";
import { Helmet } from "react-helmet"
import { loadStripe } from '@stripe/stripe-js/pure';
import addToMailchimp from 'gatsby-plugin-mailchimp';

const url="https://a9ff83965c76.ngrok.io";
const stripePromise = loadStripe('pk_test_51H0C4qF6ssRQC0xGIM11rZZXv7p1kMPWBQ0Lrc9TUjszV1l9Wj5E9Gzez1Luva9ceKF6HzGbZDJQFewe1dNsUjzX00STSIxSk1');
let price = "";

export default class Video extends Component {

  state = {
    stage: 0,
    topic:"Sports / Activities",
    videomailClient:null,
    email:"",
    name:"",
    waitlist:false,
  };
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmissionExtras = this.handleFormSubmissionExtras.bind(this);
  }
  handleChange(event) {
    const name = event.target["name"];
    this.setState({[name]: event.target.value});
  }


  componentDidMount() {
    price = this.props.price;
    (async() => {
      console.log("waiting for videomail client library");
      while(window.VideomailClient === undefined) // define the condition as you like
        await new Promise(resolve => setTimeout(resolve, 500));
      const videomailClient = new window.VideomailClient({        // instantiate with some options
        verbose:       true,
        video:{width:640, height: 480, fps:20, limitSeconds:60},
        audio:{enabled:true}
      });

      this.setState({
        videomailClient:videomailClient
      })
    })();
  }




  stepZero(){
    return(
      <div className={"row justify-content-center align-content-center"}>
        <div className={"col-lg-3"}>
          <img src={dollars} alt={""} className={"img-fluid mb-5"}/>
        </div>
        <div className={"col-lg-6 text-center"}>
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

          <a onClick={()=>this.setState({stage:1})}
                  className={"text-white btn mt-5 btn-xl  mx-auto" }  >
            AGREE & BEGIN
          </a>
          <br/><br/><br/>
          <b style={{cursor:"pointer"}} onClick={()=>this.props.cb()} className={"mt-5"}>Terms & Conditions</b>
          <p style={{fontSize:"14px", color:"#818181"}}>
            Your video and data are private and will not be shared with any third parties.
          </p>
        </div>
        <div className={"col-lg-3"}>
          <img src={hours} alt={""}  className={"img-fluid mb-5"}/>
        </div>
      </div>
    )
  }

  stepOne(){
    return(
      <div className={"row"}>
        <div className={"col-lg-12 text-left "}>
          <a className={"btn btn-outline  gray "} onClick={()=>this.setState({stage:0})}>
            GO BACK
          </a>
        </div>
        <div className={"col-lg-12"}>
          <video autoPlay={"autoplay"} controls={true} className={"intro-video img-fluid "} src={vid} />
        </div>
        <div className={"col-12 col-md-6 col-xl-4 "}>
          <a  className={"text-white btn"} onClick={()=>this.setState({stage:2, topic:"Sports / Activities" })}>
            Sport / ACTIVITY
          </a>
        </div>
        <div className={"col-12 col-md-6 col-xl-4 "}>
          <a  className={"text-white btn"} onClick={()=>this.setState({stage:2, topic:"Elevator Pitch" })}>
            ELEVATOR PITCH
          </a>
        </div>
        <div className={"col-12 col-md-6 col-xl-4 "}>
          <a  className={"text-white btn"} onClick={()=>this.setState({stage:2, topic:"Mmm, Breakfast" })}>
            MMM, BREAKFAST
          </a>
        </div>
      </div>
    )
  }

  stepTwo(){
    return(
      <div className={"row"}>
          <div className={"col-lg-12 text-right"}>
            <a  className={"text-white btn"} onClick={()=>this.setState({stage:this.state.stage+1 })}>
              CONTINUE
            </a>
        </div>
      </div>

    )
  }

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

            <form className="contact-form text-right" onSubmit={this.redirectToStripe}>
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
                         id="waitlist" name="waitlist" checked={this.state.waitlist} onChange={()=>this.setState({"waitlist":!this.state.waitlist})}
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
                  <a className={"btn btn-outline  gray"}
                      onClick={()=>this.setState({stage:this.state.stage-1})}>
                    GO BACK
                  </a>
                <input type="submit"  value="Checkout"
                       className="text-white mt-3 btn"
                       style={{width:"200px"}}
                       onClick={this.handleFormSubmissionExtras}
                />
              </div>
            </form>
          </div>
        </MDBAnimation>
        </div>
      </div>
    )
  }

  handleFormSubmissionExtras(){
    if (this.state.waitlist){
      this.signUpEmail(this.state.name, this.state.email)
    }
  }

  // TODO: sometimes it doesn't read price!!
  async redirectToStripe (e)  {
    e.preventDefault();

    // console.log("doing stripe!", price);


    // // When the customer clicks on the button, redirect them to Checkout.
    // const stripe = await stripePromise;
    // const { error } = await stripe.redirectToCheckout({
    //   lineItems: [{
    //     price: price,
    //     quantity: 1,
    //   }],
    //   mode: 'payment',
    //   successUrl: url+'?PaymentStatus=success',
    //   cancelUrl: url+'?PaymentStatus=fail',
    // });
    // console.log("stripe error",error);
    // // If `redirectToCheckout` fails due to a browser or network
    // // error, display the localized error message to your customer
    // // using `error.message`.
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
      <div className={"row"}>
        {this.state.stage===2 ?
        <div className={"col-lg-12 text-left "}>
          <a className={"btn btn-outline  gray"} onClick={()=>this.setState({stage:1})}>
            GO BACK
          </a>
        </div>
          :
          <div/>
        }
        <div className={"col-lg-8 text-center mx-auto videomail"}>
          {this.state.videomailClient!=null ?
            <div className={"videomail mx-auto"}
                 style={
                   this.state.stage!==2 ? {display:"none"} : {}
                 }
                 id="videomail"> </div>
            : <div/> }
        </div>
      </div>
    )
  }

  signUpEmail(name, email){
    let fullName = name.split(' '),
      firstName = fullName[0],
      lastName = fullName[fullName.length - 1];
    if (lastName===firstName){
      lastName = "";
    }

   addToMailchimp(email, {FNAME:firstName, LNAME: lastName})
     .then(data => {
        // I recommend setting data to React state
        // but you can do whatever you want (including ignoring this `then()` altogether)
        console.log(data)
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
          {this.conditionallyRenderVideoMail()}
          {this.returnStage()}
        </MDBCard>


      </div>


    )
  }
}
