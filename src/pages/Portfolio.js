import Particles from '../components/Particles';
import malwareLogo from '../asset/malware.png';
import webLogo from '../asset/Web.png';
import androidLogo from '../asset/androidd.png';

function Portfolio() {
  return (
    <section id="portfolio" data-aos="zoom-in-up">
          <Particles
        particleCount={250}
        particleColors={["#00ffff", "#ffffff", "#00ffcc"]}
        moveParticlesOnHover={true}
        alphaParticles={true}
        speed={0.3}
        particleBaseSize={50}
        sizeRandomness={2}
        className=""
      />
      <h2 style={{ fontSize: "4rem", marginBottom: "20px" }}>Portfolio</h2>
<div className="card-container">
  <div className="card">
    <div className="card-header facebook">
      <img src={androidLogo} alt="Android" className="logo" />
      <h1>Mobile Programing</h1>
    </div>
    <div className="card-body">
      <h2>E-commerce Mobile App</h2>
      <p className="date">Sep 2024 - Dec 2024</p>
      <p style={{fontSize:'larger'}}>Developed an e-commerce Android app using Android Studio</p>
      <ul>
        <li>product data storage and SQLite for local user account management</li>
        <li>Designed a seamless shopping experience with features</li>
      </ul>
    </div>
  </div>

  <div className="card">
    <div className="card-header quora">
      <img src={webLogo} alt="Web" className="logo" />
      <h1>Web Programing</h1>
    </div>
    <div className="card-body">
      <h2>Dorm and Campus Virtual Tour</h2>
      <p className="date">Nov 2024 - Dec 2024</p>
      <p style={{fontSize:'larger'}}>Developed Dorm and Campus Virtual Tour website</p>
      <ul>
        <li>Designed and developed an interactive virtual tour website</li>
        <li>Experimented with different 360° tour platforms</li>
      </ul>
    </div>
  </div>

  <div className="card">
    <div className="card-header airbnb">
      <img src={malwareLogo} alt="Malware" className="logo" />
      <h1>Cyber Security</h1>
    </div>
    <div className="card-body">
      <h2>Malware Analysis</h2>
      <p className="date">Mar 2025 - May 2025</p>
      <p style={{fontSize:'larger'}}>Analysing Malware using flare virtual machine and remnux in virtual box</p>
      <ul>
        <li>Basic Static Analysis</li>
        <li>Basic Dynamic Analysis</li>
        <li>Reverse Engineering</li>
      </ul>
    </div>
  </div>
</div>

    </section>
  );
}

export default Portfolio;
