import { GameObj, KaboomCtx } from "kaplay";

export function makeHealthbar(k: KaboomCtx, planet: GameObj) {
	const healthContainer = k.make([
		k.rect(400, 20),
		k.color(0, 0, 0),
		k.area(),
		k.anchor("center"),
		k.outline(2, k.rgb(255, 255, 255)),
		k.pos(k.width() / 2, 50),
		k.fixed(),
	]);

	const healthDisplay = healthContainer.add([
		k.rect(396, 16),
		k.pos(-198, 0),
		k.color(255, 255, 255),
		k.anchor("left"),
	]);

	planet.on("hurt", () => {
		const newWidth = (planet.hp() / 100) * 396;
		healthDisplay.width = newWidth;
	})

	return healthContainer;
}
