import React, {FunctionComponent} from 'react';
import style from './Contact.module.css'
import styleContainer from "../common/styles/Container.module.css";

interface OwnProps {
}

type Props = OwnProps;

const Contact: FunctionComponent<Props> = (props) => {
  const TITLE = 'Contact'
  return (
    <div className={style.contactBlock}>
      <div className={`${styleContainer.container} ${style.contactContainer}`}>
        <h2 className={style.title}>{TITLE}</h2>
        <div className={style.contact}>
          <form className={style.form} action={"#"}>
            <input type="text" className={style.formControl} name="name" placeholder="Name" required/>
            <input type="text" className={style.formControl} name="email" placeholder="Email" required/>
            <textarea className={style.formControl} name="message" placeholder="Your message" required/>
          </form>
          <button className={style.btn}>Send message</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
