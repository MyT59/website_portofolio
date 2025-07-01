import React from "react";
import ProfileCard from "../components/ProfileCard";
import avatar from "../asset/profil.jpg";
import miniavatar from "../asset/t12.png.jpg";
import DecryptedText from "../components/DecryptedText";
import Orb from "../components/Orb";

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
        hoverIntensity={0.6}
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
        </div>
      </div>
    </section>
  );
}

export default Home;
