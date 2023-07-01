import { useRef, useState } from "react";
import { Link } from "react-router-dom";

function MyTodo() {
  let formRef = useRef();
  let [sucessBox, setSuccessBox] = useState(false);
  let [todo, setTodo] = useState({ name: "", email:"", number:"", description: "" });

  let handleName = (e) => {
    let newTodo = { ...todo, name: e.target.value };
    setTodo(newTodo);
  };

  let handleEmail = (e) => {
    let newTodo = { ...todo, email: e.target.value };
    setTodo(newTodo);
  };

  let handleNumber = (e) => {
    let newTodo = { ...todo, number: e.target.value };
    setTodo(newTodo);
  };


  let handleChangeDescriptionAction = (e) => {
    
    let newTodo = { ...todo, description: e.target.value };
    setTodo(newTodo);
  };

  let addTodoAction = async () => {
    console.log(todo);
    formRef.current.classList.add("was-validated");
    let formStatus = formRef.current.checkValidity();
    if (!formStatus) {
      alert("Please enter valid details");
      return;
    }

    let url = `http://localhost:4000/addtodo?name=${todo.name}&email=${todo.email}&number=${todo.number}&description=${todo.description}`;
    await fetch(url);

   
    let newtodo = { name:"", email:"", number:"", description: "" };
    setTodo(newtodo);

    setSuccessBox(true);
    setTimeout(() => {
      setSuccessBox(false);
    }, 5000);

    formRef.current.classList.remove("was-validated");
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


      <div className="row justify-content-center p-5 bg-dark-subtle">
        <div className="col-sm-12 col-md-6">
          <form ref={formRef} className="needs-validation">
            <h1 className="text-align-center">Hello Bikers!!!</h1>
            <h2 className="text-align-center">Book our Services here..</h2>
            <input
              className="form-control form-control-lg mb-2"
              type="text"
              placeholder="Enter your Name"
              value={todo.name}
              onChange={handleName}
              required
            />

            <input
              className="form-control form-control-lg mb-2"
              type="text"
              placeholder="Enter your Email"
              value={todo.email}
              onChange={handleEmail}
              required
            />

            <input
              className="form-control form-control-lg mb-2"
              type="text"
              placeholder="Enter your Number"
              value={todo.number}
              onChange={handleNumber}
              required
            />

            <textarea
              className="form-control mb-2"
              cols="30"
              rows="3"
              placeholder="Enter your problems/issues"
              value={todo.description}
              onChange={handleChangeDescriptionAction}
              required
            ></textarea>

            <input
              className="btn btn-lg btn-secondary bg-dark w-100"
              type="button"
              value="Book our Services"
              onClick={addTodoAction}
            />
          </form>

          {sucessBox && (
            <div className="alert alert-success">Congratulations!! Your query has been raised, our team will contact you soon.</div>
          )}
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

export default MyTodo;