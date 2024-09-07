export function groupMatchesByDate(matches) {
    return matches.reduce((acc, match) => {
        const matchDate = match.Date;
        if (!acc[matchDate]) {
            acc[matchDate] = [];
        }
        acc[matchDate].push(match);
        return acc;
    }, {});
}