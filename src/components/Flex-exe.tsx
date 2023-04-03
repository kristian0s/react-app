import diploma from "./../assets/diploma.svg";
import finger from "./../assets/finger.svg";
import home from "./../assets/home.svg";

const FlexExe = () => {
  return (
    <>
      <div className="flex">
        <div className="flex__left">
          <img
            src="https://source.unsplash.com/random/50x50/?monkey"
            alt="monkey image"
          />
          <label className="flex__left__lbl">Hej!</label>
        </div>
        <div>
          <img className="flex__icon" src={diploma} alt="academic hat image" />
        </div>
      </div>

      <div className="flex flex--second">
        <label className="flex__lbl">KR</label>
        <img className="flex__img" src={finger} alt="fingerprint image" />
      </div>

      <div className="flex flex--third">
        <div>
          <img className="flex__img" src={home} alt="home image" />
          <span>text</span>
        </div>
      </div>
    </>
  );
};

export default FlexExe;
