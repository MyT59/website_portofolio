import Threads from '../components/Threads';

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
      <Threads
        color={[0.2, 0.7, 1]}
        amplitude={3}
        distance={0.6}
        enableMouseInteraction={true}
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
            I'm an IT student from President University. My passion is in Network especialy with cisco, LInux, Remnux and Web Programing with 
            Java script, HTML, Css, and ReactJs
        </p>
        <h1 style={{ fontSize: '4rem', marginBottom: '200px',textAlign:'center',marginLeft:'700px' }}>My Tools</h1>
      </div>
    </section>
  );
}

export default About;
