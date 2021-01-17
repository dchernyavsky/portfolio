import React, {FunctionComponent} from 'react';
import style from './Freelance.module.css'
import styleContainer from "../common/styles/Container.module.css";

interface OwnProps {
}

type Props = OwnProps;

const Freelance: FunctionComponent<Props> = (props) => {
  const TITLE = 'I Am Available For Freelancer'
  return (
    <div className={style.freelanceBlock}>
      <div className={`${styleContainer.container} ${style.freelanceContainer}`}>
        <h2 className={style.title}>{TITLE}</h2>
        <div className={style.freelance}>

          <button className={style.btn}>Hire me</button>
        </div>
      </div>
    </div>
  );
};

export default Freelance;
