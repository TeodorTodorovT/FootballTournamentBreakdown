import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Details from './components/Details/Details';
import Header from './components/Header/Header';
import Results from './components/Results/Results';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/details/:matchID" element={<Details />} />
                <Route path="/results/:searchQuery" element={<Results />} />
            </Routes>
        </>
    );
}

export default App;
