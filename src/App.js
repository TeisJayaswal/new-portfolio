import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Banner from "./components/Banner";
import ContactPage from "./components/Contact";
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
                <Banner />
                <About />
                <Portfolio />
              </>
            }
          />
          <Route path={"/contact"} element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
