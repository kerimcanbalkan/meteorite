const apiUrl = import.meta.env.VITE_API_URL;

export interface Highscore {
	username: string
	highscore: number
}

export async function getHighscores(): Promise<Highscore[]> {
	let data: Highscore[] = [];
	try {
		const response = await fetch(apiUrl);
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}

		data = await response.json();
		return data;
	} catch (error) {
		console.error('Error fetching highscores:', error);
	}
	return data;
}

export async function postHighscore(score: Highscore) {
	try {
		const response = await fetch(apiUrl, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(score)
		})
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
	} catch (error) {
		console.error('Error posting highscore', error);
	}
}
