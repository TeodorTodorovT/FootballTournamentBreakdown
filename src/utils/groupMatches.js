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



    // Correct order of the bracet - WIP / implement later
    // let correctOrderRounds = [];
    // correctOrderRounds.push(rounds[0])
    // for (let i = 1; i <= rounds.length; i++) {
    //     let round = rounds[i];
    //     let nextRound;
    //     if (rounds[i + 1]) {
    //         nextRound = rounds[i + 1];
    //     } else {
    //         break;
    //     }

    //     for(let i = 0; i <= round.length; i++){
    //       // console.log(round[i]);
    //       console.log();
    //       const winnerA = round.find(match => (match.ATeamID || match.BTeamID) === nextRound[i]?.ATeamID)
    //       const winnerB = round.find(match => (match.ATeamID || match.BTeamID) === nextRound[i]?.BTeamID)

    //       console.log(winnerA);
    //       console.log(winnerB);
          
          

    //       // correctOrderRounds.push(matches[winnerA.ID]);
    //       // correctOrderRounds.push(matches[winnerB.ID]);
          
    //     }

        
    // }


    

    return rounds;
}
