const Vjezba2604 = () => {
  //nizovi
  let arr = ["mama", "tata", "baka", "dida"];
  for (let i = 0; i < arr.length; i++) {
    // if (arr[i] == "baka") {
    //    break;
    // }
    //console.log
    // }
    //console.log(arr[i]);
    // if (arr[i] == "tata") {
    //   delete arr[i];
    // }
  }
  //delete arr[1];
  //arr.push("Ivan");
  //console.log("nas array je: ", arr);

  //Funkcije
  let baka;
  function bringBaka() {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == "baka") {
        baka = arr[i];
        return baka;
      }
    }
  }
  const printText = (text: string) => {
    return text;
  };

  //Objekti
  type CarType = {
    [key: string]: number | string;
  };
  let car: CarType = {
    obujamMotora: 1600,
    pogon: "AWD",
    marka: "Mercedes",
    brojVrata: 5,
    motor: "Dizel",
    godinaProizvodnje: 2021,
    snaga: "105 ks",
    boja: "crna",
    brzina: "205 km/h",
    model: "C200",
  };

  const recenica =
    "Kupio sam novi " +
    car.marka +
    " " +
    car.model +
    ", " +
    car.godinaProizvodnje +
    "godiste. Ima " +
    car.snaga +
    ".";

  console.log(recenica);

  const printValue = (key: string) => {
    return car[key];
  };

  //Zadatak

  const brojevi = [12, 98, 65, 4, 63, 51, 71, 582, 13, 4, 6, 9, 65, 56];

  let biggestNumber = 0;
  for (let i = 0; i < brojevi.length; i++) {
    if (brojevi[i] > biggestNumber) {
      biggestNumber = brojevi[i];
    } else {
      continue;
    }
  }

  console.log(biggestNumber);

  return (
    <div className="container">
      <h1>Funkcije</h1>
      <hr />
      <div>{bringBaka()}</div>
      <div>{printText("Neki tekst")}</div>
      <h1>Objekti</h1>
      <hr />
      <div>{recenica}</div>
      <h5>JSON objekta</h5>
      <pre>{JSON.stringify(car, null, 2)}</pre>
      <div>{printValue("marka")}</div>
    </div>
  );
};

export default Vjezba2604;
