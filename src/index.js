import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

// Keys QWER/ASDF
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
        src: ''
    },
    {
        keyCode: 69,
        keyPressed: 'E',
        id: 'b3',
        src: ''
    },
    {
        keyCode: 82,
        keyPressed: 'R',
        id: 'b4',
        src: ''
    },
    {
        keyCode: 65,
        keyPressed: 'A',
        id: 'b5',
        src: ''
    },
    {
        keyCode: 83,
        keyPressed: 'S',
        id: 'b6',
        src: ''
    },
    {
        keyCode: 68,
        keyPressed: 'D',
        id: 'b7',
        src: ''
    },
    {
        keyCode: 70,
        keyPressed: 'F',
        id: 'b8',
        src: ''
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
                 onClick={() => this.props.play(this.props.value,this.props.id)}>
                {this.props.value}
                <audio id={this.props.value} src={this.props.src}/>
            </div>
        )
    }
}

class App extends React.Component{
    constructor(props){
        super(props);
        this.playBeat = this.playBeat.bind(this);
    }
    playBeat = (val,id) => {
        const audio = document.getElementById(val);
        const button = document.getElementById(id);
        audio.currentTime = 0;
        audio.play();
    }

    render(){
        return (
            <div id='drum-machine'>
                <div className='padWrapper'>
                    {beatsList.map((item)=>{
                        return <DrumPad play={this.playBeat} id={item.id}
                                        value={item.keyPressed} src={item.src} keyCode={item.keyCode}/>
                    })}
                </div>
            </div>
        );
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

serviceWorker.unregister();