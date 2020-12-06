import React from "react"

import cardStyle from "./card.module.css"

const BackCard = props => {
  const dynamicAttributes = {
    background: `#${props.background}`,
    color: `#${props.fontColor}`,
    height: `17rem`,
  }
  console.log("card height:", props.height)
  return (
    <div
      onClick={props.onClick}
      onKeyPress={props.onClick}
      className={cardStyle.back}
      style={dynamicAttributes}
      role="button"
      tabIndex={0}
    >
      <h3 className={cardStyle.title}>{props.title}</h3>
      <p className={cardStyle.description}>{props.description}</p>
    </div>
  )
}

export default BackCard
