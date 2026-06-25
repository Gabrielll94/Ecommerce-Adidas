import { useEffect, useState } from "react";
import "./carousel.css";

const frases = [
  "Impossible is nothing",
  "Corre por el planeta",
  "Adidas · Performance & Style",
  "Creatividad es la respuesta",
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % frases.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      <span className="nav-text">{frases[index]}</span>
    </div>
  );
}
