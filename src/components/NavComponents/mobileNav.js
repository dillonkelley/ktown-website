import React, { useState } from "react"
import Fade from "react-reveal/Fade"
import { FaInstagram } from "react-icons/fa"
import { Link } from "gatsby"

import navbarStyle from "./navbar.module.css"

const MobileNav = () => {
  const [isChecked, setIsChecked] = useState(false)

  const toggleNavDisplay = () => {
    return isChecked ? setIsChecked(false) : setIsChecked(true)
  }

  //acurate focused navbar
  //toggle off menu
  const hamburger = (
    <label
      htmlFor="toggle"
      onClick={toggleNavDisplay}
      onKeyPress={toggleNavDisplay}
      className={navbarStyle.hamburger}
      role="button"
      tabIndex={0}
    >
      &#9776;
    </label>
  )

  return (
    <div>
      {hamburger}
      <input type="checkbox" className={navbarStyle.toggle} />
      {isChecked && (
        <Fade exit>
          <nav className={navbarStyle.sidebarMain}>
            <Link
              to="/"
              activeClassName={navbarStyle.active}
              onClick={() => setIsChecked(!isChecked)}
            >
              <img
                src="https://res.cloudinary.com/dgkwrjld1/image/upload/v1607543476/logo/loge_dwwvm9.png"
                className={navbarStyle.logo}
                alt="karissa-talanian-logo"
              />
            </Link>

            <Link
              to="/macrame"
              activeClassName={navbarStyle.active}
              onClick={() => setIsChecked(!isChecked)}
            >
              macrame
            </Link>
            <Link
              to="/art"
              activeClassName={navbarStyle.active}
              onClick={() => setIsChecked(!isChecked)}
            >
              fiber art
            </Link>
            <Link
              to="/graphicDesign"
              activeClassName={navbarStyle.active}
              onClick={() => setIsChecked(!isChecked)}
            >
              graphic design
            </Link>
            <Link
              to="/about"
              activeClassName={navbarStyle.active}
              onClick={() => setIsChecked(!isChecked)}
            >
              about
            </Link>
            <Link
              to="/contact"
              activeClassName={navbarStyle.active}
              onClick={() => setIsChecked(!isChecked)}
            >
              contact
            </Link>

            <div className={navbarStyle.icons} id="social-medias">
              <a
                href="https://www.instagram.com/tagomagospaceritual/"
                target="blank"
              >
                <FaInstagram />
              </a>
            </div>
          </nav>
        </Fade>
      )}
    </div>
  )
}

export default MobileNav
