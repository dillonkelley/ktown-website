import React from "react"
import { Link } from "gatsby"

import { FaInstagram } from "react-icons/fa"

import navbarStyle from "./navbar.module.css"

const SideNav = props => {
  return (
    <nav className={navbarStyle.sidebarMain} style={props.style}>
      <Link to="/">
        <img
          src="https://res.cloudinary.com/dgkwrjld1/image/upload/v1607533023/logo/transSun_frmqj6.jpg"
          className={navbarStyle.logo}
        />
      </Link>

      <Link to="/macrame" activeClassName={navbarStyle.active}>
        macrame
      </Link>
      <Link to="/art" activeClassName={navbarStyle.active}>
        fiber art
      </Link>
      <Link to="/graphicDesign" activeClassName={navbarStyle.active}>
        graphic design
      </Link>
      <Link to="/about" activeClassName={navbarStyle.active}>
        about
      </Link>
      <Link to="/contact" activeClassName={navbarStyle.active}>
        contact
      </Link>

      {/*Social Media ************** */}
      <div className={navbarStyle.icons} id="social-medias">
        <a
          href="https://www.instagram.com/swinginspathiphyllums/"
          target="blank"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  )
}

export default SideNav
