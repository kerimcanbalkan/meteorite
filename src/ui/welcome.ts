import { KaboomCtx } from "kaplay";

export function makeWelcome(k: KaboomCtx, font: string) {

	let textsize = 60;

	if (k.width() <= 810) {
		textsize = 35;
	}

	const welcome = k.make([
		k.pos(k.width() / 2, k.height() / 2),
		k.text("Asteroids are approaching!", {
			size: textsize,
			font: font
		}),
		k.anchor("center")
	]);

	welcome.add([
		k.pos(0, 40),
		k.text("Click to destroy the asteroids.", {
			size: textsize / 1.5,
			font: font
		}),
		k.anchor("center")
	])

	welcome.add([
		k.pos(0, 120),
		k.text("Tap the screen to embark on your mission.", {
			size: textsize / 2,
			font: font
		}),
		k.anchor("center")
	])
	return welcome;
}
