import React, {FunctionComponent} from 'react';
import style from './Skills.module.css'
import styleContainer from './../common/styles/Container.module.css'
import Skill from "./skill/Skill";

interface OwnProps {
}

type Props = OwnProps;

const Skills: FunctionComponent<Props> = (props) => {

  return (
    <div className={style.skillsBlock}>
      <div className={`${styleContainer.container} ${style.skillsContainer}`}>
        <h2 className={style.title}>Skills</h2>
        <div className={style.skills}>
          <Skill title={'JS'}/>
          <Skill title={'TS'}/>
          <Skill title={'React'}/>
          <Skill title={'CSS'}/>
        </div>
      </div>
    </div>);
};

export default Skills;
