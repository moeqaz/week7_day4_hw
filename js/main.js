{
    let form = document.getElementById('pokemon');

    async function handleSubmit(e){
        e.preventDefault();
        let pokeName = e.target.pokemon.value
        console.log(pokeName);
        let pokeInfo = await getPokeInfo(pokeName);
        console.log(pokeInfo);
        buildStatsCard(pokeInfo);

        e.target.pokemon.value = '';
    }
    
    async function getPokeInfo(pokeName){
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName.toLowerCase()}/`);
        let data = await response.json()
        return data
    }

    function buildStatsCard(pokeObj){
        let card = document.createElement('div');
        card.className = 'card h-100 w-100 mt-4 mb-4 text-center text-light bg-danger';

        let image = document.createElement('img');
        image.className = 'card-img-top h-80 w-90 mb-2';
        image.src = pokeObj.sprites.front_shiny;
        card.append(image);

        let cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        let pokeTitle = document.createElement('h2');
        pokeTitle.className = 'card-title text-warning';
        pokeTitle.innerHTML = pokeObj.species.name;

        // let pokeMoves = document.createElement('h6');
        // pokeMoves.className = 'card-body';
        // pokeMoves.innerHTML = pokeObj.moves.move;

        let pokeHeightAndWeight = document.createElement('p');
        pokeHeightAndWeight.className = 'card-body';
        pokeHeightAndWeight.innerHTML = `Height: ${pokeObj.height} | Weight: ${pokeObj.weight}`;

        // let pokeWeight = document.createElement('p');
        // pokeWeight.className = 'card-body';
        // pokeWeight.innerHTML = `Weight: ${pokeObj.weight}`;

        cardBody.append(pokeTitle);
        // cardBody.append(pokeMoves);
        cardBody.append(pokeHeightAndWeight);

        card.append(cardBody);

        let col = document.createElement('div');
        col.className = 'col-12 col-md-6 col-lg-3';

        col.append(card);

        let view = document.getElementById('pokeGallery');
        view.append(col);
    }
    
    form.addEventListener('submit', handleSubmit)
};

