import React from 'react'
import './portfolioCard.css'
import FileText from 'react-feather/dist/icons/file-text';
 

const PortfolioCard = props => (
    <div className="portfolioCard">
        <img src={props.image} alt={props.imageTitle} />
        <h3>{props.title}</h3>
        <p>{props.text}</p>
        <FileText />
    </div>
)

export default PortfolioCard