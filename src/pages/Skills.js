import Particles from '../components/Particles';
import SkillBar from '../components/SkillBar';
import SpotlightCard from '../components/SpotlightCard';

function Skills() {
  return (
    <section
      id="skills"
      data-aos="fade-up"
      style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
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
    position: 'relative',
    zIndex: 2,
    color: 'white',
    padding: '60px 20px',
  }}
>
  <h2 style={{ fontSize: '3rem', marginBottom: '40px' }}>My Skills</h2>

  <div className="skills-grid">
  <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)">
    <SkillBar skill="HTML" level="90%" />
  </SpotlightCard>
  <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)">
    <SkillBar skill="CSS" level="80%" />
  </SpotlightCard>
  <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)">
    <SkillBar skill="JS" level="75%" />
  </SpotlightCard>
  <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)">
    <SkillBar skill="React" level="70%" />
  </SpotlightCard>
    <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)">
    <SkillBar skill="Java" level="90%" />
  </SpotlightCard>
  <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)">
    <SkillBar skill="PHP" level="80%" />
  </SpotlightCard>
  <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)">
    <SkillBar skill="Python" level="75%" />
  </SpotlightCard>
  <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)">
    <SkillBar skill="Docker" level="70%" />
  </SpotlightCard>
  </div>
</div>

    </section>
  );
}

export default Skills;
