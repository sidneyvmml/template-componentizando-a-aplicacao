import { useEffect, useState } from 'react';
import { GenreResponseProps } from './@types/GenreResponseProps';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import { api } from './services/api';

import './styles/global.scss';




export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1); 
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps); 

    api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    })
 
  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar selectedGenreId={selectedGenreId} handleClickButton={handleClickButton} />
      <Content selectedGenre={selectedGenre} selectedGenreId={selectedGenreId} />
    </div>
  )
}