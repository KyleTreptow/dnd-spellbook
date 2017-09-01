import React, { Component } from 'react';
import logo from '../logo.svg';

class SpellDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    if(this.props.spellDetailData === null) {
      return (
        <div className="spell-details">
          <ul className="btn-row list-inline">
            <li><button className="btn btn-warning" onClick={() => { this.props.randomSpell() }} >
                <span className="glyphicon glyphicon-question-sign"></span>
              </button></li>
          </ul>
          <h2>
            <span className="icon"><img src={logo} className="app-logo" alt="logo" /></span>
            Select a Spell
          </h2>
          <p>Click a spell to view spell data, or grab a random spell from the spellbook.</p>
        </div>
      );
    } else {
      function createMarkup(html) { return {__html: html}; };
      var descData = this.props.spellDetailData.desc;
      return (
        <div className="spell-details">
          <ul className="btn-row list-inline">
            <li>
              <button className="btn btn-warning" onClick={() => { this.props.randomSpell() }} >
                <span className="glyphicon glyphicon-question-sign"></span>
              </button>
            </li>
            <li>
              <button className="btn btn-danger" onClick={() => { this.props.spellActivate(null) }} >
                <span className="glyphicon glyphicon-remove"></span>
              </button>
            </li>
          </ul>
          <h2>
            <span className="icon"><img src={logo} className="app-logo" alt="logo" /></span>
            {this.props.spellDetailData.name}
          </h2>
          <ul className="list-inline">
            <li><b>Level:</b> {this.props.spellDetailData.level}</li>
            <li className="pipe">|</li>
            <li><b>Page:</b> {this.props.spellDetailData.page}</li>
            <li className="pipe">|</li>
            <li><b>School:</b> {this.props.spellDetailData.school}</li>
          </ul>
          <ul className="list-inline">
            <li><b>Range:</b> {this.props.spellDetailData.range}</li>
            <li className="pipe">|</li>
            <li><b>Duration:</b> {this.props.spellDetailData.duration}</li>
          </ul>
          <ul className="list-inline">
            <li><b>Components:</b> {this.props.spellDetailData.components}</li>
            <li className="pipe">|</li>
            <li><b>Casting Time:</b> {this.props.spellDetailData.casting_time}</li>
          </ul>
          <ul className="list-inline">
            <li><b>Material:</b> {this.props.spellDetailData.material ? this.props.spellDetailData.material : 'none'}</li>
          </ul>
          <ul className="list-inline">
            <li><b>Class:</b> {this.props.spellDetailData.class}</li>
          </ul>
          <ul className="list-inline">
            <li><b>Concentration:</b> {this.props.spellDetailData.concentration}</li>
            <li className="pipe">|</li>
            <li><b>Ritual:</b> {this.props.spellDetailData.ritual}</li>
          </ul>
          <p dangerouslySetInnerHTML={createMarkup(descData)} />
        </div>
      );
    }
  }
}

export default SpellDetails;
