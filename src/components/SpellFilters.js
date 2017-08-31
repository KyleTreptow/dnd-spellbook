import React, { Component } from 'react';

class SpellFilters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      levelVal: 'Level',
      classVal: 'Class',
      schoolVal: 'School',
      bookVal: 'Book'
    };
  }
  updateLevelFilter(e){
    var index = e.target.selectedIndex;
    var optionElement = e.target.childNodes[index];
    var option =  optionElement.getAttribute('data-val');
    this.setState({
      levelVal: option
    }, () => this.props.filterByLevel(option));
  }
  updateClassFilter(e){
    var index = e.target.selectedIndex;
    var optionElement = e.target.childNodes[index];
    var option =  optionElement.getAttribute('data-val');
    this.setState({
      classVal: option
    }, () => this.props.filterByClass(option));
  }
  updateSchoolFilter(e){
    var index = e.target.selectedIndex;
    var optionElement = e.target.childNodes[index];
    var option =  optionElement.getAttribute('data-val');
    this.setState({
      schoolVal: option
    }, () => this.props.filterBySchool(option));
  }
  updateBookFilter(e){
    var index = e.target.selectedIndex;
    var optionElement = e.target.childNodes[index];
    var option =  optionElement.getAttribute('data-val');
    this.setState({
      bookVal: option
    }, () => this.props.filterByBook(option));
  }
  render() {
    return (
      <div className="spell-filters">
        {/* {Search} */}
        <div className="search-form-wrap">
          <form className="form-inline" id="search-form" onSubmit={e => { e.preventDefault(); }} autoComplete="off" >
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="form-title"
                name="title"
                placeholder="Search by Name"
                value={this.props.searchTerm}
                onChange={this.props.searchByName} />
            </div>
          </form>
          <div className="search-form-buttons">
            <button className="btn btn-clear" onClick={() => { this.props.clearSearch() }} >
              <span className="glyphicon glyphicon-remove"></span>
            </button>
          </div>
        </div>
        {/* {Filters} */}
        <ul className="list-inline">
          <li>
            <select className="form-control"
              onChange={ e => this.updateLevelFilter(e)}
              value={this.state.levelVal}
              id="level-select" >
              <option data-val="">Level</option>
              <option data-val="cantrip">0</option>
              <option data-val="1">1</option>
              <option data-val="2">2</option>
              <option data-val="3">3</option>
              <option data-val="4">4</option>
              <option data-val="5">5</option>
              <option data-val="6">6</option>
              <option data-val="7">7</option>
              <option data-val="8">8</option>
            </select>
          </li>
          <li>
            <select className="form-control"
              onChange={ e => this.updateClassFilter(e)}
              value={this.state.classVal}
              id="class-select" >
              <option data-val="">Class</option>
              <option data-val="bard">Bard</option>
              <option data-val="cleric">Cleric</option>
              <option data-val="druid">Druid</option>
              <option data-val="paladin">Paladin</option>
              <option data-val="ranger">Ranger</option>
              <option data-val="sorcerer">Sorcerer</option>
              <option data-val="warlock">Warlock</option>
              <option data-val="wizard">Wizard</option>
            </select>
          </li>
          <li>
            <select className="form-control"
              onChange={ e => this.updateSchoolFilter(e)}
              value={this.state.schoolVal}
              id="school-select" >
              <option data-val="">School</option>
              <option data-val="abjuration">Abjuration</option>
              <option data-val="conjuration">Conjuration</option>
              <option data-val="divination">Divination</option>
              <option data-val="enchantment">Enchantment </option>
              <option data-val="evocation">Evocation</option>
              <option data-val="illusion">Illusion</option>
              <option data-val="necromancy">Necromancy</option>
              <option data-val="transmutation">Transmutation</option>
            </select>
          </li>
          <li>
            <select className="form-control"
              onChange={ e => this.updateBookFilter(e)}
              value={this.state.bookVal}
              id="book-select" >
              <option data-val="">Book</option>
              <option data-val="phb">PHB</option>
              <option data-val="ee">EE</option>
              <option data-val="ua">UA</option>
              <option data-val="scag">SCAG</option>
              <option data-val="trot">TROT</option>
            </select>
          </li>
        </ul>
      </div>
    );
  }
}

export default SpellFilters;
