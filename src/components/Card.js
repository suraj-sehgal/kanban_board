import React from "react";
import "./../styles/Card.css";

const Card = ({ ticket, name }) => {
  const { id, title, tag } = ticket;

  // Generate a random color for the avatar
  const randomColor = () => {
    const colors = ["#f94144", "#f3722c", "#f8961e", "#f9844a", "#90be6d", "#43aa8b", "#577590"];
    return colors[Math.floor(Math.random() * colors.length)];
  };
  const u = name.split(" ").map((value) => value.charAt(0)).join("").toUpperCase()
 
  return (
    <div className="card">
      <div className="card-header">
        

        <span className="card-id">{id}</span>
        <div
          className="avatar"
          style={{ backgroundColor: randomColor() }}
        >
          { u.slice(0, 2) || "?"}
        </div>
      </div>

      <h4 className="card-title">{title}</h4>


      <div className="card-tag">
        <div id="dot">...</div>
        <div id="dot">{tag}</div>
      </div>
    </div>
  );
};

export default Card;
