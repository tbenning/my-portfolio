import React from 'react'
import './portfolioCard.css'

const PortfolioCard = props => (
    <div className="portfolioCard">
        <img src={props.image} alt={props.imageTitle} />
        <h3>{props.title}</h3>
        <p>{props.text}</p>
    </div>
)

export default PortfolioCard