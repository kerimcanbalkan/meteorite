import { KaboomCtx } from "kaplay";

export function makeUsernameText(k: KaboomCtx, font:string){

  const usernameText = k.make([
		k.pos(k.width() / 2, k.height() / 2),
		k.text("Welcome! Please provide username to play the game", {
			size: k.width()*0.05,
			font: font
		}),
		k.anchor("center")
	]);



  return usernameText;
}