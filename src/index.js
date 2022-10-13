import React from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App";
const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' exact element={App} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);