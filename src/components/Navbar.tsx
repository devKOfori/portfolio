import React from 'react'
import myPhoto from '../assets/me.png'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaGoogleScholar } from "react-icons/fa6";
import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <div className="row bg-secondary-subtle p-2 rounded-top">
        <div className="col-12 col-sm-2 d-flex justify-content-center">
          <img
            height="150px"
            width="150px"
            className="img-fluid img-thumbnail rounded-circle"
            src={myPhoto}
            alt="logo"
          />
        </div>
        <div className="col-sm-8 bg-secondary-subtle text-center">
          <h1 className="fw-light">OFORI-MENSAH EBENEZER</h1>
          <h6 className="fw-light">MSc. Computer Science (UEF)</h6>
          <h6 className="fw-light">
            Software Engineer | Data Analyst | AI/ML Researcher
          </h6>
          <button className="btn btn-dark">Download CV</button>
        </div>
        <div className="col-12 col-sm-2 d-flex flex-column gap-2">
          <div>
            <FaLinkedin size={20} />
            <a
              href="https://www.linkedin.com/in/ebenezer-ofori-mensah-1b9b6b1b4/"
              target="_blank"
              rel="noreferrer"
              className="link-dark"
            >
              <span className="header-link-text">Ebenezer Ofori-Mensah</span>
            </a>
          </div>
          <div>
            <FaGithub size={20} />
            <a
              href="https://github.com/devKOfori"
              target="_blank"
              rel="noreferrer"
              className="link-dark"
            >
              <span className="header-link-text">devKOfori</span>
            </a>
          </div>
          <div>
            <FaGoogleScholar size={20} />
            <a
              href="https://scholar.google.com/citations?hl=en&user=xUTjyYUAAAAJ"
              target="_blank"
              rel="noreferrer"
              className="link-dark"
            >
              <span className="header-link-text">Ofori-Mensah Ebenezer</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar
