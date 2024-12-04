import React, { useEffect, useState } from "react";
import Column from "./Column";
import "./../styles/KanbanBoard.css";

const KanbanBoard = ({ data ,users}) => {
  const [grouping, setGrouping] = useState("priority"); // Default grouping
  useEffect(()=>{
    const group = localStorage.getItem('grouping');
    if(group){
        setGrouping(group);
      }
  },[])
  const groupTickets = () => {
    if (grouping === "priority") {
        // Group tickets by priority
        return {
          "No Priority": data.filter((ticket) => ticket.priority === 0),
          Urgent: data.filter((ticket) => ticket.priority === 4),
          High: data.filter((ticket) => ticket.priority === 3),
          Medium: data.filter((ticket) => ticket.priority === 2),
          Low: data.filter((ticket) => ticket.priority === 1),
        };
      } else if (grouping === "status") {
        return {
            "Todo": data.filter((ticket) => ticket.status === "Todo"),
            "In progress": data.filter((ticket) => ticket.status === "In progress"),
            "Backlog": data.filter((ticket) => ticket.status === "Backlog"),
            "Done": data.filter((ticket) => ticket.status === "Done"),
            "Canceled": data.filter((ticket) => ticket.status === "Canceled"),
          };
      } else if (grouping === "user") {
        // Group tickets by assigned user
        return data.reduce((acc, ticket) => {
          const user = ticket.userId || "Unassigned";
          if (!acc[user]) acc[user] = [];
          acc[user].push(ticket);
          return acc;
        }, {});
      }
    // Additional grouping logic for 'status' and 'user'
    return {};
  };

  const groupedData = groupTickets();

  return (
    <div className="kanban-board">
      <div className="header">
        <select
          className="grouping-select"
          value={grouping}
          onChange={(e) => {setGrouping(e.target.value)
            localStorage.setItem('grouping', e.target.value);
          }}
        >
          <option value="priority">Priority</option>
          <option value="status">Status</option>
          <option value="user">User</option>
        </select>
      </div>
      <div className="columns">
        {Object.entries(groupedData).map(([group, tickets]) => (
          <Column key={group} users={users} order={grouping} title={group} tickets={tickets} />
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
