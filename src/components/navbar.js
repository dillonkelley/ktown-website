import React, { useState, useEffect } from "react"
import { window } from "browser-monads"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { FaInstagram, FaLinkedinIn } from "react-icons/fa"

import navbarStyle from "./navbar.module.css"

const Navbar = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const [isChecked, setIsChecked] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Logic to add :
  //if you click the same link in the mobile nav it toggles out of the nav menu

  const toggleNavDisplay = () => {
    return isChecked ? setIsChecked(false) : setIsChecked(true)
  }
  useEffect(() => {
    if (width < 700) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [width])

  const displayMobileNav = isChecked
    ? {
        display: "block",
      }
    : {
        display: "none",
      }
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "logosm" }) {
        childImageSharp {
          fixed(height: 100, width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <>
      <label
        htmlFor="toggle"
        onClick={toggleNavDisplay}
        className={navbarStyle.hamburger}
      >
        &#9776;
      </label>
      <input type="checkbox" className={navbarStyle.toggle} />
      <nav
        className={navbarStyle.sidebarMain}
        style={isMobile ? displayMobileNav : null}
      >
        <Link to="/">
          <Img
            fixed={data.file.childImageSharp.fixed}
            className={navbarStyle.logo}
          />
        </Link>

        <Link to="/macrame" activeClassName={navbarStyle.active}>
          macramé
        </Link>
        <Link to="/art" activeClassName={navbarStyle.active}>
          art
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
    </>
  )
}

export default Navbar
