import React from 'react';

const SettingsPanel = () => {
  return (
    <div className='settings'>
      <div className='icons'>
        <i className='icon tokens' title='Tokens'></i><i className='icon poison' title='Poison'></i><i className='icon commander' title='Commander life counter'></i><i className='icon fa fa-undo' title='Reset current game'></i><button className='dice'>Dice</button>
      </div>
      <i className='fa fa-cog'></i>
    </div>
  );
};

export default SettingsPanel;
