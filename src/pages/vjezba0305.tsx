import { useEffect } from "react";

const Vjezba0305 = () => {
  //Zadaci
  //1.Dohvatimo box i promjenimo mu background-color (kroz JS)
  //2.Dodamo dodatnu klasu na box koja ce povecati njegove dimenzije
  //3.Na klik animiramo box do 30px i nazad (kroz JS)
  //3.2.Animirati box dijagonalno do (30px, 30px) i nazad do 50px
  //4.Kreiramo funkciju koja ce imati lokalnu varijablu u kojoj cemo izracunait sumu 2 parametra i rezultat ispisati unutar box-a
  //5.dodaj onClick event i na klik smanji dimenzije box-a

  useEffect(() => {
    const element = document.querySelector("box") as HTMLDivElement;
    element.style.backgroundColor = "red";
  });

  let position = 0;
  let reverse = false;

  useEffect(() => {
    const box = document.getElementsByClassName("box")[0] as HTMLDivElement;
    const frame = () => {
      if (reverse) {
        position--;
      } else {
        position++;
      }
      const currentPosition = position + "px";

      if (position == 30) {
        reverse = true;
      }
      if (position == 0) {
        reverse = false;
      }

      box.style.marginLeft = currentPosition;
    };
    setInterval(frame, 200);
  }, []);

  return (
    <div className="container">
      <h1>Vjezba0305</h1>
      <hr />

      <hr />
      <h4>3. Zadatak</h4>
      <div className="box"></div>
      <hr />
    </div>
  );
};

export default Vjezba0305;
