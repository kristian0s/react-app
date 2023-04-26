const Petlje = () => {
  const handleValue = () => {
    const input = document.getElementsByClassName(
      "input"
    )[0] as HTMLInputElement;

    const inputValue = Number(input.value);
    console.log(inputValue);

    //Zadatci
    //1. ispisati u konzolu jeli zadani broj neparan

    /*
    if (inputValue % 2 == 0) {
      console.log(inputValue);
    } else {
      console.log("Broj je neparan!");
    }
    */

    //2. ispisati u konzolu brojeve od 0 do zadanog broja

    /*
    for (let i = 0; i < inputValue; i++) {
      console.log(i);
    }
    */

    //3. izračunaj opseg kruga gdje je zadani broj polumjer (pi*r*2)

    /*
    let result = 0;
    const pi = 3.14;

    result = pi * inputValue * 2;

    console.log(result);

    */

    //4. Brojevi do zadanog ispisani u stringu

    let x = [];
    for (let i = 0; i < inputValue; i++) {
      x.push(i + ",");
    }
    console.log(x);
  };

  return (
    <div className="container">
      <h1>Petlje</h1>
      <hr />
      <div>
        <input className="input" type="number" />
        <button onClick={() => handleValue()}>Submit</button>
      </div>
    </div>
  );
};

export default Petlje;
