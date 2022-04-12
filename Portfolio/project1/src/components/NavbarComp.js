import React, { Component } from 'react'
import Portfolio from './Portfolio'
import Resume from './Resume'
import About from './About'
import {Navbar,Nav,NavDropdown,Container} from 'react-bootstrap';import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default class NavbarComp extends Component {
  render() {
    return (
      <Router>
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
                <Nav.Link as={Link} to={"/resume"}>Resume</Nav.Link>
                <Nav.Link as={Link} to={"/about"}>About Me</Nav.Link>
                <NavDropdown title="Portfolio" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Fitmix</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Project 2</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div>
        <Routes>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/resume" element={<Resume/>}/>
          <Route exact path="/portfolio" element={<Portfolio/>}/>
        </Routes>
      </div>
      </Router>
    )
  }
}


// function Navbar() {
//   return (
//     <div>

      
//         <nav class="navbar navbar-expand-lg navbar-light bg-light">
//   <div class="container-fluid">
//     {/* <a class="navbar-brand" href="#">Navbar</a> */}
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarNavDropdown">
//       <ul class="navbar-nav">
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="./Home">Home</a>
//         </li>
//         <li class="nav-item dropdown">
//           <a class="nav-link dropdown-toggle" href="./Portfolio" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Portfolio
//           </a>
//             <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
//                 <li><a class="dropdown-item" href="#">FitMix</a></li>
//                 <li><a class="dropdown-item" href="#">Project2</a></li>
//             </ul>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="./Resume">Resume</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="./About">About Me</a>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>
//     </div>
//   )
// }

// export default Navbar