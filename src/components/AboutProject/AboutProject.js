import './AboutProject.css';

function AboutProject() {
  return(
		<div className='about'>
			<h2 className='main__heading'>О проекте</h2>
			<ul className='about__list'>
				<li className='about__item'>
					<h3 className='about__title'>Дипломный проект включал 5 этапов</h3>
					<p className='about__subtitle'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
				</li>
				<li className='about__item'>
					<h3 className='about__title'>На выполнение диплома ушло 5 недель</h3>
					<p className='about__subtitle'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
				</li>
			</ul>
			<div className='about__scale'>
				<div className='about__week-container about__week-container_type_backend'>
					<p className='about__week'>1 неделя</p>
				</div>
				<div className='about__week-container about__week-container_type_frontend'>
					<p className='about__week'>4 недели</p>
				</div>
				<p className='about__dev'>Back-end</p>
				<p className='about__dev'>Front-end</p>
			</div>
		</div>
	);
}

export default AboutProject;