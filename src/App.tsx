import * as React from "react";
import type { RouteObject } from "react-router-dom";
import { Outlet, Link, useRoutes } from "react-router-dom";

export default function App() {
  let routes: RouteObject[] = [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Demo1 /> },
        {
          path: "/demo2",
          element: <Demo2 />,
        },
        {
          path: "/error",
          element: <Error />,
        },
        { path: "*", element: <Error /> },
      ],
    },
  ];

  let element = useRoutes(routes);

  return <div className="App">{element}
  
  <img src="assets/shoe-color.png" alt="res"/>
  
  </div>;
}

function Layout() {
  return (
    <div>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Demo1111</Link>
          </li>
          <li>
            <Link to="/demo2">Demo2</Link>
          </li>
          <li>
            <Link to="/error">Error</Link>
          </li>
        </ul>
      </nav>

      <hr /> */}

      <Outlet />
    </div>
  );
}

function Demo1() {
  return (
    <div>
      <h2>Demo1111111111111</h2>
    </div>
  );
}

function Demo2() {
  return (
    <div>
      <h2>Demo22222</h2>
      <Outlet />
    </div>
  );
}

function Error() {
  return (
    <div>
      <h2>It looks like you're lost...</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
