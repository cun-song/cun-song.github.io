import { Container, Button, Row, Col } from "react-bootstrap";
import down from "../assets/download.png";
import mail from "../assets/mail.png";
import profil2 from "../assets/profil2.png";
import React from "react";
import "../style/About.scss";
import cv from "../assets/CV Cun Song.pdf";
function About() {
  return (
    <Container>
      <Row className="justify-content-center align-items-center">
        <Col xl="2" className="profil1 me-3">
          <img src={profil2} className="profil2" alt="" />
        </Col>
        <Col xl="2" className="col2 my-5">
          <h2>Discover</h2>
          <h3>About Me</h3>
          <div className="garis mb-4"></div>
          <p>
            Hi, My name is Cun Song. A goal-oriented developer with a desire to continually learn new things, strongly in algorithm development and proficient at solving problems. Experienced in full-stack web and application development.
          </p>
          <div className="border border-3 border-primary w-100 p-2">
            <div className="li d-flex">
              <div className="tebel d-flex justify-content-between">
                <h2>Name</h2>
                <p className="mx-1">:</p>
              </div>
              <p className="">Cun Song</p>
            </div>
            <div className="li d-flex">
              <div className="tebel d-flex justify-content-between">
                <h2 className="">Age</h2>
                <p className="mx-1">:</p>
              </div>
              <p>20</p>
            </div>
            <div className="li d-flex">
              <div className="tebel d-flex justify-content-between">
                <h2 className="">Address</h2>
                <p className="mx-1">:</p>
              </div>
              <p>Jakarta, Indonesia</p>
            </div>
            <div className="li d-flex">
              <div className="tebel d-flex justify-content-between">
                <h2 className="">Email</h2>
                <p className="mx-1">:</p>
              </div>
              <p>cun.song@binus.ac.id</p>
            </div>
            <div className="li d-flex flex-sm-row flex-column">
              <div className="d-flex w-25 justify-content-between">
                <h2 className="">Education</h2>
                <p className="mx-1">:</p>
              </div>
              <p className="m-0">Undergraduate, Computer Science</p>
            </div>
            <div className="li d-flex">
              <div className="w-25 d-sm-flex d-none"></div>
              <h2>Binus University</h2>
              <p className="ms-2">(2020 - 2024)</p>
            </div>
          </div>
          <div className="d-flex mt-3">
            <Button className="but d-flex justify-content-center align-items-center rounded-2 border-0" href="mailto:cun.song@binus.ac.id">
              <h3 className="me-3">Contact Me</h3>
              <img src={mail} alt="..." />
            </Button>
            <Button className="but d-flex justify-content-center align-items-center ms-4 rounded-2 border-0" href={cv} download="CV Cun Song">
              <h3 className="me-3">Download CV</h3>
              <img src={down} alt="..." />
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
