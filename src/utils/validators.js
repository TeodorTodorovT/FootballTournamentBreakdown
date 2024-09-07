function parseCSV(csvText) {
    console.log(csvText);
    
    const rows = csvText.trim().split('\n');
    const headers = rows[0].split(',');
    const data = rows.slice(1).map((row) => {
        const values = row.split(',');
        return headers.reduce((obj, header, index) => {
            obj[header.trim()] = values[index].trim();
            return obj;
        }, {});
    });
    return data;
}

function validatePlayersData(playersData) {
    return playersData.every((player) => {
        return (
            player.ID &&
            player.TeamNumber &&
            player.Position &&
            player.FullName &&
            player.TeamID
        );
    });
}

function validateTeamsData(teamsData) {
    return teamsData.every((team) => {
        return team.ID && team.Name && team.ManagerFullName && team.Group;
    });
}

function validateMatchesData(matchesData) {
    return matchesData.every((match) => {
        return (
            match.ID &&
            match.ATeamID &&
            match.BTeamID &&
            match.Date &&
            match.Score
        );
    });
}

function validateRecordsData(recordsData) {
    return recordsData.every((record) => {
        return (
            record.ID &&
            record.PlayerID &&
            record.MatchID &&
            record.fromMinutes &&
            (record.toMinutes || record.toMinutes === null)
        );
    });
}


// WIP - to be tested further
// function parseDate(dateString) {
//     const dateFormats = [
//         /\d{2}\/\d{2}\/\d{4}/, // DD/MM/YYYY or MM/DD/YYYY
//         /\d{4}-\d{2}-\d{2}/, // ISO format (YYYY-MM-DD)
//     ];

//     for (const format of dateFormats) {
//         if (format.test(dateString)) {
//             return new Date(dateString);
//         }
//     }

//     return null;
// }

export {
    parseCSV,
    validatePlayersData,
    validateTeamsData,
    validateMatchesData,
    validateRecordsData,
    // parseDate,
};
