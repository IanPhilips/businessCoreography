import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import scrollTo from 'gatsby-plugin-smoothscroll';
import {
  MDBCard, MDBCardBody, MDBContainer, MDBModal, MDBModalBody, MDBModalFooter,
} from 'mdbreact';
import emailjs from 'emailjs-com';
import Video from '../components/Video';
import { Slide, Fade } from "react-awesome-reveal";

import config from '../../config';
import badLighting from "../assets/images/Bad lighting_sized.png";
import tooClose from "../assets/images/Lens too close_sized.png";
import tooHigh from "../assets/images/Lens too high_sized.png";
import justRight from "../assets/images/RoomToBreathCentered.png";
import colleagues from "../assets/img/colleagues_icon.png";
import hands from "../assets/img/trust_icon.png";
import target from "../assets/img/target_icon.png";
import attention from "../assets/img/attention_icon.png"
import attention_red from "../assets/img/attention_icon_red.png"
import summary from "../assets/img/summary_icon.png"
import metrics from "../assets/img/metrics_icon.png"
import recommendation from "../assets/img/recommendations_icon.png"
import vote from "../assets/img/vote_icon.png"
import video from "../assets/img/video_icon.png"
import assessment from "../assets/images/assessment.png";
import rachel from "../assets/images/Rachel Cossar.jpg";
import hero from '../assets/videos/Hero_Video.mp4';

const emailjsContactPollID="template_ddrgc9o";

class IndexPage extends Component{

  modalTitles=["Vote Received", "Video Received", "Error", "Terms & Conditions"];
  paymentStatusKey="PaymentStatus";
  priceCode="price";
  testModeCode="key";
  defaultPrice='price_1HhFwwF6ssRQC0xGlnkilU8r';


  state = {
    radio: 1,
    modal:false,
    modalSize:"sm",
    title:this.modalTitles[0],
    message:"",
    icon:video,
    contactModal:false,
    price:null,
    testMode:null
  };

  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidMount() {
    this.showModalWithParams();
  }

  showModalWithParams(){
    let params = (new URL(this.props.location.href)).searchParams;
    // PARSE PRICE
    let price = params.get(this.priceCode);
    if (price===null){
      price=this.defaultPrice;
    }
    // can be null
    let testMode = params.get(this.testModeCode);

    this.setState({
      price:price,
      testMode:testMode
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
            <video autoPlay={"autoplay"} loop={"loop"} muted className={"video"}>
              <source src={hero} type={"video/mp4"}/>
            </video>

      <div  style={{ position:"absolute", top:0, background: "rgba(100,100,100,.3)", height:"100%", width:"100%", objectFit:"cover" }}>

      <div className="header-content mx-auto">
        <h1 className={"text-center"}> Personalized Virtual Presence Assessment</h1>

        <div className={"row p-2 d-flex justify-content-center"} style={{marginTop:"1vh", fontSize:"22px"}}>
          <h5 className={"my-auto text-center text-white"}>Improving Human Connection Over Video</h5>
        </div>

        <div className={"text-center row d-flex justify-content-center mt-5"} style={{width:"100%"}}>
          <button className={"btn"} id={"assessmentButton"}
                  onClick={() =>
                  {
                    scrollTo('#video');
                    document.getElementById("assessmentButton").blur();
                  }}
                  style={{width:"350px"}}>GET MY ASSESSMENT</button>
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
            <h2 className={"mb-5"}> Common VIRTUAL PRESENCE FAILS</h2>
            <p className={"my-4"}>A couple of seconds is all it takes to form a first impression.</p>
          </div>
          <div className={"col-lg-3"}>
            <hr />
          </div>
        </div>

        <div className="row">

          <div className="col-lg-4 mb-5 ">
            <Fade className={"mb-5"} triggerOnce delay={0} >
              <MDBCard className="feature-item">
                <h5>Bad Lighting</h5>
                <p className="card-notes">
                  Loss of facial expression and recognition
                </p>
                <img src={badLighting} alt={"bad lighting"} className={"card-image"} />
              </MDBCard>
            </Fade>
          </div>

          <div className="col-lg-4 mb-5">
            <Fade className={"mb-5"} triggerOnce delay={400} >
            <MDBCard className="feature-item">
                <h5>Lens Too High</h5>
                <p className="card-notes">
                  Loss of authority on camera </p>
                <img src={tooHigh} alt={"Lens Too High"} className={"card-image"} />
              </MDBCard>
            </Fade>
          </div>

          <div className="col-lg-4 mb-5">
            <Fade className={"mb-5"} triggerOnce delay={800} >
              <MDBCard className="feature-item">
                <h5>Lens Too Close</h5>
                <p className="card-notes">
                  Reduction of body language readability
                </p>
              <img src={tooClose} alt={"Lens Too Close"} className={"card-image"} />
              </MDBCard>
            </Fade>
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
          <div className="row mt-5">
            <div className="col-lg-6 my-auto">
              <div className="row">
                <div className="col-lg-6">
                    <Fade triggerOnce delay={0} >
                      <div className="feature-item">
                        <img className={"card-image"} src={colleagues} alt={""}  />
                        <p className="card-notes">More deeply communicate with your colleagues</p>
                      </div>
                    </Fade>
                    </div>
                    <div className="col-lg-6">
                      <Fade triggerOnce delay={400} >
                      <div className="feature-item">
                        <img className={"card-image"} src={hands} alt={""} />
                        <p className="card-notes">
                         Develop trusting relationships wth your clients
                        </p>
                      </div>
                      </Fade>
                    </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <Fade triggerOnce delay={800} >
                    <div className="feature-item">
                      <img className={"card-image"} src={target} alt={""}/>
                      <p className="card-notes">
                        Manage your own energy and focus
                      </p>
                    </div>
                  </Fade>
                </div>

                <div className="col-lg-6">
                  <Fade triggerOnce delay={1200} >
                    <div className="feature-item">
                      <img className={"card-image"} src={attention} alt={""}/>
                      <p className=" card-notes">
                        Hold your audience's attention in virtual presentations
                      </p>
                    </div>
                  </Fade>
                </div>
              </div>

            </div>
                <div className="col-lg-6 my-auto good-feature justify-content-center align-content-center d-flex">
                  <Fade className={""} triggerOnce delay={800} >
                    <MDBCard className="feature-item">
                      <h5>Virtual Presence Best Practices</h5>
                      <p className="card-notes">
                      </p>
                      <img src={justRight} alt={"Lens Too Close"} className={"card-image"} />
                    </MDBCard>
                  </Fade>
                </div>

        </div>
        </div>
      </div>
    </section>


    {/*ASSESSMENT*/}
    <section className="assessment" id="assessment">
      <div className="container-fluid not-too-wide" >
        <Fade triggerOnce delay={0} duration={1000} >
          <div className="row section-heading text-center mb-4 ">
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
          <div className="section-heading text-center mb-5">
            <p> Customized assessment according to 14 virtual presence metrics.</p>
          </div>

        </Fade>
        <div className="row">
          <div className="col-lg-4 mx-auto my-auto text-center" >
            <Slide triggerOnce delay={0} direction={"left"}  className={"mb-4 mx-auto"} >
              <img src={assessment} alt={""} style={{width:"100%"}} />
            </Slide>
          </div>
          <div className="col-lg-8" >
            <div className="row ">
              <div className="col-lg-6 mb-5">
                <Slide triggerOnce delay={0} direction={"left"}  className={"h-100"}>
                  <MDBCard className={" feature-item "}>
                    <h3> Summary </h3>
                    <MDBCardBody >
                      A quick recap explaining of your overall assessment
                    </MDBCardBody>
                    <img className={"card-image my-auto mx-auto"} src={summary} alt={""} />
                  </MDBCard>
                </Slide>

              </div>
              <div className="col-lg-6 mb-5">
                <Slide triggerOnce delay={0} direction={"right"}  className={"h-100"}>

                  <MDBCard className={"feature-item h-100"}>
                    <h3> Metrics </h3>
                    <MDBCardBody >
                      Top three areas of improvement from a list of 14 virtual presence metrics
                    </MDBCardBody>
                    <img className={"card-image my-auto mx-auto"} src={metrics} alt={""} />
                  </MDBCard>
                </Slide>
              </div>
            </div>
            <div className="row d-flex align-content-center justify-content-center">
              <div className="col-lg-6 mb-5">
                <Slide triggerOnce delay={0} direction={"right"}  className={"h-100"} >
                  <MDBCard className={"feature-item"}>
                    <h3> Recommendations </h3>
                    <MDBCardBody >
                      Suggestions for immediate improvement to your virtual presence
                    </MDBCardBody>
                    <img className={"card-image my-auto mx-auto"} src={recommendation} alt={""} />
                  </MDBCard>
                </Slide>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    {/*VIDEO SUBMISSION*/}
    <section className="video" id="video">
      <div className="container-fluid">


        <div className="row equal">
          {this.state.price
            ? <Video toggleParentModal={this.toggleModal}
                     price={this.state.price}
                     testMode={this.state.testMode}
            />
            : <div/>
          }
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
                  <a href={" https://www.youtube.com/watch?v=zchEneW2890"}> Harvard Business Review</a>,
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
      <Fade triggerOnce delay={0} >
      <div className="row d-flex justify-content-center text-center col-12">
          <b className={"my-auto mr-4"}>Interested in more consistent feedback and coaching? </b>
          <button onClick={()=>{this.toggleContact()}} className={"text-white btn "}>
            Let us know
          </button>
      </div>
      </Fade>

    </section>
    <section className="contact bg-secondary" id="contactline" style={{padding:"2px"}}>
    </section>

    {/*STATUS MODAL*/}
    <MDBContainer>
      <MDBModal
        isOpen={this.state.modal}
        toggle={()=>this.toggleModal()}
        contentClassName={"bg-gray"}
        size={this.state.modalSize}
      >
        <h5 className={"m-3 text-center"}> {this.state.title}</h5>
        <MDBModalBody className={"m-3 text-center"}>
          <div className={"mb-3"}> { ReactHtmlParser (this.state.message) } </div>
          <br/>
          <img src={this.state.icon} alt={"bad lighting"} width={"40px"} />

        </MDBModalBody>
        <MDBModalFooter className={"align-content-center justify-content-center "}>
          <button className={"mt-3 text-white btn"}  onClick={()=>this.toggleModal()}>Close</button>
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

            <Fade triggerOnce delay={0} duration={1000} >
              <div className="container mb-5">

                <form className="contact-form text-right" onSubmit={this.sendEmail}>
                  {/*NAME*/}
                  <div className={"row"}>
                    <label htmlFor={"name"} className={"col-2 m-3 mt-4"}> Full Name </label>
                    <input className={"mt-3 col-8 ml-3"} type="text" id={"name"}
                           placeholder={"First Last"} name="name"/>
                    <div className={"col-lg-2"}/>
                  </div>
                  {/*EMAIL*/}
                  <div className={"row"}>
                    <label htmlFor={"email"} className={"col-2  m-3 mt-4"}> Email </label>
                    <input className={"mt-3 col-8 ml-3"} type="email" id={"email"}
                           placeholder={"Email@email.com"} name="email"/>
                    <div className={"col-lg-2"}/>
                  </div>
                  {/*MESSAGE*/}
                  <div className={"row"}>
                    <label htmlFor={"message"} className={"col-2 m-3 my-1"}> Message </label>
                    <textarea className={"mt-3  col-8 ml-3 contact-text "} rows={"4"} cols={"50"}
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
                    </div>
                  </div>
                    <div className={"row"}>
                      <div className={"col-12 ml-4 form-check-inline"}>
                        <input type="checkbox" name="Other" value="Other" id={"Other"}/>
                        <label htmlFor={"OtherMessage"} className={" my-1 m-2 text-left"}> Other </label>
                        <input className={""} type="text" id={"OtherMessage"}
                               placeholder={"I'd really like to..."} name="OtherMessage"
                               style={{  maxWidth:"500px", width:"100%",
                                 maxHeight:"50px"}}/>
                      </div>
                    </div>
                  </div>

                  {/*SUBMIT*/}
                  <div className={"col-lg-12 text-right mt-5"}>
                    <button className={"btn btn-outline gray "}
                            type={"button"}
                            onClick={()=>this.toggleContact()}>
                      Cancel
                    </button>
                    <input type="submit" onClick={ ()=>this.toggleContact()} value="submit"
                           className="text-white button btn "
                           style={{width:"200px"}}
                    />
                  </div>
                </form>
              </div>
            </Fade>
          </div>

        </div>
      </MDBModal>
    </MDBContainer>
    </section>

    <Footer />
  </Layout>

);

  }

  defaultMessage="Elevating your virtual presence will help solve this challenge. Continue on to take your assessment.";
  toggleModal(title, message=this.defaultMessage){
    let icon = vote;
    let size = "sm";
    // default vote received
    if (title===this.modalTitles[0]){
      icon=vote;
    }
    else if (title===this.modalTitles[1]){
      message="Thank you for your submission - You will receive your tailored virtual presence assessment within 24 hours.";
      icon=video;
    }

    // error
    else if (title===this.modalTitles[2]){
      // is default message?
      if (message===this.defaultMessage){
        message="Oops! The payment didn't go through";
      }
      icon=attention_red;
    }
    // t&c
    else if (title===this.modalTitles[3]){
      message = "TERMS OF SERVICE\n" +
        "By clicking “Agree & Begin” below, you agree that the following terms and conditions will apply to the Virtual Presence Assessment (the “Service”) provided through www.vpassessment.com (the “Site”) by Choreography for Business, LLC (“Choreography for Business”, “we” or “us”). If you do not agree and accept, without limitation or qualification, these Terms of Service, you must exit the Site immediately and abstain from using the Service.\n" +
        " <br/>  <br/> By using the Site or Service, you represent and warrant that you are 18 years of age or older.\n "+
        " <br/>  <br/> When you purchase the Service, you will record and submit a short video to Choreography for Business through the Site, and we will provide you with a written Virtual Presence Assessment. We agree that we shall not sell or distribute your video images to any unaffiliated third party for any commercial purpose. By submitting your video through the Site, you grant us the irrevocable and unrestricted right to use and reproduce your video images in connection with the business activities of Choreography for Business and our affiliates, including for internal research, training and the development of new products or services. By using the Service, you release Choreography for Business from any and all claims and liability relating to our use of any video images or other information you submit through the Site, including any claim to profits that may arise from our internal use of said images or information, in accordance with the terms hereof.\n " +
        " <br/>  <br/> THE SITE AND THE SERVICE ARE PROVIDED ON AN “AS IS” BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. CHOREOGRAPHY FOR BUSINESS HEREBY DISCLAIMS ANY AND ALL WARRANTIES RELATING TO THE SITE AND SERVICE OR ANY OTHER MATTER COVERED BY THESE TERMS OF SERVICE, INCLUDING, WITHOUT LIMITATION, ANY IMPLIED WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. CHOREOGRAPHY FOR BUSINESS MAKES NO WARRANTIES OR REPRESENTATIONS AS TO THE ACCURACY, COMPLETENESS, RELIABILITY, OR SECURITY OF ANY CONTENT PROCESSED BY THE SITE OR SERVICE, OR THAT ANY SERVICE OR ITEMS OBTAINED THROUGH THE SITE WILL OTHERWISE MEET YOUR NEEDS OR EXPECTATIONS. THE AGGREGATE LIMIT OF CHOREOGRAPHY FOR BUSINESS’ LIABILITY IN CONNECTION WITH ANY AND ALL CLAIMS ARISING UNDER THESE TERMS OF SERVICE OR OTHERWISE IN CONNECTION WITH THE SITE OR THE SERVICE SHALL BE THE AMOUNT THAT YOU HAVE PAID TO CHOREOGRAPHY FOR BUSINESS FOR THE SERVICE. \n" +
        " <br/>  <br/> Choreography for Business retains the right to terminate its provision of the Service to you for any reason at any time. Provided that such termination is not by reason of your breach of these Terms of Services, you will receive a refund of any amounts you have paid for the Service.\n" +
        " <br/>  <br/> All matters relating to the Site, Service and these Terms of Service shall be governed by and construed in accordance with the internal laws of the Commonwealth of Massachusetts without giving effect to any conflict of law provisions thereof.  Any lawsuit, action, or proceeding arising out of, or related to, the Site, Service or these Terms of Service shall be instituted exclusively in the state or federal courts located in Boston, Massachusetts.";
      icon=summary;
      size = "lg";
    }

    this.setState({
      modal: !this.state.modal,
      title:title,
      message:message,
      icon:icon,
      modalSize:size,
    });
  }

  toggleContact(){
    this.setState({
      contactModal: !this.state.contactModal
    });
  }


  sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm(config.emailjsServiceID, emailjsContactPollID, e.target,
      config.emailjsUserID)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

}
export default IndexPage;
