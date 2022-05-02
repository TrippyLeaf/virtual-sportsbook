import React from 'react';
import './Welcome.css';

export default function Welcome() {
  return (
    <section className='welcome'>
      <div className='instructions'>
        <header>Description</header>
        <p>
          Deposit Crypto such as Bitcoin, Ethereum, Solana or USDC!. 
          Fast payouts and fair odds.
          Create your Betcoinz account today!
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
            is eligible for a Deposit Bonus of UP to $250. Once you have created an account, 
            you can log in and start placing your bets!
        </p>
    
        <p>
          To check the results of your bets, simply click on "Bet History", at the top of the 
          page to the right of your username. There you will find a list of all your previous bet results.
        </p>
        <header>Reload Balance</header>
        <p>
          Blown up your bankroll? Just click the "Deposit" button that will 
          appear where your balance used to be. Deposit more Crypto and your account will be reloaded in no time.
        </p>
        <p>Good Luck and thanks for checking Betcoinz out!</p>
      </div>
    </section>
  );
};
