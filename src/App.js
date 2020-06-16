import React from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import Rank from "./components/Rank/Rank";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import './App.css';

const app = new Clarifai.App({
	apiKey: 'c90f97e9f7684d219fa18723f497149a'
});

const particlesOptions = {

	particles: {
		number: {
			value: 50,
			density: {
				enable: true,
				value_area: 800
			}
		}
	}

}

class App extends React.Component {

	constructor() {
		super();
		this.state = {
			input: "",
			imageUrl: "",
			box: {}
		}
	}

	calcFaceLocation = (data) => {
		const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
		const image = document.getElementById("inputImage");
		const width = Number(image.width);
		const height = Number(image.height);
		return {
			leftCol: clarifaiFace.left_col * width,
			topRow: clarifaiFace.top_row * height,
			rightCol: width - (clarifaiFace.right_col * width),
			bottomRow: height - (clarifaiFace.bottom_row * height)
		};
	}

	displayFaceBox = (box) => {
		console.log(box);
		this.setState({box: box});
	}

	onInputChange = (event) => {
		this.setState({input: event.target.value});
	}

	onButtomSubmit = () => {
		this.setState({imageUrl: this.state.input});
		app.models
		.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
		.then((response) => this.displayFaceBox(this.calcFaceLocation(response)))
		.catch((err) => console.log(err));
	}

	render() {
		return (
			<div className="App">
				<Particles className="particles" params={particlesOptions}/>
				<Navigation/>
				<Logo/>
				<Rank/>
				<ImageLinkForm onInputChange={this.onInputChange} onButtomSubmit={this.onButtomSubmit}/>
				<FaceRecognition imageUrl={this.state.imageUrl} box={this.state.box}/>
			</div>
		);
	}

}

export default App;
