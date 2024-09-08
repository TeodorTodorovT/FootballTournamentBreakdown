import { useParams } from 'react-router-dom';
import './Details.css';

const Details = () => {
    const { matchID } = useParams();
    const data = JSON.parse(localStorage.getItem('data'));
    const matchDetails = data.matches.find((match) => match.ID === matchID);
    const ATeam = data.teams.find((team) => team.ID === matchDetails.ATeamID);
    const BTeam = data.teams.find((team) => team.ID === matchDetails.BTeamID);
    const ATeamPlayers = data.players.filter(
        (player) => player.TeamID === ATeam.ID
    );
    const BTeamPlayers = data.players.filter(
        (player) => player.TeamID === BTeam.ID
    );

    // console.log(data);
    console.log(matchDetails);

    console.log(ATeam);
    console.log(BTeam);

    console.log(ATeamPlayers);
    console.log(BTeamPlayers);

    return (
        <div className="details-wrapper">
            <div className="date">
                <p>{matchDetails.Date}</p>
            </div>
            <div className="teams">
                <p>{ATeam.Name}</p>
                <p>{matchDetails.Score}</p>
                <p>{BTeam.Name}</p>
            </div>

            <div className="formations"></div>
            <div className="roasters">
                <div className="team-roaster">
                    <h2>{ATeam.Name} roaster:</h2>
                    <table>
                        <tr>
                            <th>No</th>
                            <th>Player</th>
                            <th>Pos.</th>
                        </tr>
                        {ATeamPlayers.slice(0, 11).map((player) => {
                            return (
                                <tr key={player.ID}>
                                    <td>{player.TeamNumber}</td>
                                    <td>{player.FullName}</td>
                                    <td>{player.Position}</td>
                                </tr>
                            );
                        })}
                    </table>
                </div>
                <div className="team-roaster">
                    <h2>{BTeam.Name} roaster:</h2>
                    <table>
                        <tr>
                            <th>No</th>
                            <th>Player</th>
                            <th>Pos.</th>
                        </tr>
                        {BTeamPlayers.slice(0, 11).map((player) => {
                            return (
                                <tr key={player.ID}>
                                    <td>{player.TeamNumber}</td>
                                    <td>{player.FullName}</td>
                                    <td>{player.Position}</td>
                                </tr>
                            );
                        })}
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Details;
