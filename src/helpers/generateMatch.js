import { generateOdds } from './helpers';
import { v4 as uuidv4 } from 'uuid';

const generateMatch = (sportsData) => {
  const sports = []; 
  
  for (let [key, value] of Object.entries(sportsData)) {
    sports.push(key);
  }
  
  //Select Random Sport
  let randomNum = Math.floor(Math.random()*(sports.length));
  let matchSport = sports[randomNum];
  // console.log(randomNum);
  // console.log(matchSport);

  //Select Random League in selected sport
  let leagues = []
  for (let [key, value] of Object.entries(sportsData[matchSport].leagues)) {
    leagues.push(key);
  }
  
  // console.log(leagues);
  randomNum = Math.floor(Math.random()*(leagues.length));
  let matchLeague = leagues[randomNum];
  // console.log(randomNum);
  // console.log(league);

  //Select Random Opponents
  let teams = [];
  for (let [key, value] of Object.entries(sportsData[matchSport].leagues[matchLeague].teams)) {
    teams.push(key);
  }
  // console.log(teams);
  let rand1, rand2;

  while (rand1 === rand2) {
    rand1 = Math.floor(Math.random()*(teams.length));
    rand2 = Math.floor(Math.random()*(teams.length));
    // console.log(rand1, rand2);
  } 

  let home = teams[rand1];
  let away = teams[rand2];
  
  // console.log(home, "v", away);

  let homeData = sportsData[matchSport].leagues[matchLeague].teams[home];
  let awayData = sportsData[matchSport].leagues[matchLeague].teams[away];

  // console.log(homeData, awayData);

  let odds = generateOdds(homeData, awayData);

  let match = {
    sport: matchSport, 
    league: matchLeague,
    matchId: uuidv4(),
    start_time: new Date("2020-03-11T12:00:00Z"),
    home_team: home,
    away_team: away,
    home_odd: odds.home_odd,
    away_odd: odds.away_odd,
  }

  return {
    sport: matchSport, 
    league: matchLeague, 
    match: match, 
  }

}

export default generateMatch;