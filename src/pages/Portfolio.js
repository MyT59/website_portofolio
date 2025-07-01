import Particles from '../components/Particles';

function Portfolio() {
  return (
    <section id="portfolio" data-aos="zoom-in-up">
          <Particles
        particleCount={250}
        particleColors={["#00ffff", "#ffffff", "#00ffcc"]}
        moveParticlesOnHover={true}
        alphaParticles={true}
        speed={0.3}
        particleBaseSize={60}
        sizeRandomness={2}
        className=""
      />
      <h2 style={{ fontSize: "4rem", marginBottom: "20px" }}>Portfolio</h2>
<div className="card-container">
  <div className="card">
    <div className="card-header facebook">
      <img src="/facebook-logo.png" alt="Facebook" className="logo" />
      <h2>Mobile Programing</h2>
    </div>
    <div className="card-body">
      <h3>Software Engineer</h3>
      <p className="date">June 2018 – Present</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <ul>
        <li>Build UI interaktif</li>
        <li>Integrasi real-time chat</li>
      </ul>
    </div>
  </div>

  <div className="card">
    <div className="card-header quora">
      <img src="/quora-logo.png" alt="Quora" className="logo" />
      <h2>Web Programing</h2>
    </div>
    <div className="card-body">
      <h3>Front-End Developer</h3>
      <p className="date">May 2017 – May 2018</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <ul>
        <li>Konversi desain ke HTML</li>
        <li>Optimasi performa</li>
      </ul>
    </div>
  </div>

  <div className="card">
    <div className="card-header airbnb">
      <img src="/airbnb-logo.png" alt="Airbnb" className="logo" />
      <h2>Malware Analysis</h2>
    </div>
    <div className="card-body">
      <h3>Cyber Security</h3>
      <p className="date">Jan 2015 – Sep 2015</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <ul>
        <li>Buat dashboard</li>
        <li>Testing unit</li>
      </ul>
    </div>
  </div>
</div>

    </section>
  );
}

export default Portfolio;
