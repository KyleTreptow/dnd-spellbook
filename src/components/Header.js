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
      </header>
    );
  }
}

export default Header;
