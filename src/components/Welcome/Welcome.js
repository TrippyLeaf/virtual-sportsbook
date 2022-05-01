import React from 'react';
import './Welcome.css';

export default function Welcome() {
  return (
    <section className='welcome'>
      <div className='instructions'>
        <header>Description</header>
        <p>
          Deposit Crypto like BTC, ETH, SOL or USDC, make your picks, win. 
          Fast payouts and fair odds.
          Create your Betcoinz account today
        </p>
        <header>Matches</header>
        <p>
          All matches will be closed 5 min before 
          they have started and all bets placed on those matches are settled 10 mins after 
          the results have been finalized.
        </p>
        <header>Create your Account!</header>
        <p>
          Users need to register an account in order to place bets. Each new account
            is eligible for a Deposit Bonus of up to $250. Once you have created an account, 
            you can log in and place your bets!
        </p
    
        <p>
          To check the results of your bets, simply click on "Bet History", at the top of the 
          page to the right of your username. There you will find a list of all your previous bet results.
        </p>
        <header>Reload Balance</header>
        <p>
          Blown up your bankroll? Just click the "Deposit" button that will 
          appear where your balance used to be. Deposit Crypto and your account will be reloaded.
        </p>
        <p>Good Luck!</p>
      </div>
    </section>
  );
};
