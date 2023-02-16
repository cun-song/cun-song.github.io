import { Container } from "react-bootstrap";
import mail from "../assets/mail.png";
import git from "../assets/git.png";
import ig from "../assets/ig.png";
import link from "../assets/in.png";
import Fade from "react-reveal/Fade";

function Footer() {
  return (
    <Container className="py-2">
      <Fade bottom>
        <div className="d-flex justify-content-center">
          <a className="bor rounded-circle border border-3 mx-2 my-1" href="mailto:cun.song@binus.ac.id">
            <img src={mail} className="w-75 h-75" alt="..." />
          </a>
          <a className="bor rounded-circle border border-3 mx-2 my-1" href="https://github.com/cun-song" target="_blank" rel="noreferrer">
            <img src={git} className="w-50 h-50" alt="..." />
          </a>
          <a className="bor rounded-circle border border-3 mx-2 my-1" href="https://www.linkedin.com/in/cunsong/" target="_blank" rel="noreferrer">
            <img src={link} className="w-50 h-50" alt="..." />
          </a>
          <a className="bor rounded-circle border border-3 mx-2 my-1" href="https://www.instagram.com/cun_song/" target="_blank" rel="noreferrer">
            <img src={ig} className="w-75 h-75" alt="..." />
          </a>
        </div>
      </Fade>
      <h2 className="mt-2 text-center text-light h5">CUN SONG © 2022 ALL RIGHT RESERVED</h2>
    </Container>
  );
}

export default Footer;
