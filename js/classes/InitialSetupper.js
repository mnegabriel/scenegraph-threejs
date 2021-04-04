import * as THREE from "https://threejsfundamentals.org/threejs/resources/threejs/r125/build/three.module.js";

export default class {
	_FOV = 40; // Field of View in degrees
	_CLIPPING_PLANE_NEAR = 0.01;
	_CLIPPING_PLANE_FAR = 1000;

	constructor(canvasElement) {
		this._canvasElement = canvasElement;

		if (this._canvasIsTheRightDomElemet()) {
			this._startInitialSetup();
		} else {
			throw Error(
				"The input element is missing or is not a canvas DOM element"
			);
		}
	}

	_canvasIsTheRightDomElemet() {
		return (
			typeof this._canvasElement === "object" &&
			this._canvasElement.tagName &&
			this._canvasElement.tagName === "CANVAS"
		);
	}

	_startInitialSetup() {
		this.renderer = new THREE.WebGLRenderer({ canvas: this._canvasElement });
		this.scene = new THREE.Scene();
		this.camera = new THREE.PerspectiveCamera(...this._cameraConfigObject());

		this._repositionAndPointCamera();
		this._setRenderSizeAndCameraAspectRatio();
		this._addResizeEventListener();
	}

	_cameraConfigObject() {
		return [
			this._FOV,
			this._windowAspectRatio(),
			this._CLIPPING_PLANE_NEAR,
			this._CLIPPING_PLANE_FAR,
		];
	}

	_windowAspectRatio() {
		return window.innerWidth / window.innerHeight;
	}

	_setRenderSizeAndCameraAspectRatio() {
		this.renderer.setSize(window.innerWidth, window.innerHeight);
		this.camera.aspect = this._windowAspectRatio();

		this.camera.updateProjectionMatrix();
	}

	_addResizeEventListener() {
		window.addEventListener("resize", () =>
			this._setRenderSizeAndCameraAspectRatio()
		);
	}

	_repositionAndPointCamera() {
		this.camera.position.set(0, 50, 0);
		this.camera.up.set(0, 0, 1);
		this.camera.lookAt(0, 0, 0);
	}
}
