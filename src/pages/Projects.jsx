import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import "./Projects.scss";
// import { Outlet } from 'react-router-dom';
import journeyImg from "./project-img/threejs-journey.png";
import shoeImg from "./project-img/shoe-color.png";
import yellowBallImg from "./project-img/yellow-ball.png";

const projectList = [
    {
      title: "Threejs journey",
      url: "/journey",
      img: journeyImg,
    },
    {
      title: "shoe-color",
      url: "/shoe-color",
      img: shoeImg,
    },
    {
      title: "yellow-ball ",
      url: "/yellow-ball",
      img: yellowBallImg,
    },
  ];


export default function Projects() {
    return (
        <div className="project">
          <div className="theme">Three.js Project</div>
          <div className="card-list">
            {projectList.map((item, index) => (
              <Link key={index} to={item.url}>
                <Card key={index} item={item} />
              </Link>
            ))}
          </div>
          {/* <Outlet /> */}
        </div>
      );
}
