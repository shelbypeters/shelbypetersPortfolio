import Exercise from "./Exercise";
import PropTypes from 'prop-types'

const ExerciseList = (props) => {
    return (
        <div className="exercise-list">
            {props.exercises.map(
            (ex, index) =>
                index < props.limitCount && (
                    <Exercise 
                        key={index} 
                        img={ex.gifUrl} 
                        title={ex.name} 
                        part={ex.bodyPart} 
                        muscle={ex.target}
                        equipment={ex.equipment}
                    />
            ))}
        </div>
    )
}

 Exercise.propTypes = {
     title: PropTypes.string.isRequired,
     img: PropTypes.string.isRequired,
     part: PropTypes.string.isRequired,
     muscle: PropTypes.string.isRequired
 }

export default ExerciseList;