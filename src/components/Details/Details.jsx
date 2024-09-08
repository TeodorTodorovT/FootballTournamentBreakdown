import { useParams } from 'react-router-dom';

const Details = () => {

    const { matchID } = useParams();
  return (
    <div>Details for {matchID}</div>
  )
}

export default Details