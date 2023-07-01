import './style.css';
import React from 'react'; 
import { Link } from 'react-router-dom';

function Home(){

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


       <div>
  <section className="text-white" style={{position: 'relative'}}>
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner" style={{height: '80vh'}}>
        <div className="carousel-item active">
          <img src="image/image1c.png" className="d-block w-100" alt="Img1" />
        </div>
        <div className="carousel-item">
          <img src="image/image2c.png" className="d-block w-100" alt="Img2" />
        </div>
        <div className="carousel-item">
          <img src="image/image3c.png" className="d-block w-100" alt="Img3" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </section>
  <section className="latest top">
    <div className="scontainer">
      <div className="heading">
        <h1>Our Bike Collection</h1>
        <hr />
      </div>
      <div className="content grid top">
        <div className="box">
          <div className="img">
            <img src="image/super-meteor-650.jpg" alt />
          </div>
          <div className="detalis">
            <h3>Super Meteor 650</h3>
            <p>(Fashion , Twin Disc)</p>
            <h2>₹ 3,41,459 <span>₹ 3,61,459</span></h2>
            <button>Buy Now</button>
          </div>
        </div>
        <div className="box">
          <div className="img">
            <img src="image/Hunter_350.jpg" alt />
          </div>
          <div className="detalis">
            <h3>Hunter 350</h3>
            <p>(Fashion , Twin Disc)</p>
            <h2>₹ 1,60,621<span>₹ 1,69,656</span></h2>
            <button>Buy Now</button>
          </div>
        </div>
        <div className="box">
          <div className="img">
            <img src="image/bullet.jpg" alt />
          </div>
          <div className="detalis">
            <h3>Bullet</h3>
            <p>(Fashion , Twin Disc)</p>
            <h2>₹ 2,50,219 <span>2,70,219</span></h2>
            <button>Buy Now</button>
          </div>
        </div>
        <div className="box">
          <div className="img">
            <img src="image/interseptor.jpg" alt />
          </div>
          <div className="detalis">
            <h3>Interceptor</h3>
            <p>(Fashion , Twin Disc)</p>
            <h2>₹ 2,80,219 <span>₹ 2,99,509</span></h2>
            <button>Buy Now</button>
          </div>
        </div>
        <div className="box">
          <div className="img">
            <img src="image/hima.jpg" alt />
          </div>
          <div className="detalis">
            <h3>Himalayan</h3>
            <p>(Fashion , Twin Disc)</p>
            <h2>₹ 2,15,449 <span>₹ 2,39,599</span></h2>
            <button>Buy Now</button>
          </div>
        </div>
        <div className="box">
          <div className="img">
            <img src="image/classic-350.jpg" alt />
          </div>
          <div className="detalis">
            <h3>Classic 350</h3>
            <p>(Fashion , Twin Disc)</p>
            <h2>₹ 1,87,250 <span>₹ 2,01,199</span></h2>
            <button>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="latest Assesories top">
    <div className="scontainer">
      <div className="heading">
        <h1>Choose Bike Accessories</h1>
        <hr />
      </div>
      <div className="content grid top">
        <div className="box">
          <div className="img">
            <img src="image/hel1.jpg" alt />
          </div>
          <div className="detalis">
            <h3>Exclusice Open Face Helmet- Matt Black</h3>
            <p>(Fashion , Twin Disc)</p>
            <h2>₹ 2,500 <span>₹ 2,999</span></h2>
            <button>Buy Now</button>
          </div>
        </div>
        <div className="box">
          <div className="img">
            <img src="image/glov.jpg" alt />
          </div>
          <div className="detalis">
            <h3>Imported Brown Black Gloves</h3>
            <p>(Fashion , Twin Disc)</p>
            <h2>₹ 1,500 <span>₹ 1,999</span></h2>
            <button>Buy Now</button>
          </div>
        </div>
        <div className="box">
          <div className="img">
            <img src="image/jak1.jpg" alt />
          </div>
          <div className="detalis">
            <h3>Black Waterproof Tripple Layer Jacket</h3>
            <p>(Fashion , Twin Disc)</p>
            <h2>₹ 3,500 <span>₹ 3,999</span></h2>
            <button>Buy Now</button>
          </div>
        </div>
        <div className="box">
          <div className="img">
            <img src="image/a4.png" alt />
          </div>
          <div className="detalis">
            <h3>Black Coloured Rider Shoes</h3>
            <p>(Fashion , Twin Disc)</p>
            <h2>₹ 2,500 <span>₹ 2,999</span></h2>
            <button>Buy Now</button>
          </div>
        </div>
        <div className="box">
          <div className="img">
            <img src="image/jak2.jpg" alt />
          </div>
          <div className="detalis">
            <h3>Black and Maroon Leather Jacket</h3>
            <p>(Fashion , Twin Disc)</p>
            <h2>₹ 3,500 <span>₹ 3,999</span></h2>
            <button>Buy Now</button>
          </div>
        </div>
        <div className="box">
          <div className="img">
            <img src="image/a6.png" alt />
          </div>
          <div className="detalis">
            <h3>Black and Safron Coulerd Rider Shoes</h3>
            <p>(Fashion , Twin Disc)</p>
            <h2>₹ 2,500 <span>₹ 2,999</span></h2>
            <button>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  </section>
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
          <li className="nav-item"><Link to={"/warranty"} className="nav-link">Warranty</Link></li>
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
       </>
    )
}
export default Home;