import { destroyAsteroid, hit, spawnAsteroid } from "./entities/asteroid";
import { makePlanet } from "./entities/planet";
import { updateHighscore } from "./entities/utils";
import { k } from "./kaplayCtx";
import { gameoverText } from "./ui/gameoverText";
import { makeHealthbar } from "./ui/healthbar";
import { makeHighScore } from "./ui/highScore";
import { makeRestartButton } from "./ui/restartButton";
import { makeScoreBoard } from "./ui/score";
import { makeWelcome } from "./ui/welcome";

let finalScore = 0;
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

k.scene("game", () => {
	k.play("ingameAmbient", {
		volume: 0.2,
		loop: true
	});

	const planet = makePlanet(k, "planet", (k.width() / 2), k.height() / 2, 1);
	const health = makeHealthbar(k, planet);
	const scoreBoard = makeScoreBoard(k, "monogram");
	const highscore = makeHighScore(k, "monogram");

	k.onCollide("asteroid", "planet", (asteroid, planet) => {
		hit(k, asteroid, planet, "hit");
	})

	k.onClick("asteroid", (asteroid) => {
		destroyAsteroid(k, asteroid, scoreBoard, "hit");
	})


	planet.on("death", () => {
		finalScore = scoreBoard.value;
		k.go("gameover");
	})

	spawnAsteroid(k, planet, "asteroid", "roll", () => scoreBoard.value);
	k.add([k.sprite("space", { width: k.width(), height: k.height() })]);
	k.add(health);
	k.add(scoreBoard);
	k.add(highscore)
	k.add(planet);
});

k.scene("gameover", () => {
	k.play("ingameAmbient", {
		volume: 0.2,
		loop: true
	});
	const planet = makePlanet(k, "red-planet", k.width() / 2, k.height() / 2, 0.6);
	const gameover = gameoverText(k, finalScore, "monogram");
	const restartButton = makeRestartButton(k, "monogram", "Restart");
	updateHighscore(finalScore);


	k.add(restartButton);
	k.add([k.sprite("space", { width: k.width(), height: k.height() })]);
	k.add(planet)
	k.add(gameover);

	restartButton.onClick(() => {
		k.go("game");
	})

});

k.scene("welcome", () => {
	k.play("ingameAmbient", {
		volume: 0.2,
		loop: true
	});
	const planet = makePlanet(k, "planet", k.width() / 2, k.height() / 2, 0.6);
	const welcome = makeWelcome(k, "monogram");

	k.add([k.sprite("space", { width: k.width(), height: k.height() })]);
	k.add(planet);
	k.add(welcome);

	k.onClick(() => {
		k.go("game");
	});
});

k.scene("first", () => {
	const planet = makePlanet(k, "planet", k.width() / 2, k.height() / 2, 0.4);
	k.add([k.sprite("space", { width: k.width(), height: k.height() })]);
	k.add(planet);
	// sound button disabled for now
	//	k.add([k.sprite("sound", {width: k.width() * 0.03, height: k.wsidth()*0.03, anim: "default"}), k.pos(k.width()-k.width()*0.03*1.3,0)]);
	const submitButton = (<HTMLButtonElement>document.getElementById("submit"));
	submitButton.addEventListener("click", () => {
		const username = (<HTMLButtonElement>document.getElementById("usernameInput")).value;
		localStorage.setItem("username", JSON.stringify(username));
		const first = (<HTMLButtonElement>document.getElementById("first"));
		first.style.display = "none";
		k.go("welcome");
	});
});

const username = localStorage.getItem("username");
if (username) {
	const first = (<HTMLButtonElement>document.getElementById("first"));
	first.style.display = "none";
	k.go("welcome");
} else {
	k.go("first");
	const first = (<HTMLInputElement>document.getElementById("first"));
	first.style.display = "flex";
}
