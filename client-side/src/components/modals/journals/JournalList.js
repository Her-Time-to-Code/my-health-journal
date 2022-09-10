import React from 'react'
import JournalModals from './JournalModals'
import './JournalsList.css'

const JournalList = () => {

  return (
    <div className="container text-center">
    <div className="row">
    <h2>Choose your journal</h2>
        <div className="col">
        <JournalModals 
          cardTitle={"Mental Health Journal"} 
          cardDescription={"Play games to keep your mind sharp. Keep track of emotions, feelings, etc"}
          />
        
        </div>
        <div className="col ">
        <JournalModals cardTitle = {"Financial Health Journal"}/>
        </div>
        <div className="col">
        <JournalModals cardTitle = {"Physical Health Journal"}/>
        </div>
    </div>
</div>
  )
}

export default JournalList