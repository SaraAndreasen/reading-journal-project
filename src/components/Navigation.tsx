import React from "react";
import { Route, Routes } from "react-router-dom";
import { TestPage } from "./Test.tsx";

export function MainNavigation() {
  return (
    <div>
      <Routes>
        <Route path="/home" Component={TestPage} />
      </Routes>
    </div>
  );
}
