export const getTeamName = (teamID, teams) => {
    const team = teams.find((t) => t.ID === teamID);
    return team ? team.Name : 'Unknown Team';
};