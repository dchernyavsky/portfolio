import React, {FunctionComponent} from 'react';
import style from './Main.module.css'
import styleContainer from '../common/styles/Container.module.css'

interface OwnProps {
}

type Props = OwnProps;

const Main: FunctionComponent<Props> = (props) => {

  return (<div className={style.mainBlock}>
    <div className={styleContainer.container}>
      <div className={style.text}>
        <span>Hi There</span>
        <h1>I am Dmitry</h1>
        <p>Front-end developer</p>
      </div>
      <div className={style.photo}></div>
    </div>
  </div>);
};

export default Main;
