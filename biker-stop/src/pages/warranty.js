import './style.css';
import React from 'react'; 
import { Link } from 'react-router-dom';

function Warranty(){
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


<div className="bg-dark-subtle p-4">
  <h1 style={{textAlign: 'center'}}>Warranty Document</h1>
  <p className="term">
    Warranty document (the "Warranty") outlines the terms and conditions
    governing any warranties provided for the bikes featured in the site
    (the "Service"). By accessing or using the Demo, you agree to comply
    with and be bound by the terms of this Warranty.
  </p>
  <p className="term">
    1. Warranty Coverage: The bike manufacturer (the "Manufacturer")
    warrants that the bikes provided in the site will be free from defects
    in materials and workmanship for a specific period of time (the
    "Warranty Period"). The specific Warranty Period may vary depending on
    the model of the bike and will be specified in the individual bike's
    documentation.
  </p>
  <p className="term">
    2. Warranty Limitations: The warranty is limited to the original
    purchaser of the bike (the "Owner") and is not transferable. The
    warranty does not cover any defects or damages resulting from:
  </p>
  <p className="term">
    a. Misuse, abuse, or improper use of the bike;<br />
    b. Failure to follow the manufacturer's instructions and guidelines;<br />
    c. Normal wear and tear, including tire wear, brake pads, and cables;<br />
    d. Accidents, collisions, or other incidents beyond the control of the
    Manufacturer.
  </p>
  <p className="term">
    3. Warranty Claims: To make a warranty claim, the Owner must follow the
    warranty claim process specified by the Manufacturer. This usually
    involves notifying the Manufacturer within the Warranty Period,
    providing proof of purchase, and a detailed description of the alleged
    defect or issue. The Manufacturer may request additional information or
    evidence to assess the claim.
  </p>
  <p className="term">
    4. Remedies: In the event of a valid warranty claim, the Manufacturer's
    sole obligation shall be to repair or replace the defective parts or
    components of the bike at its discretion. The Manufacturer may use new
    or refurbished parts for any repair or replacement. If the bike cannot
    be repaired or replaced, the Manufacturer may offer a refund of the
    purchase price of the bike or a comparable model.
  </p>
  <p className="term">
    5. Exclusion of Other Warranties: Except for the express warranty
    provided in this Warranty, the Manufacturer makes no other warranties,
    whether expressed or implied, including but not limited to warranties of
    merchantability, fitness for a particular purpose, or non-infringement.
  </p>
  <p className="term">
    6. Limitation of Liability: To the extent permitted by applicable law,
    the Manufacturer shall not be liable for any direct, indirect,
    incidental, special, consequential, or punitive damages arising out of
    or in connection with the use or inability to use the bike, including
    but not limited to damages for loss of profits, data, or other
    intangible losses.
  </p>
  <p className="term">
    7. Governing Law and Jurisdiction: This Warranty shall be governed by
    and construed in accordance with the laws of the jurisdiction where the
    Manufacturer is located, without regard to its conflict of laws
    provisions. Any disputes arising under or in connection with this
    Warranty shall be subject to the exclusive jurisdiction of the courts in
    that jurisdiction.
  </p>
  <p className="term">
    8. Severability: If any provision of this Warranty is found to be
    invalid or unenforceable, the remaining provisions shall remain in full
    force and effect.
  </p>
  <p className="term">
    Please note that this warranty document is a generic example and may not
    reflect the specific warranty terms and conditions provided by a
    particular bike manufacturer. It is always recommended to consult the
    actual warranty documentation provided by the Manufacturer for accurate
    and up-to-date information.
    
  </p>
</div>






<footer>
  <div className="scontainer grid">
    <div className="box">
      <div className="logo">
        <img src="image/LOGO4.png" alt style={{height: 90}} />
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
          <li className="nav-item"><Link to={"/tnc"} className="nav-link">Terms and Conditions</Link></li>
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

export default Warranty;