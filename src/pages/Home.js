import React from "react";
import ProfileCard from "../components/ProfileCard";
import avatar from "../asset/profil.jpg";
import DecryptedText from "../components/DecryptedText";
import Orb from "../components/Orb";
import { FaGithub, FaLinkedin } from "react-icons/fa";


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
          title="Cyber Security"
          handle="michael.dev"
          status="Available"
          contactText="Contact me"
        />

        <div style={{ maxWidth: "800px", color: "white" }}>
          <h1 style={{ fontSize: "4rem", marginBottom: "20px" }}>
            Hi, I'm Michael Tampubolon 👋
          </h1>
          <DecryptedText
            text="I'm a Cyber security & Frontend Developer"
            animateOn="view"
            revealDirection="center"
            className=""
            style={{ fontSize: "40px", color: "white", marginBottom: "20px" }}
          />
          <div style={{ display: "flex", gap: "20px", marginTop: "10px" }}>
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
  </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
