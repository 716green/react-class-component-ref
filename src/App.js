import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

// React Component
class App extends Component {
  state = {
    people: [
      { id: '1', name: 'Sam', age: 28 },
      { id: '2', name: 'Erin', age: 29 },
      { id: '3', name: 'Stephanie', age: 28 },
    ],
    showPeople: true,
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.people.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.people[personIndex],
    };

    person.name = event.target.value;

    const people = [...this.state.people];
    people[personIndex] = person;
    this.setState({ people: people });
  };

  deletePersonHandler = (personIndex) => {
    let people = this.state.people;
    people.splice(personIndex, 1);
    this.setState(people);
  };

  togglePersonHandler = () => {
    let showPeople = !this.state.showPeople;
    this.setState({
      showPeople,
    });
  };

  render() {
    let people = <h4>Hidden</h4>;
    let allPeople = this.state.people;

    if (this.state.showPeople) {
      people = (
        <div>
          {allPeople.map((person, index) => {
            return (
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                index={index}
                // changed={this.nameChangedHandler}
                changed={(event) => this.nameChangedHandler(event, person.id)}
                click={() => this.deletePersonHandler(index)}
              />
            );
          })}
        </div>
      );
    }

    const btnStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    return (
      <div className="App">
        <h1>
          <span role="img" aria-label="people">
            🧔👩
          </span>{' '}
          List of People
        </h1>
        <button style={btnStyle} onClick={this.togglePersonHandler}>
          {this.state.showPeople ? 'Hide' : 'Show'}
        </button>

        <div className="people">{people}</div>
      </div>
    );
  }
}

export default App;
