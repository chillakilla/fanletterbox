import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "../pages/Home";
import Details from "../pages/Details";
import { LetterProvider, useLetterContext } from "../context/LetterContext";

const Router = () => {
  return (
    <LetterProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </LetterProvider>
  );
};

export default Router;
