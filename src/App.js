import React, { Component } from 'react';
import './stylesheets/App.css';
// Import Child Components
import SpellItem from './components/SpellItem.js';
import SpellDetails from './components/SpellDetails.js';
import SpellFilters from './components/SpellFilters.js';
import Header from './components/Header.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      winWidth: 0,
      winHeight: 0,
      mobile: false,
      filterLevelTerm: '',
      filterClassTerm: '',
      filterSchoolTerm: '',
      filterBookTerm: '',
      searchTerm: '',
      activeSpell: null
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
    this.setState({
      searchTerm: value
    });
  }
  // 1.0 LEVEL
  filterByLevel(e){
    console.log('Filter by Level: '+e);
    this.setState({
      filterLevelTerm: e
    });
  }
  // 2.0 CLASS
  filterByClass(e){
    console.log('Filter by Class: '+e);
    this.setState({
      filterClassTerm: e
    });
  }
  // 3.0 SCHOOL
  filterBySchool(e){
    console.log('Filter by School: '+e);
    this.setState({
      filterSchoolTerm: e
    });
  }
  // 4.0 BOOK
  filterByBook(e){
    console.log('Filter by Book: '+e);
    this.setState({
      filterBookTerm: e
    });
  }
  clearSearch(){
    this.setState({
      searchTerm: '',
      filterLevelTerm: '',
      filterClassTerm: '',
      filterSchoolTerm: '',
      filterBookTerm: ''
    });
  }
  randomSpell(e){
    var num = this.props.spellData.length;
    var rando = Math.floor(Math.random() * num) + 1;
    this.setState({ activeSpell: this.props.spellData[rando] });
  }
  renderNoSpells(spells){
    if(!spells.length){
      return(<li className="spell-item">No Spells Found</li>);
    }
  }
  render() {
    // app class for layout (mobile || desktop)
    var appClass = this.state.mobile ? 'app app-mobile' : 'app';
    // spell filtering...
    var runFilter = function(arr, term, property){
      // enter array of data, filter term, & property to filter by... iterate
      return arr.filter(function(item){
        return item[property].toLowerCase().indexOf(term.toLowerCase()) !== -1;
      });
    }
    var spells = this.props.spellData;
    spells = runFilter(spells, this.state.filterLevelTerm, 'level');
    spells = runFilter(spells, this.state.filterClassTerm, 'class');
    spells = runFilter(spells, this.state.filterSchoolTerm, 'school');
    spells = runFilter(spells, this.state.filterBookTerm, 'page');
    spells = runFilter(spells, this.state.searchTerm, 'name');

    console.log('# rendering: '+spells.length);

    return (
      <div className={appClass}>
        <Header randomSpell={this.randomSpell} />
        <div className="app-inner">
            <div className="col col-xs-12 col-sm-6 spell-list-wrap">
              <SpellFilters
                searchTerm={this.state.searchTerm}
                searchByName={this.searchByName}
                filterByLevel={this.filterByLevel}
                filterByClass={this.filterByClass}
                filterBySchool={this.filterBySchool}
                filterByBook={this.filterByBook}
                clearSearch={this.clearSearch} />
              <ul className="list-unstyled spell-list">
                { spells.map((item, i) =>
                  <SpellItem
                    key={i}
                    itemData={item}
                    index={i+1}
                    spellActivate={this.spellActivate}>
                  {item.name}
                  </SpellItem>
                )}
                {this.renderNoSpells(spells)}
              </ul>
            </div>
            <div className="col col-xs-12 col-sm-6">
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
