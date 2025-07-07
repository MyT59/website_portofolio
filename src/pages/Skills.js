import Particles from '../components/Particles';
import SkillBar from '../components/SkillBar';
import SpotlightCard from '../components/SpotlightCard';
import htmlLogo from '../asset/html5.png';
import cssLogo from '../asset/css.png';
import jsLogo from '../asset/js.png';
import reactLogo from '../asset/react.png';
import javaLogo from '../asset/java.png';
import phpLogo from '../asset/php.png';
import pythonLogo from '../asset/python.png';
import dockerLogo from '../asset/docker.png';
import ciscoLogo from '../asset/cisco-packet-tracer.png';
import sqlLogo from '../asset/sql.png';

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
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px',width:'100%' }}>
      <img src={htmlLogo} alt="HTML" style={{ width: '40px', height: '40px' }} />
      <SkillBar skill="HTML" level="90%" />
    </div>
  </SpotlightCard>
  
  <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)">
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px',width:'100%'  }}>
      <img src={cssLogo} alt="CSS" style={{ width: '40px', height: '40px' }} />
      <SkillBar skill="CSS" level="80%" />
    </div>
  </SpotlightCard>

  <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)">
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px',width:'100%'  }}>
      <img src={jsLogo} alt="JS" style={{ width: '40px', height: '40px' }} />
      <SkillBar skill="JS" level="75%" />
    </div>
  </SpotlightCard>

  <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)">
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px',width:'100%'  }}>
      <img src={sqlLogo} alt="Sql" style={{ width: '40px', height: '40px' }} />
      <SkillBar skill="Sql" level="80%" />
    </div>
  </SpotlightCard>
  
<SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)">
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px',width:'100%'  }}>
    <img src={reactLogo} alt="React" style={{ width: '40px', height: '40px' }} />
    <SkillBar skill="React" level="70%" />
  </div>
</SpotlightCard>

<SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)">
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px',width:'100%'  }}>
    <img src={javaLogo} alt="Java" style={{ width: '40px', height: '40px' }} />
    <SkillBar skill="Java" level="90%" />
  </div>
</SpotlightCard>

<SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)">
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px',width:'100%'  }}>
    <img src={phpLogo} alt="PHP" style={{ width: '40px', height: '40px' }} />
    <SkillBar skill="PHP" level="80%" />
  </div>
</SpotlightCard>

<SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)">
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px',width:'100%'  }}>
    <img src={pythonLogo} alt="Python" style={{ width: '40px', height: '40px' }} />
    <SkillBar skill="Python" level="75%" />
  </div>
</SpotlightCard>

<SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)">
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px',width:'100%'  }}>
    <img src={dockerLogo} alt="Docker" style={{ width: '40px', height: '40px' }} />
    <SkillBar skill="Docker" level="70%" />
  </div>
</SpotlightCard>

<SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)">
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px',width:'100%'  }}>
    <img src={ciscoLogo} alt="Cisco" style={{ width: '40px', height: '40px' }} />
    <SkillBar skill="Cisco packet tracer" level="90%" />
  </div>
</SpotlightCard>
  </div>
</div>

    </section>
  );
}

export default Skills;
