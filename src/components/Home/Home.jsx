import { useState } from 'react';
import './Home.css';
import FileParserComponent from '../FileParserComponent/FileParserComponent';
import BracketComponent from '../BracketComponent/BracketComponent';

function Home() {
    const [tournamentData, setTournamentData] = useState(JSON.parse(localStorage.getItem('data')) || {});
    const [isDataHandeled, setIsDataHandeled] = useState(tournamentData ? true : false);

    console.log(tournamentData);
    console.log(isDataHandeled);
    
    

    const handleData = (data) => {
        setTournamentData(data);
        setIsDataHandeled(true);
        localStorage.setItem("data", JSON.stringify(data))
    };

    const handleReset = () => {
      setIsDataHandeled(false);
      setTournamentData({});
      localStorage.removeItem('data')
    }
    
    
    

    return (
        <div className="wrapper">
            {isDataHandeled ? (
              <>
              <button onClick={handleReset} className='load-new'>New</button>
              <BracketComponent tournamentData={tournamentData} />
              </>
                
            ) : (
                <FileParserComponent
                    handleData={handleData}
                    isDataHandeled={isDataHandeled}
                />
            )}
        </div>
    );
}

export default Home;
