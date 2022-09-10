import React from 'react'
import JournalList from '../../components/modals/journals/JournalList'
import TopNav from '../../components/navigation/TopNav'

async function getUserName() {
    const userName = document.querySelector('input').value
    try{
  
      const res = await fetch(`http://localhost:5000/api/users/${userName}`)
      const data = await res.json()
    
      console.log(data)
      document.querySelector('h3').innerText = (`Name: ${data.name}`)
    } catch(err) {
      console.log(err)
    }
  }

const Home = () => {

  return (
  <>
    <TopNav />
    <h2> My Health Journal</h2>
    <h3> Get users: </h3>
    <input type="text" placeholder='find user'></input>
    <button onClick={getUserName}>Find User</button>
    <JournalList />
</>
    
  )
}

export default Home