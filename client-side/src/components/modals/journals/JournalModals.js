import React from 'react'
import './JournalsList.css'

const JournalModals = ({cardTitle, cardDescription}) => {
  return (

    <div className="card bg-light-green dib br3 ma2 grow bw2 shadow-5" style={{width: "18rem", margin: "2rem"}} >
        <img src="..." className="card-img-top" alt="" /> 
        <div className="card-body">
            <h5 className="card-title">{cardTitle}</h5>
            <p className="card-text">{cardDescription}.</p>
            <button className="go-to-journal">Go to {cardTitle}</button>
        </div>  
    </div>
  )
}
 export default JournalModals