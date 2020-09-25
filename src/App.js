import React, { useEffect, useState } from "react";
import api from './services/api';

import "./styles.css";

function App() {
  const [repositories, setRepositories] = useState([]);//repositories é um array de obj!

    useEffect(() => {
      api.get('/repositories').then(response =>
        setRepositories(response.data)        //lleno mi vector
      );
      },[]); 

  async function handleAddRepository() {
    const response = await api.post('/repositories', {
      title: 'new-repository',
      url: 'https://github.com/rocketseat/new-repository',
      techs: ['Node.js', 'ReactJS']
    });
    setRepositories([...repositories, response.data]);//na data tenho o que preciso
    console.log(response.data.title);
  }
  async function handleRemoveRepository(id) {
   await api.delete(`/repositories/${id}`).then(response => console.log(response.status));// posso usar o await mesmo se a função não retorna nada-Ojo!

   const newRepositories = repositories.filter(
     repository => repository.id !== id
   );

   setRepositories(newRepositories);
  } 

  return (
    <div>
      <ul data-testid="repository-list">
        {repositories.map(repository => 
          <li key={repository.id}>            
            {repository.title}
            <button onClick={() => handleRemoveRepository(repository.id)}>
               Remover
            </button>
          </li>
        )}
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
