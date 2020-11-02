import React, { Component } from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { AnchorLink } from "gatsby-plugin-anchor-links";

import badLighting from "../assets/images/Bad lighting.png";
import tooClose from "../assets/images/Lens too close.png";
import tooHigh from "../assets/images/Lens too high.png";

import colleagues from "../assets/img/colleagues_icon.png";
import hands from "../assets/img/trust_icon.png";
import target from "../assets/img/target_icon.png";
import attention from "../assets/img/attention_icon.png"
import summary from "../assets/img/summary_icon.png"
import metrics from "../assets/img/Metrics_icon.png"
import score from "../assets/img/score_icon.png"
import recommendation from "../assets/img/Recommendations_icon.png"

import vote from "../assets/img/vote_icon.png"
import video from "../assets/img/video_icon.png"

import assessment from "../assets/images/assessment.png";

import rachel from "../assets/images/Rachel Cossar.jpg";

import hero from '../assets/videos/Hero_Video.mp4';


import {
  MDBAnimation, MDBCard, MDBCardBody, MDBContainer, MDBModal, MDBModalBody, MDBModalFooter,
} from 'mdbreact';
// import emailjs from 'emailjs-com';
import Video from '../components/Video';

class IndexPage extends Component{


  modalTitles=["Vote Received", "Video Received", "Error", "Terms & Conditions"];
  paymentStatusKey="PaymentStatus";
  priceCode="id";

  state = {
    radio: 1,
    modal:false,
    title:this.modalTitles[0],
    message:"",
    icon:video,
    contactModal:false,
    price:null
  };

  componentDidMount() {
    let params = (new URL(this.props.location.href)).searchParams;
    let price = params.get(this.priceCode);
    if (price===null){
      price='price_1HhhN7F6ssRQC0xGg0Fp4If1';
    }
    this.setState({
      price:price
    });

    let status = params.get(this.paymentStatusKey);
    if (status==="fail"){
      this.toggleModal(this.modalTitles[2])
    }
    else if (status==="success"){
      this.toggleModal(this.modalTitles[1]);
    }
  }

  onRadioSelect = nr => () => {
    this.setState({
      radio: nr
    });
  };

  render(){
  return(
  <Layout>
    <Header />

    <header className="masthead">
            <video autoPlay={"autoplay"} loop={"loop"} muted className={"video"}
            style={{ height:"100%", width:"100%", objectFit:"cover" }}>
              <source src={hero} type={"video/mp4"}/>
            </video>

      <div  style={{ position:"absolute", top:0, background: "rgba(100,100,100,.3)", height:"100%", width:"100%", objectFit:"cover" }}>

      <div className="header-content mx-auto">
        <h1 className={"text-center"}> Personalized Virtual Presence Assessment</h1>


          {/*<div className={"row text-center"}>*/}
          {/*  <div className={"col-6  text-center"}>*/}
        {/*<div  style={{ position:"absolute", top:0, height:"100%", width:"100%", objectFit:"cover" }}>*/}

        <div className={"row p-2 d-flex justify-content-center"} style={{marginTop:"1vh", fontSize:"22px"}}>
                  <h5 className={"my-auto text-center text-white"}>Improving </h5>
                  <h6 className={"mx-2 my-auto text-center p-2"} > Human Connection</h6>
                  <h5 className={"my-auto text-center text-white"}> Over Video </h5>
                </div>
        {/*</div>*/}
            {/*</div>*/}
          {/*</div>*/}

        <div className={"text-center row d-flex justify-content-center mt-5"} style={{width:"100%"}}>
          <AnchorLink title={"GET MY ASSESSMENT"} className="nav-link" to="/#video" >
          <b className={"btn"} style={{width:"350px"}} >
           GET MY ASSESSMENT
          </b>
          </AnchorLink>
        </div>
      </div>
      </div>
    </header>



    {/*FAILS*/}
    <section className="fails" id="fails">
      <div className="container-fluid not-too-wide">
        <div className="row section-heading text-center mb-4">
          <div className={"col-lg-3"}>
            <hr />
          </div>
          <div className="col-lg-6 ">
            <h2 className={"mb-5"}>VIRTUAL PRESENCE FAILS</h2>
            <p className={"my-4"}>A couple of seconds is all it takes to form a first impression.</p>
          </div>
          <div className={"col-lg-3"}>
            <hr />
          </div>
        </div>

        <div className="row">

          <div className="col-lg-4 mb-5 ">
            <MDBAnimation className={"mb-5"} type={"fadeIn"} duration={"1s"} reveal={true} delay={"0.25s"}>
              <MDBCard className="feature-item">
                <h5>Bad Lighting</h5>
                <p className="card-notes">
                  Loss of facial expression and recognition
                </p>
                <img src={badLighting} alt={"bad lighting"} className={"card-image"} />
              </MDBCard>
            </MDBAnimation>
          </div>

          <div className="col-lg-4 mb-5">
            <MDBAnimation className={"mb-5"} type={"fadeIn"} duration={"1s"} delay={"0.5s"} reveal={true}>
              <MDBCard className="feature-item">
                <h5>Lens Too High</h5>
                <p className="card-notes">
                  Loss of authority on camera </p>
                <img src={tooHigh} alt={"Lens Too High"} className={"card-image"} />
              </MDBCard>
            </MDBAnimation>
          </div>

          <div className="col-lg-4 mb-5">
            <MDBAnimation className={"mb-5"} type={"fadeIn"} duration={"1s"} delay={".75s"} reveal={true}>
              <MDBCard className="feature-item">
                <h5>Lens Too Close</h5>
                <p className="card-notes">
                  Reduction of body language readability
                </p>
              <img src={tooClose} alt={"Lens Too Close"} className={"card-image"} />
              </MDBCard>
            </MDBAnimation>
          </div>


        </div>
      </div>
    </section>

    {/*BENEFITS*/}
    <section className="features" id="benefits" style={{padding:"30px 0"}}>
      <div className="container-fluid mt-3 not-too-wide">
        <div className="section-heading text-center ">
          <h3>Virtual Presence Skills Allow You To ...</h3>
        </div>
        <div className="col-lg-12 my-auto">
          <div className="row">

                <div className="col-lg-3">
                <MDBAnimation type={"fadeIn"} duration={"1s"} delay={"0.25s"} reveal={true}>
                  <div className="feature-item">
                    <img className={"card-image"} src={colleagues} alt={""}  />
                    <p className="card-notes">More deeply communicate with your colleagues</p>
                  </div>
                </MDBAnimation>
                </div>

                <div className="col-lg-3">
                  <MDBAnimation type={"fadeIn"} duration={"1s"} delay={".5s"} reveal={true}>
                  <div className="feature-item">
                    <img className={"card-image"} src={hands} alt={""} />
                    <p className="card-notes">
                     Develop trusting relationships wth your clients
                    </p>
                  </div>
                  </MDBAnimation>
                </div>

                <div className="col-lg-3">
                  <MDBAnimation type={"fadeIn"} duration={"1s"} reveal={true} delay={"1s"}>
                  <div className="feature-item">
                    <img className={"card-image"} src={target} alt={""}/>
                    <p className="card-notes">
                      Manage your own energy and focus
                    </p>
                  </div>
                  </MDBAnimation>
                </div>

                <div className="col-lg-3">
                  <MDBAnimation type={"fadeIn"} duration={"1s"} delay={"1.25s"} reveal={true}>
                    <div className="feature-item">
                      <img className={"card-image"} src={attention} alt={""}/>
                      <p className=" card-notes">
                        Hold your audience's attention in virtual presentations
                      </p>
                    </div>
                  </MDBAnimation>
                </div>
        </div>
        </div>
      </div>
    </section>

    {/*POLL*/}
    <section className="cta my-5" id="cta">
      <div className="container">
        <div className="row ">
          <div className="col-lg-8 mx-auto my-auto">
            <form className="contact-form" onSubmit={this.sendEmail}>

            <MDBAnimation type={"fadeIn"} duration={"1s"} reveal={true} delay={"1s"}>
              <MDBCard className="poll p-3">
                <h3 style={{fontWeight:"bold"}} className={"text-center m-4"}>Take The Poll</h3>
                <p className="text-center"> What do you find most challenging when it comes to video communication? </p>

                <div className="form-check radio">
                  <input className="form-check-input" type="radio"
                         name="Staying focused"
                         id="radio1"
                         value="Staying focused"
                         checked={this.state.radio===1}
                         onChange={this.onRadioSelect(1)}
                  />
                    <label className="form-check-label" htmlFor="radio1">
                      Staying focused
                    </label>
                </div>
                <div className="form-check radio">
                  <input className="form-check-input" type="radio"
                         name="Feeling connected to my audience/presenter"
                         id="radio2"
                         value="Feeling connected to my audience/presenter"
                         checked={this.state.radio===2}
                         onChange={this.onRadioSelect(2)}
                  />
                    <label className="form-check-label" htmlFor="radio2">
                      Feeling connected to my audience/presenter
                    </label>
                </div>
                <div className="form-check radio">
                  <input className="form-check-input" type="radio"
                         name="Video conferencing fatigue"
                         id="radio3"
                         value="Video conferencing fatigue"
                         checked={this.state.radio===3}
                         onChange={this.onRadioSelect(3)}
                  />
                  <label className="form-check-label" htmlFor="radio3">
                    Video conferencing fatigue
                  </label>
                </div>
                <div className="form-check radio">
                  <input className="form-check-input" type="radio"
                         name="Delivering content with enthusiasm"
                         id="radio4"
                         value="Delivering content with enthusiasm"
                         checked={this.state.radio===4}
                         onChange={this.onRadioSelect(4)}
                  />
                  <label className="form-check-label" htmlFor="radio4">
                    Delivering content with enthusiasm
                  </label>
                </div>
                <div className="radio form-check">
                  <input className="form-check-input" type="radio"
                         name="Other"
                         id="radio5"
                         value="Other"
                         checked={this.state.radio===5}
                         onChange={this.onRadioSelect(5)}
                  />
                  <label className="form-check-label" htmlFor="radio5">
                    Other
                  </label>
                  <input className={"ml-3"} type="text" id={"Challenge"}
                         placeholder={"My Challenge is ..."} name="Challenge"
                         style={{borderRadius:"1px", borderWidth:"1.5px",
                           fontSize:"16px", maxWidth:"500px", width:"100%"}}/>
                </div>
                {/*SUBMIT*/}
                <div className={"text-center"}>
                  <input type="submit" value="VOTE NOW"
                         onClick={()=>this.toggleModal(this.modalTitles[0])}
                         className="btn text-white mt-5"

                         style={{width:"300px"}}
                  />
                </div>
              </MDBCard>
            </MDBAnimation>
            </form>
          </div>
        </div>
      </div>
    </section>

    {/*VIDEO SUBMISSION*/}
    <section className="video" id="video">
      <div className="container-fluid">
        <div className="row section-heading text-center mb-5 ">
          <div className={"col-lg-3"}>
            <hr />
          </div>
          <div className="col-lg-6">
            <h2>ELEVATE YOUR VIRTUAL PRESENCE</h2>
          </div>
          <div className={"col-lg-3"}>
            <hr />
          </div>
        </div>

        <div className="row equal">
          {this.state.price
            ? <Video cb={()=>this.toggleModal(this.modalTitles[3])} price={this.state.price}/>
            : <div/>
          }
        </div>

      </div>
    </section>


    {/*ASSESSMENT*/}
    <section className="assessment" id="assessment">
      <div className="container-fluid not-too-wide" >
        <MDBAnimation type={"slideInRight"} duration={"1s"} reveal={true} >

        <div className="section-heading text-center mb-5">
          <h4 >With your customized assessment, learn how to be your best communicator. <br/><br/>
          This includes:</h4>
        </div>

        </MDBAnimation>
        <div className="row">
          <div className="col-lg-4 mx-auto my-auto text-center" >
            <MDBAnimation type={"slideInLeft"} duration={"1s"} reveal={true} className={"mb-4 mx-auto"} >
              <img src={assessment} alt={""} style={{width:"100%"}} />
            </MDBAnimation>
          </div>
          <div className="col-lg-8" >
            <div className="row ">
              <div className="col-lg-6 mb-5">
                <MDBAnimation type={"slideInLeft"} duration={"1s"} reveal={true} className={"h-100"}>
                  <MDBCard className={" feature-item "}>
                    <h3> Summary </h3>
                    <MDBCardBody >
                      A quick recap explaining of your overall assessment
                    </MDBCardBody>
                    <img className={"card-image my-auto mx-auto"} src={summary} alt={""} />
                  </MDBCard>
                </MDBAnimation>

              </div>
              <div className="col-lg-6 mb-5">
                <MDBAnimation type={"slideInRight"} duration={"1s"} reveal={true} className={"h-100"}>

                  <MDBCard className={"feature-item h-100"}>
                    <h3> Metrics </h3>
                    <MDBCardBody >
                      Suggestions for immediate improvement to your virtual presence
                    </MDBCardBody>
                    <img className={"card-image my-auto mx-auto"} src={metrics} alt={""} />
                  </MDBCard>
                </MDBAnimation>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 mb-5">
                <MDBAnimation type={"slideInLeft"} duration={"1s"} reveal={true} className={"h-100"} >
                  <MDBCard className={"feature-item"}>
                    <h3> Score </h3>
                    <MDBCardBody >
                      Suggestions for immediate improvement to your virtual presence
                    </MDBCardBody>
                    <img className={"card-image my-auto mx-auto"} src={score} alt={""} />
                  </MDBCard>
                </MDBAnimation>
              </div>
              <div className="col-lg-6 mb-5">
                <MDBAnimation type={"slideInRight"} duration={"1s"} reveal={true} className={"h-100"} >
                  <MDBCard className={"feature-item"}>
                    <h3> Recommendations </h3>
                    <MDBCardBody >
                      Suggestions for immediate improvement to your virtual presence
                    </MDBCardBody>
                    <img className={"card-image my-auto mx-auto"} src={recommendation} alt={""} />
                  </MDBCard>
                </MDBAnimation>
              </div>
            </div>
         </div>
        </div>
      </div>
    </section>


    {/*ABOUT RACHEL*/}
    <section className="about" id="about">
      <div className="container-fluid not-too-wide">

        <div className="row section-heading text-center ">
          <div className={"col-lg-4"}>
            <hr/>
          </div>
          <div className="col-lg-4">
            <h2>About Rachel Cossar</h2>
          </div>
          <div className={"col-lg-4"}>
            <hr/>
          </div>
        </div>

        <div className="row m-sm-3">
          <div className="col-lg-8">
              <MDBCard className={"about-item text-center"}>
                <h3> Body Language & Presence Expert </h3>
                <MDBCardBody>
                  Choreography for Business Founder, Rachel Cossar, is a
                  leading expert in virtual presence. A former professional
                  ballet dancer turned body language and presence expert,
                  Rachel coaches a range of professionals on elevating their
                  virtual presence in professional settings.
                <br/>
                <br/>
                  Whether you are a sales professional, consultant, manager or
                  member of a team, Rachel’s personalized feedback will help
                  you bring your professional communication to the next level.

                <br/>
                <br/>
                  Rachel Cossar is the author of
                  <a href={"https://choreographyforbusiness.com/ebook"}> When You Can’t Meet in Person - A Guide to Mastering Virtual Presence and Communication. </a>
                  Her work and firm are featured in
                  <a href={" https://www.youtube.com/watch?v=zchEneW2890"}> HBR</a>,
                    <a href={"https://www.bostonglobe.com/2020/06/15/business/four-public-speaking-coaches-have-tips-sprucing-up-your-zoom-meetings/"} > Boston Globe </a> and
                  <a href={"https://www.psychologytoday.com/us/blog/spycatcher/202003/tips-improving-communication-during-video-conferencing\n"} > Psychology Today </a>.
                </MDBCardBody>
              </MDBCard>
          </div>
          <div className="col-lg-4">
              <MDBCard className={"about-image text-center mx-auto"}>
                <img src={rachel} alt={""} style={{width:"100%",
                  padding:"10px"}}/>
              </MDBCard>
          </div>
          </div>
      </div>
    </section>


    {/*INTEREST BAR*/}
    <section className="bg-tertiary" id="contact" style={{padding:"10px"}}>
      <MDBAnimation type={"fadeIn"} duration={"1s"} reveal={true} >
      <div className="row d-flex justify-content-center text-center col-12">
        {/*<div className={"col-lg-6 my-auto"} >*/}
          <b className={"my-auto mr-4"}>Interested in more consistent feedback and coaching? </b>
        {/*</div>*/}
        {/*<div className={"col-lg-6"}>*/}
          <a onClick={()=>{this.toggleContact()}} className={"text-white btn "}>
            Let us know
          </a>
        {/*</div>*/}
      </div>
      </MDBAnimation>

    </section>
    <section className="contact bg-secondary" id="contactline" style={{padding:"2px"}}>
    </section>

    {/*STATUS MODAL*/}
    <MDBContainer>
      <MDBModal isOpen={this.state.modal} toggle={()=>this.toggleModal()} contentClassName={"bg-gray"}>
        <h5 className={"m-3 text-center"}> {this.state.title}</h5>
        <MDBModalBody className={"m-3 text-center"}>
          <p className={"mb-3"}>{this.state.message}</p>
          <br/>
          <img src={this.state.icon} alt={"bad lighting"} width={"40px"} />

        </MDBModalBody>
        <MDBModalFooter className={"align-content-center justify-content-center "}>
          <a className={"mt-3 text-white btn"}  onClick={()=>this.toggleModal()}>Close</a>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>

    {/*CONTACT MODAL*/}
    <section className={"contact"} style={{padding:"0"}}>
    <MDBContainer>
      <MDBModal isOpen={this.state.contactModal}
                toggle={()=>this.toggleContact()}
                size={"lg"}
                contentClassName={"bg-gray"}
      >
        <div className={"row m-4"}>
          <h3 className={"text-left col-12  ml-2 mb-4"}> Contact Information</h3>

          <b className={"text-left ml-4"} >
            Please complete the below fields to learn more about learning opportunities and coaching.
          </b>
          <div className={"col-lg-12"}>

            <MDBAnimation type={"fadeIn"} duration={"1s"} reveal={true} >
              <div className="container mb-5">

                <form className="contact-form text-right" onSubmit={this.sendEmail}>
                  {/*NAME*/}
                  <div className={"row"}>
                    <label htmlFor={"name"} className={"col-2 m-3 mt-4"}> Full Name </label>
                    <input className={"mt-3 col-8 ml-2"} type="text" id={"name"}
                           placeholder={"First Last"} name="name"/>
                    <div className={"col-lg-2"}/>
                  </div>
                  {/*EMAIL*/}
                  <div className={"row"}>
                    <label htmlFor={"email"} className={"col-2  m-3 mt-4"}> Email </label>
                    <input className={"mt-3 col-8 ml-2"} type="email" id={"email"}
                           placeholder={"Email@email.com"} name="email"/>
                    <div className={"col-lg-2"}/>
                  </div>
                  {/*MESSAGE*/}
                  <div className={"row"}>
                    <label htmlFor={"message"} className={"col-2 m-3 my-1"}> Message </label>
                    <textarea className={"mt-3  col-8 ml-2 contact-text "} rows={"4"} cols={"50"}
                              placeholder={"What can we help you with? (optional)"}
                              name="message" id={"message"} style={{borderRadius:"2px", borderWidth:"1px"}}
                    />
                    <div className={"col-lg-2"}/>
                  </div>


                  <div className={" text-left mt-4"}>
                  <b>
                    What area do you most want to see improvement in?
                  </b>
                  </div>

                  <div className={"my-3"}>
                  <div className={"row"}>
                   <div className={"col-12 form-check-inline "}>
                     <div className={"col-4 ml-4  form-check-inline"}>
                      <input type="checkbox"  id="Posture" name="Posture" value="Posture" />
                      <p className={"my-1 ml-1"}>Posture</p>
                     </div>
                     <div className={"col-8  form-check-inline"}>
                      <input type="checkbox" name="General Physical Awareness" value="General Physical Awareness" id={"General Physical Awareness"}/>
                      <p className={"my-1 ml-1 text-left"}>General Physical Awareness</p>
                     </div>
                    </div>
                  </div>

                    <div className={"row my-2"}>
                      <div className={"col-12 form-check-inline "}>
                        <div className={"col-4 ml-4  form-check-inline"}>
                      <input type="checkbox" name="Gestures" value="Gestures" id={"Gestures"}/>
                      <p className={"my-1 ml-1"}>Gestures</p>
                        </div>
                        <div className={"col-8  form-check-inline"}>
                        <input type="checkbox" name="attention" value="Capturing my audience’s attention" id={"attention"}/>
                        <p className={"my-auto ml-1 text-left"}>Capturing my audience’s attention</p>
                       </div>
                      </div>
                    </div>

                  <div className={"row"}>
                    <div className={"col-12 form-check-inline "}>
                      <div className={"col-6 col-sm-4 ml-4  form-check-inline"}>
                      <input type="checkbox" name="Facial expressions" value="Facial expressions" id={"Facial expressions"}/>
                      <p className={"my-1 ml-2 text-left"}>Facial expressions</p>
                      </div>
                      <div className={"col-6 col-sm-8 form-check-inline"}>
                        <div className={"row"}>
                          <div className={"col-2 "}>
                              <input type="checkbox" name="Other" value="Other" id={"Other"}/>
                          </div>
                        <div className={"row"}>
                          <div className={"col-2"}>
                          <label htmlFor={"OtherMessage"} className={" my-1"}> Other </label>
                          </div>
                          <div className={"col-10 "}>
                              <input className={""} type="text" id={"OtherMessage"}
                                   placeholder={"I'd really like to..."} name="OtherMessage"
                                   style={{  maxWidth:"500px", width:"100%",
                                     maxHeight:"50px"}}/>
                        </div>
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>

                  {/*SUBMIT*/}
                  <div className={"col-lg-12 text-right mt-5"}>
                    <a className={"btn btn-outline gray "}
                            onClick={()=>this.toggleContact()}>
                      Cancel
                    </a>
                    <input type="submit" onClick={ ()=>this.toggleContact()} value="submit"
                           className=" btn text-white "
                           style={{width:"200px"}}
                    />
                  </div>
                </form>
              </div>
            </MDBAnimation>
          </div>

        </div>
      </MDBModal>
    </MDBContainer>
    </section>

    <Footer />
  </Layout>

);
}
  toggleModal(title){
    let message = "Elevating your virtual presence will help solve this challenge. Continue on to take your assessment.";
    let icon = vote;
    if (title===this.modalTitles[0]){
      // default vote received
      icon=vote;
    }
    else if (title===this.modalTitles[1]){
      message="Thank you for your submission - You will receive your tailored virtual presence assessment within 24 hours.";
      icon=video;
    }
    // error
    else if (title===this.modalTitles[2]){
      message="Oops! The payment didn't go through";
      icon=attention;
    }
    // t&c
    else if (title===this.modalTitles[3]){
      message = "Your video clip is used for the sole purpose of providing you with a virtual presence assessment. No content on this site is to be repurposed for any other use. No information is sold to third party organizations. ";
      icon=summary;
    }
    this.setState({
      modal: !this.state.modal,
      title:title,
      message:message,
      icon:icon,
    });
  }

  toggleContact(){
    this.setState({
      contactModal: !this.state.contactModal
    });
  }


  sendEmail(e) {
    e.preventDefault();
    console.log("email sent")
    // emailjs.sendForm('gmail', 'template_8y6injc', e.target,
    //   'user_cV1OsELmIYfBvcQFwMZHH')
    //   .then((result) => {
    //     console.log(result.text);
    //   }, (error) => {
    //     console.log(error.text);
    //   });
  }

}
export default IndexPage;
