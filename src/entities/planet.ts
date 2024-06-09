import { KaboomCtx } from "kaplay";

export function makePlanet(k: KaboomCtx, sprite: string, posX: number, posY: number, opacity: number) {
	const planet = k.make([
		k.sprite(sprite, { anim: "turn" }),
		k.area(),
		k.body(),
		k.pos(posX, posY),
		k.health(100),
		k.scale(2),
		k.opacity(opacity),
		k.anchor("center"),
		{ maxHp: 100, previousHp: 100 },
		"planet"
	]);

	return planet;
}

