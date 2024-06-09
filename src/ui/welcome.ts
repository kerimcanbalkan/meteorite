import { KaboomCtx } from "kaplay";

export function makeWelcome(k: KaboomCtx, font: string) {
	const welcome = k.make([
		k.pos(k.width() / 2, k.height() / 2),
		k.text("Asteroids are approaching!", {
			size: 60,
			font: font
		}),
		k.anchor("center")
	]);

	welcome.add([
		k.pos(0, 40),
		k.text("Click to destroy the asteroids.", {
			size: 40,
			font: font
		}),
		k.anchor("center")
	])

	welcome.add([
		k.pos(0, 120),
		k.text("Tap the screen to embark on your mission.", {
			size: 25,
			font: font
		}),
		k.anchor("center")
	])
	return welcome;
}
