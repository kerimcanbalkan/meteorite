import { KaboomCtx } from "kaplay";


export function gameoverText(k: KaboomCtx, score: number, font: string) {
	let textsize = 60;

	if (k.width() <= 810) {
		textsize = 35;
	}

	const gameover = k.make([
		k.pos(k.width() / 2, k.height() / 2),
		k.text("Game over Planet is dead now!", {
			size: textsize,
			font: font
		}),
		k.anchor("center")
	]);

	gameover.add([
		k.pos(0, 40),
		k.text("Score: " + score, {
			size: textsize / 1.5,
			font: font
		}),
		k.anchor("center")
	]);

	gameover.add([
		k.pos(0, 80),
		k.text("Tap the screen to play again.", {
			size: textsize / 2,
			font: font
		}),
		k.anchor("center")
	]);
	return gameover;
}
