import React from "react";

const CareerAspiration = () => {
  return (
    <div className="row border border-primary p-2">
      <div className="accordion accordion-flush" id="portfolio-accordion">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed p-5"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              <h5 className="fw-light">
                Career Aspirations & Research Interest
              </h5>
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#portfolio-accordion"
          >
            <div className="accordion-body fw-light p-5">
              <p>
                My biggest career aspiration is to be able to provide digital
                solutions that bring convenience and reward to users, clients,
                and stakeholders.{" "}
              </p>
              <p>
                My research interests lie within the application of Deep Neural
                Networks in the health domain. Specifically, I am interested in
                the following areas of research:
                <ul>
                  <li>
                    Machine Learning for Health Records and Predictive
                    Analytics.{" "}
                  </li>
                  <li>
                    AI-Driven Medical Image Analysis using Deep Learning
                    Techniques.
                  </li>
                  <li>Data-Efficient Learning and Adaptation. </li>
                  <li>Deep Learning for Vision and Sparse Data Challenges.</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed p-5"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFive"
              aria-expanded="false"
              aria-controls="flush-collapseFive"
            >
              <h5 className="fw-light">Research Publications</h5>
            </button>
          </h2>
          <div
            id="flush-collapseFive"
            className="accordion-collapse collapse"
            data-bs-parent="#portfolio-accordion"
          >
            <div className="accordion-body fw-light p-5">
              <p>Thesis Abstract</p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed p-5"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              <h5 className="fw-light">Work Experience</h5>
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#portfolio-accordion"
          >
            <div className="accordion-body fw-light p-5">
              <ul>
                <li>Spagad Technologies Ltd.</li>
                <li>Business Resource Center</li>
                <li>National Identification Authority</li>
                <li>Ghana - India Kofi Annan Center of Excellence in ICT</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed p-5"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              <h5 className="fw-light">Projects</h5>
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#portfolio-accordion"
          >
            <div className="accordion-body fw-light p-5">
              <ul>
                <li>Homs (Hotel Management System)</li>
                <li>Verbs (E-Commerce application)</li>
                <li>
                  Health House (Appointment Booking Platform for multiple
                  hospitals)
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed p-5"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFour"
              aria-expanded="false"
              aria-controls="flush-collapseFour"
            >
              <h5 className="fw-light">Education</h5>
            </button>
          </h2>
          <div
            id="flush-collapseFour"
            className="accordion-collapse collapse"
            data-bs-parent="#portfolio-accordion"
          >
            <div className="accordion-body fw-light p-5">
              <ul>
                <li>University of Eastern Finland</li>
                <li>Kwame Nkrumah University of Science & Technology</li>
                <li>Bompata Presbyterian Senior High School</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed p-5"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseSix"
              aria-expanded="false"
              aria-controls="flush-collapseSix"
            >
              <h5 className="fw-light">Certifications</h5>
            </button>
          </h2>
          <div
            id="flush-collapseSix"
            className="accordion-collapse collapse"
            data-bs-parent="#portfolio-accordion"
          >
            <div className="accordion-body fw-light p-5">
              <ul>
                <li>IBM</li>
                <li>Kaggle</li>
                <li>IIT - Madras</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerAspiration;
