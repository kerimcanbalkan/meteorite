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
import { scale } from "./constants";

type PlanetGameObj = GameObj<SpriteComp & PosComp & ScaleComp & AreaComp & BodyComp & HealthComp & AnchorComp>;

export function makePlanet(k: KaboomCtx, posX: number, posY: number) {
	const planet = k.make([
		k.sprite("planet", { anim: "turn" }),
		k.area(),
		k.body(),
		k.pos(posX, posY),
		k.health(3),
		k.scale(2),
		k.anchor("center"),
		"planet"
	]);

	return planet
}
