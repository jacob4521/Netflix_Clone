import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'



const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDg5N2JmOGRmY2EwYjg4MjQzNDQzMzdlNDRlNmNlNSIsIm5iZiI6MTc2MjA5NTM4NS45MDIwMDAyLCJzdWIiOiI2OTA3NzExOWVlNDlkM2M1YzhmOTJmOWIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.P1QFiT8LHrMkwOiDaOmal1wCNqp9RmFLEUeFQgnscGI'
    }
  };

  const handleWheel = (event) => {
    console.log(event)
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category? category:"now_playing"}?language=en-US&page=1`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results))
      .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel', handleWheel)
  }, [])

  return (
    <div className='title-cards'>
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return <div className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/original` + card.poster_path} alt="" />
            <p>{card.original_title}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default TitleCards
