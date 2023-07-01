import './style.css';
import React from 'react'; 
import { Link } from 'react-router-dom';

function Tnc(){
    return(
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
        <li className="nav-item"><Link to="/home" className="nav-link text-white">Home</Link></li>
          <li className="nav-item"><Link to="/bikes" className="nav-link text-white">Bikes</Link></li>
          <li className="nav-item"><Link to="/accessories" className="nav-link text-white">Accessories</Link></li>
          <li className="nav-item"><Link to="/services" className="nav-link text-white">Services</Link></li>
          <li className="nav-item"><Link to="/about" className="nav-link text-white">About us</Link></li>
          <li className="nav-item"><Link to="/contact" className="nav-link text-white">Contact us</Link></li>
        </ul>
      </div>
    </div>
    <div className="media_button">
      <i className="fas fa-bars" id="mediaButton" />
    </div>
    <div className="account flex1">
      <i className="far fa-unlock-alt" />
      <li><Link to={"/login"}>Logout</Link></li>
    </div>
  </div>
</nav>


<div className="bg-dark-subtle p-4" style={{paddingTop: 20}}>
  <h1 style={{textAlign: 'center'}}>Terms &amp; Conditions</h1>
  <p className="term">
    We reserve the right to change this User Agreement from time to time
    without notice. You acknowledge and agree that it is your responsibility
    to review this User Agreement periodically to familiarize yourself with
    any modifications. Your continued use of this site after such
    modifications will constitute acknowledgment and agreement of the
    modified terms and conditions.
  </p>
  <p className="term">
    1. Acceptance of Terms: By accessing or using the site (the "Service"),
    you agree to comply with and be bound by these Terms and Conditions.
  </p>
  <p className="term">
    2. Intellectual Property: The content, including but not limited to
    text, graphics, logos, images, and software, provided in the siteis the
    intellectual property of the owner and is protected by applicable
    copyright and other intellectual property laws.
  </p>
  <p className="term">
    3. Use of the website: The site is provided for informational and
    demonstration purposes only. You may use the site solely for personal,
    non-commercial use and in compliance with these Terms and Conditions.
    You are not allowed to reproduce, modify, distribute, display, perform,
    or use the site for any other purpose without prior written consent from
    the owner.
  </p>
  <p className="term">
    4. Disclaimer of Warranty: The site is provided on an "as is" basis
    without any warranties, expressed or implied. The owner does not warrant
    the accuracy, completeness, or usefulness of the information and
    materials provided in the Demo. The use of the site is at your own risk.
  </p>
  <p className="term">
    5. Limitation of Liability: In no event shall the owner be liable for
    any damages, including without limitation, direct, indirect, incidental,
    special, consequential, or punitive damages arising out of the use or
    inability to use the Demo.
  </p>
  <p className="term">
    6. User Conduct: You agree to use the site in compliance with all
    applicable laws and regulations. You are solely responsible for any
    content you submit or transmit through the Demo, and you agree not to
    engage in any unlawful, harmful, threatening, abusive, harassing,
    defamatory, or otherwise objectionable conduct.
  </p>
  <p className="term">
    7. Privacy: The owner may collect and use your personal information in
    accordance with the Privacy Policy applicable to the Demo. By using the
    Demo, you consent to such collection and use of your personal
    information.
  </p>
  <p className="term">
    8. Modifications: The owner reserves the right to modify or terminate
    the site at any time without prior notice. The owner may also update
    these Terms and Conditions from time to time, and your continued use of
    the site after any modifications will signify your acceptance of the
    updated terms.
  </p>
  <p className="term">
    9. Governing Law: These Terms and Conditions shall be governed by and
    construed in accordance with the laws of the jurisdiction where the
    owner is located, without regard to its conflict of laws provisions.
  </p>
  <p className="term">
    10. Severability: If any provision of these Terms and Conditions is
    found to be invalid or unenforceable, the remaining provisions shall
    remain in full force and effect.
  </p>
  <p className="term">
    Please note that the above terms and conditions are a generic example
    and may not reflect the specific terms and conditions of any particular
    website or service. It is always recommended to consult the actual terms
    and conditions of the website or service in question for accurate and
    up-to-date information.
  </p>
</div>





<footer>
  <div className="scontainer grid">
    <div className="box">
      <div className="logo">
        <img src="image/LOGO4.png" alt style={{height: 70}} />
      </div>
      <p>
        Welcome to Biker's Stop, your one-stop destination for all things
        related to biking. We are passionate bikers ourselves, and our goal
        is to provide fellow riders with the best products, services, and
        resources to enhance their biking experience.
      </p>
      <h1>+91 94050 02165</h1>
      <h5>Email : bikersstop1234@gmail.com</h5>
    </div>
    <div className="box">
      <h3>Customer Services</h3>
      <div className="flex1">
        <ul>
        <li className="nav-item"><Link to={"/contact"} className="nav-link">Contact Us</Link></li>
          <li className="nav-item"><Link to={"/warranty"} className="nav-link">Warranty</Link></li>
          <li className="nav-item"><Link to={"/tnc"} className="nav-link" href="tnc.html">Terms and Conditions</Link></li>
        </ul>
      </div>
    </div>
    <div className="box">
      <h3>Visit us again!!!</h3>
      <div className="input flex1">
        <input type="email" placeholder="Email Address" />
        <i className="far fa-long-arrow-right" />
      </div>
      <div className="social_media">
      <h4>Follow us at</h4>
        <a href="https://www.facebook.com/bikersstopbl/"><i className="fab fa-facebook-f" /></a>
        <a href="https://www.instagram.com/_bikers_stop_/"><i className="fab fa-instagram" /></a>
        <a href="https://www.youtube.com/@hasbikersstop4816"><i className="fab fa-youtube" /></a>
      </div>
    </div>
  </div>
</footer>

        </>
    );
}

export default Tnc;