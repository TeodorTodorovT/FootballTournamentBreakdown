export function groupMatches(matches) {
    let rounds = [];
    let totalMatches = matches.length;

    const groupStageMatchesCount = totalMatches - 15;

    const groupStageMatches = matches.slice(0, groupStageMatchesCount);
    rounds.push(groupStageMatches);

    let remainingMatches = 15;
    let matchIndex = groupStageMatchesCount;

    while (remainingMatches > 1) {
        const numberOfMatches = remainingMatches / 2;
        const currentRound = [];

        for (let i = 0; i < numberOfMatches; i++) {
            if (matchIndex < matches.length) {
                currentRound.push(matches[matchIndex]);
                matchIndex++;
            }
        }

        rounds.push(currentRound);
        remainingMatches = remainingMatches / 2;
    }

    let correctOrderRounds = [];
    correctOrderRounds.push(rounds[0]); // Group stage

    for (let i = 1; i < rounds.length - 1; i++) {
        let round = rounds[i];
        let nextRound = rounds[i + 1];

        let reorderedRound = [];

        nextRound.forEach((nextMatch) => {
            const winnerA = round.find((match) => {
                return (
                    match.ATeamID === nextMatch.ATeamID ||
                    match.BTeamID === nextMatch.ATeamID
                );
            });

            const winnerB = round.find((match) => {
                return (
                    match.ATeamID === nextMatch.BTeamID ||
                    match.BTeamID === nextMatch.BTeamID
                );
            });

            if (winnerA && winnerB) {
                reorderedRound.push(winnerA);
                reorderedRound.push(winnerB);
            }
        });

        correctOrderRounds.push(reorderedRound);
    }

    const lastRound = rounds[rounds.length - 1];
    correctOrderRounds.push(lastRound);

    return correctOrderRounds.length > 0 ? correctOrderRounds : rounds;
}
