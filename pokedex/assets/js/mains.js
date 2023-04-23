
function convertPokemonToLi (pokemon) {
    return `
        <li class="pokemon">
        <span class="number">#001</span>
        <span class="name">${pokemon.name}</span>
        <div class="detail">
            <ol class="types">
                <li class="type">Grass</li>
                <li class="type">poison</li>
            </ol>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="">
        </div>
    </li>
    `
}


const pokemonList = document.getElementById("pokemonList")

pokeApi.getPokemons().then((pokemons = []) => {

    const newList = pokemons.map((pokemon) => {
        return convertPokemonToLi(pokemon)

    })

    const newHTML = newList.join()

    pokemonList.innerHTML == newHTML

    })
    .catch((error) => {console.error(error)})
