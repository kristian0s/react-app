import { useEffect, useState } from "react";

type BreweryType = {
  name: string;
  city: string;
  id: string;
  country: string;
};

// 1.nacin
//   async function getBreweries() {
//     const response = await fetch(
//       "https://api.openbrewerydb.org/v1/breweries?by_city=london"
//     );
//     const jsonData = await response.json();
//     console.log(jsonData);
//     setData(jsonData);
//   }

//   useEffect(() => {
//     getBreweries();
//   }, []);

const Breweries = () => {
  const [data, setData] = useState<BreweryType[]>([]);
  const [dataByCity, setDataByCity] = useState<BreweryType[]>([]);
  const [dataBySearch, setDataBySearch] = useState<BreweryType[]>([]);
  const [search, setSearch] = useState<string>("");

  const getBreweries = () => {
    fetch(`https://api.openbrewerydb.org/v1/breweries/}`)
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((error) => console.error(error));
  };

  const getBreweryByCity = (city: string, perPage: number) => {
    fetch(
      `https://api.openbrewerydb.org/v1/breweries?by_city=${city}&per_page=${perPage}`
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        setDataByCity(jsonData);
        console.log("byCity: ", jsonData);
      })
      .catch((error) => console.error(error));
  };

  const getBreweriesBySearch = (search: string) => {
    fetch(`https://api.openbrewerydb.org/v1/breweries/search?query=${search}`)
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        setDataBySearch(jsonData);
        console.log("bySearch: ", jsonData);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getBreweries();
    getBreweryByCity("san_diego", 5);
  }, []);

  return (
    <div className="container">
      <h1>Breweries</h1>
      <div>
        {data.length > 0 ? (
          data.map((brewery: BreweryType) => {
            return <div key={brewery.id}>{brewery.name}</div>;
          })
        ) : (
          <div>Nema niti jedna pivovara za zadani parametar</div>
        )}
      </div>
      <h1>By City</h1>
      <div>
        {dataByCity.map((brewery: BreweryType) => {
          return <div key={brewery.id}>{brewery.name}</div>;
        })}
      </div>
      <h1>By Search</h1>
      <div>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
        />
        <button onClick={() => getBreweriesBySearch(search)}>Search</button>
      </div>
      <div>
        {dataBySearch.length > 0 ? (
          dataBySearch.map((brewery: BreweryType) => {
            return <div key={brewery.id}>{brewery.name}</div>;
          })
        ) : (
          <div>
            Nisam pronašao niti jednu pivovaru s imenom: {search}, probaj
            upisati neku poznatiju
          </div>
        )}
      </div>
    </div>
  );
};

export default Breweries;
