import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { useState } from "react";
import "./Sliders.css";


function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    "Slide 1",
    "Slide 2",
    "Slide 3",
    "Slide 4",
    "Slide 5",
  ];

  
  function hideInactiveSlides(currentIndex) {
    const slides = document.querySelectorAll(".slide");
    slides.forEach((slide, index) => {
      if (index === currentIndex) {
        slide.style.display = "block"; // Mostrar el slide activo
      } else {
        slide.style.display = "none"; // Ocultar los slides inactivos
      }
    });
  }
  

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      hideInactiveSlides()
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };



  return (
    <div className="App">
      <h1>Slider React Simple</h1>
      <div className="slider">
        <button onClick={prevSlide} className="prev-button">
          Anterior
        </button>
        <div className="slide-content">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === currentIndex ? "active" : ""}`}
            >
              {slide}
            </div>
          ))}
        </div>
        <button onClick={nextSlide} className="next-button">
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default App;