import { KaboomCtx } from "kaplay";

export function makeScoreBoard(k: KaboomCtx, font: string) {

	const scoreBoard = k.make([
		k.pos(k.width() - 100, 50),
		k.text("Score: 0", {
			size: 30,
			width: 200,
			font: font
		}),
		k.anchor("center"),
		{ value: 0 }
	]);

	return scoreBoard;
}
