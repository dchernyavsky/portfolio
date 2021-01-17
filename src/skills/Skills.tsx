import React, {FunctionComponent} from 'react'
import style from './Skills.module.css'
import styleContainer from './../common/styles/Container.module.css'
import Skill from "./skill/Skill"
import {v1} from "uuid"

interface OwnProps {
}

type Props = OwnProps

const Skills: FunctionComponent<Props> = (props) => {
  const TITLE = 'Skills'
  const SKILLS = [
    {
      id: v1(),
      title: 'JS',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet eligendi, et eveniet, exercitationem impedit iure labore, modi pariatur porro quae quaerat quasi repellendus reprehenderit soluta suscipit veniam. A, non?'
    },
    {
      id: v1(),
      title: 'TS',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet eligendi, et eveniet, exercitationem impedit iure labore, modi pariatur porro quae quaerat quasi repellendus reprehenderit soluta suscipit veniam. A, non?'
    },
    {
      id: v1(),
      title: 'React',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet eligendi, et eveniet, exercitationem impedit iure labore, modi pariatur porro quae quaerat quasi repellendus reprehenderit soluta suscipit veniam. A, non?'
    },
    {
      id: v1(),
      title: 'CSS',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet eligendi, et eveniet, exercitationem impedit iure labore, modi pariatur porro quae quaerat quasi repellendus reprehenderit soluta suscipit veniam. A, non?'
    },
  ]

  return (
    <div className={style.skillsBlock}>
      <div className={`${styleContainer.container} ${style.skillsContainer}`}>
        <h2 className={style.title}>{TITLE}</h2>
        <div className={style.skills}>
          {
            SKILLS.map(skill => <Skill
              key={skill.id}
              title={skill.title}
              description={skill.description}
            />)
          }
        </div>
      </div>
    </div>);
};

export default Skills