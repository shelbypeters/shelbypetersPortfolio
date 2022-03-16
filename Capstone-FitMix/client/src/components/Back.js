import ExerciseList from './ExerciseList';
import {useEffect, useState} from 'react'
import getRandom from '../getRandom';

function Back() {
    const [backWorkouts, setBackWorkouts] = useState([]) 
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
            let backs = data.filter(
                (element) => element.bodyPart === "back"
                &&
                (element.equipment === "body weight" || element.equipment === "dumbbell")
            );
            let newArr = [];
            for (let i = 0; i < backs.length; i++) {
              // this will push items from upper arr ramdomly
              newArr.push(backs[getRandom(backs)]);
            }
            console.log(newArr)
            setBackWorkouts(newArr)
        })
        .catch(err => {
        console.error(err);
        });
        }, [])
        return (
            <div>
                <ExerciseList exercises = {backWorkouts} limitCount = {5}/>
            </div>
        );
};

export default Back;