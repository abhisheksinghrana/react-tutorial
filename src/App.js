import React, { Component } from 'react';
import Table from './components/Table';
import Form from './components/Form';

export default class App extends Component {
  state = {
    characters: []
  };

  removeCharacter = index => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      })
    });
  };

  handleSubmit = character => {
    this.setState({ characters: [...this.state.characters, character] });
  };

  render() {
    return (
      <div className="container">
        <Table
          characterData={this.state.characters}
          removeCharacter={this.removeCharacter}
        />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}
