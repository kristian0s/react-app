const Pl_cards = ({}) => {
  return (
    <div className="cards">
      <div className="cards__header">
        <img
          className="cards__header__logo"
          src="https://www.pngitem.com/pimgs/m/119-1197803_premier-league-lions-head-vector-logo-free-logo.png"
          alt="Premier League logo"
        />
        <div>
          <h3 className="cards__header__title">GAMEWEEK 17</h3>
          <h5 className="cards__header__subtitle">Premier League</h5>
        </div>
      </div>
      <div className="cards__mid">
        <div>
          <h5 className="cards__mid__title">Winning prize</h5>
          <span className="cards__mid__text">Signed BVB Jersey</span>
        </div>
        <div className="cards__mid__banner">
          <label>14 Days</label>
        </div>
      </div>
      <hr />
      <div className="cards__footer">
        <div className="">
          <h5 className="cards__footer__title">Game points</h5>
          <div>1000</div>
        </div>
        <div>
          <h5 className="cards__footer__title">Game entries</h5>
          <div>1452</div>
        </div>
        <div>
          <h5 className="cards__footer__title">Reminder</h5>
        </div>
      </div>
    </div>
  );
};

export default Pl_cards;
