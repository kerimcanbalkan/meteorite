import { k } from "../kaplayCtx";
import { makePlanet } from "../entities/planet";
import { makeHealthbar } from "../ui/healthbar";
import { makeScoreBoard } from "../ui/score";
import { makeHighScore } from "../ui/highScore"
import { destroyAsteroid, hit, spawnAsteroid } from "../entities/asteroid";
import { gameState } from "./gameState.ts"

export function gameScene() {
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
			gameState.finalScore = scoreBoard.value;
			k.go("gameover");
		})

		spawnAsteroid(k, planet, "asteroid", "roll");
		k.add([k.sprite("space", { width: k.width(), height: k.height() })]);
		k.add(health);
		k.add(scoreBoard);
		k.add(highscore)
		k.add(planet);
	});
}
