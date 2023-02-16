import { Container, Row, Col } from "react-bootstrap";
import React, { Component } from "react";
import "../style/Skill.css";

class Circle extends Component {
  constructor(props) {
    super(props);
    this.ref1 = React.createRef();
    this.ref2 = React.createRef();
    this.progressValue = 0;
    this.state = {
      progressEndValue: props.target,
      warna: props.warna,
    };
  }

  componentDidMount() {
    this.progress = setInterval(() => this.increase(), 30);
    this.progressValue = 0;
  }

  componentWillUnmount() {
    clearInterval(this.progress);
  }

  increase() {
    this.progressValue++;
    this.ref2.current.textContent = `${this.progressValue}%`;
    this.ref1.current.style.background = `conic-gradient(
      ${this.state.warna} ${this.progressValue * 3.6}deg,
      #DFF6Ff ${this.progressValue * 3.6}deg
  )`;
    if (this.progressValue === parseInt(this.state.progressEndValue)) {
      this.componentWillUnmount();
    }
  }
  render() {
    return (
      <div className="circular-progress rounded-circle" ref={this.ref1}>
        <div className="value" ref={this.ref2}>
          0%
        </div>
      </div>
    );
  }
}

const Skill = () => {
  return (
    <Container>
      <div>
        <h1 className="judul">MY SKILLS</h1>
        <div className="garisskill"></div>
      </div>
      <Row>
        <Col className="mb-5">
          <Circle target="90" warna="#47B5FF" />
          <h2 className="subjudul">C & C++</h2>
        </Col>
        <Col className="mb-5">
          <Circle target="90" warna="#47B5FF" />
          <h2 className="subjudul">HTML & CSS</h2>
        </Col>
        <Col className="mb-5">
          <Circle target="85" warna="#47B5FF" />
          <h2 className="subjudul">SQL</h2>
        </Col>
        <Col className="mb-5">
          <Circle target="80" warna="#47B5FF" />
          <h2 className="subjudul">JAVA & C#</h2>
        </Col>
        <Col className="mb-5">
          <Circle target="80" warna="#47B5FF" />
          <h2 className="subjudul">PHP & LARAVEL</h2>
        </Col>
        <Col className="mb-5">
          <Circle target="65" warna="#47B5FF" />
          <h2 className="subjudul">PYTHON</h2>
        </Col>
        <Col className="mb-5">
          <Circle target="60" warna="#47B5FF" />
          <h2 className="subjudul">REACT JS</h2>
        </Col>
        <Col className="mb-5">
          <Circle target="90" warna="#FCB223" />
          <h2 className="subjudul">PROBLEM SOLVING</h2>
        </Col>
        <Col className="mb-5">
          <Circle target="90" warna="#FCB223" />
          <h2 className="subjudul">ALGORITHM DEVELOPMENT</h2>
        </Col>
      </Row>
      <div className="d-flex justify-content-center">
        <button className="btn btn-secondary fw-bold fs-4 mb-5" onClick={() => window.location.reload(false)}>
          Refresh
        </button>
      </div>
    </Container>
  );
};

export default Skill;
