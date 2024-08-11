import { k } from "../kaplayCtx";
import { makePlanet } from "../entities/planet";
import { makeWelcome } from "../ui/welcome";

export function startScene() {
	k.scene("start", () => {
		k.play("ingameAmbient", {
			volume: 0.2,
			loop: true
		});
		const planet = makePlanet(k, "planet", k.width() / 2, k.height() / 2, 0.6);
		const welcome = makeWelcome(k, "monogram");

		k.add([k.sprite("space", { width: k.width(), height: k.height() })]);
		k.add(planet);
		k.add(welcome);

		k.onClick(() => {
			k.go("game");
		});
	});
}
