import React from 'react';
import './Welcome.css';

export default function Welcome() {
  return (
    <section className='welcome'>
      <div className='instructions'>
      <div id="welcometext">Join MakeBetz Now</div>        
       
       <header>Deposit Bonus - MakeBetz wil match your first deposit up to $300*</header>
        <p>
        Terms & Conditions apply
        </p>
        <header>Weekly, Monthly, Yearly leaderboards</header>
        <h5>
           Compete with friends on the leaderboards & win prizes        
         </h5>
    
        <header>MakeBetz Ballboards & Racepools</header>
      
        <h5>Buy a square on one of our MakeBetz Ballboards or grab your spot in a Racepool!</h5>
      </div>
    </section>
  );
};
