import { k } from "./kaplayCtx";
import { startScene } from "./game/start";
import { gameoverScene } from "./game/gameover";
import { gameScene } from "./game/game";
import { usernameScene } from "./game/username.ts"

k.loadFont("monogram", "/fonts/monogram.ttf");
k.loadSound("hit", "/sounds/impact.wav")
k.loadSound("explode", "/sounds/lazerhit.wav")
k.loadSound("ingameAmbient", "/sounds/ingameambient2.wav")
k.loadSprite("space", "/sprites/space.png");
k.loadSprite("planet", "/sprites/planet.png", {
	sliceX: 20,
	sliceY: 5,
	anims: {
		"turn": { from: 0, to: 99, speed: 10, loop: true }
	}
})
k.loadSprite("asteroid", "/sprites/asteroid.png", {
	sliceX: 20,
	sliceY: 5,
	anims: {
		"roll": { from: 0, to: 99, speed: 20, loop: true }
	}
});
k.loadSprite("red-planet", "/sprites/dry-planet.png", {
	sliceX: 20,
	sliceY: 5,
	anims: {
		"turn": { from: 0, to: 99, speed: 10, loop: true }
	}
})
k.loadSprite("explode", "/sprites/ex.png", {
	sliceX: 20,
	sliceY: 1,
	anims: {
		"explode": { from: 0, to: 19, speed: 40, loop: false }
	}
});
k.loadSprite("sound", "/sprites/icons.png", {
	sliceX: 10,
	sliceY: 9,
	anims: {
		default: { from: 40, to: 40 }
	}
});

startScene();
gameScene();
gameoverScene();
usernameScene();

const first = (<HTMLButtonElement>document.getElementById("first"));
first.style.display = "none";

const username = localStorage.getItem("username");
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
})

