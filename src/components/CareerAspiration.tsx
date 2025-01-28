import React from "react";

import val_acc_32 from "../assets/val_acc_32.jpg";
import val_acc_64 from "../assets/val_acc_64.jpg";
import val_acc_128 from "../assets/val_acc_128.jpg";

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
              <h6>Title:</h6>
              <h4 className="fw-light">
                Leveraging Deep Learning Models for Beef Quality Assessment-A
                Comparative Study of CNN and ResNet Architecture
              </h4>
              <h6>Abstract:</h6>
              <p>
                Beef quality assessment is an important process in beef
                production that ensures food safety and plays a critical role in
                promoting consumer satisfaction. With the huge demand for beef
                products all over the world, the need for fast, accurate,
                efficient, and scalable beef quality assessment methods has
                become more profound. However, traditional methods for assessing
                qualities, like freshness, depend on physical inspection by
                trained assessors which have proven to be error-prone,
                ineffective and time-consuming. This research explored and
                compared the performance of two deep learning models,
                specifically, a conventional Convolutional Neural Network (CNN)
                and a Residual Neural Network (ResNet), as methods for beef
                quality assessment. The two models were trained using a dataset
                that contains fresh and spoiled beef images. The input images
                were preprocessed into suitable inputs for the models. We
                employed several performance evaluations metrics including
                accuracy, precision, recall, and F1-Score to determine the
                efficacy of each model. Additionally, we measured the training
                and inference times of both models to assess how efficient they
                performed. Our findings revealed that the models demonstrate
                excellent capabilities to distinguish between fresh and spoiled
                beef images. The conventional CNN model achieved a validation
                accuracy of 100% when the batch size was set at 64. The
                ResNet-18 model on the other hand, achieved a validation
                accuracy of 100% when the batch size was set at 32. The
                class-wise evaluation of the two models’ performance revealed a
                precision score of 1 for the CNN and 0.9 for the ResNet-18
                model. The two models achieve a score of 0.9 for recall and
                F1-Score. Our results further revealed that training the
                ResNet-18 model is 2.3 minutes faster compared to training the
                conventional CNN model.
              </p>
              <h6>Validation Accuracy Graph with Different Batch Sizes</h6>
              <div className="row">
                <div className="col col-12 col-md-4 mb-3">
                  <img
                    className="img-fluid img-thumbnail"
                    src={val_acc_32}
                    alt="logo"
                  />
                </div>
                <div className="col col-12 col-md-4 mb-3">
                  <img
                    className="img-fluid img-thumbnail"
                    src={val_acc_64}
                    alt="logo"
                  />
                </div>
                <div className="col col-12 col-md-4 mb-3">
                  <img
                    className="img-fluid img-thumbnail"
                    src={val_acc_128}
                    alt="logo"
                  />
                </div>
              </div>
              <div>
                <a
                  href="https://erepo.uef.fi/server/api/core/bitstreams/c308e30d-e049-4f20-87bd-b4d4dad476c4/content"
                  target="_blank"
                >
                  <button className="btn btn-dark">Read Full Document</button>
                </a>
              </div>
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
