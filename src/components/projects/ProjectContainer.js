/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from 'react';
import { ProjectStyle } from './ProjectStyle';

// images --->
import bookImg from '../../assets/js-book-img.jpg';
import project1 from '../../assets/project_01.png';
import project2 from '../../assets/project_02.png';
import project3 from '../../assets/project_03.png';
import project4 from '../../assets/project_04.png';
import project5 from '../../assets/project_05.png';
import project6 from '../../assets/project_06.png';

const projectsData = [
  {
    title: 'Lad_',
    sub: 'network',
    img: project1,
    id: 0,
    hover: false,
  },
  {
    title: 'Movie_',
    sub: 'db',
    img: project2,
    id: 1,
    hover: false,
  },
  {
    title: 'LA_',
    sub: 'expert',
    img: project3,
    id: 2,
    hover: false,
  },
  {
    title: 'Soul_',
    sub: 'food',
    img: project4,
    id: 3,
    hover: false,
  },
  {
    title: 'Insta_',
    sub: 'clone',
    img: project5,
    id: 4,
    hover: false,
  },
  {
    title: 'Tool_',
    sub: 'rent',
    img: project6,
    id: 5,
    hover: false,
  },
];
const ProjectContainer = () => {
  const [projects, setProjects] = useState(projectsData);

  const setHoverHandler = (index) => {
    const updatedProjects = [...projects];
    updatedProjects[index].hover = true;
    setProjects(updatedProjects);
  };
  const disableHoverHandler = (index) => {
    const updatedProjects = [...projects];
    updatedProjects[index].hover = false;
    setProjects(updatedProjects);
  };
  return (
    <ProjectStyle className="container">
      {/* projets section
     Things todo :
     - [x] connect style-components to this component
     - [x] upload images -> for projects
     - [] add content on the right side use lorem-ipsum for now
     - [\ add styling
     - [] add more blue circle
     */}
      <div className="project-flex">
        {/* left side ----> */}
        <img className="bookImg" src={bookImg} alt="html/css & js book" />
        {/* right side content -----> */}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad provident ex porro ratione,
          laborum ducimus. Magnam dolorem, dignissimos, inventore in veniam sunt beatae nostrum
          eaque nesciunt ut eligendi soluta facere harum asperiores ipsum ab optio? Cupiditate,
          doloremque.
        </p>
      </div>

      {/* Featured works ---> */}
      <div className="featured-flex">
        {/* featured title left side ----> */}
        <h3>
          Featured_
          <br />
          works
          <span className="color">:</span>
        </h3>
      </div>

      {/* PROJECTS */}
      <div className="projectCard-wrap container">
        {projects.map((item, index) => (
          <ProjectCard
            key={item.id}
            setHoverHandler={() => setHoverHandler(index)}
            disableHoverHandler={() => disableHoverHandler(index)}
            item={item}
          />
        ))}
      </div>
    </ProjectStyle>
  );
};

const ProjectCard = ({ setHoverHandler, disableHoverHandler, item }) => (
  <div className="project-card" onMouseEnter={setHoverHandler} onMouseLeave={disableHoverHandler}>
    <img className={`${item.hover && 'dark'}`} src={item.img} alt="ladnetwork" />
    <h3 className={`card-title ${item.hover && 'text'}`}>
      {item.title}
      <br />
      {item.sub}
    </h3>

    <a
      href="https://miranda-usemytools.netlify.com/"
      target="_blank"
      className="link"
      rel="noopener noreferrer"
    />
  </div>
);

export default ProjectContainer;
