import { useParams } from 'react-router-dom';
import MatchCardComponent from '../MatchCardComponent/MatchCardComponent';
import { getTeamName } from '../../utils/getTeamName';
import { groupMatchesByDate } from '../../utils/groupMatchesByDate';
import './Result.css';

const Results = () => {
    const { searchQuery } = useParams();
    

    const data = JSON.parse(localStorage.getItem('data'));
    const teams = data.teams;
    const matches = data.matches;

    const filteredTeams = teams.filter((team) =>
        team.Name.toLowerCase().includes(searchQuery.toLocaleLowerCase())
    );
    const filteredTeamsIDs = filteredTeams.map((team) => team.ID);

    const filteredMatches = matches.filter((match) => {
        if (filteredTeamsIDs.includes(match.ATeamID)) {
            return match;
        } else if (filteredTeamsIDs.includes(match.BTeamID)) {
            return match;
        }
    });

    const groupedMatches = groupMatchesByDate(filteredMatches);

    return (
        <div className="results-wrapper">
            {Object.keys(groupedMatches).length > 0 ? (
                <>
                    <h2>Results</h2>

                    <div className="results">
                        {Object.keys(groupedMatches).map((date) => (
                            <div key={date} className="date-group">
                                <h3>{date}</h3>
                                <div className="matches">
                                    {groupedMatches[date].map((match) => (
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
                </>
            ) : (
                <div className='no-results'>No Results</div>
            )}
        </div>
    );
};

export default Results;
