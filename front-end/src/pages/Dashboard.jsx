/*import { useContext } from "react";
import { UserContext } from "../context/userContext";

export default function Dashboard() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>Dashboard</h1>
      {user ? (
        <h1>Hi, {user.name}!</h1>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}*/

import { useContext } from "react";
import { UserContext } from "../context/userContext";
import '../styles/dashboard.css'; // 

export default function Dashboard() {
  const { user } = useContext(UserContext);

  return (
    <div className="dashboard-container">
      <div className="dashboard-box">
        <h1>Welcome!</h1>
        {user ? (
          <h1>{user.name}, Best Javascript Developer of Arbisoft</h1>
        ) : (
          <p>Loading user data...</p>
        )}
      </div>
    </div>
  );
}


