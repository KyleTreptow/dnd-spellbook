import React, { Component } from 'react';
import './stylesheets/App.css';
// Import Child Components
import SpellItem from './components/SpellItem.js';
import SpellDetails from './components/SpellDetails.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spellFilter: props.spellData,
      activeSpell: null,
      searchTerm: ''
    };
    this.spellActivate = this.spellActivate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.randomSpell = this.randomSpell.bind(this);
  }
  spellActivate(info){
    this.setState({ activeSpell: info });
  }
  handleChange(e){
    const target = e.target;
    const value = target.value;
    var spells = this.props.spellData;
    var filteredSpells = spells.filter(function(spell){
      return spell.name.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    });
    this.setState({
      searchTerm: value,
      spellFilter: filteredSpells
    });
  }
  clearSearch(){
    this.setState({
      searchTerm: '',
      spellFilter: this.props.spellData
    });
  }
  randomSpell(e){
    var num = this.props.spellData.length;
    var rando = Math.floor(Math.random() * num) + 1;
    this.setState({ activeSpell: this.props.spellData[rando] });
  }
  render() {
    return (
      <div className="app">
        <div className="container-fluid main-content">
          <div className="row">
            <div className="col col-xs-12 col-sm-5 spell-list-wrap">
              <div className="search-input">
                <form className="form-inline" id="search-form" onSubmit={e => { e.preventDefault(); }} autoComplete="off" >
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="form-title"
                      name="title"
                      placeholder="Search by Name"
                      value={this.state.searchTerm}
                      onChange={this.handleChange} />
                      <button className="btn btn-danger" onClick={() => { this.clearSearch() }}>Clear Search</button>
                  </div>
                </form>
              </div>
              <ul className="list-unstyled spell-list">
                {this.state.spellFilter.map((item, i) =>
                  <SpellItem key={i} itemData={item} index={i+1} spellActivate={this.spellActivate}>{item.name}</SpellItem>
                )}
              </ul>
            </div>
            <div className="col col-xs-12 col-sm-7">
              <div className="well details-well">
                <SpellDetails
                  spellDetailData={this.state.activeSpell}
                  spellActivate={this.spellActivate}
                  randomSpell={this.randomSpell} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
