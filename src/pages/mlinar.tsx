const Mlinar = () => {
  return (
    <div className="container">
      Mlinar
      {/* type BreweriesType = {
  name: string;
  country: string;
  website_url: string;
  city: string;
}; */}
      {/* const Home = () => {
//   const [breweriesData, setBreweriesData] = useState<BreweriesType[]>([]);

//   const getBreweries = () => {
//     fetch(`https://api.openbrewerydb.org/v1/breweries`)
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         console.log(data);
//         setBreweriesData(data);
//       })
//       .catch((err) => console.log(err));
//   };

//   const getBreweriesByCity = (cityName: string) => {
//     fetch(
//       `https://api.openbrewerydb.org/v1/breweries?by_city=${cityName}&per_page=3`
//     )
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         console.log(data);
//         setBreweriesData(data);
//       })
//       .catch((err) => console.log(err));
//   };

//   useEffect(() => {
//     getBreweries();
//     getBreweriesByCity("Cincinati");
//   }, []);

//   return (
//     <div className="container">
//       <h1>Breweries</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Country</th>
//             <th>Website</th>
//           </tr>
//         </thead>
//         <tbody>
//           {breweriesData.map((brewery) => {
//             return (
//               <tr>
//                 <td>{brewery.name}</td>
//                 <td>{brewery.country}</td>
//                 <td>
//                   {brewery.website_url ? (
//                     <a href={brewery.website_url}>{brewery.website_url}</a>
//                   ) : (
//                     "No website"
//                   )}
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// type PokemonType = {
//   id: number;
//   name: string;
//   weight: number;
// };

// const Home = () => {
//   const [pokemonData, setPokemonData] = useState<PokemonType | null>(null);

//   const getPokemons = (pokemon: string) => {
//     fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         console.log(data);
//         setPokemonData(data);
//       })
//       .catch((err) => console.log(err));
//   };

//   useEffect(() => {
//     getPokemons("snorlax");
//   }, []);

//   return (
//     <div className="container">
//       <h1>Pokemon</h1>
//       <div>
//         {pokemonData &&
//           pokemonData.map((pokemon: PokemonType) => {
//             return (
//               <div>
//                 <div>ID of the Pokemon: {pokemon.id}</div>
//                 <div>Name: {pokemon.name}</div>
//                 <div>Weight: {pokemon.weight}</div>;
//               </div>
//             );
//           })}
//         ;
//       </div>
//     </div>
//   );
// }; */}
    </div>
  );
};

export default Mlinar;
