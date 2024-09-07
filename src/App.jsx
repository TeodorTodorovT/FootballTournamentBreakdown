import { useState } from 'react';
import './App.css';
import FileParserComponent from './components/FileParserComponent/FileParserComponent';
import BracketComponent from './components/BracketComponent/BracketComponent';

function App() {
    const [tournamentData, setTournamentData] = useState({});
    const [isDataHandeled, setIsDataHandeled] = useState(false);

    const handleData = (data) => {
        setTournamentData(data);
        setIsDataHandeled(true);
    };

    const handleReset = () => {
      setIsDataHandeled(false);
      setTournamentData({});
    }
    
    
    

    return (
        <div className="wrapper">
            <h1>Football Tournament Breakdown</h1>
            {isDataHandeled ? (
              <>
              <button onClick={handleReset}>Load New Data</button>
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

export default App;
