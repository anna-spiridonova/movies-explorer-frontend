import "./FilterCheckbox.css";
// import { useState } from "react";


function FilterCheckbox({ isChecked, onChange }) {
	// const [isChecked, setIsChecked] = useState(false);
	// function handleCheckboxChange() {
	// 	setIsChecked(!isChecked);
	// }

  return(
		<div className="filter">
			<label className="filter__label"> 
    		<input type="checkbox" className="filter__checkbox" checked={isChecked} onChange={onChange}/>
				<span className="filter__checkbox-mask"></span>
			</label> 
			<span className="filter__caption">Короткометражки</span>
		</div>
	);
}

export default FilterCheckbox;