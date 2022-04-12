import './App.css';
import Home from "./components/Home";
import About from './components/About';
import NavbarComp from './components/NavbarComp';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavbarComp/>
      <Home/>
    </div>
  );
}

// //Form with useState import
// import { useState } from 'react';

// export default function Form({form, setForm}) {
    
//   function handleChange(event) {
//       setForm({
//           ...form, [event.target.name] : event.target.value
//       }) 
//   }
//       return (
//           <form>
//               <div>
//                   <input type="radio" id="cardio" value="Cardio Workout" name="select" onChange={handleChange}/>
//                       <label htmlFor="cardio">Cardio <FontAwesomeIcon icon={faHeartPulse}></FontAwesomeIcon></label>
//               </div>
//           </form>
//           )
//         }

// //Change in the App.js

// function App() {
//   const [form, setForm] = useState({
//     select: "",
//   });

//   return (
//     <div className="App">
//       <Navbar />
//       <img className= "home-image" src={image} alt="Credit: Photo by Karolina Grabowska from Pexels" />
//       {form.select ? null : <Home />}
//       <Form form={form} setForm={setForm} />
//       {form.select === "Cardio Workout" ? <Cardio /> : null}
//       {form.select === "Strength Training" ? <Strength /> : null}
//     </div>
//   );
// }

export default App;
