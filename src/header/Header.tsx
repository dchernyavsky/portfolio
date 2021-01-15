import React, {FunctionComponent} from 'react';
import style from './Header.module.css'
import Nav from "../nav/Nav";

interface OwnProps {
}

type Props = OwnProps;

const Header: FunctionComponent<Props> = (props) => {

  return (
    <div
      className={style.header}
    >
      <Nav />
    </div>
  );
};

export default Header;
