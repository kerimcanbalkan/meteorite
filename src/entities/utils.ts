import { KaboomCtx } from "kaplay";
// import { postHighscore, Highscore } from "../api/scores";

export function getHighScore(): number {
	const highscoreStr = localStorage.getItem("highscore");

	if (highscoreStr) {
		return JSON.parse(highscoreStr) as number;
	}

	else {
		const initialHighscore = 0;

		localStorage.setItem("highscore", JSON.stringify(initialHighscore));

		return initialHighscore
	}
}

export function updateHighscore(newScore: number) {
	const username = localStorage.getItem("username")?.trim().slice(1, -1);
	if (!username) {
		return
	}
	const currentHighscore = getHighScore();

	if (newScore > currentHighscore) {
		localStorage.setItem("highscore", JSON.stringify(newScore));
		//const scorer: Highscore = { username: username, highscore: newScore };
		//postHighscore(scorer);
	}
}

export function regularPolygon(k: KaboomCtx, radius: number, sides: number) {
	const points = [];
	for (let i = 0; i < sides; i++) {
		const angle = (2 * Math.PI / sides) * i;
		points.push(k.vec2(radius * Math.cos(angle), radius * Math.sin(angle)));
	}
	return points;
}
