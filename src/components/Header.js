import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  clickOrb(){
    this.props.randomSpell();
    console.log('You clicked the Orb! Gods have mercy on you!');
  }
  render() {
    return (
      <header id="header">
        <ul className="list-inline">
          <li>Spellbook</li>
        </ul>
        <button id="orb" onClick={() => { this.clickOrb() }} >
          <div className="double-bounce1"></div>
          <div className="double-bounce2"></div>
          {/*  */}
        </button>
      </header>
    );
  }
}

export default Header;
