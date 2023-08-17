import Header from './components/header'

import initialEmails from './data/emails'

import './styles/app.css'


// Added myself
import { useState } from 'react'
import { render } from '@testing-library/react'


function App() {
  // Use initialEmails for state
  console.log(initialEmails)

  const [emails, editEmails] = useState(initialEmails)
  

 
  // emails.forEach( email => {
  //   let unreadEmails = []
  //   if (initialEmails.read === true) {
  //     unreadEmails ++
  //   }
  //   }
    //counting the amount of read === true
    //if it's true ++ to usestate

  
  // )
  // for (let i = 0; i <= initialEmails.length; i++) {
  //   if (initialEmails.read === true) {
  //     let unread = 0
  //   unread ++
    
  // }
  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
            // onClick={() => {}}
          >
            <span className="label">Inbox</span>
            <span className="count">?</span>
          </li>
          <li
            className="item"
            // onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count">?</span>
          </li>
          
          <li className="item toggle">
            <label for="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={false}
              
              // onChange={() => {}}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">
        <ul>

          {emails.map((email, index) => 
          <li 
          key={index} 
          className= {`email ${email.read ? "read" : "unread"}`} >
  <div className="select">
    
	<input
	  className="select-checkbox"
	  type="checkbox"
    checked={email.read}/>
    
  </div>
  <div className="star">
    
	<input
	  className="star-checkbox"
	  type="checkbox"
	/>
  </div>
  <div className="sender">{email.sender}</div>
  <div className="title">{email.title}</div>
</li>)}

      </ul></main>
    </div>
  )
}

export default App
