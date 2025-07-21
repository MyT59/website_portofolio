import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import androidLogo from "../asset/androidd.png";
import webLogo from "../asset/Web.png";
import malwareLogo from "../asset/malware.png";
import Particles from "../components/Particles";

const data = [
  {
    img: androidLogo,
    title: "Mobile Programming",
    desc: "E-commerce Android App",
  },
  {
    img: webLogo,
    title: "Web Programming",
    desc: "Virtual Tour Website",
  },
  {
    img: malwareLogo,
    title: "Cyber Security",
    desc: "Malware Analysis",
  },
];

function Portfolio() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % data.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="portfolio" style={{ position: "relative", minHeight: "100vh" }}>
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
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        height: "400px",
        overflow: "hidden",
      }}>
        <div style={{
          display: "flex",
          transition: "transform 0.5s",
          transform: `translateX(calc(-${index} * 320px))`,
          gap: "50px",
        }}>
          {data.map((item, i) => (
            <motion.div
              key={i}
              style={{
                width: "300px",
                height: "350px",
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
            </motion.div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          style={{
            position: "absolute",
            left: "20px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "#00ffff",
            border: "none",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            cursor: "pointer",
          }}
        >
          {"<"}
        </button>

        <button
          onClick={nextSlide}
          style={{
            position: "absolute",
            right: "20px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "#00ffff",
            border: "none",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            cursor: "pointer",
          }}
        >
          {">"}
        </button>
      </div>

      {/* Dot Indicator */}
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
