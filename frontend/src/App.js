import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/")
      .then(response => setMessage(response.data.message))
      .catch(error => setMessage("Could not connect to backend!"));
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center">NutriCheckAI</h1>
      <div className="alert alert-info text-center">{message}</div>
    </div>
  );
}

export default App;
