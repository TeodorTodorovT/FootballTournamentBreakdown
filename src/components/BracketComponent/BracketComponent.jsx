import './BracketComponent.css';
import { groupMatches } from '../../utils/groupMatches';
import { getTeamName } from '../../utils/getTeamName';
import { useState } from 'react';

const BracketComponent = ({ tournamentData }) => {
    const [isHidden, setIsHidden] = useState(true);

    const { matches, teams } = tournamentData;
    const groupedMatches = groupMatches(matches, teams);
    const groupeStage = groupedMatches.shift();

    function groupMatchesByDate(matches) {
        return matches.reduce((acc, match) => {
            const matchDate = match.Date;
            if (!acc[matchDate]) {
                acc[matchDate] = [];
            }
            acc[matchDate].push(match);
            return acc;
        }, {});
    }

    const groupedMatchesByDate = groupMatchesByDate(groupeStage);

    const handleHide = () => {
        setIsHidden(!isHidden);
    };

    console.log(isHidden);

    return (
        <div>
            <div className="groups-wrapper" hidden={isHidden}>
                <h2>Group Stages</h2>
                <div className="groups">
                    {Object.keys(groupedMatchesByDate).map((date) => (
                        <div key={date} className="date-group">
                            <h3>{date}</h3>
                            {groupedMatchesByDate[date].map((match) => (
                                <div key={match.ID} className="match">
                                    {getTeamName(match.ATeamID, teams)} vs{' '}
                                    {getTeamName(match.BTeamID, teams)} -{' '}
                                    {match.Score}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <button onClick={handleHide}>
                {isHidden ? 'Show' : 'Hide'} Groups
            </button>
            <div className="bracket">
                {groupedMatches.map((group, groupIndex) => {
                    return (
                        <div key={groupIndex} className="round">
                            {group.map((match) => {
                                return (
                                    <div key={match.ID} className="match">
                                        {getTeamName(match.ATeamID, teams)} vs{' '}
                                        {getTeamName(match.BTeamID, teams)} -{' '}
                                        {match.Score}
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default BracketComponent;
