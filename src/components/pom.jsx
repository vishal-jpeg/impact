import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Pom = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  // Initial client retention percentage (for demonstration purposes)
  const initialClientRetentionPercentage = 0;
  // Target client retention percentage
  const targetClientRetentionPercentage = 95;

  // State to manage client retention percentage
  const [clientRetentionPercentage, setClientRetentionPercentage] = useState(initialClientRetentionPercentage);

  const circleRadius = 45;
  const circumference = 2 * Math.PI * circleRadius;
  const offset = circumference - (clientRetentionPercentage / 100) * circumference;

  // Simulate increasing client retention percentage with time
  useEffect(() => {
    const interval = setInterval(() => {
      // Increase client retention percentage gradually until it reaches the target
      if (clientRetentionPercentage < targetClientRetentionPercentage) {
        setClientRetentionPercentage(prevPercentage => prevPercentage + 1);
      } else {
        clearInterval(interval);
      }
    }, 30); // Adjust the interval for smoother animation
    return () => clearInterval(interval);
  }, [clientRetentionPercentage, targetClientRetentionPercentage]);

  return (
    <div id="pom">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title" data-aos="fade-in">
          <h2>Principles of Management</h2>
        </div>
        <div className="row">
          <div
            className="col-xs-12 col-md-6"
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
          >
            {/* Display content for Impact Auto Components */}
            {/* <div className="impact-auto-components">
              <h3>Impact Auto Components</h3>
              <p>Content for Impact Auto Components goes here...</p>
            </div> */}
            {/* Display core values, vision, and mission */}
            <div className="info">
              <div className="info-item">
                <i className="fa fa-lightbulb"></i>
                <h3>Core Values</h3>
                <p>Domain Leadership, Accountability, Team Work, Ambition, Passion, Integrity, Extra Mile.</p>
              </div>
              <div className="info-item">
                <i className="fa fa-eye"></i>
                <h3>Vision</h3>
                <p>Our Vision is to be a GLOBAL BRAND for HRMS & FIXED ASSET MANAGEMENT.</p>
              </div>
              <div className="info-item">
                <i className="fa fa-bullseye"></i>
                <h3>Mission</h3>
                <p>Our Mission is to provide industry-leading technologies for HRMS & FIXED ASSET MANAGEMENT with customer-centricity, brand, and organization building.</p>
              </div>
            </div>
          </div>
          <div
            className="col-xs-12 col-md-6"
            data-aos="fade-left"
          >
            <div className="image-container">
              <div className="progress-ring">
                <svg className="progress-ring-circle" width="100" height="100">
                  <circle className="progress-ring-circle-bg" stroke="#e6e6e6" strokeWidth="4" fill="transparent" r={circleRadius} cx="50" cy="50" />
                  <circle className="progress-ring-circle-fg" stroke="blue" strokeWidth="4" fill="transparent" r={circleRadius} cx="50" cy="50" style={{ strokeDasharray: `${circumference} ${circumference}`, strokeDashoffset: offset }} />
                </svg>
                <div className="progress-value">{clientRetentionPercentage}%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pom;
