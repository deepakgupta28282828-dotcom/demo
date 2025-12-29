import React, { useEffect, useRef } from "react";
import "./Button.css";

const Button = () => {
  const particleFieldRef = useRef(null);

  useEffect(() => {
    const particleField = particleFieldRef.current;
    if (!particleField) return;

    particleField.innerHTML = "";

    for (let i = 0; i < 50; i++) {
      const particle = document.createElement("div");
      particle.className = "particle-anmi";

      const x = Math.random() * 200 - 100;
      const y = Math.random() * 200 - 100;
      const duration = 1 + Math.random() * 2;

      particle.style.setProperty("--x", `${x}px`);
      particle.style.setProperty("--y", `${y}px`);

      // ✅ SAFE animation assignment
      particle.style.animationName = "particleFloat";
      particle.style.animationDuration = `${duration}s`;
      particle.style.animationTimingFunction = "ease-in-out";
      particle.style.animationIterationCount = "infinite";

      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;

      particleField.appendChild(particle);
    }
  }, []);

  return (
    <button className="btn-anmi magnetic-anmi">
      <span>Get Consultation</span>
      <div className="particles-field-anmi" ref={particleFieldRef}></div>
    </button>
  );
};

export default Button;
