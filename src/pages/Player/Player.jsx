import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    typeof: "",
    published_at: ""
  });

  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results[0]))
      .catch(err => console.error(err));
  }, []);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_BEARER_TOKEN}`
    }
  };

  function handleBackArrow() {
    navigate(-1);
  }

  return (
    <div className='player'>
      <img 
      src={back_arrow_icon} 
      alt="Back"
      onClick={handleBackArrow} />
      <iframe
        src={`https://www.youtube.com/embed/${apiData.key}`}
        frameborder="0"
        title='trailer' allowFullScreen ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
