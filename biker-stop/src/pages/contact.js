import React from 'react';
import { Link } from 'react-router-dom';
// import './css/style.css';
// import './contactUs.css';

class ContactUs extends React.Component {
  render() {
    return (
      <div>
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

        <div className="container p-5 bg-dark-subtle" style={{ flex: 1 }}>
  <div className="row">
    <div className="col-md-12 d-flex justify-content-center">
      <div className="contact-info">
        <div className="d-flex justify-content-between">
          <div className="phone" style={{ marginRight: '20px' }}>
            <div className="info-text">
              <h2>Phone</h2>
              <div className="text-one">
                <i className="fas fa-phone-alt"></i>+91 94050 02165
              </div>
              <div className="text-two">+91 83294 78100</div>
            </div>
          </div>
          <div className="email" style={{ margin: '0 20px' }}>
            <div className="info-text">
              <h2>Email</h2>
              <div className="text-one">
                <i className="fas fa-envelope"></i>bikersstop1234@gmail.com
              </div>
              <div className="text-two">info.bikersstop1234@gmail.com</div>
            </div>
          </div>
          <div className="address" style={{ marginLeft: '20px' }}>
            <div className="info-text">
              <h2>Address</h2>
              <div className="text-one">
                <i className="fas fa-map-marker-alt"></i>1400, Kinetic Chawk Road
              </div>
              <div className="text-two">Ahmednagar-01</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-md-12">
      <div className="contact-form">
        <h2>Send us a message</h2>
        <form className="p-4" action="https://formsubmit.co/anushridaryapurkar@gmail.com" method="POST">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <input type="email" className="form-control" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <textarea className="form-control" placeholder="Enter your Feedback"></textarea>
          </div>
          <div className="form-group">
            {/* <input type="submit" className="btn btn-primary" value="Submit" /> */}
            <button type="submit">Send</button>
          </div>
        </form>

        {/* <form action="https://formsubmit.co/anushridaryapurkar@gmail.com" method="POST">
  <input type="text" name="name" required />
  <input type="email" name="email" required />
  <button type="submit">Send</button>
</form> */}

      </div>
    </div>
  </div>
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
        <li className="nav-item"><Link to={'/contact'} className="nav-link">Contact Us</Link></li>
          <li className="nav-item"><Link to={'/warranty'} className="nav-link">Warranty</Link></li>
          <li className="nav-item"><Link to={'/tnc'} className="nav-link" href="tnc.html">Terms and Conditions</Link></li>
        </ul>
      </div>
    </div>
    <div className="box">
      <h3>Visit us again!!!</h3>
      <div className="social_media"><h4>Follow us at</h4>
        <a href="https://www.facebook.com/bikersstopbl/"><i className="fab fa-facebook-f" /></a>
        <a href="https://www.instagram.com/_bikers_stop_/"><i className="fab fa-instagram" /></a>
        <a href="https://www.youtube.com/@hasbikersstop4816"><i className="fab fa-youtube" /></a>
      </div>
    </div>
  </div>
</footer>
      </div>
    );
  }
}

export default ContactUs;
