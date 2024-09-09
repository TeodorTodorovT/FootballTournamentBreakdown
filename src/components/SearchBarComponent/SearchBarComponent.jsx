
import { useState } from 'react'
import './SearchBarComponent.css'
import { Link } from 'react-router-dom';

const SearchBarComponent = () => {
    const [searchQuery, setSearchQuery] = useState('');

    console.log(searchQuery);
    

  return (
    <div className="search-bar">
        <form>
            <input type="text" placeholder="Search for a match" onChange={(e) => setSearchQuery(e.target.value)}></input>
            <Link to={`/results/${searchQuery === '' ? ' ' : searchQuery}`}><button></button></Link>
            
            
        </form>
    </div>
  )
}

export default SearchBarComponent