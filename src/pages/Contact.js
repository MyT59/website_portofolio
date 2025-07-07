import Particles from "../components/Particles";
import { BorderBeam } from "../components/BorderBeam";
import "../components/Contact.css";

function Contact() {
  return (
    <section id="contact" data-aos="fade-up-left">
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
      <BorderBeam
        size={80}
        duration={6}
        colorFrom="#00f0ff"
        colorTo="#ff00ff"
        borderWidth={2}
        initialOffset={0}
      />
      <h2 style={{ fontSize: "40px" }}>Contact</h2>
      <p style={{ fontSize: "20px" }}>Email: michaeltampubolon23@gmail.com</p>
      <p style={{ fontSize: "20px" }}>Instagram: @jerapahhh_59</p>
      <div className="contact-form" style={{ position: "relative", zIndex: 1 }}>
        <h2>Tell Me Something</h2>
        <form action="https://formspree.io/f/mrbkvvlw" method="POST">
          <label style={{ marginBottom: "10px" }}>Email</label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            required
          />

          <label>Subject</label>
          <input type="text" name="subject" placeholder="Subject" required />

          <label>message</label>
          <textarea
            name="message"
            rows="5"
            placeholder="Write your text..."
            required
          />

          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
