import { Button } from "react-bootstrap";
import React from "react";
import "../style/Profil.scss";
import profile from "../assets/profil1.jpg";
import mail from "../assets/mail.png";
import git from "../assets/git.png";
import ig from "../assets/ig.png";
import link from "../assets/in.png";
import down from "../assets/download.png";
import cv from "../assets/CV Cun Song.pdf";
function Profil() {
  return (
    <div className="label">
      <div className="bayangan rounded-circle">
        <div className="lingkaran rounded-circle">
          <img src={profile} class="rounded-circle" alt="..." />
        </div>
      </div>
      <h1>CUN SONG</h1>
      <h3>Software Engineer & Front End Developer</h3>
      <div className="w-75 d-flex justify-content-between pt-2 mx-auto px-3">
        <a className="bor rounded-circle border border-3" href="mailto:cun.song@binus.ac.id">
          <img src={mail} className="w-75 h-75" alt="..." />
        </a>
        <a className="bor rounded-circle border border-3" href="https://github.com/cun-song" target="_blank" rel="noreferrer">
          <img src={git} className="w-50 h-50" alt="..." />
        </a>
        <a className="bor rounded-circle border border-3" href="https://www.linkedin.com/in/cunsong/" target="_blank" rel="noreferrer">
          <img src={link} className="w-50 h-50" alt="..." />
        </a>
        <a className="bor rounded-circle border border-3" href="https://www.instagram.com/cun_song/" target="_blank" rel="noreferrer">
          <img src={ig} className="w-75 h-75" alt="..." />
        </a>
      </div>
      <Button className="inibut d-flex justify-content-between align-items-center px-4 mx-auto mt-3 w-50 rounded-5" href={cv} download="CV Cun Song">
        <h3>Download CV</h3>
        <img src={down} alt="..." />
      </Button>
    </div>
  );
}

export default Profil;
