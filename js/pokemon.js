(() => {
    // 利用するAPI情報元
    //   - GitHub - fanzeyi/Pokemon-DB: A Pokemon database in JSON format.
    //   - 利用するAPI : https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json
  
    const API_URL = 'https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json';
    const IMG_URL = 'https://github.com/fanzeyi/pokemon.json/blob/master/images';
 
    // API_URLを使って実装
    //   1. Fetch API(fetchメソッド)を使ってAPI経由でデータを取得する
    //     - https://developer.mozilla.org/ja/docs/Web/API/WindowOrWorkerGlobalScope/fetch
    //   2. fetchメソッドで取得したResponseデータからJSON形式のデータをオブジェクトに変換して次のthenメソッドにデータを渡す
    //     - https://developer.mozilla.org/ja/docs/Web/API/Response
    //   3. 2から受け取ったデータの中に含まれている次のデータをid属性値が `pokemon-list` のul要素にリスト表示する
    //     - プロパティ(配列)の中に含まれているポケモンのデータ(オブジェクト)をforEachで取得する
    //       - 「ポケモンデータ」をli要素として追加する
    //       - pokemonQuizList関数の戻り値(ul要素のDOM)をli要素に追加する。(結果としてネスト(入れ子)構造のリストになる)
    fetch(API_URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const pokemonListContainer = document.getElementById('pokemon-list');
        data.forEach((pokemon, index) => {
          const numberTitleItem = document.createElement('li');
          numberTitleItem.textContent = `図鑑No,${pokemon.id}`;
          pokemonListContainer.appendChild(numberTitleItem);
          

  
          const pokemonDataList = buildPokemonList(pokemon.name.japanese);
          numberTitleItem.appendChild(pokemonDataList);
          
          const imgItem = document.createElement('img');


          if (pokemon.id < 10) {
            imgItem.setAttribute('src', `https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/00${pokemon.id}.png`);
          } else if (pokemon.id === 662) {
            imgItem.setAttribute('src', `https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/${pokemon.id}r.png`);
          } else if (pokemon.id === 740) {
            imgItem.setAttribute('src', `https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/${pokemon.id}le.png`);
          } else if (pokemon.id < 100) {
            imgItem.setAttribute('src', `https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/0${pokemon.id}.png`);
          } else {
            imgItem.setAttribute('src', `https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/${pokemon.id}.png`);
          };
          
          
          numberTitleItem.appendChild(imgItem);
        });
    });

    
  
  
    // `buildPokemonList関数` を実装する
    //   - 実装する内容
    //     - 引数で受けとったポケモンデータを使ってul要素にポケモン情報を追加する
    //  - 引数
    //    - pokemon : オブジェクト(ポケモンデータ)
    //  - 戻り値
    //    - ul要素のDOM
    
    const buildPokemonList = (pokemon) => {
      const pokemonContainer = document.createElement('ul');
      const item = document.createElement('li');
        item.innerHTML = pokemon;
        pokemonContainer.appendChild(item);
        
        
        
    

   
      return pokemonContainer;
    };
  
     
            
  })();