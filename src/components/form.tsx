const Form = () => {
  return (
    <div className="form-cont">
      <h2 className="form-cont__title">Form</h2>
      <form>
        <ul className="form-cont__lst">
          <li>
            <label className="form-cont__form-cont__lst__form-cont__lbl">
              Name:
            </label>
            <input
              className="form-cont__form-cont__lst__form-cont__inpt"
              type="text"
            />
          </li>
          <li>
            <label className="form-cont__form-cont__lst__form-cont__lbl">
              Email:
            </label>
            <input
              className="form-cont__form-cont__lst__form-cont__inpt"
              type="email"
            />
          </li>
          <li>
            <label className="form-cont__form-cont__lst__form-cont__lbl">
              Message:
            </label>
            <textarea></textarea>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default Form;
