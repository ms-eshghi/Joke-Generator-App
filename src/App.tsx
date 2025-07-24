import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import FrontPage from "./components/FrontPage";
import SavedPage from "./components/SavedPage";
import useJokes from "./hooks/userJokes";
import "./App.css";

function App() {
  const { savedJokes, saveJoke, deleteJoke } = useJokes();

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<FrontPage saveJoke={saveJoke} />} />
        <Route
          path="/saved"
          element={
            <SavedPage savedJokes={savedJokes} deleteJoke={deleteJoke} />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
