import { useRef, useState } from "react";
import { Link } from "react-router-dom";

function MyRegistration() {
  let formRef = useRef();
  let [isSuccess, setIsSuccess] = useState(false);
  let [isError, setIsError] = useState(false);

  let [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    mobile: "",
  });

  let handlerUsernameAction = (e) => {
    let newuser = { ...user, username: e.target.value };
    setUser(newuser);
  };

  let handlerPasswordAction = (e) => {
    let newuser = { ...user, password: e.target.value };
    setUser(newuser);
  };

  let handlerEmailAction = (e) => {
    let newuser = { ...user, email: e.target.value };
    setUser(newuser);
  };

  let handlerMobileAction = (e) => {
    let newuser = { ...user, mobile: e.target.value };
    setUser(newuser);
  };

  let registerAction = async () => {
    try {
      formRef.current.classList.add("was-validated");
      let formStatus = formRef.current.checkValidity();
      if (!formStatus) {
        return;
      }
      

      // BACKEND
      let url = `http://localhost:4000/adduser?username=${user.username}&password=${user.password}&email=${user.email}&mobile=${user.mobile}`;

      let res = await fetch(url);

      if (res.status != 200) {
        let serverMsg = await res.text();
        throw new Error(serverMsg);
      }

      let newuser = {
        username: "",
        password: "",
        email: "",
        mobile: "",
      };
      setUser(newuser);

      formRef.current.classList.remove("was-validated");

      alert("success");
      setIsSuccess(true);
    } catch (err) {
      alert(err.message);
      setIsError(true);
    } finally {
      setTimeout(() => {
        setIsSuccess(false);
        setIsError(false);
      }, 5000);
    }
  };

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
        {/* <ul>
        <li className="nav-item"><Link to="/home" className="nav-link text-white">Home</Link></li>
          <li className="nav-item"><Link to="/bikes" className="nav-link text-white">Bikes</Link></li>
          <li className="nav-item"><Link to="/accessories" className="nav-link text-white">Accessories</Link></li>
          <li className="nav-item"><Link to="/Services" className="nav-link text-white">Services</Link></li>
          <li className="nav-item"><Link to="/about" className="nav-link text-white">About us</Link></li>
          <li className="nav-item"><Link to="/contact" className="nav-link text-white">Contact us</Link></li>
        </ul> */}
      </div>
    </div>
    <div className="media_button">
      <i className="fas fa-bars" id="mediaButton" />
    </div>
    <div className="account flex1">
      <i className="far fa-unlock-alt" />
      <li><Link to={"/login"}>Login</Link></li>
    </div>
  </div>
</nav>



      <div className="row justify-content-center bg-dark-subtle p-5" style={{ color: 'black' }}>
        <div className="col-sm-12 col-md-6" >
          {/* <div className="fs-2 ">Registration Form</div> */}
          <h1 className="text-center">Registration Form</h1>


          <form ref={formRef} className="needs-validation">
            <input
              type="text"
              className="form-control form-control-lg mb-2 mt-1"
              placeholder="Enter username"
              value={user.username}
              onChange={handlerUsernameAction}
              required
            />
            <input
              type="password"
              className="form-control form-control-lg mb-2"
              placeholder="Enter password"
              value={user.password}
              onChange={handlerPasswordAction}
              required
            />
            <input
              type="email"
              className="form-control form-control-lg mb-2"
              placeholder="Enter Email"
              value={user.email}
              onChange={handlerEmailAction}
              required
            />
            <input
              type="Number"
              className="form-control form-control-lg mb-2"
              placeholder="Enter mobile"
              value={user.mobile}
              onChange={handlerMobileAction}
              required
            />
            <input
              type="button"
              value="Register"
              className="w-100 btn btn-lg btn-secondary bg-dark"
              onClick={registerAction}
            />

            <div className="d-flex justify-content-center ">
              <p className="fs-5">Already a User? <Link className="fs-5" to={"/login"}>Login here</Link>
              </p>
              
            </div>
          </form>

          {isSuccess && <div className="alert alert-success">Success</div>}
          {isError && <div className="alert alert-danger">Error</div>}
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
  );
}

export default MyRegistration;
