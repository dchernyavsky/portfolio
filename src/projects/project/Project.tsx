import React, {FunctionComponent} from 'react'
import style from "./Project.module.css"

interface OwnProps {
  title: string
  description: string
  icon: string
}

type Props = OwnProps

const Project: FunctionComponent<Props> = (props) => {

  return (
    <div className={style.project}>
      <div className={style.icon}>
        <button className={style.projectBtn}>Watch</button>
      </div>
      <h3>{props.title}</h3>
      <span className={style.description}>{props.description}</span>
    </div>)
}

export default Project