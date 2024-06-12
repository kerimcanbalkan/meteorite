import { KaboomCtx } from "kaplay";
import { getHighScore } from "../entities/utils";

export function makeHighScore(k: KaboomCtx, font: string) {

	const highscore = getHighScore();

	let textsize = 30;
	let posX = 120;
	let posY = k.height() - 40;

	if (k.width() <= 810) {
		textsize = 20;
		posY = posY + 20;
	}

	const scoreBoard = k.make([
		k.pos(posX, posY),
		k.text("High Score: " + highscore, {
			size: textsize,
			width: 200,
			font: font
		}),
		k.anchor("center"),
		{ value: 0 }
	]);

	return scoreBoard;
}
