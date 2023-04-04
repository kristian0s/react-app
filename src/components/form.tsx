const Form = () => {
  return (
    <form>
      <ul className="formfield">
        <li>
          <label className="formfiel__lbl">Name:</label>
          <input className="formfiel--txt" type="text" />
        </li>
        <li>
          <label className="formfiel__lbl">Email:</label>
          <input className="formfield--txt" type="email" />
        </li>
        <li>
          <label className="formfiel__lbl">Message:</label>
          <textarea className="formfield--area"></textarea>
        </li>
      </ul>
    </form>
  );
};

export default Form;
