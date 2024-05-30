import React from "react";
import { Link, Outlet } from "react-router-dom";

export function Root() {
  return (
    <>
      <h1>Testin Root stuffies</h1>
      <nav>
        <ul>
          <li>
            <Link to={`journal/review`}>Review</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Outlet />
      </div>
    </>
  );
}
