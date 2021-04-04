import * as THREE from "https://threejsfundamentals.org/threejs/resources/threejs/r125/build/three.module.js";

import initLog from "./utils/initLog.js";

import InitialSetupper from "./classes/InitialSetupper.js";
import AstralBodyGeometry from "./classes/AstralBodyGeometry.js";
import SceneLighting from "./classes/SceneLighting.js";

function main() {
	initLog();

	const canvas = document.querySelector("canvas#c");
	const setup = new InitialSetupper(canvas);

	const light = new SceneLighting().light;

	const sun = new AstralBodyGeometry({ emissive: 0xffff00 }).astralBody;
	const earth = new AstralBodyGeometry({
		color: 0x2233ff,
		emissive: 0x112244,
	}).astralBody;

	sun.scale.set(5, 5, 5);
	earth.position.x = 10;
    
    const solarSystem = new THREE.Object3D();
		const contentOfSolarSystem = [sun, earth];
		solarSystem.add(...contentOfSolarSystem);
    
	const objectsOnScene = [sun, earth, solarSystem];
	setup.scene.add(light, solarSystem);

	function animate(timeElapsed) {
		timeElapsed /= 1000;

		objectsOnScene.forEach((obj) => (obj.rotation.y = timeElapsed));

		setup.renderer.render(setup.scene, setup.camera);
		requestAnimationFrame(animate);
	}

	animate();
}
main();
