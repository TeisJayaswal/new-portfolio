import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Banner from "./components/Banner";
import ContactPage from "./components/Contact";
import Footer from "./components/Footer";
import NavBar from "./components/Nav";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <NavBar /> */}
        <Routes>
          <Route
            path={"/"}
            element={
              <>
                <NavBar />
                <Banner />
                <About />
                <Portfolio />
                <ContactPage />
                <Footer />
              </>
            }
          />
          <Route exact path={"/about"} component={About} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
