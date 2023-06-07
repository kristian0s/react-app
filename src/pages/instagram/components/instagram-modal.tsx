const InstagramModal = () => {
  return;

  <>
    <div className="modal__container" onClick={() => handleClose()}></div>
    <div className="modal">
      <div className="modal__header">
        <div className="modal__header__title">{selectedMovie.name}</div>
        <div className="modal__header__close" onClick={() => handleClose()}>
          X
        </div>
      </div>
    </div>
    <div className="modal__body">
      <div>
        <img className="modal__body__img" src={selectedMovie.image} alt="" />
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
  </>;
};

export default InstagramModal;
