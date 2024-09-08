
const TeamRoasterComponent = ({ATeam, BTeam, ATeamPlayers, BTeamPlayers}) => {
  return (
    <>
    <div className="team-roaster">
    <h2>{ATeam.Name} roaster:</h2>
    <table>
        <thead>
            <tr>
                <th>No</th>
                <th>Player</th>
                <th>Pos.</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td colSpan={3} className='starters'>Starting Players</td>
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
            <tr>
                <td colSpan={3} className='starters'>Substitute Players</td>
            </tr>
            {ATeamPlayers.slice(11).map((player) => {
                return (
                    <tr key={player.ID}>
                        <td>{player.TeamNumber}</td>
                        <td>{player.FullName}</td>
                        <td>{player.Position}</td>
                    </tr>
                );
            })}
        </tbody>
    </table>
</div>
<div className="team-roaster">
    <h2>{BTeam.Name} roaster:</h2>
    <table>
        <thead>
            <tr>
                <th>No</th>
                <th>Player</th>
                <th>Pos.</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td colSpan={3} className='starters'>Starting Players</td>
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
            <tr>
                <td colSpan={3} className='starters'>Substitute Players</td>
            </tr>
            {BTeamPlayers.slice(11).map((player) => {
                return (
                    <tr key={player.ID}>
                        <td>{player.TeamNumber}</td>
                        <td>{player.FullName}</td>
                        <td>{player.Position}</td>
                    </tr>
                );
            })}
        </tbody>
    </table>
</div>

</>
  )
}

export default TeamRoasterComponent