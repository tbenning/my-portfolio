import React from 'react'
import Link from 'gatsby-link'
import './header.css'

const Header = ({ siteTitle }) => (
  <div className="header">
    <div className="headerGroup">
      <div className="logo">
        <Link to="/">
          <img src="http://placehold.it/160x58" alt="logo"></img>
        </Link>
      </div>
    </div>
  </div>
)

export default Header
