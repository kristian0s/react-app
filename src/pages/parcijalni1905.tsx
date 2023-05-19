import { useEffect, useState } from "react";

type InfoType = {
  artistId: number;
  artistName: string;
  collectionName: string;
  trackName: string;
  trackPrice: number;
};

const Parcijalni1905 = () => {
  const [data, setData] = useState<InfoType[]>([]);
  const [search, setSearch] = useState<string>("");

  const getInfoBySearch = (search: string) => {
    fetch(`https://itunes.apple.com/search?term=${search}&entity=song`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setData(data.results);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <h1>I Tunes</h1>
      <div>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
        />
        <button onClick={() => getInfoBySearch(search)}>Search</button>
      </div>
      <div>
        {data.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Artist name</th>
                <th>Collection name</th>
                <th>Track name</th>
                <th>Track price</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item: InfoType) => {
                return (
                  <tr>
                    <td>{item.artistName}</td>
                    <td>{item.collectionName}</td>
                    <td>{item.trackName}</td>
                    <td>{item.trackPrice}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <div>There is no songs of {search} genre.</div>
        )}
      </div>
    </div>
  );
};

export default Parcijalni1905;
