import { useState } from 'react';
import {
    parseCSV,
    validatePlayersData,
    validateTeamsData,
    validateMatchesData,
    validateRecordsData,
} from '../../utils/validators';

import './FileParserComponent.css';

// eslint-disable-next-line react/prop-types
const FileParserComponent = ({ handleData, isDataHandeled }) => {
    const [players, setPlayers] = useState([]);
    const [teams, setTeams] = useState([]);
    const [matches, setMatches] = useState([]);
    const [records, setRecords] = useState([]);

    if (
        players.length > 0 &&
        teams.length > 0 &&
        matches.length > 0 &&
        records.length > 0 &&
        !isDataHandeled
    ) {
        handleData({
            players,
            teams,
            matches,
            records,
        });
    }

    const handleFileUpload = (event, type) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            const text = e.target.result;
            const parsedData = parseCSV(text);

            switch (type) {
                case 'players':
                    if (validatePlayersData(parsedData)) {
                        setPlayers(parsedData);
                    } else {
                        window.alert('Invalid players data');
                    }
                    break;
                case 'teams':
                    if (validateTeamsData(parsedData)) {
                        setTeams(parsedData);
                    } else {
                        window.alert('Invalid teams data');
                    }
                    break;
                case 'matches':
                    if (validateMatchesData(parsedData)) {
                        setMatches(parsedData);
                    } else {
                        window.alert('Invalid matches data');
                    }
                    break;
                case 'records':
                    if (validateRecordsData(parsedData)) {
                        setRecords(parsedData);
                    } else {
                        window.alert('Invalid records data');
                    }
                    break;
                default:
                    window.alert('Unknown type');
            }
        };

        reader.readAsText(file);
    };

    return (
        <div className="files-wrapper">
            <h2>Upload CSV Files</h2>
            <label>Players: </label>
            <input
                type="file"
                accept=".csv"
                onChange={(event) => handleFileUpload(event, 'players')}
                placeholder="Upload Players CSV"
            />

            <label>Teams: </label>
            <input
                type="file"
                accept=".csv"
                onChange={(event) => handleFileUpload(event, 'teams')}
                placeholder="Upload Teams CSV"
            />

            <label>Matches: </label>
            <input
                type="file"
                accept=".csv"
                onChange={(event) => handleFileUpload(event, 'matches')}
                placeholder="Upload Matches CSV"
            />

            <label>Records: </label>
            <input
                type="file"
                accept=".csv"
                onChange={(event) => handleFileUpload(event, 'records')}
                placeholder="Upload Records CSV"
            />
        </div>
    );
};

export default FileParserComponent;
