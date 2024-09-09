function parseCSV(csvText) {
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


function parseDate(dateString) {
    const regexPatterns = {
      mmddyyyy: /\d{1,2}\/\d{1,2}\/\d{4}/, // MM/DD/YYYY or DD/MM/YYYY
      yyyymmdd: /\d{4}-\d{2}-\d{2}/, // ISO format YYYY-MM-DD
      ddmmyyyy: /\d{2}\.\d{2}\.\d{4}/, // DD.MM.YYYY
      textual: /\w+ \d{1,2}, \d{4}/, // June 14, 2024
      fullDay: /\w{3}, \d{1,2} \w{3} \d{4}/, // Fri, 14 Jun 2024
    };
  
    if (regexPatterns.mmddyyyy.test(dateString)) {
      const [part1, part2, year] = dateString.split('/');
      const month = part1 > 12 ? part2 : part1; // check if MM/DD or DD/MM
      const day = part1 > 12 ? part1 : part2; // check if MM/DD or DD/MM
      return new Date(`${year}-${month}-${day}`).toDateString().slice(0, 15);
    }
  
    if (regexPatterns.yyyymmdd.test(dateString)) {
      return new Date(dateString).toDateString().slice(0, 15);
    }

    if (regexPatterns.ddmmyyyy.test(dateString)) {
      const [day, month, year] = dateString.split('.');
      return new Date(`${year}-${month}-${day}`).toDateString().slice(0, 15);
    }
  
    if (regexPatterns.textual.test(dateString)) {
      return new Date(dateString).toDateString().slice(0, 15);
    }
  
    if (regexPatterns.fullDay.test(dateString)) {
      return new Date(dateString).toDateString().slice(0, 15);
    }
  
    return null;
  }

export {
    parseCSV,
    validatePlayersData,
    validateTeamsData,
    validateMatchesData,
    validateRecordsData,
    parseDate,
};
