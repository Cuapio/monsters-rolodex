import React from 'react';

import './App.css';

import { CardList } from './Components/card-list/card-list.component';
import { SearchBox } from './Components/search-box/search-box.component';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.setState({ monsters: users}))
  } 

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  render(){
    const { monsters, searchField } = this.state;
    let filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className='App'> 
        <h1>Monstes Rolodex</h1>
        <SearchBox 
          handleChange={this.handleChange}
          placeholder={'search monsters'}
        />
        <CardList monsters={filteredMonsters} />

      </div>
    );
  }
}

export default App;
