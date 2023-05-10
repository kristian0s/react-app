import { useEffect, useState } from "react";

// import { useEffect, useState } from "react";
// type PokemonTypeTypeType = {
//   name: string;
//   url: string;
// };

// type PokemonTypesType = {
//   slot: number;
//   type: PokemonTypeTypeType[];
// };
// type PokemonType = {
//   id: number;
//   name: string;
//   types: PokemonTypesType[];
// };
// type PokemonAbilityNames = {
//   name: string;
// };
// type PokemonAbility = {
//   id: number;
//   name: string;
//   names: PokemonAbilityNames[];
// };

// type BerryType = {
//   name: string;
//   url: string;
// };

// const Pokemons = () => {
//   const [pokemonData, setPokemonData] = useState<PokemonType>();
//   const [pokemonAbility, setPokemonAbility] = useState<PokemonAbility>();
//   const [searchValue, setSearchValue] = useState<string>("");
//   const [berries, setBerries] = useState<BerryType[]>([]);
//   const [flag, setFlag] = useState<string>("");

//   const getPokemonAbility = (id: number) => {
//     fetch(`https://pokeapi.co/api/v2/ability/${id}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setPokemonAbility(data);
//       })
//       .catch((err) => console.log(err));
//   };

//   const searchPokemon = (pokemonName: string) => {
//     fetch(
//       `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLocaleLowerCase()}`
//     )
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         console.log(data);
//         setPokemonData(data);
//         getPokemonAbility(data.id);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const getBerries = () => {
//     fetch("https://pokeapi.co/api/v2/berry")
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => {
//         //console.log(data.results);
//         setBerries(data.results);
//       })
//       .catch((err) => console.log(err));
//   };

//   const getCapitalCity = () => {
//     fetch("https://restcountries.com/v3.1/capital/zagreb")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data[0].flags.png);
//         setFlag(data[0].flags.png);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   useEffect(() => {
//     getBerries();
//     getCapitalCity();
//   }, []);

//   return (
//     <div className="container">
//       <h1 className="pokemons__title">Search pokemon color</h1>
//       <div className="pokemons__header">
//         <input
//           type="text"
//           className="pokemons__input"
//           onChange={(e) => setSearchValue(e.target.value)}
//         />
//         <button
//           className="pokemons__btn"
//           onClick={() => searchPokemon(searchValue)}
//         >
//           Find pokemon color
//         </button>
//       </div>
//       <div className="pokemons__color-box">
//         {pokemonAbility &&
//           pokemonAbility.names.map((name) => {
//             return <div>{name.name}</div>;
//           })}
//       </div>
//       {/* <h1>All berries</h1> */}
//       {/* <div>
//         {berries.map((berry) => {
//           return (
//             <div>
//               <div>{berry.name}</div>
//               <a href={berry.url}>Link</a>
//             </div>
//           );
//         })}
//       </div> */}
//       <h1>Flag</h1>
//       <img src={flag} alt="flag" />
//     </div>
//   );
// };

// export default Pokemons;

type PokemonsType = {
  name: string;
  weight: number;
  id: string;
};

const Pokemoni = () => {
  const [dataBySearch, setDataBySearch] = useState<PokemonsType | null>(null);
  const [search, setSearch] = useState<string>("");

  const getPokemonBySearch = (pokemonName: string) => {
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
            <div>{dataBySearch.weight}</div>
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
