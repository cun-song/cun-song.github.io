import "../style/Porto.scss";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useRef, useEffect, useState } from "react";

function Porto() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const pergi = useNavigate();
  const [source, setSource] = useState("");

  useEffect(() => {
    var foto = localStorage.getItem("foto");
    var judul = localStorage.getItem("judul");
    var deskripsi = localStorage.getItem("des");
    var a = localStorage.getItem("to");
    setSource(foto);
    ref1.current.href = a;
    ref2.current.innerText = judul;
    ref3.current.innerText = deskripsi;
  }, []);

  return (
    <div className="portoback px-2">
      <Container>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="bi bi-arrow-left-short"
          viewBox="0 0 16 16"
          onClick={() => {
            pergi(-1);
          }}
        >
          <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
        </svg>
        <Row>
          <Col className=" d-flex align-items-center">
            <div className="portofotoback">
              <img src={source} alt="" />
              <a className="backh3" href="https://elangdua.rf.gd/" target="_blank" rel="noreferrer" ref={ref1}>
                <h3>Visit Website</h3>
              </a>
            </div>
          </Col>
          <Col>
            <div className="portotulisanback">
              <h1 ref={ref2}>Website Elang Dua</h1>
              <p ref={ref3}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Porto;
