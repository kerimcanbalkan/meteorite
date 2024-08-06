import kaplay from "kaplay";

export const k = kaplay({
	global: false,
	background: [0, 0, 0],
	canvas: <HTMLCanvasElement>document.getElementById("game")
});
