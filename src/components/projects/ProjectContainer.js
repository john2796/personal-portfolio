/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from 'react';
import { ProjectStyle } from './ProjectStyle';
import { projectsData } from './ProjectData';

// images --->
import bookImg from '../../assets/js-book-img.jpg';
import ProjectCard from './ProjectCard';
import BlueCircles from '../main-header/BlueCircles';

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
    <>
      <ProjectStyle className="container">
        <div className="featured-works-bookImg-p-wrapper">
          <div className="project-flex">
            {/* left side ----> */}
            <img className="bookImg" src={bookImg} alt="html/css & js book" />
            {/* right side content -----> */}
            <p>
              <span className="all-projects">
                <i className="fa fa-circle colon" aria-hidden="true" />
                <i className="fa fa-circle colon" aria-hidden="true" />
                <i className="fa fa-circle colon" aria-hidden="true" />
                <i className="fa fa-circle colon" aria-hidden="true" />
                <i className="fa fa-circle colon" aria-hidden="true" />
                <i className="fa fa-circle colon" aria-hidden="true" />
                <i className="fa fa-circle colon" aria-hidden="true" />
                <i className="fa fa-circle colon" aria-hidden="true" />
                <i className="fa fa-circle colon" aria-hidden="true" />
              </span>
            </p>
          </div>

          {/* Featured works ---> */}
          <div className="featured-flex">
            {/* featured title left side ----> */}
            <h3>
              Featured_
              <br />
              works
              <span className="colon">:</span>
            </h3>
          </div>
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
        <BlueCircles />
      </ProjectStyle>
    </>
  );
};

export default React.memo(ProjectContainer);
