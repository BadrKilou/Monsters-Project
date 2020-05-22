import React, { Component }  from 'react';
// import logo from './logo.svg';
import { CardList } from './components/card-list/card-list-components';
import './App.css';
import { SearchBox } from './components/search-box/search-box';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }
  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.setState({ monsters: users }))
  }
  render(){
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()))
    return(
      <div className= 'App'>
          <h1>Monsters Reloadex</h1>
          <SearchBox
           placeholder="search monsters"
           handleChange={e => {
            this.setState({ searchField: e.target.value })}}
          />
        
            
        <CardList monsters={filteredMonsters} />       
      </div>
    )
  }
}

export default App;
