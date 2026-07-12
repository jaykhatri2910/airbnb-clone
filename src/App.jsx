import React from "react";
import Header from "./components/Header/Header";
import PropertyDetails from "./pages/PropertyDetails/PropertyDetails";
import "./index.css";

export default function App() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />
      <main style={{ flex: 1 }}>
        <PropertyDetails />
      </main>
    </div>
  );
}
