import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
        <div className="home">
         <p className="name">Shelby Peters</p>
      <img className="headshot" src="images/Headshot.jpeg" alt="Headshot"/>
     <div className="bio">
         <p>Web Developer.</p>
         <p>Project Manager.</p>
         <p>Puzzle Addict.</p>
     </div>
    
     <br/>
     <div className="skills">
         <h2 >Skills</h2>
         <ul>
             <li>Javascript</li>
             <li>HTML</li>
             <li>CSS/Bootstrap</li>
             <li>React</li>
             <li>EJS</li>
             <li>Node.js</li>
             <li>SQL</li>
             <li>MongoDB</li>
         </ul>
     </div>
     </div>
    )
  }
}
