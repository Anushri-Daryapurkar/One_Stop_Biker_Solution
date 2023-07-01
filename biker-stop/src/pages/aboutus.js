import "./style.css";
import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <nav className="nav navbar-light sticky-top">
        <div className="container flex1">
          <div className="mt-1">
            <Link to={"/home"}>
              <img src="image/LOGO4.png" alt />
            </Link>
          </div>
          <div className="menu">
            <div className="main_list" id="mainListDiv">
              <ul>
                <li className="nav-item">
                  <Link to="/home" className="nav-link text-white">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/bikes" className="nav-link text-white">
                    Bikes
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/accessories" className="nav-link text-white">
                    Accessories
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/services" className="nav-link text-white">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link text-white">
                    About us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link text-white">
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="media_button">
            <i className="fas fa-bars" id="mediaButton" />
          </div>
          <div className="account flex1">
            <i className="far fa-unlock-alt" />
            <li>
              <Link to={"/login"}>Logout</Link>
            </li>
          </div>
        </div>
      </nav>

      <div className="row bg-dark-subtle">
        <div className="col-md-4 col-sm-12">
          <img
            src="image/classic-350.jpg"
            className="img-thumbnail mt-5"
            alt="..."
            style={{ height: "60vh" }}
          />
        </div>
        <div className="col-md-8 col-sm-12 p-3">
          <div className="container">
            <h1 style={{ color: "black", textAlign: "center" }}>About Us</h1>
            <hr />
            <p className="Font">
              Welcome to Biker's Stop, your one-stop destination for all things
              related to biking. We are passionate bikers ourselves, and our
              goal is to provide fellow riders with the best products, services,
              and resources to enhance their biking experience.
            </p>
            <p className="Font">
              At Biker's Stop, we offer a wide range of high-quality bikes,
              parts, and accessories to suit every rider's needs. Whether you're
              a seasoned pro or just starting out, we have the perfect gear to
              meet your requirements. Our team of experts carefully curates our
              inventory to ensure that we only stock the best products from top
              brands in the industry.
            </p>
            <p className="Font">
              We also provide maintenance and repair services to keep your bike
              in top shape. Our skilled technicians have years of experience
              working with all types of bikes, and they are dedicated to
              providing efficient and reliable service. Additionally, we offer
              personalized consultations to help you make informed decisions
              about your biking needs.
            </p>
            <p className="Font">
              Customer satisfaction is our top priority. We strive to offer
              exceptional service and support to our customers throughout their
              biking journey. Whether you have questions, need advice, or
              require assistance with an order, our friendly and knowledgeable
              team is always here to help.
            </p>
            <p className="Font">
              Thank you for choosing Biker's Stop. We look forward to serving
              you and being a part of your biking adventures.
            </p>
          </div>
        </div>
      </div>
      <section className="bg-dark-subtle">
          <div class="row d-flex justify-content-center">
            <div class="col-md-10 col-xl-8 text-center">
              <h1 class="mb-4">Meet our team</h1>
            </div>
          </div>

          <div class="row text-center">
            <div class="col-md-4 mb-5 mb-md-0">
              <div class="d-flex justify-content-center mb-4">
                <img
                  src="image/Samruddhi.jpeg"
                  class="rounded-circle shadow-1-strong"
                  width="150"
                  height="150"
                />
              </div>
              <h5 class="mb-3">Samruddhi Ghodgavkar</h5>
              <h6 class="text-primary mb-3">CDAC MUMBAI Juhu</h6>
              <h6 class="text-success mb-3">samruddhi@gmail.com</h6>
            </div>
            <div class="col-md-4 mb-5 mb-md-0">
              <div class="d-flex justify-content-center mb-4">
                <img
                  src="image/Anushri.jpeg"
                  class="rounded-circle shadow-1-strong"
                  width="150"
                  height="150"
                />
              </div>
              <h5 class="mb-3">Anushri Daryapurkar</h5>
              <h6 class="text-primary mb-3">CDAC MUMBAI Kharghar</h6>
              <h6 class="text-success mb-3">anushri@gmail.com</h6>
            </div>
            <div class="col-md-4 mb-0">
              <div class="d-flex justify-content-center mb-4">
                <img
                  src="image/Abhishek.jpeg"
                  class="rounded-circle shadow-1-strong"
                  width="150"
                  height="150"
                />
              </div>
              <h5 class="mb-3">Abhishek Vyavahare</h5>
              <h6 class="text-primary mb-3">CDAC MUMBAI Kharghar</h6>
              <h6 class="text-success mb-3">abhishek@gmail.com</h6>
            </div>
          </div>
        </section>

      <footer>
        <div className="scontainer grid">
          <div className="box">
            <div className="logo">
              <img src="image/LOGO4.png" alt style={{ height: 90 }} />
            </div>
            <p>
              Welcome to Biker's Stop, your one-stop destination for all things
              related to biking. We are passionate bikers ourselves, and our
              goal is to provide fellow riders with the best products, services,
              and resources to enhance their biking experience.
            </p>
            <h1>+91 94050 02165</h1>
            <h5>Email : bikersstop1234@gmail.com</h5>
          </div>
          <div className="box">
            <h3>Customer Services</h3>
            <div className="flex1">
              <ul>
                <li className="nav-item">
                  <Link to={"/contact"} className="nav-link">
                    Contact Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/warranty"} className="nav-link">
                    Warranty
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/tnc"} className="nav-link" href="tnc.html">
                    Terms and Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="box">
            <h3>Visit us again!!!</h3>
    
            <div className="social_media">
              <h4>Follow us at</h4>
              <a href="https://www.facebook.com/bikersstopbl/">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="https://www.instagram.com/_bikers_stop_/">
                <i className="fab fa-instagram" />
              </a>
              <a href="https://www.youtube.com/@hasbikersstop4816">
                <i className="fab fa-youtube" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default About;
