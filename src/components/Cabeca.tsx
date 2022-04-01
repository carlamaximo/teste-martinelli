import React from 'react';
import '../style/cabeca.css'

const Cabeca:React.FC = () => {
  return (
    <div className="div-principal-cabeca">
    <h3 className="d-flex justify-content-center my-1 h3-cabeca p-1">Cabeça</h3>
     <form action="" className="d-flex justify-content-center">

       <label htmlFor="rotação" className="form  mx-3">
         <h4 className="d-flex justify-content-center my-1">Rotação</h4>
         
        <select name="rotação" id="rotação" className="form-select form-select-md mb-1 my-2">
          <option value="rotacao-90">Rotação - 90°</option>
          <option value="rotacao-45">Rotação - 45°</option>
          <option value="em-repouso">Em Repouso</option>
          <option value="rotacao+45">Rotação 45°</option>
          <option value="rotacao+90">Rotação 90°</option>
        </select>
      </label>

      <label htmlFor="inclinação" className=" mx-3">
        <h4 className="d-flex justify-content-center my-1">Inclinação</h4>

        <select name="inclinação" id="inclinação" className="form-select form-select-md mb-1 my-2">
        <option value="para-cima">Para Cima</option>
        <option value="em-repouso">Em Repouso</option>
        <option value="para-baixo">Para Baixo</option>
        </select>
      </label>
      
     </form>
    </div>
  );
}

export default Cabeca;