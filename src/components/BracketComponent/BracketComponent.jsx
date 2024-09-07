import './BracketComponent.css'
import {groupMatches} from '../../utils/groupMatches'
import { getTeamName } from '../../utils/getTeamName';

const BracketComponent = ({ tournamentData }) => {
    const { matches, teams } = tournamentData;
    const groupedMatches = groupMatches(matches, teams)






    return (
      <div>
      <div className='bracket'>
        {groupedMatches.map((group, groupIndex) => {
          return (
            <div key={groupIndex} className="round">
              {group.map((match) => {
                return (
                  <div key={match.ID} className="match">
                    {getTeamName(match.ATeamID, teams)} vs{' '}
                    {getTeamName(match.BTeamID, teams)} - {match.Score}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
    );
};

export default BracketComponent;
