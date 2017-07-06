import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Box extends Component {
  render() {
    return (
      <p>I am a box</p>
    )
  }
}

class Widget extends Component {
  render() {
    return (
      <p>I am little Widget</p>
    )
  }
}

class Answer extends Component {
  render() {
    return (
      <div>
        <p>To get to the other side bruh.</p>
      </div>
    )
  }
}

class Joke extends Component {
  render() {
    return (
      <div>
        <p>Why did the chicken cross the road?</p>
        <Answer />
      </div>
    )
  }
}

// class Person extends Component {
//   render() {
//     return (
//       <div>
//         <h3>A person</h3>
//         <h5>{this.props.name}</h5>
//         <h5>{this.props.age}</h5>
//       </div>
//     )
//   }
// }

let Person = ({name, age}) => (
  <div>
   <h2>A person</h2>
   <p>{name}</p>
   <p>{age}</p>
  </div>
)

class PeopleContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      people: [
        {name: 'bob', age: 40},
        {name: 'janet', age: 40},
        {name: 'summers', age: 10},
      ],
    }

    // You must reassign this.handleClick to the 'this' of the instance like below, otherwise you need to bind in EACH button/element that calls the fn
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    console.log('Clicked me');
    this.setState({
      people: [...this.state.people, {name: 'Meg', age: 60}]
    })
  }

  render() {
    let people = this.state.people.map(person => <Person name={person.name} age={person.age} />)
      return (
        <div>
          {people}
          <button onClick={this.handleClick}>Click me!</button>
        </div>
      )
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <h1>Best refactored site evar</h1>
        <PeopleContainer />
      </div>
    )
  }

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     people: [
  //       {name: 'Bob', age: 50},
  //       {name: 'Sam', age: 30},
  //       {name: 'Bethany', age: 20},
  //     ],
  //     title: 'Best Site Evar!',
  //   }
  // }
  //
  // render() {
  //   console.log('This is the state', this.state);
  //   let people = this.state.people.map(person => {
  //     return (
  //       <Person name={person.name} age={person.age} />
  //     )
  //   })
  //   // Alternate way to express above people array
  //   // let people = this.state.people.map(person => <Person name={person.name} age={person.age} />)
  //   console.log('These are the people', people);

  //   return (
  //     <div>
  //       <div>
  //         <h1>{this.state.title}</h1>
  //         <Widget />
  //         <Box />
  //         <Joke />
  //       </div>
  //       <div>
  //         {people}
  //       </div>
  //     </div>
  //   )
  // }

  // render() {
  //   return (
  //     <div className="App">
  //       <div className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <h2>Welcome to React</h2>
  //       </div>
  //       <p className="App-intro">
  //         To get started, edit <code>src/App.js</code> and save to reload.
  //       </p>
  //     </div>
  //   );
  // }
}

export default App;
