import Button from "./button";

type TitleProps = {
  title: string;
};

const Card = ({ title }: TitleProps) => {
  return (
    <div className="card">
      <div className="card__img">
        <img
          src="https://source.unsplash.com/random/240x160/?random"
          alt="random image"
        />
      </div>
      {title ? <h2>{title}</h2> : ""}
      <p className="card__desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="card__footer">
        <Button value="OK" color="green" />
        <Button value="Cancel" />
      </div>
    </div>
  );
};

export default Card;
