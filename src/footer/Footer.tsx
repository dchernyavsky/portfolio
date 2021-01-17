import React, {FunctionComponent} from 'react';
import style from './Footer.module.css'

interface OwnProps {
}

type Props = OwnProps;

const Footer: FunctionComponent<Props> = (props) => {

  return (
    <div
      className={style.footer}
    >

    </div>
  );
};

export default Footer;
