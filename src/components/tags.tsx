import card from "./../assets/card.svg";

const Tags = () => {
  return (
    <div className="tags">
      <div className="tags__card">
        <label className="tags__card__lbl">Pay!</label>
        <img className="tags__card__icon" src={card} alt="card image" />
      </div>
      <div className="tags__best">
        <label className="tags__best tags__best__lbl">The Best!</label>
      </div>
    </div>
  );
};

export default Tags;
