const apiUrl = import.meta.env.VITE_API_URL;

interface Highscore {
	username: string
	highscore: number
}

let scores: Highscore[] = [];

console.log(apiUrl)

/**
 * Fetches the high scores from the API and updates the `scores` array.
 */
async function fetchHighscores(): Promise<void> {
	try {
		const response = await fetch(apiUrl);
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}

		const data: Highscore[] = await response.json();
		scores = data;
	} catch (error) {
		console.error('Error fetching highscores:', error);
	}
}

// Call the function to fetch and store the high scores
await fetchHighscores();

console.log(scores);

const list = <HTMLOListElement>document.querySelector(".scorer");

  scores.forEach((player) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${player.username} ${player.highscore}`;
    list.appendChild(listItem);
  });

export { };

