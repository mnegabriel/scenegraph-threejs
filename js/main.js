import * as THREE from "https://threejsfundamentals.org/threejs/resources/threejs/r125/build/three.module.js";

import initLog from "./utils/initLog.js";

import InitialSetupper from "./classes/InitialSetupper.js";
import AstralBodyGeometry from "./classes/AstralBodyGeometry.js";
import SceneLighting from "./classes/SceneLighting.js";

function main() {
    initLog();
    
    const canvas = document.querySelector("canvas#c");
    const setup = new InitialSetupper(canvas);
    
    const astralBodyGeometry = new AstralBodyGeometry().sphere;
    
    const sumMaterial = new THREE.MeshPhongMaterial({ emissive: 0xFFFF00 });
    const sunMesh = new THREE.Mesh(astralBodyGeometry, sumMaterial);
    
    sunMesh.scale.set(5, 5, 5);
    
    const light = new SceneLighting().light;
    
    const objectsOnScene = [ sunMesh];    
    setup.scene.add(light,...objectsOnScene);    

    function animate(timeElapsed) {
        timeElapsed /= 1000

        sunMesh.rotation.y = timeElapsed

        setup.renderer.render(setup.scene, setup.camera)
        requestAnimationFrame(animate)
    }

    animate()
}
main()
