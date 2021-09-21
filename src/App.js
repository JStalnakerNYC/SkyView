import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Gallery from "./components/Gallery";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Route component={Gallery} path="/" />
      </div>
    </BrowserRouter>
  );
}
