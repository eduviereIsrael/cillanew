import CareerForm from "../../components/career-form";


export default function Career() {
    return (
      <div className="career-page">
        <div className="hero-section">
          <div className="container">
            <h1>Join Our Team</h1>
            <p>Make a difference in the lives of seniors across Alberta and beyond</p>
          </div>
        </div>
  
        <div className="container">
          <div className="career-content">
            <div className="benefits-section">
              <h2>Why Work for Cilla Healthcare Services?</h2>
              <p className="intro-text">
                At Cilla Healthcare Services, we value our employees and provide a supportive environment where you can
                thrive professionally while making a meaningful impact in people&apos;s lives.
              </p>
  
              <h3>We offer:</h3>
              <ul className="benefits-list">
                <li>
                  <div className="benefit-icon">💰</div>
                  <div className="benefit-text">
                    <strong>Competitive hourly wages</strong>
                    <p>Receive fair compensation for your valuable work</p>
                  </div>
                </li>
                {/* <li>
                  <div className="benefit-icon">🏥</div>
                  <div className="benefit-text">
                    <strong>Comprehensive benefits packages</strong>
                    <p>For you and your family</p>
                  </div>
                </li> */}
                <li>
                  <div className="benefit-icon">📱</div>
                  <div className="benefit-text">
                    <strong>User-friendly mobile app</strong>
                    <p>Manage your schedule, document client care, clock in and out, and access driving directions</p>
                  </div>
                </li>
                <li>
                  <div className="benefit-icon">⏰</div>
                  <div className="benefit-text">
                    <strong>Flexible work schedules</strong>
                    <p>To fit your lifestyle</p>
                  </div>
                </li>
                <li>
                  <div className="benefit-icon">🎓</div>
                  <div className="benefit-text">
                    <strong>Ongoing training opportunities</strong>
                    <p>Support your professional and personal growth</p>
                  </div>
                </li>
                <li>
                  <div className="benefit-icon">👥</div>
                  <div className="benefit-text">
                    <strong>Expand your network</strong>
                    <p>Collaborate with healthcare professionals</p>
                  </div>
                </li>
                <li>
                  <div className="benefit-icon">🗺️</div>
                  <div className="benefit-text">
                    <strong>Diverse locations</strong>
                    <p>Opportunities across Alberta and other provinces</p>
                  </div>
                </li>
                <li>
                  <div className="benefit-icon">❤️</div>
                  <div className="benefit-text">
                    <strong>Rewarding experience</strong>
                    <p>Provide one-on-one care for seniors and make a meaningful impact in their lives</p>
                  </div>
                </li>
              </ul>
            </div>
  
            <div className="application-section">
              <h2>Apply Today</h2>
              <p>Fill out the form below to start your journey with Cilla Healthcare Services</p>
              <CareerForm />
            </div>
          </div>
        </div>
      </div>
    )
  }
  