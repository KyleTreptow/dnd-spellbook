import React, { Component } from 'react';

class SpellFilters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      levelVal: 'Level',
      classVal: 'Class',
      schoolVal: 'School',
      bookVal: 'book'
    };
  }
  updateLevelFilter(e){
    var index = e.target.selectedIndex;
    var optionElement = e.target.childNodes[index]
    var option =  optionElement.getAttribute('data-val');
    this.setState({
      levelVal: option
    }, () => this.props.filterByLevel(option));
  }
  updateClassFilter(e){
    this.setState({
      classVal: e
    }, () => this.props.filterByClass(e));
  }
  updateSchoolFilter(e){
    this.setState({
      schoolVal: e
    }, () => this.props.filterBySchool(e));
  }
  updateBookFilter(e){
    this.setState({
      bookVal: e
    }, () => this.props.filterByBook(e));
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
              value={this.state.levelVal} >
              <option data-val="*">Level</option>
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
              onChange={ e => this.updateClassFilter(e.target.value)}
              value={this.state.classVal} >
              <option data-val="*">Class</option>
              <option>Bard</option>
              <option>Cleric</option>
              <option>Druid</option>
              <option>Paladin</option>
              <option>Ranger</option>
              <option>Sorcerer</option>
              <option>Warlock</option>
              <option>Wizard</option>
            </select>
          </li>
          <li>
            <select className="form-control"
              onChange={ e => this.updateSchoolFilter(e.target.value)}
              value={this.state.schoolVal} >
              <option data-val="*">School</option>
              <option>Abjuration</option>
              <option>Conjuration</option>
              <option>Divination</option>
              <option>Enchantment </option>
              <option>Evocation</option>
              <option>Illusion</option>
              <option>Necromancy</option>
              <option>Transmutation</option>
            </select>
          </li>
          <li>
            <select className="form-control"
              onChange={ e => this.updateBookFilter(e.target.value)}
              value={this.state.bookVal} >
              <option data-val="*">Book</option>
              <option>PHB</option>
              <option>EE</option>
              <option>UA</option>
              <option>SCAG</option>
              <option>TROT</option>
            </select>
          </li>
        </ul>
      </div>
    );
  }
}

export default SpellFilters;
