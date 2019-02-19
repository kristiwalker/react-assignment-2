/* jshint esversion: 6 */

import React, {Component} from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';


class App extends Component {
    state = {
        inputText: ''
    }

    inputChangedHandler = (event) => {
        this.setState({
            inputText: event.target.value,
        })
    }

    deleteCharHandler = (i) => {
        const chars = this.state.inputText.split('');
        chars.splice(i, 1);

        const updatedText = chars.join("")

        this.setState({inputText: updatedText});
    }

    render() {
        const charList = (
            <div>
                {this.state.inputText.split('').map((char, i) => {
                    return <Char
                        key={i}
                        text={char}
                        clicked={() => this.deleteCharHandler(i)}/>
                })}
            </div>
        );

        return (
            <div className="App">
                <input
                    type="text"
                    onChange={this.inputChangedHandler}
                    value={this.state.inputText} />
                <p>{this.state.textLength}</p>
                <Validation textLength={this.state.inputText.length} />
                {charList}
            </div>
        );
    }
}

export default App;
