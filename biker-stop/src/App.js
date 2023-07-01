import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ContactUs from "./pages/contact";
import Home from "./pages/home";
import Accessories from "./pages/accessories";
import Bike from "./pages/bike";
import About from "./pages/aboutus";
import Warranty from "./pages/warranty";
import Tnc from "./pages/tnc";
import MyRegistration from "./pages/registration";
import AppLogin from "./pages/login";
import MyTodo from "./pages/services";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLogin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/bikes" element={<Bike />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/warranty" element={<Warranty />} />
          <Route path="/tnc" element={<Tnc />} />
          <Route path="/registration" element={<MyRegistration />} />
          <Route path="/login" element={<AppLogin />} />
          <Route path="/services" element={<MyTodo />} />
        </Routes>
      </BrowserRouter>

      {/* <About/> */}
      {/* <Home/> */}
      {/* <Bike/> */}
      {/* <Accessories/> */}
      {/* <ContactUs/> */}
    </>
  );
}

export default App;
