import React, { Component } from 'react';
import './stylesheets/App.css';
// Import Child Components
import SpellItem from './components/SpellItem.js';
import SpellDetails from './components/SpellDetails.js';
import SpellFilters from './components/SpellFilters.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      winWidth: 0,
      winHeight: 0,
      mobile: false,
      sort: 'alpha', // alpha, level...
      spellFilter: props.spellData,
      activeSpell: null,
      searchTerm: ''
    };
    this.spellActivate = this.spellActivate.bind(this);
    this.searchByName = this.searchByName.bind(this);
    this.filterByLevel = this.filterByLevel.bind(this);
    this.filterByClass = this.filterByClass.bind(this);
    this.filterBySchool = this.filterBySchool.bind(this);
    this.filterByBook = this.filterByBook.bind(this);
    this.randomSpell = this.randomSpell.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  updateLayout(){
    if(this.state.winWidth <= 767){
      this.setState({ mobile: true },
      () => console.log('mobile layout'));
    } else {
      this.setState({ mobile: false },
      () => console.log('desktop layout'));
    }
  }
  updateWindowDimensions() {
    this.setState({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight
    }, () => this.updateLayout());
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  spellActivate(info){
    this.setState({ activeSpell: info });
  }
  // 0.0 NAME SEARCH
  searchByName(e){
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
  // 1.0 LEVEL
  filterByLevel(e){
    console.log('Filter by Level: '+e);
    if( e === '*'){
      this.setState({ spellFilter: this.props.spellData });
    } else {
      var spells = this.props.spellData;
      var filteredSpells = spells.filter(function(spell){
        return spell.level.toLowerCase().indexOf(e.toLowerCase()) !== -1;
      });
      this.setState({ spellFilter: filteredSpells });
    }    
  }
  // 2.0 CLASS
  filterByClass(e){
    console.log('Filter by Class: '+e);
    var spells = this.props.spellData;
    var filteredSpells = spells.filter(function(spell){
      return spell.class.toLowerCase().indexOf(e.toLowerCase()) !== -1;
    });
    this.setState({
      spellFilter: filteredSpells
    });
  }
  // 3.0 SCHOOL
  filterBySchool(e){
    console.log('Filter by School: '+e);
    var spells = this.props.spellData;
    var filteredSpells = spells.filter(function(spell){
      return spell.school.toLowerCase().indexOf(e.toLowerCase()) !== -1;
    });
    this.setState({
      spellFilter: filteredSpells
    });
  }
  // 4.0 BOOK
  filterByBook(e){
    console.log('Filter by Book: '+e);
    var spells = this.props.spellData;
    var filteredSpells = spells.filter(function(spell){
      return spell.page.toLowerCase().indexOf(e.toLowerCase()) !== -1;
    });
    this.setState({
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
    var appClass = this.state.mobile ? 'app app-mobile' : 'app';
    return (
      <div className={appClass}>
        <div className="app-inner">
            <div className="col col-xs-12 col-sm-5 spell-list-wrap">
              <SpellFilters
                searchTerm={this.state.searchTerm}
                searchByName={this.searchByName}
                filterByLevel={this.filterByLevel}
                filterByClass={this.filterByClass}
                filterBySchool={this.filterBySchool}
                filterByBook={this.filterByBook}
                clearSearch={this.clearSearch} />
              <ul className="list-unstyled spell-list">
                { this.state.spellFilter.map((item, i) =>
                  <SpellItem
                    key={i}
                    itemData={item}
                    index={i+1}
                    spellActivate={this.spellActivate}>
                  {item.name}
                  </SpellItem>
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
    );
  }
}

export default App;
