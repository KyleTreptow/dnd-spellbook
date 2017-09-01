import React, { Component } from 'react';

class SpellItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    var itemSchool = this.props.itemData.school.toLowerCase();
    var liClass = this.props.index % 2 === 0 ? 'spell-item '+itemSchool : 'spell-item alt '+itemSchool;
    return (
      <li className={liClass} data-index={this.props.index} data-school={itemSchool}>
          <b>{this.props.itemData.name + ' '}</b>
          ({this.props.itemData.level})
          <ul className="list-inline">
            <li><small>{this.props.itemData.school}</small></li>
            <li><small>|</small></li>
            <li><small>{this.props.itemData.class}</small></li>
            <li><small>|</small></li>
            <li><small>{this.props.itemData.page}</small></li>
          </ul>
          <button className="btn btn-primary" onClick={() => { this.props.spellActivate(this.props.itemData) }} >View Spell</button>
      </li>
    );
  }
}

export default SpellItem;
