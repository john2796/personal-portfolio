/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import PropTypes from 'prop-types';

const ProjectCard = ({ setHoverHandler, disableHoverHandler, item }) => (
  <div
    className={`project-card card-${item.id}`}
    onMouseEnter={setHoverHandler}
    onMouseLeave={disableHoverHandler}
  >
    <span className="github-wrap">
      <a href={item.github_link} target="_blank" rel="noopener noreferrer">
        <i className="fa fa-github" aria-hidden="true" />
      </a>
    </span>
    <img className={`${item.hover && 'dark'}`} src={item.img} alt="ladnetwork" />
    <h3 className={`card-title ${item.hover && 'text'}`}>
      {item.title}
      <br />
      {item.sub}
    </h3>
    <a href={item.link} target="_blank" rel="noopener noreferrer" className="link" />
    <p className={`project-desc ${item.hover && 'desc-hide'}`}>{item.desc}</p>
  </div>
);
ProjectCard.propTypes = {
  setHoverHandler: PropTypes.func,
  disableHoverHandler: PropTypes.func,
  item: PropTypes.shape({
    hover: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    sub: PropTypes.string.isRequired,
  }),
};

export default ProjectCard;
