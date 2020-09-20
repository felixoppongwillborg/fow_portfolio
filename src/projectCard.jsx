import React from "react";

const projectCard = ({ project }) => {
  return (
    <>
      <div class="ui card">
        <div class="image">
          <img src={project.image} alt="" />
        </div>
        <div class="content">
          <h3 class="ui header">{project.name}</h3>

          <div class="description">{project.description}</div>
        </div>
      </div>
    </>
  );
};
export default projectCard;
