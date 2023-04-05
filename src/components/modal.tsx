import phone from "./../assets/phone.svg";

const Modal = () => {
  return (
    <div className="modal">
      <div className="modal__header">
        <img className="modal__header__img" src={phone} alt="phone image" />
      </div>
      <div className="modal__content">
        <h2 className="modal__content__title">Incoming call!</h2>
        <div className="modal__content__num">+385123456789</div>
      </div>
      <div className="modal__lower">
        <button className="modal__lower__btn--accept">Accept!</button>
        <button className="modal__lower__btn--decline">Decline!</button>
      </div>
    </div>
  );
};

export default Modal;
