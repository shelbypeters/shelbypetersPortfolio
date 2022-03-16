import ExerciseList from './ExerciseList';
import {useEffect, useState} from 'react'
import getRandom from '../getRandom';

function Cardio() {
    const [cardioWorkouts, setCardioWorkouts] = useState([]) 
    useEffect(()=> {
        fetch("https://exercisedb.p.rapidapi.com/exercises", {
        "method": "GET",
        "headers": {
        "x-rapidapi-host": "exercisedb.p.rapidapi.com",
        "x-rapidapi-key": "ee8952564emsh92c996d57eeb01cp189236jsn028b268f0da1"
        }
        })
        .then(response => {
            return response.json()
        })
        .then(data => {
            let cardio = data.filter(
                (element) => element.target === "cardiovascular system" 
                &&
                (element.equipment === "body weight" || element.equipment === "dumbbell")
            );
            // console.log(cardioWorkouts)
            let newArr = [];
            for (let i = 0; i < cardio.length; i++) {
              // this will push items from upper arr ramdomly
              newArr.push(cardio[getRandom(cardio)]);
            }
            console.log(newArr)
            setCardioWorkouts(newArr)
        })
        .catch(err => {
            console.error(err);
        });
    }, []) 
    return (
        <div>
            <ExerciseList exercises = {cardioWorkouts} limitCount = {20}/>
        </div>
    );
}
  
export default Cardio;