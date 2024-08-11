import { k } from "./kaplayCtx";
import { startScene } from "./game/start";
import { gameoverScene } from "./game/gameover";
import { gameScene } from "./game/game";
import { usernameScene } from "./game/username.ts"

k.loadFont("monogram", "/save-the-planet/fonts/monogram.ttf");
k.loadSound("hit", "/save-the-planet/sounds/impact.wav")
k.loadSound("explode", "/save-the-planet/sounds/lazerhit.wav")
k.loadSound("ingameAmbient", "/save-the-planet/sounds/ingameambient2.wav")
k.loadSprite("space", "/save-the-planet/sprites/space.png");
k.loadSprite("planet", "/save-the-planet/sprites/planet.png", {
	sliceX: 20,
	sliceY: 5,
	anims: {
		"turn": { from: 0, to: 99, speed: 10, loop: true }
	}
})
k.loadSprite("asteroid", "/save-the-planet/sprites/asteroid.png", {
	sliceX: 20,
	sliceY: 5,
	anims: {
		"roll": { from: 0, to: 99, speed: 20, loop: true }
	}
});
k.loadSprite("red-planet", "/save-the-planet/sprites/dry-planet.png", {
	sliceX: 20,
	sliceY: 5,
	anims: {
		"turn": { from: 0, to: 99, speed: 10, loop: true }
	}
})
k.loadSprite("explode", "/save-the-planet/sprites/ex.png", {
	sliceX: 20,
	sliceY: 1,
	anims: {
		"explode": { from: 0, to: 19, speed: 40, loop: false }
	}
});
k.loadSprite("sound", "/save-the-planet/sprites/icons.png", {
	sliceX: 10,
	sliceY: 9,
	anims: {
		default: { from: 40, to: 40 }
	}
});

usernameScene();
startScene();
gameScene();
gameoverScene();

// I don't know why but it works this way
const username = localStorage.getItem("username");
const first = (<HTMLButtonElement>document.getElementById("first"));
first.style.display = "none";

k.onLoad(() => {
	if (username) {
		const first = (<HTMLButtonElement>document.getElementById("first"));
		first.style.display = "none";
		k.go("start");
	} else {
		k.go("username");
		const first = (<HTMLInputElement>document.getElementById("first"));
		first.style.display = "flex";
	}
});
