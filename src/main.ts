import { makePlanet } from "./entities";
import { k } from "./kaplayCtx";

k.scene("game", () => {
	k.loadSprite("space", "sprites/space.png")
	k.loadSprite("stars", "sprites/test.png")
	k.loadSprite("space", "sprites/space.png")

	k.loadSprite("planet", "sprites/planet.png", {
		sliceX: 20,
		sliceY: 5,
		anims: {
			"turn": { from: 0, to: 99, speed: 10, loop: true }
		}
	})


	k.add([k.sprite("space", { width: k.width(), height: k.height() })]);

	const planet = makePlanet(k, (k.width() / 2), k.height() / 2);

	k.add(planet);


});

k.go("game");
