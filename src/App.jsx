import React from "react";
import { Route, Routes } from "react-router-dom";
import Jobs from "./pages/Jobs.jsx";
import Statistics from "./pages/Statistics.jsx";
import Header from "./components/Header.jsx";

function App() {
  return (
    <div className="flex flex-col bg-blue-100">
      <Header />
      <Routes>
        <Route path="/" element={<Jobs />} />
        <Route path="/statistics" element={<Statistics />} />
      </Routes>
    </div>
  );
}

export default App;
