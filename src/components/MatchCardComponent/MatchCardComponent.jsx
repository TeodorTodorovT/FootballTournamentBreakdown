import './MatchCardComponent.css';
import { Link } from 'react-router-dom';

const MatchCardComponent = ({ teamA, teamB, score, matchID }) => {
    const [scoreA, scoreB] = score.split('-');

    return (
        <Link to={`/details/${matchID}`} className='link'>
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
        </Link>
    );
};

export default MatchCardComponent;
