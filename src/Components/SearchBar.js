import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <div id="searchBar">
        <h3 id="searchBarText">Pokedex</h3>
        <input
          type="search"
          placeholder="Type Here"
          value={this.props.input}
          ƒonChange={(e) => this.props.searchInput(e.target.value)}
        />
      </div>
    );
  }
}
export default SearchBar;
