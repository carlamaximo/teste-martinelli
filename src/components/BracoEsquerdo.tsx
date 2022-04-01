import React from 'react';
import '../style/bracos.css'

const BracoEsquerdo:React.FC = () => {
  return (
    <div className="div-principal-bracos">
      <h3 className="d-flex justify-content-center my-1 mx-3 h3-braco p-1">Braço Esquerdo</h3>

      <form action="" className="d-flex justify-content-center mx-3">

    <label htmlFor="cotovelo" className="form  mx-3">
      <h4 className="d-flex justify-content-center my-1">Cotovelo</h4>
     <select name="cars" id="cars" className="form-select form-select-md mb-1 my-2">
          <optgroup label="Cotovelo">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
          </optgroup>
          <optgroup label="Pulso">
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </optgroup>
        </select>
        </label>

        <label htmlFor="" className="form  mx-3">
      <h4 className="d-flex justify-content-center my-1">Pulso</h4>
     <select name="cars" id="cars" className="form-select form-select-md mb-1 my-2">
          <optgroup label="Cotovelo">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
          </optgroup>
          <optgroup label="Pulso">
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </optgroup>
        </select>
        </label>

        </form>
    </div>
  );
}

export default BracoEsquerdo;