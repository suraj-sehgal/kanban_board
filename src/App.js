import React, { useEffect, useState } from "react";
import KanbanBoard from "./components/KanbanBoard";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [users,setUsers]=useState([])

  useEffect(() => {
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((res) => res.json())
      .then((data) =>{ 
        setUsers(data.users)
        setData(data.tickets)
      })
      .catch((err) => console.error(err));
  }, []);

  console.log(users)

  return (
    <div className="App">
      <KanbanBoard data={data} users={users} />
    </div>
  );
}

export default App;
