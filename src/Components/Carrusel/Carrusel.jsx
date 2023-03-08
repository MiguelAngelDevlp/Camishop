import bagImage from '../../Assets/nba-wallpapwer.webp'
import futbol from '../../Assets/futbol2.jpg'
import fut from '../../Assets/futbol5.jpg'
import './Carrusel.css'


import { useState } from 'react';

const Carrusel = ()=> {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex(activeIndex === 0 ? 2 : activeIndex - 1);
  };

  const handleNext = () => {
    setActiveIndex(activeIndex === 2 ? 0 : activeIndex + 1);
  };

  return (
<div>



   
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className={activeIndex === 0 ? "active" : ""} aria-current={activeIndex === 0} aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className={activeIndex === 1 ? "active" : ""} aria-current={activeIndex === 1} aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className={activeIndex === 2 ? "active" : ""} aria-current={activeIndex === 2} aria-label="Slide 3"></button>
      </div>


      <div className="carousel-inner">
        <div className={activeIndex === 0 ? "carousel-item active" : "carousel-item"}>
          <img src={bagImage} className="d-block w-100" alt="Slide 1" />
        </div>
        <div className={activeIndex === 1 ? "carousel-item active" : "carousel-item"}>
          <img src={futbol} className="d-block w-100" alt="Slide 2" />
        </div>
        <div className={activeIndex === 2 ? "carousel-item active" : "carousel-item"}>
          <img src={fut} className="d-block w-100" alt="Slide 3" />
        </div>
      </div>


      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" onClick={handlePrev}>
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden"></span>
      </button>

      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" onClick={handleNext}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden"></span>
      </button>
    </div>

</div>  
  );
}

export default Carrusel
