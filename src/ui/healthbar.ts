import { GameObj, KaboomCtx } from "kaplay";

export function makeHealthbar(k: KaboomCtx, planet: GameObj) {

	let width = 400;
	let height = 20;

	if (k.width() < 640) {
		width = 300;
		height = 10;
	}
	const healthContainer = k.make([
		k.rect(width, height),
		k.color(0, 0, 0),
		k.area(),
		k.anchor("center"),
		k.outline(2, k.rgb(255, 255, 255)),
		k.pos(k.width() / 2, 50),
		k.fixed(),
	]);

	const healthDisplay = healthContainer.add([
		k.rect(width - 4, height - 4),
		k.pos(-(width / 2 - 2), 0),
		k.color(255, 255, 255),
		k.anchor("left"),
	]);

	planet.on("hurt", () => {
		const newWidth = (planet.hp() / 100) * width;
		healthDisplay.width = newWidth;
	})

	return healthContainer;
}
