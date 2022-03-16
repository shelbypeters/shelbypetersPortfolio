import ExerciseList from './ExerciseList';
import {useEffect, useState} from 'react'
import getRandom from '../getRandom';

function Upper() {
    const [upperWorkouts, setUpperWorkouts] = useState([]) 
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
        // console.log(response);
        })
        .then(data => {
            let uppers = data.filter(
                (element) => (element.bodyPart === "chest" || element.bodyPart === "lower arms" || element.bodyPart === "shoulders" || element.bodyPart === "upper arms")
                &&
                (element.equipment === "body weight" || element.equipment === "dumbbell")
            );
            let newArr = [];
            for (let i = 0; i < uppers.length; i++) {
              // this will push items from upper arr ramdomly
              newArr.push(uppers[getRandom(uppers)]);
            }
            console.log(newArr)
            setUpperWorkouts(newArr)
        })
        .catch(err => {
        console.error(err);
        });
        }, [])
        return (
            <div>
                <ExerciseList exercises = {upperWorkouts} limitCount = {5}/>
            </div>
        );
};

export default Upper;