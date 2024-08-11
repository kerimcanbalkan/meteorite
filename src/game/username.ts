import { k } from "../kaplayCtx";
import { makePlanet } from "../entities/planet"

export function usernameScene() {
	k.scene("username", () => {
		const planet = makePlanet(k, "planet", k.width() / 2, k.height() / 2, 0.4);
		k.add([k.sprite("space", { width: k.width(), height: k.height() })]);
		k.add(planet);
		// sound button disabled for now
		//	k.add([k.sprite("sound", {width: k.width() * 0.03, height: k.wsidth()*0.03, anim: "default"}), k.pos(k.width()-k.width()*0.03*1.3,0)]);
		const submitButton = (<HTMLButtonElement>document.getElementById("submit"));
		submitButton.addEventListener("click", () => {
			const username = (<HTMLButtonElement>document.getElementById("usernameInput")).value;
			localStorage.setItem("username", JSON.stringify(username));
			const first = (<HTMLButtonElement>document.getElementById("first"));
			first.style.display = "none";
			k.go("start");
		});
	});
}
