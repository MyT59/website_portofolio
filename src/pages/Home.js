import React from "react";
import ProfileCard from "../components/ProfileCard";
import avatar from "../asset/profil.jpg";
import DecryptedText from "../components/DecryptedText";
import Orb from "../components/Orb";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import cvFile from "../asset/CV Michael Hasudungan Tampubolon B88.pdf"; // Import CV PDF

function Home() {
  return (
    <section
      id="home"
      style={{
        transform: "scale(0.75)",
        transformOrigin: "top left",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Orb
        hue={250}
        hoverIntensity={0.3}
        rotateOnHover={true}
        forceHoverState={false}
      />
      <div
        style={{
          position: "relative",
          zIndex: 3,
          padding: "60px 20px",
          color: "white",
          textAlign: "left",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "40px",
          flexWrap: "wrap",
        }}
      >
        <ProfileCard
          avatarUrl={avatar}
          miniAvatarUrl={avatar}
          name="Michael Tampubolon"
          handle="michael.dev"
          status="Available"
          contactText="Contact me"
        />

        <div style={{ maxWidth: "800px", color: "white" }}>
          <h1 style={{ fontSize: "4rem", marginBottom: "20px" }}>
            Hi, I'm Michael Tampubolon 👋
          </h1>
          <DecryptedText
            text="I'm a cyber security enthusiast & Frontend Developer"
            animateOn="view"
            revealDirection="center"
            style={{ fontSize: "40px", color: "white", marginBottom: "20px" }}
          />
          <div style={{ display: "flex", gap: "20px", marginTop: "10px", alignItems: "center", flexWrap: "wrap" }}>
            <a
              href="https://github.com/MyT59"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white", fontSize: "80px" }}
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/michael-tampubolon-5b201628b/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white", fontSize: "80px" }}
            >
              <FaLinkedin />
            </a>
            <a
              href={cvFile}
              download="Michael_Tampubolon_CV.pdf"
              style={{
                textDecoration: "none",
                color: "#000",
                background: "#00ffff",
                padding: "10px 20px",
                borderRadius: "10px",
                fontSize: "20px",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "60px",
                boxShadow: "0 0 10px rgba(0, 255, 255, 0.6)",
                transition: "all 0.3s ease-in-out",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.05)";
                e.target.style.boxShadow = "0 0 20px rgba(0, 255, 255, 0.9)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow = "0 0 10px rgba(0, 255, 255, 0.6)";
              }}
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
