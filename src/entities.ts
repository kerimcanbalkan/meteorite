import {
	AreaComp,
	BodyComp,
	GameObj,
	HealthComp,
	ScaleComp,
	SpriteComp,
	PosComp,
	KaboomCtx,
	AnchorComp,
} from "kaplay";

type PlanetGameObj = GameObj<SpriteComp & PosComp & ScaleComp & AreaComp & BodyComp & HealthComp & AnchorComp>;
type AstroidGameObj = GameObj<SpriteComp & PosComp & ScaleComp & AreaComp & BodyComp & HealthComp & AnchorComp>;


export function makePlanet(k: KaboomCtx, sprite: string, posX: number, posY: number) {
	const planet = k.make([
		k.sprite(sprite, { anim: "turn" }),
		k.area(),
		k.body(),
		k.pos(posX, posY),
		k.health(3),
		k.scale(2),
		k.anchor("center"),
		"planet"
	]);

	return planet;
}

export function makeAstroid(k: KaboomCtx, planet: PlanetGameObj, sprite: string, anim: string, scale: number, posX: number, posY: number) {
	const direction = k.vec2(planet.pos.x - posX, planet.pos.y - posY).unit();

	const astroid = k.make([
		k.sprite(sprite, { anim: anim }),
		k.area(),
		k.body(),
		k.pos(posX, posY),
		k.scale(scale),
		k.move(direction, 120),
		k.anchor("center"),
		"astroid"
	]);

	return astroid;
}
export function spawnAstroid(k: KaboomCtx, planet: PlanetGameObj, sprite: string, anim: string) {
	k.loop(1, () => {
		const scale = k.rand(0.3, 2);
		// Get random position offscreen
		const offscreenPositions = [
			{ x: k.rand(0, k.width()), y: -50 }, // Top
			{ x: k.rand(0, k.width()), y: k.height() + 50 }, // Bottom
			{ x: -50, y: k.rand(0, k.height()) }, // Left
			{ x: k.width() + 50, y: k.rand(0, k.height()) }, // Right
		];

		const randomPos = offscreenPositions[Math.floor(k.rand(0, offscreenPositions.length))];

		// Create the asteroid
		const ast = makeAstroid(k, planet, sprite, anim, scale, randomPos.x, randomPos.y);
		k.add(ast);
	});
}
