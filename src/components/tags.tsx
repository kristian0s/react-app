import card from "./../assets/card.svg";

const Tags = () => {
    return <div className="tags">
        <div className="card-tag">
            <label className="card-label">Pay!</label>
            <img className="card-icon" src={card} alt="card image" />
        </div>
        <div className="best-tag">
            <label className="best-label">The Best!</label>
        </div>
        </div>
  };
  
  export default Tags;