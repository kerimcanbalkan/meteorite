import { KaboomCtx } from "kaplay";


export function gameoverText(k: KaboomCtx, score: number, font: string) {
	const gameover = k.make([
		k.pos(k.width() / 2, k.height() / 2),
		k.text("Game over Planet is dead now!", {
			size: 60,
			font: font
		}),
		k.anchor("center")
	]);

	gameover.add([
		k.pos(0, 40),
		k.text("Score: " + score, {
			size: 40,
			font: font
		}),
		k.anchor("center")
	]);

	gameover.add([
		k.pos(0, 80),
		k.text("Tap the screen to play again.", {
			size: 25,
			font: font
		}),
		k.anchor("center")
	]);
	return gameover;
}
