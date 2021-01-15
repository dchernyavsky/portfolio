import React, {FunctionComponent} from 'react';
import style from './Skill.module.css'

interface OwnProps {
  title: string
}

type Props = OwnProps;

const Skill: FunctionComponent<Props> = (props) => {

  return (<div className={style.skill}>
    <div className={style.icon}></div>
    <h3>{props.title}</h3>
    <span className={style.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet eligendi, et eveniet, exercitationem impedit iure labore, modi pariatur porro quae quaerat quasi repellendus reprehenderit soluta suscipit veniam. A, non?</span>
  </div>);
};

export default Skill;
