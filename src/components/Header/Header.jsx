import { Link } from 'react-router-dom';
import SearchBarComponent from '../SearchBarComponent/SearchBarComponent';
import './Header.css'

const Header = () => {
    const data = localStorage.getItem('data') || undefined;

    return (
        <div className='header'>
            <Link to={'/'}><h1>Football Tournament Breakdown</h1></Link>
            {data ? (<SearchBarComponent />) : null}
            
        </div>
    );
};

export default Header;
