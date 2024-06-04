import kaplay from "kaplay";
import { scale } from "./constants";

export const k = kaplay({
	width: 256 * scale,
	height: 144 * scale,
	letterbox: true,
	global: false,
	background: [0, 0, 0]
});
