import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = { term: '' };
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }

  render() {
    return (
      <div className="search-bar" style={{margin: "20px", textAlign: "center"}}>
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
          style = {{ width: "65%" }}
        />
      </div>
    );
  }
}

export default SearchBar;
