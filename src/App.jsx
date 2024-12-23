import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { Index } from "./pages";
import Header from "./components/layout/header";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Index />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
