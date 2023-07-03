import "./Footer.css";
const year = new Date().getFullYear()

function Footer() {
  return(
		<div className="footer">
			<p className="footer__caption">Учебный проект Яндекс.Практикум х BeatFilm.</p>
			<div className="footer__container">
				<p className="footer__copyright">&copy; {year}</p>
				<nav className="footer__nav">
					<a className="footer__link" href="https://github.com/anna-spiridonova" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
					<a className="footer__link" href="https://practicum.yandex.ru" target="_blank" rel="noreferrer">Github</a>
				</nav>
			</div>
		</div>
	);
}

export default Footer;