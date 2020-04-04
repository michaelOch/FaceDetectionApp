import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Clarifai from 'clarifai';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';

const app = new Clarifai.App({
    apiKey: 'caa752c956344396891785fb29bd78d9'
});

const particlesOptions = {
    particles: {
        number: {
            value: 150,
            density: {
                enable: true,
                value_area: 800
            }
        }
    }
}

class App extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             input: '',
             imageUrl: '',
             box: {}
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.onButtonDetect = this.onButtonDetect.bind(this);
        this.calculateFaceLocation = this.calculateFaceLocation.bind(this);
        this.displayFaceBox = this.displayFaceBox.bind(this);
    }

    calculateFaceLocation(data) {
        const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
        const image = document.querySelector('#inputImage');
        const width = Number(image.width);
        const height = Number(image.height);
        return {
            leftCol: clarifaiFace.left_col * width,
            topRow: clarifaiFace.top_row * height,
            rightCol: width - (clarifaiFace.right_col * width),
            bottomRow: height - (clarifaiFace.bottom_row * height)
        }
    }

    displayFaceBox(box) {
        console.log(box)
        this.setState({box: box});
    }

    onInputChange(event) {
        this.setState({input: event.target.value});
    }

    onButtonDetect() {
        this.setState({imageUrl: this.state.input});
        app.models
            .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
            .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
            .catch(err => console.log(err));
    }
    

    render() {
        return (
            <div className="container">
                <Particles className="particles" params={particlesOptions} />
                <Navigation />
                <Logo />
                <Rank />
                <ImageLinkForm onInputChange={this.onInputChange} onButtonDetect={this.onButtonDetect} />
                <FaceRecognition imageUrl={this.state.imageUrl} box={this.state.box} />
            </div>
          );
    }
}

export default App;