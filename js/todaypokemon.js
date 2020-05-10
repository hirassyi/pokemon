$(() => {

    // ポケモンの情報を取得
    // 利用するAPI情報元
    //   - GitHub - fanzeyi/Pokemon-DB: A Pokemon database in JSON format.
    //   - 利用するAPI : https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json

    const API_URL = 'https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json';
    const IMG_URL = 'https://github.com/fanzeyi/pokemon.json/blob/master/images';


    const pokemonState = {
      pokemons: [],
      pokemonImgs: [],
      pokemonNumbers: []
    };

    // ページの読み込みが完了したらポケモン情報を取得する
    window.onload = (event) => {
      fetchPokemonData();
      console.log('ページが完全に読み込まれました');
    };


    // HTMLのid値がセットされているDOMを取得する
    const pokemonElement = $('#pokemon');
    const loadElement = $('#load');
    const pokemonImgElement = $('#pokemon-img');
    const inputElement = $('input');
    

    const fetchPokemonData = async () => {
        loadElement.text('Now loading...');
        
        try {
          const response = await fetch(API_URL);
          const data = await response.json();
    
          console.log(response);
          console.log(data);

          // ポケモンの名前と番号を配列に格納する
          data.forEach((pokemon, index) => {
            const pokemonList = pokemon.name.japanese;
            pokemonState.pokemons.push(pokemonList);

            const pokemonNumber = pokemon.id;
            pokemonState.pokemonNumbers.push(pokemonNumber);

          });

          loadElement.text('');

        } catch (error) {
          console.log('エラー : ', error);
        }

        
      };

    fetchPokemonData();

    const $button = $("#search");
    $button.click(() => {
      
        const pokemonName = inputElement.val();
        inputElement.val("");
        console.log('pokemonName : ', pokemonName);
        
        
        pokemonState.pokemons.filter((value, index) => {
          if (pokemonName === value) {
            pokemonElement.text(pokemonName);
          } ;
          
        })
        
        


    });

    
});