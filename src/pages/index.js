import React, { Component } from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';

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

import assessment from "../assets/images/BlurredDocument.png";
import rachel from "../assets/images/Rachel Cossar.jpg";

import vid from '../assets/videos/VPAssessment Intro.mp4';

import {
  MDBAnimation,
  MDBBtn, MDBCard, MDBCardBody, MDBCardHeader,
} from 'mdbreact';
import emailjs from 'emailjs-com';
import Video from '../components/Video';

class IndexPage extends Component{

  state = {
    radio: 1
  }

  onRadioSelect = nr => () => {
    this.setState({
      radio: nr
    });
  }

  render(){
  return(
  <Layout>
    <Header />

    <header className="masthead">
            <video autoPlay={"autoplay"} loop={"loop"} muted className={"video"}
            style={{
              height:"100%",
              width:"100%",
              objectFit:"cover"
            }}>
              <source src={vid} type={"video/mp4"}/>
            </video>

      <div  style={{
        position:"absolute",
        top:0,
        background: "rgba(100,100,100,.3)",
        height:"100%",
        width:"100%",
        objectFit:"cover"
      }}>
      <div className="header-content mx-auto"
           style={{
             marginTop:"20vh",
           }}
           >
        <h1 className={"text-left ml-5"} style={{maxWidth:"400px"}}>
          Personalized Virtual Presence Assessment
        </h1>
        <h4 className={"ml-5 text-left"} style={{maxWidth:"700px", marginTop:"30vh"}}>
          IMPROVING HUMAN CONNECTION OVER VIDEO
        </h4>
        <div className={"text-left ml-5"}>
          <MDBBtn href={"/contact"} >
          GET MY ASSESSMENT
          </MDBBtn>
        </div>
      </div>
      </div>
    </header>

    {/*FAILS*/}
    <section className="fails" id="fails">
      <div className="container-fluid">
        <div className="row section-heading text-center ">
          <div className={"col-lg-3"}>
            <hr />
          </div>
          <div className="col-lg-6 ">
            <h2>VIRTUAL PRESENCE FAILS</h2>
            <p className={"my-4"}>A couple of seconds is all it takes to form a first impression.</p>
          </div>
          <div className={"col-lg-3"}>
            <hr />
          </div>
        </div>

        <div className="row">

                <div className="col-lg-4">
                  <MDBAnimation type={"fadeIn"} duration={"1s"} delay={"0.25s"} reveal={"true"}>
                    <MDBCard className="feature-item">

                      <h5>Lens Too High</h5>
                      <p className="card-notes">
                        Loss of authority on camera </p>
                      <img src={tooHigh} alt={"bad lighting"} className={"card-image"} />
                    </MDBCard>
                  </MDBAnimation>
                </div>

                <div className="col-lg-4">
                  <MDBAnimation type={"fadeIn"} duration={"1s"} delay={".5s"} reveal={"true"}>
                    <MDBCard className="feature-item">
                      <h5>Lens Too Close</h5>
                      <p className="card-notes">
                        Reduction of body language readability
                      </p>
                    <img src={tooClose} alt={"bad lighting"} className={"card-image"} />
                    </MDBCard>
                  </MDBAnimation>
                </div>

                <div className="col-lg-4">
                  <MDBAnimation type={"fadeIn"} duration={"1s"} reveal={"true"} delay={"1s"}>
                      <MDBCard className="feature-item">
                      <h5>Bad Lighting</h5>
                      <p className="card-notes">
                        Loss of facial expression and recognition
                      </p>
                    <img src={badLighting} alt={"bad lighting"} className={"card-image"} />
                      </MDBCard>
                  </MDBAnimation>
                </div>
        </div>
      </div>
    </section>

    {/*BENEFITS*/}
    <section className="features" id="benefits" style={{padding:"30px 0"}}>
      <div className="container-fluid mt-3">
        <div className="section-heading text-center ">
          <h3>Virtual Presence Skills Allow You To ...</h3>
        </div>
        <div className="col-lg-12 my-auto">
          <div className="row">

                <div className="col-lg-3">
                <MDBAnimation type={"fadeIn"} duration={"1s"} delay={"0.25s"} reveal={"true"}>
                  <div className="feature-item">
                    <img className={"card-image"} src={colleagues} alt={""}  />
                    <p className="card-notes">More deeply communicate with your colleagues</p>
                  </div>
                </MDBAnimation>
                </div>

                <div className="col-lg-3">
                  <MDBAnimation type={"fadeIn"} duration={"1s"} delay={".5s"} reveal={"true"}>
                  <div className="feature-item">
                    <img className={"card-image"} src={hands} alt={""} />
                    <p className="card-notes">
                     Develop trusting relationships wth your clients
                    </p>
                  </div>
                  </MDBAnimation>
                </div>

                <div className="col-lg-3">
                  <MDBAnimation type={"fadeIn"} duration={"1s"} reveal={"true"} delay={"1s"}>
                  <div className="feature-item">
                    <img className={"card-image"} src={target} alt={""}/>
                    <p className="card-notes">
                      Manage your own energy and focus
                    </p>
                  </div>
                  </MDBAnimation>
                </div>

                <div className="col-lg-3">
                  <MDBAnimation type={"fadeIn"} duration={"1s"} delay={"1.25s"} reveal={"true"}>
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
    <section className="cta m-5" id="cta">
      <div className="container">
        <div className="row ">
          <div className="col-lg-8 mx-auto my-auto">
            <form className="contact-form" onSubmit={this.sendEmail}>

            <MDBAnimation type={"fadeIn"} duration={"1s"} reveal={"true"} delay={"1s"}>
              <MDBCard className="poll p-3">
                <h4 className={"text-center m-4"}>Take The Poll</h4>
                <p className="text-center"> What do you find most challenging when it comes to video communication? </p>

                <div className="form-check radio">
                  <input className="form-check-input" type="radio"
                         name="Staying focused"
                         id="radio1"
                         value="Staying focused"
                         checked={this.state.radio===1}
                         onClick={this.onRadioSelect(1)}
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
                         onClick={this.onRadioSelect(2)}
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
                         onClick={this.onRadioSelect(3)}
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
                         onClick={this.onRadioSelect(4)}
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
                         onClick={this.onRadioSelect(5)}
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
                         className="btn-default btn text-white mt-5"
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

        <div className="row">
          <Video/>
        </div>

      </div>
    </section>


    {/*ASSESSMENT*/}
    <section className="assessment" id="assessment">
      <div className="container-fluid " style={{paddingRight:"100px", paddingLeft:"100px"}}>
        <MDBAnimation type={"slideInRight"} duration={"1s"} reveal={"true"} >

        <div className="section-heading text-center mb-4">
          <h4>With your customized assessment, learn how to be your best communicator. This includes:</h4>
        </div>

        </MDBAnimation>
        <div className="row">
          <div className="col-lg-4">
            <MDBAnimation type={"slideInLeft"} duration={"1s"} reveal={"true"} >
              <img src={assessment} alt={""} style={{width:"100%",  boxShadow:"8px 8px 5px lightgray"}}/>
            </MDBAnimation>
          </div>
          <div className="col-lg-8">
            <div className="row ">
              <div className="col-lg-6 mb-5">
                <MDBAnimation type={"slideInLeft"} duration={"1s"} reveal={"true"} className={"h-100"}>
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
                <MDBAnimation type={"slideInRight"} duration={"1s"} reveal={"true"} className={"h-100"}>

                  <MDBCard className={"feature-item h-100"}>
                    <h3> Metrics </h3>
                    <MDBCardBody >
                      A quick recap explaining of your overall assessment
                    </MDBCardBody>
                    <img className={"card-image my-auto mx-auto"} src={metrics} alt={""} />
                  </MDBCard>
                </MDBAnimation>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <MDBAnimation type={"slideInLeft"} duration={"1s"} reveal={"true"} className={"h-100"} >
                  <MDBCard className={"feature-item"}>
                    <h3> Score </h3>
                    <MDBCardBody >
                      A quick recap explaining of your overall assessment
                    </MDBCardBody>
                    <img className={"card-image my-auto mx-auto"} src={score} alt={""} />
                  </MDBCard>
                </MDBAnimation>
              </div>
              <div className="col-lg-6">
                <MDBAnimation type={"slideInRight"} duration={"1s"} reveal={"true"} className={"h-100"} >
                  <MDBCard className={"feature-item"}>
                    <h3> Recommendations </h3>
                    <MDBCardBody >
                      A quick recap explaining of your overall assessment
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
      <div className="container-fluid">

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

        <div className="row m-5 p-5">
          <div className="col-lg-8">
            <MDBAnimation type={"slideInRight"} duration={"1s"} reveal={"true"} >
              <MDBCard className={"about-item text-center"}>
                <h3> Body Language & Presence Expert </h3>
                <MDBCardBody >
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
                  Rachel Cossar is the author of When You Can’t Meet in Person
                  - A Guide to Mastering Virtual Presence and Communication.
                  Her work and firm are featured in HBR, Boston Globe and
                  Psychology Today.
                </MDBCardBody>
              </MDBCard>
            </MDBAnimation>
          </div>
          <div className="col-lg-4">
            <MDBAnimation type={"slideInLeft"} duration={"1s"} reveal={"true"} >
              <MDBCard className={"about-image text-center"}>
                <img src={rachel} alt={""} style={{width:"100%",
                  padding:"10px"}}/>
              </MDBCard>
            </MDBAnimation>
          </div>
          </div>
      </div>
    </section>


    {/*INTEREST BAR*/}
    <section className="bg-tertiary" id="contact" style={{padding:"10px"}}>
      <MDBAnimation type={"fadeIn"} duration={"1s"} reveal={"true"} >
      <div className="container row col-lg-12">
        <div className={"col-lg-8 my-auto"} >
          <p className={"m-0 text-right"}>Interested in more consistent feedback and coaching? </p>
        </div>
        <div className={"col-lg-4"}>
          <MDBBtn href={"/contact"} className={"text-white mr-auto"}>
            Let us know
          </MDBBtn>
        </div>
      </div>
      </MDBAnimation>

    </section>
    <section className="contact bg-secondary" id="contactline" style={{padding:"2px"}}>
    </section>


    <Footer />
  </Layout>

);
}
  sendEmail(e) {
    e.preventDefault();
    console.log("email sent")
    emailjs.sendForm('gmail', 'template_8y6injc', e.target,
      'user_cV1OsELmIYfBvcQFwMZHH')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }
}
export default IndexPage;
