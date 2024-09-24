/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/laptop-1839876_1920.jpg";

const imageAltText = "Open laptop with code on the screen, a notebook, and a phone.";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Etch-a-Sketch Project",
    description:
      "A customizable Etch-a-Sketch project using HTML, CSS, and JavaScript. Includes theme inspired by Attack on Titan.",
    url: "https://github.com/rinnnshinnn/etch-a-sketch",
  },
  {
    title: "Rock-Paper-Scissors Game",
    description:
      "A simple Rock-Paper-Scissors game implemented using HTML and JavaScript. Features a clean and interactive UI.",
    url: "https://github.com/rinnnshinnn/rock-paper-scissor-webgame",
  },
  {
    title: "Calculator Website",
    description:
      "A colorful and vibrant iPhone-style calculator built with HTML, CSS, and JavaScript. Includes support for keyboard input.",
    url: "https://github.com/rinnnshinnn/calculator",
  },
  {
    title: "Survey Form",
    description:
      "A survey form styled with a modern dark theme and enhanced UX/UI experience, designed with a focus on accessibility.",
    url: "https://github.com/rinnnshinnn/survey-form",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
