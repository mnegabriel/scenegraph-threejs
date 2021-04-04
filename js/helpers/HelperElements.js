import * as THREE from "https://threejsfundamentals.org/threejs/resources/threejs/r125/build/three.module.js";

export default class {
	constructor(selectedNode, units = 10) {
		this._selectedNode = selectedNode;
		this._units = units;

		this._setAxesIntoNode();
		this._setGridIntoNode();
		this.visible = false; // set visible method
	}

	_setAxesIntoNode() {
		const axes = new THREE.AxesHelper();
		axes.material.depthTest = false;
		axes.renderOrder = 2;
		this._selectedNode.add(axes);

		this.axes = axes;
	}

	_setGridIntoNode() {
		const grid = new THREE.GridHelper(this._units, this._units);
		grid.material.depthTest = false;
		grid.renderOrder = 1;
		this._selectedNode.add(grid);

		this.grid = grid;
	}

	get visible() {
		return this._visible;
	}

	set visible(TrueOrFalse) {
		this._visible = TrueOrFalse;
		this.axes.visible = TrueOrFalse;
		this.grid.visible = TrueOrFalse;
	}
}
