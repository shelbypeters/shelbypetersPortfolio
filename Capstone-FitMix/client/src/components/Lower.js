import ExerciseList from './ExerciseList';
import {useEffect, useState} from 'react'
import getRandom from '../getRandom';

function Lower() {
    const [lowerWorkouts, setLowerWorkouts] = useState([]) 
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
            let lowers = data.filter(
                (element) => (element.bodyPart === "upper legs" || element.bodyPart === "lower legs") 
                &&
                (element.equipment === "body weight" || element.equipment === "dumbbell")
            );
            // console.log(lowerWorkouts)
            let newArr = [];
            for (let i = 0; i < lowers.length; i++) {
              // this will push items from upper arr ramdomly
              newArr.push(lowers[getRandom(lowers)]);
            }
            console.log(newArr)
            setLowerWorkouts(newArr)
        })
        .catch(err => {
            console.error(err);
        });
    }, []) 
    return (
        
            <div>
                <ExerciseList exercises = {lowerWorkouts} limitCount = {5}/>
            </div>
    );
}
  
export default Lower;