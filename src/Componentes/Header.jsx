import React from "react";
import './Header.css';

const Header = ({titulo_principal, titulo, titulo1, titulo2}) => {
  return (
    <body>
        <header>
             <div className="logo">{titulo_principal}</div>
              <nav>
                  <a href="#" style={{ marginRight: '15px' }}>{titulo}</a>
                  <a href="#">{titulo1}</a>
                  <a href="#" style={{ marginLeft: '10px', marginRight: '15px' }}>{titulo2}</a>
              </nav>
        </header>
    </body>
  );
};
export default Header;
