import React from "react";
import './Btn_ini.css';

const Btn_ini = ({titulo="por defecto"}) => {
    return (
      <div className="Card">
        {titulo}
      </div>
    )
  }
  
  export default Btn_ini