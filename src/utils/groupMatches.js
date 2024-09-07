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
  
    return rounds;
  }