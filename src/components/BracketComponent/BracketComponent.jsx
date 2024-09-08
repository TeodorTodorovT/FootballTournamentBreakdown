import './BracketComponent.css';
import { groupMatches } from '../../utils/groupMatches';
import { getTeamName } from '../../utils/getTeamName';
import { groupMatchesByDate } from '../../utils/groupMatchesByDate';
import { useState } from 'react';
import MatchCardComponent from '../MatchCardComponent/MatchCardComponent';

const BracketComponent = ({ tournamentData }) => {
    const [isHidden, setIsHidden] = useState(true);

    const { matches, teams } = tournamentData;
    const groupedMatches = groupMatches(matches, teams);
    const groupeStage = groupedMatches.shift();

    const groupedMatchesByDate = groupMatchesByDate(groupeStage);

    const handleHide = () => {
        setIsHidden(!isHidden);
    };

    return (
        <div>
            <div className="groups-wrapper" hidden={isHidden}>
                <h2>Group Stages</h2>
                <div className="groups">
                    {Object.keys(groupedMatchesByDate).map((date) => (
                        <div key={date} className="date-group">
                            <h3>{date}</h3>
                            <div className="matches">
                                {groupedMatchesByDate[date].map((match) => (
                                    <MatchCardComponent
                                        key={match.ID}
                                        teamA={getTeamName(
                                            match.ATeamID,
                                            teams
                                        )}
                                        teamB={getTeamName(
                                            match.BTeamID,
                                            teams
                                        )}
                                        score={match.Score}
                                        matchID={match.ID}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="btn">
                <button className="groups-btn" onClick={handleHide}>
                    {isHidden ? 'Show' : 'Hide'} Groups
                </button>
            </div>
            <div className="bracket">
                {groupedMatches.map((group, groupIndex) => {
                    return (
                        <div key={groupIndex} className="round">
                            {group.map((match) => {
                                return (
                                    <MatchCardComponent
                                        key={match.ID}
                                        teamA={getTeamName(
                                            match.ATeamID,
                                            teams
                                        )}
                                        teamB={getTeamName(
                                            match.BTeamID,
                                            teams
                                        )}
                                        score={match.Score}
                                        matchID={match.ID}
                                    />
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
