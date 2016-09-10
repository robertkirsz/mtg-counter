import React from 'react';

const ColorWheel = () => {
  return (
    <div className='color-wheel'>
      <img className='white' data-mana='mana_white' src='img/ikony/white_mana.png' alt='Mana symbol' />
      <img className='blue' data-mana='mana_blue' src='img/ikony/blue_mana.png' alt='Mana symbol' />
      <img className='black' data-mana='mana_black' src='img/ikony/black_mana.png' alt='Mana symbol' />
      <img className='red' data-mana='mana_red' src='img/ikony/red_mana.png' alt='Mana symbol' />
      <img className='green' data-mana='mana_green' src='img/ikony/green_mana.png' alt='Mana symbol' />
    </div>
  );
};

export default ColorWheel;
