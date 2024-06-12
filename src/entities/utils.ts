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
	const currentHighscore = getHighScore();

	if (newScore > currentHighscore) {
		localStorage.setItem("highscore", JSON.stringify(newScore));
	}
}
