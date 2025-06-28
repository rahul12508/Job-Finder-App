import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">JobFinder</div>
        <div className="nav-links">
          <button className="nav-btn">Login</button>
          <button className="nav-btn register">Register</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h1>Find your dream job now</h1>
        <p>Over 5 lakh jobs for you to explore</p>
       <Link to="/jobs">
  <button className="btn-search">Search Jobs Now</button>
</Link>
      </section>

      {/* Categories */}
      <div className="categories" style={{marginTop: "30px"}}>
        {['Remote', 'MNC', 'Startup', 'Marketing', 'Engineering', 'Project Mgmt'].map((cat, i) => (
          <span key={i} className="category">{cat}</span>
        ))}
      </div>

  <div className='container-mid'> 
      {/* Job Listings */}
      <section className="job-section">
        <h2>Latest Jobs</h2>
        <div className="job-grid">
          {[1, 2, 3].map((job, i) => (
            <div key={i} className="job-card">
              <h3>Frontend Developer</h3>
              <p className="location">Mumbai, Maharashtra</p>
              <p className="desc">Looking for React developer with 1+ years experience...</p>
              <a href="#" className="apply">Apply Now</a>
            </div>
          ))}
        </div>
      </section>

     <div className='hiring'>
  <h2>Featured companies actively hiring</h2>
      <div class="companies-container">
      
  <div class="company-card">
     <img src="img3.gif" />
    <div class="company-name" style={{marginTop: "16px"}}>Amazon</div>
    <div class="rating">⭐ 4.0</div>
    <div class="reviews">2.71K+ reviews</div>
    <div class="description">World's largest Internet company.</div>
    <button class="view-jobs-btn">View jobs</button>
  </div>

  <div class="company-card">
     <img src="img2.gif" />
    <div class="company-name" style={{marginTop: "50px"}}>Coforge</div>
    <div class="rating">⭐ 3.3</div>
    <div class="reviews">5.4K+ reviews</div>
    <div class="description">Global digital services and solutions provider.</div>
    <button class="view-jobs-btn">View jobs</button>
  </div>

  <div class="company-card">
    <img src="img.gif" />
    <div class="company-name" style={{marginTop: "20px"}}>Nagarro</div>
    <div class="rating">⭐ 4.0</div>
    <div class="reviews">4.3K+ reviews</div>
    <div class="description">Leader in digital product engineering.</div>
    <button class="view-jobs-btn">View jobs</button>
  </div>

  <div class="company-card">
  <img src="img4.gif" />
    <div class="company-name" style={{marginTop: "50px"}}>Apple</div>
    <div class="rating">⭐ 4.3</div>
    <div class="reviews">612 reviews</div>
    <div class="description">Join us. Be you.</div>
    <button class="view-jobs-btn">View jobs</button>
  </div>
</div>
</div>

 <section class="section-wrapper">
  
    <div class="left-content">
      <img src="search.png" alt="Job Illustration" />
      <h2>Discover jobs across popular roles</h2>
      <p>Select a role and we'll show you relevant jobs for it!</p>
    </div>

    <div class="right-content">
      <div class="role-card">
        <strong>Full Stack Developer</strong>
        <small>19K+ Jobs →</small>
      </div>
      <div class="role-card">
        <strong>Mobile / App Developer</strong>
        <small>3K+ Jobs →</small>
      </div>
      <div class="role-card">
        <strong>Front End Developer</strong>
        <small>5K+ Jobs →</small>
      </div>
      <div class="role-card">
        <strong>DevOps Engineer</strong>
        <small>3.1K+ Jobs →</small>
      </div>
      <div class="role-card">
        <strong>Engineering Manager</strong>
        <small>1.6K+ Jobs →</small>
      </div>
      <div class="role-card">
        <strong>Technical Lead</strong>
        <small>10.4K+ Jobs →</small>
      </div>
    </div>
  </section>

  <section class="testimonial-section">
  <h2>What our users say</h2>
  <div class="testimonial-wrapper">
    <div class="testimonial-card">
      <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User 1" />
      <p>"This job portal helped me land my dream job within a week! Easy to use and packed with opportunities."</p>
      <h4>Priya Mehta</h4>
      <small>Frontend Developer</small>
    </div>
    <div class="testimonial-card">
      <img src="https://randomuser.me/api/portraits/men/36.jpg" alt="User 2" />
      <p>"The saved jobs feature is a game changer. I applied to the right ones without missing deadlines."</p>
      <h4>Rohit Sharma</h4>
      <small>Data Analyst</small>
    </div>
    <div class="testimonial-card">
      <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="User 3" />
      <p>"Clean UI, accurate listings, and timely notifications — it made my job search stress-free."</p>
      <h4>Shalini Gupta</h4>
      <small>HR Manager</small>
    </div>
  </div>
</section>

      <footer className="footer">
        <p>&copy; 2025 JobFinder. All rights reserved.</p>
      </footer>
    </div>
    </div>
  );
};

export default HomePage;
