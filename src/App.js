/* jshint esversion: 6 */

import React, {Component} from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';


class App extends Component {
    state = {
        inputText: 'Write here'
    }

    inputChangedHandler = (event) => {
        this.setState({
            inputText: event.target.value,
            textLength: event.target.value.length,
            chars: [...event.target.value]
        })
    }

    deleteCharHandler = (i) => {
        const chars = [...this.state.chars];
        chars.splice(i, 1);
        
        const inputText = chars.join("")

        this.setState({
            inputText: inputText,
            textLength: inputText.length,
            chars: chars
        });
    }

    render() {
        let charList = null;

        if (this.state.chars) {
            charList = (
                <div>
                    {this.state.chars.map((char, i) => {
                        return <CharComponent
                            key={i}
                            text={char}
                            clicked={() => this.deleteCharHandler(i)}/>
                    })}
                </div>
            );
        }


        return (
            <div className="App">
                <input
                    onChange={this.inputChangedHandler}
                    value={this.state.inputText} />
                <p>{this.state.textLength}</p>
                <ValidationComponent textLength={this.state.textLength} />
                {charList}
            </div>
        );
    }
}

export default App;
