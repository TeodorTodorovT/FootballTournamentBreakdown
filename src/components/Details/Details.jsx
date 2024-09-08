import { useParams } from 'react-router-dom';
import './Details.css';
import TeamRoasterComponent from '../TeamRoasterComponent/TeamRoasterComponent';
import FormationComponent from '../FormationComponent/FormationComponent';

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

            <div className="formations">
                <FormationComponent players={ATeamPlayers}/>
                <FormationComponent players={BTeamPlayers}/>
            </div>
            <div className="roasters">
                <TeamRoasterComponent
                    ATeam={ATeam}
                    BTeam={BTeam}
                    ATeamPlayers={ATeamPlayers}
                    BTeamPlayers={BTeamPlayers}
                />
            </div>
        </div>
    );
};

export default Details;
