import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {

  persona = {
    nombre: 'Pepe', 
    edad: 21
  };

  mostrarPersona(persona) {
    // return '¡Hola! Soy ' + persona.nombre + ' y tengo'; 

    return `¡Hola! Soy ${persona.nombre} y tengo ${persona.edad} años`;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            ¡Hola, Mundo!
          </h1>
        </header>
        <p>
          { mostrarPersona(persona) }
        </p>
      </div>
    );

  }

}

export default App;
