import { oddsPairs } from "../store";

export const generateOdds = function(home, away) {
  let odds = {
    "home_odd": null,
    "away_odd": null
  }

  //Get home and away rankings
  const homeRank = home.ranking
  const awayRank = away.ranking

  //Calc difference in rankings/strength
  let teamDiff = Math.abs(Math.floor((homeRank - 1 - awayRank)));

  //Get odds pair for stregth difference
  let pair = oddsPairs[teamDiff]
  
  //Allocate correct odd to strongest team 
  if (homeRank < awayRank) {
    odds.home_odd = pair.fav
    odds.away_odd = pair.underDog
  } else {
    odds.home_odd = pair.underDog
    odds.away_odd = pair.fav
  }

  //Return home and away odds
  return odds
}

export const findMatch = (matches={}, matchId) => {
  const allMatches = []

  for (const sport in matches) {
    for (const league in matches[sport].leagues) {
      matches[sport].leagues[league].forEach(match => allMatches.push(match))
    }
  }
  
  for (let i = 0; i < allMatches.length-1; i++) {
    if (allMatches[i].matchId === matchId) return allMatches[i]
  }

  return null;
}