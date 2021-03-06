import * as THREE from "https://threejsfundamentals.org/threejs/resources/threejs/r125/build/three.module.js";
import { GUI } from "https://threejsfundamentals.org/threejs/../3rdparty/dat.gui.module.js";

import initLog from "./utils/initLog.js";

import InitialSetupper from "./classes/InitialSetupper.js";
import AstralBodyGeometry from "./classes/AstralBodyGeometry.js";
import SceneLighting from "./classes/SceneLighting.js";

import HelperElements from "./helpers/HelperElements.js";

function main() {
	initLog();

	const gui = new GUI();

	const canvas = document.querySelector("canvas#c");
	const setup = new InitialSetupper(canvas);

	const light = new SceneLighting().light;

	const sun = new AstralBodyGeometry({ emissive: 0xffff00 }).astralBody;
	const earth = new AstralBodyGeometry({
		color: 0x2233ff,
		emissive: 0x112244,
	}).astralBody;
	const moon = new AstralBodyGeometry({ color: 0x888888, emissive: 0x222222 })
		.astralBody;

	sun.scale.set(5, 5, 5);
	moon.scale.set(0.5, 0.5, 0.5);

	const solarSystem = new THREE.Object3D();
	const earthOrbit = new THREE.Object3D();
	const moonOrbit = new THREE.Object3D();

	earthOrbit.position.x = 10;
	moonOrbit.position.x = 2;

	const contentOfSolarSystem = [sun, earthOrbit];
	const contentOfEarthOrbit = [earth, moonOrbit];
	const contentOfMoonOrbit = [moon];

	solarSystem.add(...contentOfSolarSystem);
	earthOrbit.add(...contentOfEarthOrbit);
	moonOrbit.add(...contentOfMoonOrbit);

	const objectsOnScene = {
		sun,
		earth,
		solarSystem,
		earthOrbit,
		moon,
		moonOrbit,
	};
	// const objectsOnScene = [sun, earth, solarSystem, earthOrbit, moon, moonOrbit];
	setup.scene.add(light, solarSystem);

	Object.entries(objectsOnScene).map(([label, node]) => {
		let helper;
		if (label === "solarSystem") {
			helper = new HelperElements(node, 26);
		} else {
			helper = new HelperElements(node);
		}

		gui.add(helper, "visible").name(label);

		return helper._selectedNode;
	});
	// objectsOnScene.map((node) => new HelperElements(node)._selectedNode);

	function animate(timeElapsed) {
		timeElapsed /= 1000;

		Object.values(objectsOnScene).forEach(
			(obj) => (obj.rotation.y = timeElapsed)
		);

		setup.renderer.render(setup.scene, setup.camera);
		requestAnimationFrame(animate);
	}

	animate();
}
main();
