import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Details from './components/Details/Details';

function App() {
    return (
        <>
            <h1>Football Tournament Breakdown</h1>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/details/:matchID" element={<Details />} />
            </Routes>
        </>
    );
}

export default App;
