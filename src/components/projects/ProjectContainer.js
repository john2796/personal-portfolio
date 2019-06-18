/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from 'react';
import { ProjectStyle } from './ProjectStyle';
import { projectsData } from './ProjectData';

// images --->
import bookImg from '../../assets/js-book-img.jpg';
import ProjectCard from './ProjectCard';

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
     - [] add red circles on project section
    - [] add more blue circle
    - [] link up project to their link
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

export default ProjectContainer;
