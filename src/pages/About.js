
import Particles from '../components/Particles';
import vscodeLogo from '../asset/vscode.png';
import githubLogo from '../asset/github.png';
import vmboxlogo from '../asset/vmbox.png';
import androidlogo from '../asset/android.png';

function About() {
  return (
    <section
      id="about"
      data-aos="fade-left"
      style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '70vh',
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
          position: 'relative',
          zIndex: 2,
          padding: '60px 20px',
          color: 'white',
          textAlign: 'left',
        }}
      >
        <h1 style={{ fontSize: '4rem', marginBottom: '20px' }}>About Me</h1>
          <p style={{ fontSize: '40px', color: 'white', marginBottom: '20px',marginRight:'900px' }}>
            I'm an IT student from President University. My passion is in Network especialy with cisco, Linux, Remnux, Wireshark and Web Programing with 
            Java script, HTML, Css, and ReactJs
        </p>
        <h1 style={{ fontSize: '4rem', marginBottom: '40px',textAlign:'center',marginLeft:'700px' }}>My Tools</h1>
        <div
  style={{
    display: 'flex',
    justifyContent: 'flex end',
    alignItems: 'center',
    gap: '40px',
    flexWrap: 'wrap',
    marginLeft:'1010px',
    marginTop: '30px',
    padding: '0 20px',
  }}
>
  {[
    { src: vscodeLogo, alt: 'VS Code' },
    { src: githubLogo, alt: 'GitHub' },
    { src: vmboxlogo, alt: 'VM Box' },
    { src: androidlogo, alt: 'Android Studio' },
  ].map((tool, index) => (
    <img
      key={index}
      src={tool.src}
      alt={tool.alt}
      style={{
        width: '80px',
        height: '80px',
        objectFit: 'contain',
        transition: 'transform 0.3s ease',
        filter: 'drop-shadow(0 0 10px #00ffff)',
      }}
      onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
      onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    />
  ))}
</div>

      </div>
    </section>
  );
}

export default About;
