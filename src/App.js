import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./routes/Root.tsx";
import ErrorPage from "./routes/ErrorPage.tsx";
import { ReviewScreen } from "./routes/Review.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/journal/review",
    element: <ReviewScreen />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
