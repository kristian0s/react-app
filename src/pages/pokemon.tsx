import { useEffect, useState } from "react";

type PokemonsType = {
  name: string;
  color: string;
  weight: number;
  id: string;
};

const Pokemoni = () => {
  const [dataBySearch, setDataBySearch] = useState<PokemonsType | null>(null);
  const [search, setSearch] = useState<string>("");

  const getPokemonBySearch = (search: string) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        setDataBySearch(jsonData);
        console.log(jsonData);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="container">
      <div>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
        />
        <button onClick={() => getPokemonBySearch(search)}>Search</button>
      </div>
      <div>
        {dataBySearch ? (
          <div>
            <div>{dataBySearch.name}</div>
            <div>{dataBySearch.color}</div>
          </div>
        ) : (
          <div>
            Ne nalazim Pokemona pod imenom {search}. Pokusaj neko drugo ime.
          </div>
        )}
      </div>
    </div>
  );
};

export default Pokemoni;
