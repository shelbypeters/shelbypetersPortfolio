import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartPulse } from '@fortawesome/free-solid-svg-icons';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';

export default function Form({form, setForm}) {
    
    function handleChange(event) {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setForm({
            ...form, [event.target.name] : event.target.value
        }) 
    }
    // console.log(form)
        return (
            <form>
                <div>
                    <input type="radio" id="cardio" value="Cardio Workout" name="select" onChange={handleChange}/>
                        <label htmlFor="cardio">Cardio <FontAwesomeIcon icon={faHeartPulse}></FontAwesomeIcon></label>
                </div>
                <div>
                    <input type="radio" id="strength" value="Strength Training" name="select" onChange={handleChange}/>
                    <label htmlFor="strength">Strength Training <FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon>
                    </label>
                </div>
            </form>
        )
}
