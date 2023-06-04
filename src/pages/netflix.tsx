import { useState } from "react";
import { movies, MoviesType } from "../data/moviesData";
import NetflixModal from "../components/netflix-modal";

const Netflix = () => {
  const [selectedMovie, setSelectedMovie] = useState<MoviesType | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const numbers = [1, 2, 3, 5, 16, 22, 37, 40, 48, 50];

  const movieChoice = (id: number) => {
    const choice = movies.find((item) => item.id === id);
    choice ? setSelectedMovie(choice) : setSelectedMovie(null);
  };

  const randomNumber = () => {
    const randomIndex = Math.floor(Math.random() * numbers.length);
    return numbers[randomIndex];
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
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
        <NetflixModal isOpen={modalOpen} onClose={handleCloseModal} />
      ) : (
        <></>
      )}
    </div>
  );
};
export default Netflix;
