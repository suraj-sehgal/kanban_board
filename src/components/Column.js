import React from "react";
import Card from "./Card";

import "./../styles/Column.css";

const Column = ({ title, order, tickets,users }) => {
    if(order=="user"){
        const user = users.find((user) => user.id === title);
        title=user.name;
    }
  return (
    <div className="column">
      <div className="column-header">
        <div id="header-comp">
            <div className="column-title">{title}</div>
            <div style={{color:"grey"}}>{tickets.length}</div>
        </div>
        <div id="header-comp">
            <div style={{color:"grey", fontSize:"20px"}}>+</div>
            <div style={{color:"grey", fontSize:"20px"}}>...</div>
        </div>
      </div>
      <div className="column-content">
        {tickets.map((ticket) => (
          <Card key={ticket.id} ticket={ticket} name={title} />
        ))}
      </div>
    </div>
  );
};

export default Column;
