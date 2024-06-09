import { k } from "../kaplayCtx";
import { makePlanet } from "../entities/planet";
import { makeWelcome } from "../ui/welcome";

export default k.scene("welcome", () => {
	k.loadSprite("stars", "sprites/test.png");
	k.loadSprite("space", "sprites/space.png");
	k.loadSprite("planet", "sprites/planet.png", {
		sliceX: 20,
		sliceY: 5,
		anims: {
			"turn": { from: 0, to: 99, speed: 10, loop: true }
		}
	})
	k.loadFont("monogram", "fonts/monogram.ttf");

	const planet = makePlanet(k, "planet", k.width() / 2, k.height() / 2, 0.6);
	const welcome = makeWelcome(k, "monogram");

	k.add([k.sprite("space", { width: k.width(), height: k.height() })]);
	k.add(planet);
	k.add(welcome);

	k.onClick(() => {
		k.go("game");
	});
})
