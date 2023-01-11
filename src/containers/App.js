import SearchBar from "../components/SearchBar.js";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState({ robots: users });
      });
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filtterRobot = this.state.robots.filter((robots) => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className="tc">
        <h1>Robo Friends</h1>
        <SearchBar searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filtterRobot} />
        </Scroll>
      </div>
    );
  }
}

export default App;
