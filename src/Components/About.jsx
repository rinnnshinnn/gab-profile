/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/grid-3227459_1920.jpg";

const imageAltText =
  "Minimalist 3D hexagonal tile design with white hexagons fading from the right side, creating depth with subtle shadows on a light gray background.purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a passionate Computer Science student at FEU Institute of Technology, with a focus on building dynamic, interactive web applications. I thrive on solving complex problems and bringing ideas to life through code.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "HTML & CSS",
  "JavaScript",
  "Responsive Web Design",
  "Version Control",
  "Front-End Frameworks",
  "Back-End Development",
  "Database Management",
  "Cross-Browser Compatibility",
  "Web Performance Optimization",
  "SEO Best Practices",
  "User-Centered Design",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I’m passionate about building dynamic and interactive web applications, and I’m eager to leverage my skills in both front-end and back-end technologies. My current projects involve creating web applications and exploring new technologies to stay on the cutting edge of the tech industry.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
