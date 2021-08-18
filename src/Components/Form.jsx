import React from "react";
const Form = () => {
  return (
    <form>
      <div>
        <label htmlFor="correo">Correo</label>
        <input type="text" name="correo" id="correo" />
      </div>
      <div>
        <label htmlFor="asunto">Asunto</label>
        <input type="text" name="asunto" id="asunto" />
      </div>
      <div>
        <label htmlFor="mensaje">Mensaje</label>
        <input type="text" name="mensaje" id="mensaje" />
      </div>
    </form>
  );
};

export default Form;
