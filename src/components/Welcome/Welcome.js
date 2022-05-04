import React from 'react';
import './Welcome.css';

export default function Welcome() {
  return (
    <section className='welcome'>
      <div className='instructions'>
        <header>Description</header>
        <p>
         Create your MakeBetz account today then deposit Crypto like Bitcoin, ETH, SOL, USDC
        </p>
        <header>Matches</header>
        <p>
          Matches are closed 5 min before 
          the start time and all bets placed on matches are settled shortly after 
          the results have been finalized.
        </p>
        <header>Create your Account!</header>
        <p>
            Users need to register an account in order to place bets. Each new account
            is eligible for a Deposit Bonus of UP to $250! Once you have created an account, 
            you can log in, make a deposit and start placing your bets!
        </p>
    
        <p>
          To check the results of your bets, simply click on "Bet History", at the top of the 
          page to the right of your username. There you will find a list of all your previous bet results.
        </p>
      
        <p>Thanks for visiting MakeBetz!</p>
      </div>
    </section>
  );
};
