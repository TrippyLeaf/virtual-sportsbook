import React from 'react';
import './Welcome.css';

export default function Welcome() {
  return (
    <section className='welcome'>
      <div className='instructions'>
      <h1>Join MakeBetz Now</h1>        
       
       <h5>Deposit Bonus - MakeBetz wil match your first deposit up to $300*</h5>
        <p>
        Terms & Conditions apply
        </p>
        <h5>Weekly, Monthly, Yearly leaderboards</h5>
        <p>
           Compete with friends on the leaderboards & win prizes        
         </p>
    
        <h5>MakeBetz Ballboards & Racepools</h5>
      
        <p>Buy a square on one of our MakeBetz Ballboards or grab your spot in a Racepool!</p>
      </div>
    </section>
  );
};
