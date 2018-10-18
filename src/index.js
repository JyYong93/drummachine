import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

// Keys QWE/ASD/ZXC
const beatsList = [
    {
        keyCode: 81,
        keyPressed: 'Q',
        id: 'b1',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
        keyCode: 87,
        keyPressed: 'W',
        id: 'b2',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
        keyCode: 69,
        keyPressed: 'E',
        id: 'b3',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
        keyCode: 65,
        keyPressed: 'A',
        id: 'b4',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
        keyCode: 83,
        keyPressed: 'S',
        id: 'b5',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
        keyCode: 68,
        keyPressed: 'D',
        id: 'b6',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
        keyCode: 90,
        keyPressed: 'Z',
        id: 'b7',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
        keyCode: 88,
        keyPressed: 'X',
        id: 'b8',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
        keyCode: 67,
        keyPressed: 'C',
        id: 'b9',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    }
];


class DrumPad extends React.Component {
    constructor(props) {
        super(props);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleKeyPress(e) {
        if (e.keyCode === this.props.keyCode) {
            // call play function
            this.props.play(this.props.value, this.props.id);
        }
    }

    componentDidMount() {
        document.addEventListener('keyPressed', this.handleKeyPress);
    }

    render() {
        return (
            <div className="drum-pad" id={this.props.id}
                 onClick={() => this.props.play(this.props.value, this.props.id)}>
                {this.props.value}
                <audio className='clip' id={this.props.value} src={this.props.src}/>
            </div>
        )
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: ''
        };
        this.playBeat = this.playBeat.bind(this);
    }

    playBeat = (val, id) => {
        const audio = document.getElementById(val);
        const button = document.getElementById(id);
        button.style.backgroundColor = 'cyan';
        setTimeout(() => {
            button.style.backgroundColor = 'lightblue';
        }, 150);
        audio.currentTime = 0;
        audio.play();
    };

    render() {
        return (
            <div id='drum-machine'>
                <div className='padWrapper'>
                    <p id="display">
                        {this.state.display}
                    </p>
                    {beatsList.map((item) => {
                        return <DrumPad play={this.playBeat} id={item.id}
                                        value={item.keyPressed} src={item.src} keyCode={item.keyCode}/>
                    })}
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));

serviceWorker.unregister();