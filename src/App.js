import "./App.css";
import { useState } from "react";
import Header from "./components/Header";

import Characters from "./pages/Characters";
import Comics from "./pages/Comics";
import Character from "./pages/Character";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");

  const handleName = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  const handleTitle = (event) => {
    event.preventDefault();
    setTitle(event.target.value);
  };
  return (
    <div className="App">
      <Router>
        <Header handleName={handleName} handleTitle={handleTitle} />
        <Routes>
          <Route path="/" element={<Characters name={name} />} />
          <Route path="/comics" element={<Comics title={title} />} />
          <Route path="/character/:id" element={<Character />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
