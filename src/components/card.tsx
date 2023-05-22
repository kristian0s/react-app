import Button from "./button";

type CardProps = {
  title: string;
};

const Card = ({ title }: CardProps) => {
  return (
    <div className="card">
      <div className="card__img">
        <img
          src="https://source.unsplash.com/random/240x160/?random"
          alt="random image"
        />
      </div>
      <div className="card__title">{title}</div>
      <div className="card__description">
        LoreM ipsuM dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
      <div>Heee</div>
      <div>HH</div>
      <div className="card__footer">
        <Button value="OK" color="green" />
        <Button value="Cancel" />
      </div>
    </div>
  );
};

export default Card;
