import React from 'react';
import _ from 'lodash';

import { Game, Player } from '../classes';

import { ColorWheel, Life, SettingsPanel } from './';

const game = new Game({
  players: [
    new Player({ number: 2 }),
    new Player({ number : 1 })
  ]
});

const HomePage = () => {
  return (
    <div id='main_window'>
      { /*
      <div id='warning' className='layer'>
        <div className='box'>
          <p>Are you sure you want to reset the game?</p>
          <i className='fa fa-check fa-2x'></i>
          <i className='fa fa-times fa-2x'></i>
        </div>
      </div>

      <div id='game_over_screen' className='layer'>
        <div className='box'>
          <p className='message'>Message template</p>
          <button>Continue playing</button>
          <button>See results</button>
          <button>Start new game</button>
        </div>
      </div>

      <div id='dice' className='layer'>
        <div className='die player_2'>6</div>
        <div className='die player_1'>3</div>
      </div>

      <div id='token_list' className='layer'>
        <div className='list'>
          <h1>Choose Token<i className='fa fa-times'></i></h1>
          <ul></ul>
        </div>
        <div className='artworks'>
          <h1><i className='fa fa-arrow-left'></i>Choose Artwork<i className='fa fa-times'></i></h1>
          <div className='cards'></div>
        </div>
      </div>

      <div id='cards' className='clearfix'></div>
      */ }
      <SettingsPanel />

      <div id='counters'>
        {
          _.map(game.players, player => (
            <div key={player.number} className={`player player_${player.number}`}>
              <ColorWheel />
              <Life />
              <div className='other'>
                <div className='poison'>
                  <i className='minus fa fa-minus'></i>
                  <div className='count'></div>
                  <i className='plus fa fa-plus'></i>
                </div>
                <div className='commander'>
                  <i className='minus fa fa-minus'></i>
                  <div className='count'></div>
                  <i className='plus fa fa-plus'></i>
                </div>
              </div>
            </div>
          ))
        }
      </div>

    </div>
  );
};

export default HomePage;
