import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header'
import PortfolioCard from '../components/portfolioCard'
import Toggle from 'react-toggle'
import 'react-toggle/style.css'
//https://github.com/aaronshaf/react-toggle
import staticdata from '../../staticdata.json'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <Header/>
      <div className="HeroGroup wrapper">
        <h1>Hello, I'm Tyler.<br />I like to design simple things.</h1>
        <Link to="/page-2/">Go to page 2</Link>
      </div>
        <div className="heroBottom">
          <svg width="2600" height="100%" viewBox="0 0 2600 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2600 150H0C400.86 53.3135 839.833 0 1300 0C1760.17 0 2199.14 53.3135 2600 150Z" fill="white"/>
          </svg>
      </div>
    </div>
    <div className="portfolioItems wrapper">
  
    <Toggle />
      
      <h2>Portfolio</h2>

      {staticdata.cells.map(cell => (
        <PortfolioCard
        title={cell.title}
        text={cell.timeline}
        image={cell.image}
        imageTitle={cell.company} />
      ))}
    </div>

  </div>

)

export default IndexPage
