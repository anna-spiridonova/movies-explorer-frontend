import "./Portfolio.css";
import arrow from "../../images/link-arrow.svg";

function Portfolio() {
  return(
		<section className="portfolio">
			<h2 className="portfolio__title">Портфолио</h2>
			<a className="app__button portfolio__link" href="https://github.com/anna-spiridonova/how-to-learn" target="_blank" rel="noreferrer">
				<p className="portfolio__link-name">Статичный сайт</p>
				<img className="portfolio__link-img" src={arrow} alt="Иконка стрелки" />
			</a>
			<a className="app__button portfolio__link" href="https://github.com/anna-spiridonova/russian-travel" target="_blank" rel="noreferrer">
				<p className="portfolio__link-name">Адаптивный сайт</p>
				<img className="portfolio__link-img" src={arrow} alt="Иконка стрелки" />
			</a>
			<a className="app__button portfolio__link" href="https://github.com/anna-spiridonova/react-mesto-api-full-gha" target="_blank" rel="noreferrer">
				<p className="portfolio__link-name">Одностраничное приложение</p>
				<img className="portfolio__link-img" src={arrow} alt="Иконка стрелки" />
			</a>
		</section>
	);
}

export default Portfolio;