import * as THREE from "https://threejsfundamentals.org/threejs/resources/threejs/r125/build/three.module.js";

export default class {
	_RADIUS = 1;
	_WIDTH_SEGMENTS = 6;
	_HEIGHT_SEGMENTS = 6;

	constructor() {
		this.sphere = new THREE.SphereGeometry(
			this._RADIUS,
			this._WIDTH_SEGMENTS,
			this._HEIGHT_SEGMENTS
		);
	}
}
