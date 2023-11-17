import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "../pages/Home";
import Details from "../pages/Details";
import fakeData from "fakeData.json";

const Router = () => {
  const [letters, setLetters] = useState(fakeData);
  console.log("router", letters);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home letters={letters} setLetters={setLetters} />}
        />
        <Route
          path="/details/:id"
          element={<Details letters={letters} setLetters={setLetters} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
