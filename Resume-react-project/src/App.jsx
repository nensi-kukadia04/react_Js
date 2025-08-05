import "./assets/app.css";
import "./remix-icon/remixicon.css";

function Resume() {
  return (
    <div className="resume-container">
      <div className="floating-actions">
        <button className="print-btn d-flex align-items-center" onClick={() => window.print()}>
          <i className="ri-printer-line"></i>
          <span>Print</span>
        </button>
      </div>
      <header className="resume-header">
        <div className="container">
          <div className="header-content d-flex align-items-center justify-content-between">
            <div className="title">
              <h1>NENSI KUKADIYA</h1>
              <h2>FULL STACK DEVELOPER</h2>
            </div>
            <ul className="contact-info">
              <li className="contact-item d-flex align-items-center">
                <i className="ri-phone-fill"></i>
                <span>+91 75672 65461</span>
              </li>
              <li className="contact-item d-flex align-items-center">
                <i className="ri-map-pin-2-fill"></i>
                <span>samrat soc, varachha</span>
              </li>
              <li className="contact-item d-flex align-items-center">
                <i className="ri-mail-fill"></i>
                <a href="mailto:kukadiyanensi41@gmail.com">
                  kukadiyanensi41@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <main className="resume-main">
        <div className="container">
          {/* about section */}
          <section className="about-section">
            <div className="about-title">
              <h3>About Me</h3>
            </div>
            <p className="about-text mb-3">
              I'm a passionate Node.js developer committed to delivering
              high-quality, scalable solutions. Experienced backend developer
              with expertise in building scalable, high-performance applications
              using Node.js, Express, and MongoDB. Proficient in designing and
              optimizing RESTful APIs, user authentication, and integrating
              third-party services. Skilled in database management, server-side
              logic, and ensuring smooth, secure communication between systems.
              Passionate about creating efficient, maintainable backend
              solutions that meet business needs and enhance user experiences.
            </p>
          </section>

          <div className="row">
            <div className="col-5">
              {/* education section */}
              <section className="education-section mb-3">
                <div className="education-title">
                  <h3>Education</h3>
                </div>
                <div className="education-content">
                  <div className="education-item">
                    <h4 className="fw-600">
                      BACHELOR OF SCIENCE IN INFORMATION & TECH
                    </h4>
                    <p className="education-period">2023 - 2026</p>
                  </div>
                  <div className="education-item">
                    <h4 className="fw-600">
                      HIGHER SECONDARY EDUCATION (H.S.C)
                    </h4>
                    <p className="institution">D.R TARPARA VIDHYALAYA</p>
                    <p className="education-period">2022 - 2023</p>
                  </div>
                </div>
              </section>

              {/* skill section */}
              <section className="skill mb-3">
                <div className="skill-title">
                  <h3>Skill</h3>
                </div>
                <div className="skill-content">
                  <ul>
                    <li>HTML</li>
                    <li>css</li>
                    <li>Bootstrap</li>
                    <li>J-Query</li>
                    <li>Javascript</li>
                    <li>Rest API</li>
                    <li>Mongodb</li>
                    <li>Node Js</li>
                    <li>Express Ejs</li>
                    <li>Basic Java</li>
                    <li>Basic Python</li>
                    <li>Git | Github</li>
                  </ul>
                </div>
              </section>

              {/* Language section */}
              <section className="language mb-3">
                <div className="language-title">
                  <h3>Language</h3>
                </div>
                <div className="language-content">
                  <ul>
                    <li>Hindi</li>
                    <li>English</li>
                    <li>Gujarati Native</li>
                  </ul>
                </div>
              </section>
            </div>

            <div className="col-7">
              {/* education section */}
              <section className="project-section mb-3">
                <div className="project-title">
                  <h3>Project</h3>
                </div>
                <div className="project-content">
                  <div className="project-item">
                    <h4>BLOG NEWS & ADMIN PANEL</h4>
                    <p className="item-text">
                      <span>Description : </span> A Node.js blog application
                      with an admin panel for managing posts, users, comments,
                      and settings. It features authentication, content
                      creation, moderation tools, and analytics. Built with
                      Express.js and MongoDB, offering a secure, customizable
                      content management experience.
                    </p>
                  </div>
                  <div className="project-item">
                    <h4>BOOK STORE</h4>
                    <p className="item-text">
                      <span>Description : </span> A Node.js blog application
                      with an admin panel for managing posts, users, comments,
                      and settings. It features authentication, content
                      creation, moderation tools, and analytics. Built with
                      Express.js and MongoDB, offering a secure, customizable
                      content management experience.
                    </p>
                  </div>
                  <div className="project-item">
                    <h4>SCHOOL MANAGEMENT API</h4>
                    <p className="item-text">
                      <span>Description : </span> A School Management API in
                      Node.js enables efficient management of student, teacher,
                      course, attendance, and grade data. Built using Express
                      and MongoDB, it supports secure authentication, RESTful
                      APIs, and scalability for handling administrative tasks
                      and generating reports seamlessly.
                    </p>
                  </div>
                </div>
              </section>

              {/* contact section */}
              <section className="contact mb-3">
                <div className="contact-title">
                  <h3>Contact Me</h3>
                </div>
                <div className="contact-text">
                  <ul className="contact-info">
                    <li className="contactMe-item d-flex align-items-center">
                      <i class="ri-linkedin-box-fill"></i>
                      <a href="www.linkedin.com/in/nensi-kukadiya-2b5694330">
                        www.linkedin.com/in/nensi-kukadiya-2b5694330
                      </a>
                    </li>
                    <li className="contactMe-item d-flex align-items-center">
                      <i class="ri-github-fill"></i>
                      <a href="https://github.com/nensi-kukadia04">
                        https://github.com/nensi-kukadia04
                      </a>
                    </li>
                    <li className="contactMe-item d-flex align-items-center">
                      <i className="ri-phone-fill"></i>
                      <span>+91 75672 65461</span>
                    </li>
                    <li className="contactMe-item d-flex align-items-center">
                      <i className="ri-mail-fill"></i>
                      <a href="mailto:kukadiyanensi41@gmail.com">
                        kukadiyanensi41@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Resume;
