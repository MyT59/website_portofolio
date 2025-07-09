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
          I'm an IT student from President University.
        </p>
        
      </div>
    </section>
  );
}

export default About;
