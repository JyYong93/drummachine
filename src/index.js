import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

class drumPad extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    handleKeyPress(e) {
        console.log(e.keyCode);
        if (e.keyCode === this.props.keyCode) {
            this.props.play(this.props.value,this.props.audioID);
        }
    }
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
    }
    render() {
        return (
            <div className="drum-pad">

            </div>
        )
    }
}

class keyPad extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
            </div>
        )
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            power : false,
            display: '',
            keypad: ''
        }
    }

    render() {
        return (
            <div id="drum-machine">
                <keyPad/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();