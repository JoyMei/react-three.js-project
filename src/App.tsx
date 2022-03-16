import * as React from "react";
import type { RouteObject } from "react-router-dom";
import { Outlet, Link, useRoutes } from "react-router-dom";
import Projects from "./pages/Projects"
import YellowBall from "./projects/yellow-ball/index";
import ShoeColor from "./projects/shoe-color/index";
import ThreejsJourney from "./projects/threejs-journey/index";
import "./App.scss"

export default function App() {
  let routes: RouteObject[] = [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Projects /> },
        {
          path: "/yellow-ball",
          element: <YellowBall />,
        },
        {
          path: "/shoe-color",
          element: <ShoeColor />,
        },
        {
          path: "/journey",
          element: <ThreejsJourney />,
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

  return (
    <div className="App">
      {element}
    </div>
  );
}

function Layout() {
  return (
    <div className="Layout">
      <Outlet />
    </div>
  );
}

// function Demo1() {
//   return (
//     <div>
//       <h2>Demo1111111111111</h2>
//     </div>
//   );
// }

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
