import { KaboomCtx } from "kaplay";

export function makeScoreBoard(k: KaboomCtx, font: string) {

	let textsize = 30;
	let posX = k.width() - 100;
	let posY = 50;

	if (k.width() <= 810) {
		textsize = 20;
		posX = k.width() - 20;
		posY = k.height() - 20;
	}

	const scoreBoard = k.make([
		k.pos(posX, posY),
		k.text("Score: 0", {
			size: textsize,
			width: 200,
			font: font
		}),
		k.anchor("center"),
		{ value: 0 }
	]);

	return scoreBoard;
}
