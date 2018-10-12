import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

// Keys QWER/ASDF/ZXCV
const beatsList = [
    {
        keyCode: 81,
        keyPressed: 'Q',
        src: ''
    },
    {
        keyCode: 87,
        keyPressed: 'W',
        src: ''
    },
    {
        keyCode: 69,
        keyPressed: 'E',
        src: ''
    },
    {
        keyCode: 82,
        keyPressed: 'R',
        src: ''
    },
    {
        keyCode: 65,
        keyPressed: 'A',
        src: ''
    },
    {
        keyCode: 83,
        keyPressed: 'S',
        src: ''
    },
    {
        keyCode: 68,
        keyPressed: 'D',
        src: ''
    },
    {
        keyCode: 70,
        keyPressed: 'F',
        src: ''
    },
    {
        keyCode: 90,
        keyPressed: 'Z',
        src: ''
    },
    {
        keyCode: 88,
        keyPressed: 'X',
        src: ''
    },
    {
        keyCode: 67,
        keyPressed: 'C',
        src: ''
    },
    {
        keyCode: 86,
        keyPressed: 'V',
        src: ''
    },

];

class DrumPad extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    handleKeyPress(e) {
        if (e.keyCode === this.props.keyCode) {
            // call play function
        }
    }
    componentDidMount() {
        document.addEventListener('keyPressed', this.handleKeyPress);
    }
    render() {
        return (
            <div className="drum-pad">

            </div>
        )
    }
}

// class keyPad extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//
//         }
//     }
//     render() {
//         return (
//             <div>
//             </div>
//         )
//     }
// }

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: '',
            keypad: ''
        }
    }
    // PLAY FUNCTION HERE
    render() {
        return (
            <div id="drum-machine">
                <keyPad/>
                <div className='padContainer'>
                    { beatsList.map((e)=> {
                        return <DrumPad keyPressed={e.key} src={e.src} keyCode={e.keyCode}/>
                    })}
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();