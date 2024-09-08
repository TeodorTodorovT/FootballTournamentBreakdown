import './FormationComponent.css';

const FormationComponent = ({ players }) => {
    const playersByPosition = {
        FW: [],
        MF: [],
        DF: [],
        GK: [],
    };
    players.slice(0, 11).forEach((player) => {
        playersByPosition[player.Position].push(player);
    });

    return (
        <div className="football-pitch">
            <div className="FW">
                {playersByPosition['FW'].map((player) => {   
                    return(<div className="player" key={player.ID}>
                        <p>{player.FullName.split(' ').slice(-1)}</p>
                        <div className="point" />
                    </div>)
                })}
            </div>
            <div className="MF">
            {playersByPosition['MF'].map((player) => {   
                    return(<div className="player" key={player.ID}>
                        <p>{player.FullName.split(' ').slice(-1)}</p>
                        <div className="point" />
                    </div>)
                })}
            </div>
            <div className="DF">
            {playersByPosition['DF'].map((player) => {   
                    return(<div className="player" key={player.ID}>
                        <p>{player.FullName.split(' ').slice(-1)}</p>
                        <div className="point" />
                    </div>)
                })}
            </div>
            <div className="GK">
            {playersByPosition['GK'].map((player) => {   
                    return(<div className="player" key={player.ID}>
                        <p>{player.FullName.split(' ').slice(-1)}</p>
                        <div className="point" />
                    </div>)
                })}
            </div>
        </div>
    );
};

export default FormationComponent;
