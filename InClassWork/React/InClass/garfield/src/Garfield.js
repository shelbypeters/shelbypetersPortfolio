import FeelingList from './FeelingList';

const Garfield = () => {
    const theStyles = {fontSize: "24px"}
    return (
        <div className="theimage">
            <h1 className="name">Life</h1>
            <img src="https://i.imgur.com/F67Eq7J.jpeg"></img>
            <h3>How does he feel?</h3>
            <FeelingList />
        </div>
    );
}

export default Garfield;