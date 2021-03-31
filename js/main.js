import * as THREE from "https://threejsfundamentals.org/threejs/resources/threejs/r125/build/three.module.js";

import InitialSetupper from "./classes/InitialSetupper.js";
import initLog from "./utils/initLog.js";

initLog();

const canvas = document.querySelector("canvas#c");
const setup = new InitialSetupper(canvas);
