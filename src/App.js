import React, { useState, useEffect } from "react";
import api from './services/api';

import "./styles.css";

function App() {
  const [projects, setprojects] = useState([]);


  async function handleAddRepository() {
    // TODO
  }

  async function handleRemoveRepository(id) {
    // TODO
  }

  return (
    <div>
      <ul data-testid="repository-list">
        <li>           
          {
            api.get('projects').then(response => {
            setprojects(response,data);
            })
          };

          <button onClick={() => handleRemoveRepository(1)}>
            Remover
          </button>
        </li>
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
