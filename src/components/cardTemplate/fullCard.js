import React, { useState } from "react"
import Card from "react-card-flip"

import FrontCard from "./front"
import BackCard from "./back"

import cardStyle from "./card.module.css"

const FlipCard = props => {
  const [isFlipped, setIsFlipped] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const handleClick = () => setIsFlipped(!isFlipped)

  const handleMouseHover = e => {
    e.preventDefault()
    setIsHovered(!isHovered)
  }

  const cursorDisplay = isHovered
    ? {
        cursor: "pointer",
      }
    : {
        cursor: "default",
      }

  return (
    <div
      onMouseEnter={handleMouseHover}
      onMouseLeave={handleMouseHover}
      style={cursorDisplay}
      className={cardStyle.card}
    >
      <Card isFlipped={isFlipped} flipDirection="vertical">
        <FrontCard src={props.src} onClick={handleClick} />
        <BackCard
          title={props.title}
          description={props.description}
          background={props.background}
          fontColor={props.fontColor}
          onClick={handleClick}
          height={props.height}
        />
      </Card>
    </div>
  )
}

export default FlipCard
