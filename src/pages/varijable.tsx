import { useState } from "react";

type Usertype = {
  name: string;
  lastName: string;
  age: number;
  height: string;
  guitars: {
    prva: string;
    druga: string;
    treca: string;
  };
};

const Varijable = () => {
  const [value, setValue] = useState<number>(3.14);

  const pi: number = 3.14;
  const number: number = 4;
  let color: string = "red";
  //dostupne marke automobila
  let car: "bmw" | "ferrari" | "audi" = "bmw";

  const obj: Usertype = {
    name: "Ivan",
    lastName: "Sakoman",
    age: 29,
    height: "183cm",
    guitars: {
      prva: "Fender",
      druga: "Seagul",
      treca: "Schecter",
    },
  };

  color = "green";
  color = "asd";

  //obje vrijednosti moraju biti true, kako bi program ušao u if loop
  if (pi & number) {
    console.log(pi);
  }

  //samo jedna vrijednost mora biti true
  if (pi | number) {
  }

  const addOnOurValue = (ourValue: number, secondNumber: number) => {
    return number + ourValue + secondNumber;
  };

  const handleValue = () => {
    const input = document.getElementsByClassName(
      "input"
    )[0] as HTMLInputElement;
    console.log(input.value);
    setValue(Number(input.value));
  };

  const name: string = "Ananas";
  const calories: number = 105;
  const edable: boolean = true;
  const colour: string = "žuta";

  return (
    <div className="container">
      <h1>Varijable vježba</h1>
      <div>
        <h4>Vrijednost pi varijable je: {pi + "5"}</h4>
        <h4>Vrijednost color varijable je: {color}</h4>
        <h4>Vrijednost car varijable je: {car}</h4>
      </div>
      <hr />
      <div>
        <h4>Vrijednost našeg statea je: {value}</h4>
        <input className="input" type="number" />
        <button onClick={() => handleValue()}>Submit</button>
      </div>
      <hr />
      <div>
        Rezultat naše funkcije je: {addOnOurValue(5, 3)}
        <div />
      </div>
      <hr />
      <div>
        <h4>
          Vrijednosti našeg objekta su:
          {obj.name} {obj.lastName}
        </h4>
        <div>Godine: {obj.age}</div>
        <div>Visina: {obj.height}</div>
        <div>
          Gitare: {obj.guitars.prva}, {obj.guitars.druga}, {obj.guitars.treca}
        </div>
      </div>
      <hr />
      <div>
        <table className="table">
          <tr className="table__row">
            <th>Ime</th>
            <th>Kalorije</th>
            <th>Boja</th>
            <th>Jestivost</th>
          </tr>
          <tr className="table__row">
            <td>{name}</td>
            <td>{calories} cal</td>
            <td>{colour}</td>
            <td>{edable ? "da" : "ne"}</td>
          </tr>
        </table>
      </div>
      <hr />
    </div>
  );
};

export default Varijable;
