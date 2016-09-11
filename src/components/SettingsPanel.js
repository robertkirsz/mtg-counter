import React from 'react';

const SettingsPanel = () => {
  return (
    <div className="settings">
      <div className="icons">
        <i className="icon tokens" title="Tokens" /><i className="icon poison" title="Poison" /><i className="icon commander" title="Commander life counter" /><i className="icon fa fa-undo" title="Reset current game" /><button className="dice">Dice</button>
      </div>
      <i className="fa fa-cog" />
    </div>
  );
};

export default SettingsPanel;
