import React from 'react'; // Importa React si no está importado previamente
import HtmlSantiLauta from './htmlSantiLauta.jsx'; // Ajusta la ruta según la ubicación de "htmlSantiLauta.jsx"

class ComponenteLauanti extends React.Component {
  render() {
    return (
      <div>
        <h1>Componente Lauanti</h1>
        <p>Aquí puedes usar el componente HtmlSantiLauta:</p>
        <HtmlSantiLauta />
      </div>
    );
  }
}

export default ComponenteLauSanti;
