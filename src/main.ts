import { k } from "./kaplayCtx";

k.scene("game", () => {
	k.loadSprite("space", "sprites/space.png")

	k.loadSprite("planet", "sprites/planet.png", {
		sliceX: 20,
		sliceY: 1,
		anims: {
			"turn": { from: 0, to: 19, speed: 3, loop: true }
		}
	})

	k.add([
		k.sprite("space", { width: k.width(), height: k.height() }),
	])


	k.add([
		k.sprite("planet", { anim: "turn" }),
		k.pos(k.width() / 2, k.height() / 2),
		k.anchor("center"),
		k.scale(2),
		k.area(),
		k.body()
	]);

});

k.go("game");
