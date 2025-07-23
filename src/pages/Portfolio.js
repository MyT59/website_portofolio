import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import androidLogo from "../asset/androidd.png";
import webLogo from "../asset/Web.png";
import malwareLogo from "../asset/malware.png";
import riskLogo from "../asset/risk.png";
import cafeLogo from "../asset/cafe.png";
import portoLogo from "../asset/porto.png";
import Particles from "../components/Particles";

const data = [
  {
    img: androidLogo,
    title: "E-commerce Android App",
    desc: "Android App (2024)",
    details: ["Developed an e-commerce Android app using Android Studio, integrating Firebase for product data storage and SQLite for local user account management.", "•	Designed the UI/UX of the application using Figma"],
  },
  {
    img: webLogo,
    title: "Virtual Tour Website",
    desc: "Website (2024)",
    details: ["Capturing every spot on either campus or dorm to make sure we have a good visualization.", "•	Designed and developed an interactive virtual tour website."],
  },
  {
    img: malwareLogo,
    title: "Malware Analysis",
    desc: "Analysis (2025)",
    details: ["Final project collaboration with P.T. Square Gate One.", "Analyze real-world malware, examine how the malware works using static analysis, dynamic analysis, and reverse engineering."],
  },
  {
    img: cafeLogo,
    title: "Café Menu Order",
    desc: "Order System (2025)",
    details: ["Create ordering menu aplication with PHP and My SQL"],
  },
  {
    img: riskLogo,
    title: "SRM Project",
    desc: "System (2025)",
    details: ["Develop a risk security assessment website based on the security framework Octave Allegro"],
  },
  {
    img: portoLogo,
    title: "Website Portofolio",
    desc: "Personal Website (2025)",
    details: ["Create a website to show my Portofolio and some of my project "],
  },
];

function Portfolio() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleDragEnd = (event, info) => {
    if (info.offset.x < -100) {
      setIndex((prev) => (prev + 1) % data.length);
    }
    if (info.offset.x > 100) {
      setIndex((prev) => (prev - 1 + data.length) % data.length);
    }
  };

  return (
    <section id="portfolio" style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
      <Particles
        particleCount={250}
        particleColors={["#00ffff", "#ffffff", "#00ffcc"]}
        moveParticlesOnHover={true}
        alphaParticles={true}
        speed={0.3}
        particleBaseSize={50}
        sizeRandomness={2}
      />

      <h2 style={{ fontSize: "4rem", marginBottom: "40px", textAlign: "center" }}>Portfolio</h2>

      <div style={{
        width: "100%",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
          animate={{ x: `calc(50vw - ${index * 360}px - 150px)` }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          style={{
            display: "flex",
            gap: "60px",
            cursor: "grab",
          }}
        >
          {data.map((item, i) => (
            <motion.div
              key={i}
              style={{
                width: "300px",
                background: "#111827",
                padding: "20px",
                borderRadius: "15px",
                color: "#fff",
                textAlign: "center",
                flexShrink: 0,
                transform: i === index ? "scale(1)" : "scale(0.85)",
                opacity: i === index ? 1 : 0.5,
                transition: "all 0.5s",
                boxShadow: "0 0 20px rgba(0,255,255,0.2)",
              }}
            >
              <img src={item.img} alt={item.title} style={{ width: "80px", marginBottom: "20px" }} />
              <h3 style={{ fontSize: "1.5rem" }}>{item.title}</h3>
              <p style={{ marginTop: "10px", fontSize: "1rem" }}>{item.desc}</p>
              <ul style={{ textAlign: "left", fontSize: "0.9rem", paddingLeft: "1rem", marginTop: "10px" }}>
                {item.details.map((detail, idx) => (
                  <li key={idx} style={{ marginBottom: "5px" }}>{detail}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px", gap: "10px" }}>
        {data.map((_, i) => (
          <div
            key={i}
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: i === index ? "#00ffff" : "#444",
              transition: "all 0.3s",
            }}
          ></div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
