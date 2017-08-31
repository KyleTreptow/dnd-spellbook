import React, { Component } from 'react';

class SpellItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    var liClass = this.props.index % 2 === 0 ? 'spell-item' : 'spell-item alt';
    return (
      <li className={liClass} data-index={this.props.index}>
          {this.props.index+') '}
          <b>{this.props.itemData.name + ' '}</b>
          ({this.props.itemData.level})
          <button className="btn btn-primary" onClick={() => { this.props.spellActivate(this.props.itemData) }} >View Spell</button>
      </li>
    );
  }
}

export default SpellItem;
