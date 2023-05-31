import { useState } from "react";
import { movies, MoviesType } from "../data/moviesData";

const Netflix = () => {
  const [selectedMovie, setSelectedMovie] = useState<MoviesType | null>(null);
  const numbers = [1, 2, 3, 5, 16, 22, 37, 40, 48, 50];

  const movieChoice = (id: number) => {
    const choice = movies.find((item) => item.id === id);
    choice ? setSelectedMovie(choice) : setSelectedMovie(null);
  };

  const randomNumber = () => {
    const randomIndex = Math.floor(Math.random() * numbers.length);
    return numbers[randomIndex];
  };

  return (
    <div className="container">
      <h1>Netflix</h1>
      <hr />
      <div className="netflix__grid">
        {movies.map((movie) => {
          return (
            <div
              key={movie.id}
              className="netflix__grid__item"
              onClick={() => movieChoice(movie.id)}
            >
              <div>
                <img src={movie.image} alt="" />
              </div>
              <div className="netflix__grid__item title">{movie.name}</div>
            </div>
          );
        })}
      </div>
      {selectedMovie ? (
        <>
          <div
            className="modal__container"
            onClick={() => setSelectedMovie(null)}
          ></div>
          <div className="modal">
            <div className="modal__header">
              <div className="modal__header__title">{selectedMovie.name}</div>
              <div
                className="modal__header__close"
                onClick={() => setSelectedMovie(null)}
              >
                X
              </div>
            </div>
          </div>
          <div className="modal__body">
            <div className="modal__body__img">
              <img src={selectedMovie.image} alt="" />
            </div>
            <h2>#{randomNumber()} in Croatia today</h2>
            <div className="modal__body__information">
              <p>Genres: {selectedMovie.genre}</p>
              <p>Runtime: {selectedMovie.runtime}</p>
            </div>
            <div className="modal__body__description">
              <p>Such a great movie. You will enjoy it. Trust me.</p>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
export default Netflix;
