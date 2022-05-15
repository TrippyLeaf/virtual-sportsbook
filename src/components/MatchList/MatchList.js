import React, { useEffect, useState, useRef } from 'react';
import League from './League/League';
import { Link } from 'react-router-dom';
import './MatchList.css';
import MatchesApiService from '../../services/matches-api-service';

export default function MatchList({history}) {

  const [mobile_active, setMobile_active] = useState(false);
  const [error, setError] = useState(null);
  const [matches, setMatches] = useState({});

  const dropdownMenu = useRef(null);
  
  useEffect(() => {
    MatchesApiService.getMatches()
    .then(res => setMatches(res))
    .catch(e => setError('Unable to get match list at this time'));
  }, [history.location.pathname]) 

  function showMenu(event) {
    event.preventDefault();
    setMobile_active(true);
    return document.addEventListener('click', closeMenu);
  }

  function closeMenu(event) {
    if (dropdownMenu.current && !dropdownMenu.current.contains(event.target)) {
      setMobile_active(false);
      return document.removeEventListener('click', closeMenu);
    }

    if (event.target.className === 'match_a') {
      setMobile_active(false);
      return document.removeEventListener('click', closeMenu);
    }
  }

  function isEmpty(obj) {
    return JSON.stringify(obj) === '{}';
  }

    let leagues;

    if (!isEmpty(matches)) {
      leagues = Object.keys(matches)
        .map(league => 
          <league 
            closeMenu={closeMenu}
            key={leagues}
            league={league_id} 
            leagues={matches[match_id].leagues}
          />)
      } else leagues = 'No upcoming matches to display, check back later for updated match list'
     
    return(
      <>
        <button className='matchlist_burger menu_item' onClick={(event) => showMenu(event)}>Leagues</button>
        <section className={`match_list_sidebar ${mobile_active? 'mobile_active': ''}`}>
        {!error
          ? <>
              <div className='upcoming_link'><Link to={`/upcoming`}>Starting Soon</Link></div>
              <div className='match_list' ref={dropdownMenu}>{sports}</div>
            </>
          : <p>{error}</p>
        }
        </section>
      </>
    );
}
