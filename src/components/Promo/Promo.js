import './Promo.css';
import landing_img from "../../images/landing-img.svg";

function Promo() {
  return (
    <section className="promo">
      <h1 className="promo__heading">Учебный проект студента факультета Веб-разработки.</h1>
      <img src={landing_img} className="promo__landing-img" alt="Абстрактное изображение с эллипсами"/>
  </section>
  );
}

export default Promo;