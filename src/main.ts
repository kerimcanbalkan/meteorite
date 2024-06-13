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
k.loadSprite("space", "/save-the-planet/sprites/space.png");
// k.loadSprite("asteroid", "/save-the-planet/sprites/animated_asteroid.png", {
// 	sliceX: 16,
// 	sliceY: 2,
// 	anims: {
// 		"roll": { from: 0, to: 31, speed: 5, loop: true }
// 	}
// });

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
		"roll": { from: 0, to: 99, speed: 10, loop: true }
	}
});

k.loadSprite("red-planet", "/save-the-planet/sprites/dry-planet.png", {
	sliceX: 20,
	sliceY: 5,
	anims: {
		"turn": { from: 0, to: 99, speed: 10, loop: true }
	}
})
k.loadFont("monogram", "/save-the-planet/fonts/monogram.ttf");

k.scene("game", () => {

	const planet = makePlanet(k, "planet", (k.width() / 2), k.height() / 2, 1);
	const health = makeHealthbar(k, planet);
	const scoreBoard = makeScoreBoard(k, "monogram");
	const highscore = makeHighScore(k, "monogram");

	k.onCollide("astroid", "planet", (asteroid, planet) => {
		hit(k, asteroid, planet);
	})

	k.onClick("astroid", (asteroid) => {
		destroyAsteroid(k, asteroid, scoreBoard);
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
	const planet = makePlanet(k, "red-planet", k.width() / 2, k.height() / 2, 0.6);
	const gameover = gameoverText(k, finalScore, "monogram");
	const restartButton = makeRestartButton(k, "monogram");
	updateHighscore(finalScore);


	k.add(restartButton);
	k.add([k.sprite("space", { width: k.width(), height: k.height() })]);
	k.add(planet)
	k.add(gameover);

	restartButton.onClick(() => {
		k.go("game");
	})

})

k.scene("welcome", () => {
	const planet = makePlanet(k, "planet", k.width() / 2, k.height() / 2, 0.6);
	const welcome = makeWelcome(k, "monogram");

	k.add([k.sprite("space", { width: k.width(), height: k.height() })]);
	k.add(planet);
	k.add(welcome);

	k.onClick(() => {
		k.go("game");
	});
})

k.go("welcome");
