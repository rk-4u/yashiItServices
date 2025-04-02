import React from "react";
import { Link } from "react-router-dom";  // Import Link for navigation
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter style={{ backgroundColor: "#111826", color: "white" }} className="text-center text-lg-start text-white">
      
      {/* Social Media Section */}
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <a href="#" className="me-4 text-reset">
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href="#" className="me-4 text-reset">
            <MDBIcon fab icon="twitter" />
          </a>
          <a href="#" className="me-4 text-reset">
            <MDBIcon fab icon="google" />
          </a>
          <a href="#" className="me-4 text-reset">
            <MDBIcon fab icon="instagram" />
          </a>
          <a href="#" className="me-4 text-reset">
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href="#" className="me-4 text-reset">
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      {/* Footer Content */}
      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            
            {/* Company Info */}
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Yashi IT Services
              </h6>
              <p>
                Yashi IT Services is an established web development and design company that works with companies in all sectors of business. We combine the latest technologies, tools, and frameworks with years of experience to deliver customized, reliable, and efficient solutions.
              </p>
            </MDBCol>

            {/* Our Company Section */}
            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Our Company</h6>
              <ul className="list-unstyled">
                <li>
                  <Link to="/" className="text-reset d-block">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio" className="text-reset d-block">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link to="/contactUs" className="text-reset d-block">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-reset d-block">
                    Services
                  </Link>
                </li>
              </ul>
            </MDBCol>

            {/* Services Section */}
            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Services</h6>
              <ul className="list-unstyled">
                <li>
                  <Link to="/services/Web-Development" className="text-reset d-block">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link to="/services/Mobile-Development" className="text-reset d-block">
                    Mobile Development
                  </Link>
                </li>
                <li>
                  <Link to="/services/Backend-Development" className="text-reset d-block">
                    Backend Development
                  </Link>
                </li>
                <li>
                  <Link to="/services/DevOps-&-Automation" className="text-reset d-block">
                    DevOps & Automation
                  </Link>
                </li>
              </ul>
            </MDBCol>

            {/* Portfolio Section */}
            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Portfolio</h6>
              <ul className="list-unstyled">
                <li>
                  <Link to="/projectDetail/E-Commerce" className="text-reset d-block">
                    E-commerce UI
                  </Link>
                </li>
                <li>
                  <Link to="/projectDetail/Saas-Dashboard" className="text-reset d-block">
                    SaaS Dashboard Frontend
                  </Link>
                </li>
                <li>
                  <Link to="/projectDetail/Portfolio-Website" className="text-reset d-block">
                    Personal Portfolio Website
                  </Link>
                </li>
                <li>
                  <Link to="/projectDetail/Interactive-Blog" className="text-reset d-block">
                    Interactive Blog Platform
                  </Link>
                </li>
              </ul>
            </MDBCol>

            {/* Contact Section */}
            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="phone" className="me-3" />
                +91-8720885782
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@yashiitservice.in
              </p>
              <p>
                <MDBIcon icon="link" className="me-3" />
                Yashiitservices
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      {/* Horizontal Line & Copyright */}
      <hr className="my-4" />
      <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
        © 2024 Yashi IT Services Pvt. Ltd. All Rights Reserved.
      </div>
    </MDBFooter>
  );
}
