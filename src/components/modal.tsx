import phone from "./../assets/phone.svg";

const Modal = () => {
  return (
    <div className="modal">
      <div className="modal__header">
        <img className="modal__header__img" src={phone} alt="phone image" />
      </div>
      <div className="modal__content">
        <h2 className="modal__content__title">Dolazni poziv!</h2>
        <p className="modal__content__num">+385123456789</p>
      </div>
      <div className="modal__btn">
        <button className="modal__btn__accept">Prihvati!</button>
        <button className="modal__btn__decline">Odbij!</button>
      </div>
    </div>
  );
};

export default Modal;
