import "./AboutMe.css";
import my_photo from "../../images/my-photo.png";

function AboutMe() {
  return <section className="about-me">
		<h2 className="main__heading">Студент</h2>
		<div className="about-me__container">
			<div className="about-me__info">
				<h3 className="about-me__name">Анна</h3>
				<p className="about-me__about">Фронтенд-разработчик, 30 лет</p>
				<p className="about-me__description">
					Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё 
					увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, 
					начал заниматься фриланс-заказами и ушёл с постоянной работы.
				</p>
				<a className="about-me__link" href="https://github.com/anna-spiridonova" target="_blank" rel="noreferrer">Github</a>
			</div>
			<img src={my_photo} className="about-me__photo" alt="Фото студента"/>
		</div>
	</section>;
}

export default AboutMe;
