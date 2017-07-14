import './css/common.css';
import Layer from './component/layer/layer.js';

const App = function (){
	const a = 1;
	console.log(Layer)
	console.log(a)
	var dom = document.getElementById("app");
	var layer = new Layer();
	dom.innerHTML = layer.tpl ;
}

new App()