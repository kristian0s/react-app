import { useEffect, useState } from "react";
import IconCarLeft from "../assets/IconCarLeft";
import IconCarRight from "../assets/IconCarRight";

// type CountryType = {
//   name: CountryNameType;
//   maps: CountryMapType;
//   population: number;
//   borders: string[];
//   car: CountryCarType;
// };

// type CountryNameType = {
//   common: string;
//   official: string;
// };

// type CountryMapType = {
//   googleMaps: string;
// };

// type CountryCarType = {
//   side: string;
//   signs: string[];
// };

// const Africa = () => {
//   const [countryData, setCountryData] = useState<CountryType[]>([]);

//   const getAfricaCountries = () => {
//     fetch(`https://restcountries.com/v3.1/region/africa`)
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         console.log(data);
//         setCountryData(data);
//       })
//       .catch((err) => console.log(err));
//   };

//   useEffect(() => {
//     getAfricaCountries();
//   }, []);

//   return (
//     <div className="container">
//       <h1>Africa</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Map</th>
//             <th>Population</th>
//             <th>Borders</th>
//             <th>Cars</th>
//           </tr>
//         </thead>
//         <tbody>
//           {countryData.map((countries) => {
//             return (
//               <tr key={countries.name.official}>
//                 <td>{countries.name.official}</td>
//                 <td>
//                   <a href={countries.maps.googleMaps} target="_blank">
//                     Find country on map.
//                   </a>
//                 </td>
//                 <td>{countries.population.toLocaleString()}</td>
//                 <td>
//                   {countries.borders
//                     ? countries.borders.map((country) => {
//                         return country + ",";
//                       })
//                     : "No bordes."}
//                 </td>
//                 <td>
//                   {countries.car.side === "right" ? (
//                     <IconCarRight />
//                   ) : (
//                     <IconCarLeft />
//                   )}{" "}
//                   , {countries.car.signs}
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// };

type AfricaCountryType = {
  name: AfricaCountryNameType;
  capital: string[];
  population: number;
  languages: AfricaCountryLanguagesType;
  borders: string[];
};

type AfricaCountryNameType = {
  common: string;
  official: string;
};

type AfricaCountryLanguagesType = {
  [language: string]: {
    languageName: string;
  };
};

const Africa = () => {
  const [countryData, setCountryData] = useState<AfricaCountryType[]>([]);

  const getCountries = () => {
    fetch(`https://restcountries.com/v3.1/region/africa`)
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
    getCountries();
  }, []);

  return (
    <div className="container">
      <h1>Africa</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Capital</th>
            <th>Population</th>
            <th>Languages</th>
            <th>Borders</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>Capital 1</td>
            <td>Population 1</td>
            <td>Languages 1</td>
            <td>Borders 1</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Africa;
