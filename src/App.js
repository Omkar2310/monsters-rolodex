import './App.css';
import React,{ Component } from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/searchbox/searchbox.components';
class App extends Component{

  constructor(){
    super();
    this.state ={ 
      monsters: [],
      searchField:''
      
    };
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({monsters:users}));

  }

  render(){
    if(this.state.monsters)
    {
      const {monsters,searchField} = this.state;
      const filterMonsters = monsters.filter(monster =>
          monster.name.toLowerCase().includes(searchField.toLowerCase())
        );
      return (
        <div className='App'>
          <h1 className='headtitle'>Monster Rolodex</h1>
         <SearchBox
          placeholder="search Monsters"
          handleChange ={ e => this.setState({searchField:e.target.value},() => {
            console.log(this.state);
          })}
           ></SearchBox>   
          <CardList monsters={filterMonsters}/>
        </div>

      );
    }
  }
}


export default App;
