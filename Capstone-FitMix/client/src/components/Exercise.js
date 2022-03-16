const Exercise = (props) => {
    const {title, img, part, muscle, equipment} = props;

    return (
        <div className="exercise-card">
            <div className="exercise-card-image">
                <img src={img} alt={title} />
            </div>
            <div className="exercise-card-content">
                <h3 className="exercise-title">
                    {title}</h3>
                <h4>Target Muscle:</h4>
                <p className="muscle">{muscle}</p>
                <h4>Body Part:</h4>
                <p className="part">{part}</p>
                <h4>Equipment:</h4>
                <p className="equipment">{equipment}</p>
            </div>
        </div>
    );
}

export default Exercise;