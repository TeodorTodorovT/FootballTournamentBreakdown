import './MatchCardComponent.css'

const MatchCardComponent = ({ teamA, teamB, score }) => {
    const [scoreA, scoreB] = score.split('-');

    return (
        <div className="match">
            <div className="team">
                <p>{teamA}</p>
                <p>{scoreA}</p>
            </div>
            <div className="team">
                <p>{teamB}</p>
                <p>{scoreB}</p>
            </div>
        </div>
    );
};

export default MatchCardComponent;
