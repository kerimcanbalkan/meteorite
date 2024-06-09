import {
	AreaComp,
	BodyComp,
	GameObj,
	HealthComp,
	ScaleComp,
	SpriteComp,
	PosComp,
	AnchorComp,
	TextComp,
} from "kaplay";


export type PlanetGameObj = GameObj<SpriteComp & PosComp & ScaleComp & AreaComp & BodyComp & HealthComp & AnchorComp>;
export type AsteroidGameObj = GameObj<SpriteComp & PosComp & ScaleComp & AreaComp & BodyComp & HealthComp & AnchorComp>;
export type ScoreBoardGameObj = GameObj<PosComp & TextComp & AnchorComp & { value: number }>;
