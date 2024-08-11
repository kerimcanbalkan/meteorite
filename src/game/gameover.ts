import { k } from "../kaplayCtx";
import { makePlanet } from "../entities/planet";
import { gameoverText } from "../ui/gameoverText";
import { makeRestartButton } from "../ui/restartButton";
import { updateHighscore } from "../entities/utils";
import { gameState } from "./gameState.ts"

export function gameoverScene() {
	k.scene("gameover", () => {
		k.play("ingameAmbient", {
			volume: 0.2,
			loop: true
		});
		const planet = makePlanet(k, "red-planet", k.width() / 2, k.height() / 2, 0.6);
		const gameover = gameoverText(k, gameState.finalScore, "monogram");
		const restartButton = makeRestartButton(k, "monogram", "Restart");
		updateHighscore(gameState.finalScore);


		k.add(restartButton);
		k.add([k.sprite("space", { width: k.width(), height: k.height() })]);
		k.add(planet)
		k.add(gameover);

		restartButton.onClick(() => {
			k.go("game");
		})

	});
}
