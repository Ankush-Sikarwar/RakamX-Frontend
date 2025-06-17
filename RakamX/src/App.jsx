import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import React, { Suspense, lazy } from "react";

// Lazy load components
const SignupPage = lazy(() => import("./components/Signup/Signup"));
const LoginPage = lazy(() => import("./components/Login/Login"));
const Grid = lazy(() => import("./components/Grid/Grid"));
const AnimatedTestimonials = lazy(() =>
  import("./components/ui/animated-testimonials")
);
import { testimonials } from "./components/Testimonial/Testimonial";
import LoadingFallback from "./components/Loading/Loading";
import LandingPage from "./components/Homepage/Landing";
import { Footer } from "./components/Homepage/Footer";
import { TracingBeam } from "./components/ui/tracing-beam";
import ContactUs from "./components/ContactUs/ContactUs";




function App() {
  return (
    <Router>
      {/* Navbar displayed on all routes */}
      {/* <Navbar /> */}
      

      {/* Define routes here with fallback for lazy components*/}
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          
          <Route path="/" element={<LandingPage/>} />
          
          
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
            <Route path="/contact" element={<ContactUs />} />

          {/* Uncomment if you want to enable these routes*/}
          {/* <Route path="/grid" element={<Grid />} /> */}
          {/* <Route
            path="/testimonials"
            element={<AnimatedTestimonials testimonials={testimonials} autoplay={true} interval={5000} />}
          /> */}
        </Routes>
      </Suspense>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;

