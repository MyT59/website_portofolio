import Particles from "../components/Particles";
import SkillBar from "../components/SkillBar";
import SpotlightCard from "../components/SpotlightCard";
import htmlLogo from "../asset/html5.png";
import cssLogo from "../asset/css.png";
import jsLogo from "../asset/js.png";
import reactLogo from "../asset/react.png";
import javaLogo from "../asset/java.png";
import phpLogo from "../asset/php.png";
import pythonLogo from "../asset/python.png";
import dockerLogo from "../asset/docker.png";
import ciscoLogo from "../asset/cisco-packet-tracer.png";
import sqlLogo from "../asset/sql.png";
import vscodeLogo from "../asset/vscode.png";
import githubLogo from "../asset/github.png";
import vmboxlogo from "../asset/vmbox.png";
import androidlogo from "../asset/android.png";

function Skills() {
  return (
    <section
      id="skills"
      data-aos="fade-up"
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
      }}
    >
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

      <div
        style={{
          position: "relative",
          zIndex: 2,
          color: "white",
          padding: "60px 20px",
        }}
      >
        <h2 style={{ fontSize: "3rem", marginBottom: "40px", textAlign: "center" }}>My Skills</h2>

        <div className="skills-grid">
          <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "12px",
                width: "100%",
              }}
            >
              <img
                src={htmlLogo}
                alt="HTML"
                style={{ width: "40px", height: "40px" }}
              />
              <SkillBar skill="HTML" level="90%" />
            </div>
          </SpotlightCard>

          <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "12px",
                width: "100%",
              }}
            >
              <img
                src={cssLogo}
                alt="CSS"
                style={{ width: "40px", height: "40px" }}
              />
              <SkillBar skill="CSS" level="80%" />
            </div>
          </SpotlightCard>

          <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "12px",
                width: "100%",
              }}
            >
              <img
                src={jsLogo}
                alt="JS"
                style={{ width: "40px", height: "40px" }}
              />
              <SkillBar skill="JS" level="75%" />
            </div>
          </SpotlightCard>

          <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "12px",
                width: "100%",
              }}
            >
              <img
                src={reactLogo}
                alt="React"
                style={{ width: "40px", height: "40px" }}
              />
              <SkillBar skill="React" level="70%" />
            </div>
          </SpotlightCard>

          <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "12px",
                width: "100%",
              }}
            >
              <img
                src={sqlLogo}
                alt="Sql"
                style={{ width: "40px", height: "40px" }}
              />
              <SkillBar skill="Sql" level="80%" />
            </div>
          </SpotlightCard>



          <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "12px",
                width: "100%",
              }}
            >
              <img
                src={javaLogo}
                alt="Java"
                style={{ width: "40px", height: "40px" }}
              />
              <SkillBar skill="Java" level="90%" />
            </div>
          </SpotlightCard>

          <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "12px",
                width: "100%",
              }}
            >
              <img
                src={phpLogo}
                alt="PHP"
                style={{ width: "40px", height: "40px" }}
              />
              <SkillBar skill="PHP" level="80%" />
            </div>
          </SpotlightCard>

          <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "12px",
                width: "100%",
              }}
            >
              <img
                src={pythonLogo}
                alt="Python"
                style={{ width: "40px", height: "40px" }}
              />
              <SkillBar skill="Python" level="75%" />
            </div>
          </SpotlightCard>

          <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "12px",
                width: "100%",
              }}
            >
              <img
                src={dockerLogo}
                alt="Docker"
                style={{ width: "40px", height: "40px" }}
              />
              <SkillBar skill="Docker" level="70%" />
            </div>
          </SpotlightCard>

          <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "12px",
                width: "100%",
              }}
            >
              <img
                src={ciscoLogo}
                alt="Cisco"
                style={{ width: "40px", height: "40px" }}
              />
              <SkillBar skill="Cisco packet tracer" level="90%" />
            </div>
          </SpotlightCard>
        </div>
        <h1
          style={{
            fontSize: "3rem",
            marginTop: "100px",
            textAlign: "center",
            
          }}
        >
          My Tools
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "flex end",
            alignItems: "center",
            gap: "40px",
            flexWrap: "wrap",
            marginLeft: "470px",
            marginTop: "30px",
            marginBottom: "10px",
            padding: "0 20px",
          }}
        >
          {[
            { src: vscodeLogo, alt: "VS Code" },
            { src: githubLogo, alt: "GitHub" },
            { src: vmboxlogo, alt: "VM Box" },
            { src: androidlogo, alt: "Android Studio" },
          ].map((tool, index) => (
            <img
              key={index}
              src={tool.src}
              alt={tool.alt}
              style={{
                width: "80px",
                height: "80px",
                objectFit: "contain",
                transition: "transform 0.3s ease",
                filter: "drop-shadow(0 0 10px #00ffff)",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
