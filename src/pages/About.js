import Particles from "../components/Particles";


function About() {
  return (
    <section
      id="about"
      data-aos="fade-left"
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: "70vh",
      }}
    >
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

      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "60px 20px",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "4rem", marginBottom: "20px" }}>About Me</h1>
        <p
          style={{
            fontSize: "35px",
            color: "white",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          I am an Information Technology student at President University with a focused interest in Cyber Security. My academic journey is driven by a deep commitment to understanding and implementing modern security practices to safeguard digital assets and systems. Currently, I am engaged in an internship to gain practical, hands-on experience and deepen my knowledge in real-world environments.

With a proactive mindset and strong analytical skills, I am eager to collaborate with organizations and professionals who share a vision of secure, innovative digital solutions. I am open to future partnerships and career opportunities that allow me to contribute meaningfully to the evolving landscape of cybersecurity.
        </p>
        
      </div>
    </section>
  );
}

export default About;
