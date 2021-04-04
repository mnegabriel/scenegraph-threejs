import * as THREE from "https://threejsfundamentals.org/threejs/resources/threejs/r125/build/three.module.js";

export default class {
	_LIGHT_COLOR = 0xffffff;
	_LIGHT_INTENSITY = 3;
	constructor() {
		this.light = new THREE.PointLight(this._LIGHT_COLOR, this._LIGHT_INTENSITY);
	}
}
