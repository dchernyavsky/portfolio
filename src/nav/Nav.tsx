import React, {FunctionComponent} from 'react';
import style from './Nav.module.css'

interface OwnProps {
}

type Props = OwnProps;

const Nav: FunctionComponent<Props> = (props) => {

  return (
    <div
      className={style.nav}
    >
      <a href="">Home</a>
      <a href="">Skills</a>
      <a href="">Projects</a>
      <a href="">Contacts</a>
    </div>
  );
};

export default Nav;
