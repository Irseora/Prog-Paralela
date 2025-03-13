let pokemons = [];

async function loadPokemons() {
	await fetch("https://pokeapi.co/api/v2/pokemon")
		.then((response) => response.json())
		.then((json) => {
			pokemons = json.results;
		});

	console.log(pokemons);
}

for (let pokemon of pokemons) {
	let pokemonCard = `<div class="card">
        <img src=pokemon.url/>
        <h2></h2>
    `;
}

document.getElementById("container").innerHTML += pokemonCard;

// loadPokemons();
