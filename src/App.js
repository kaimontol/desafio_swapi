import React, {Component} from 'react';
import Pagination from './Pagination';
import List from './List';
import axios from 'axios';

let pageNum = 1;

class App extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      people: [],
    }
    this.getPeople = this.getPeople.bind(this);
  }
  getPeople(){
      return axios.get("https://swapi.dev/api/people/?page=")
    .then ((response) => {
      console.log(response.data.results);
      this.setState( { people: response.data.results } )
    })
  }

  componentDidMount(){
    this.getPeople()
  }
  render() {
    const {people} = this.state;
    return (
      <div className="App">
        <Pagination
         peoplePerPage={10}
         totalPeople={82}
         paginate={pageNum}/>
        <List people={people} />
      </div>
    );
  }
}

export default App;
