import "../style/Home.scss";
import NavBar from "../components/NavBar";
import Profil from "../components/Profil";
import About from "../components/About";
import Skill from "../components/Skill";
import Portfolio from "../components/Portfolio";
import React from "react";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <div className="Bg" id="Home">
        <NavBar />
        <div className="profil m-auto ">
          <Profil />
        </div>
      </div>
      <div className="about" id="About">
        <About />
      </div>
      <div className="skill" id="Skill">
        <Skill />
      </div>
      <div id="Portfolio">
        <Portfolio />
      </div>
      <div className="footer bg-dark">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
