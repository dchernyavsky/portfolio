import React, {FunctionComponent} from 'react'
import style from './Projects.module.css'
import {v1} from "uuid";
import Project from "./project/Project";
import styleContainer from "../common/styles/Container.module.css";

interface OwnProps {
}

type Props = OwnProps

const Projects: FunctionComponent<Props> = (props) => {
  const TITLE = 'Projects'
  const projects = [
    {
      id: v1(),
      title: 'Social network',
      description: 'description',
      icon: ''
    },
    {
      id: v1(),
      title: 'Todolist',
      description: 'description',
      icon: ''
    }
  ]

  return (
    <div className={style.projectsBlock}>
      <div className={`${styleContainer.container} ${style.projectsContainer}`}>
        <h2 className={style.title}>{TITLE}</h2>
        <div className={style.projects}>
          {
            projects.map(project => <Project
              key={project.id}
              title={project.title}
              description={project.description}
              icon={project.icon}
            />)
          }
        </div>

      </div>
    </div>
  );
};

export default Projects
