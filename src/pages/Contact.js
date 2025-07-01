import Threads from '../components/Threads';
import Particles from '../components/Particles';



function Contact() {
  return (
    <section id="contact" data-aos="fade-up-left">
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
      <h2 style={{fontSize:'40px'}}>Contact</h2>
      <p>Email: michaeltampubolon23@gmail.com</p>
      <p>Instagram: @jerapahhh_59</p>
    </section>
  );
}

export default Contact;
