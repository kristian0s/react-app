import { useEffect, useState } from "react";

type CountryType = {
  name: CountryNameType;
  flags: FlagsType;
  currencies: CurrenciesType;
  capital: string[];
};

type CountryNameType = {
  common: string;
  official: string;
};

type FlagsType = {
  png: string;
  svg: string;
};

type CurrenciesType = {
  [currency: string]: {
    name: string;
    symbol: string;
  };
};

const Europe = () => {
  const [countryData, setCountryData] = useState<CountryType[]>([]);

  const getEuropeCountries = () => {
    fetch(`https://restcountries.com/v3.1/region/europe`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setCountryData(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getEuropeCountries();
  }, []);

  return (
    <div className="container">
      <h1>Europe</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Flag</th>
            <th>Currency</th>
            <th>Capital</th>
          </tr>
        </thead>
        <tbody>
          {countryData.map((countries) => {
            return (
              <tr>
                <td>{countries.name.official}</td>
                <td>
                  <img src={countries.flags.png} alt="country flag" />
                </td>
                <td>
                  {Object.keys(countries.currencies).map((currency) => {
                    return (
                      <div>
                        {countries.currencies[currency].name},{" "}
                        {countries.currencies[currency].symbol}
                      </div>
                    );
                  })}
                </td>
                <td>{countries.capital}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Europe;
