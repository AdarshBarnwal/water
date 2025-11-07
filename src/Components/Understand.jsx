import React from "react";
import "./Understand.css";
import { FaTools, FaHandshake, FaCalendarAlt } from "react-icons/fa";

function Understand() {
  const items = [
    { icon: <FaTools />, title: "SERVICE" },
    { icon: <FaHandshake />, title: "BUY WAMC" },
    { icon: <FaCalendarAlt />, title: "BOOK DEMO" },
  ];

  return (
    <div className="understand-section">
      <h1 className="understand-title">We Understand Your Needs</h1>
      <h1 className="understand-subtitle">
        Begin The Journey Of Good Health With WATERJET
      </h1>

      <div className="understand-cards">
        {items.map((item, index) => (
          <div className="understand-card" key={index}>
            <div className="understand-icon">{item.icon}</div>
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Understand;
