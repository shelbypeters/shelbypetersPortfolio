import "./App.css";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import Cardio from "./components/Cardio";
import Form from "./components/Form";
import Strength from "./components/Strength";
import Home from "./components/Home";
import image from "./components/image.jpg";

function App() {
  const [form, setForm] = useState({
    select: "",
  });

  return (
    <div className="App">
      <Navbar />
      <img className= "home-image" src={image} alt="Credit: Photo by Karolina Grabowska from Pexels" />
      {form.select ? null : <Home />}
      <Form form={form} setForm={setForm} />
      {form.select === "Cardio Workout" ? <Cardio /> : null}
      {form.select === "Strength Training" ? <Strength /> : null}
    </div>
  );
}
 
export default App;
