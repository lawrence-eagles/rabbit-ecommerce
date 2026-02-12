import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import UserLayout from "./components/Layout/UserLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          {/*User Layout*/}
        </Route>
        <Route>{/*Adim Layout*/}</Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
