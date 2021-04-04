import * as THREE from "https://threejsfundamentals.org/threejs/resources/threejs/r125/build/three.module.js";

export default class {
	_RADIUS = 1;
	_WIDTH_SEGMENTS = 6;
	_HEIGHT_SEGMENTS = 6;

	constructor(materialObject) {
		this._materialObject = materialObject

		this._executeCreation()
	}
	
	_executeCreation() {
		this._createPhongMaterial()
		this._createGeometry()
		this._createAstralBody()
	}
	
	_createPhongMaterial() {
		this.material = new THREE.MeshPhongMaterial(this._materialObject);
	}
	
	_createGeometry() {
		this.sphere = new THREE.SphereGeometry(
			this._RADIUS,
			this._WIDTH_SEGMENTS,
			this._HEIGHT_SEGMENTS
		);		
	}

	_createAstralBody() {
		this.astralBody = new THREE.Mesh(this.sphere, this.material);
	}
}
