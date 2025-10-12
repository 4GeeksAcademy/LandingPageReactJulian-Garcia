import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import Navbar from "./Navbar.jsx"
import Banner from "./Banner.jsx"
import Card from "./Card.jsx"

//create your first component


const Home = () => {

const birds = [
		{name:"El secretario", description:"(Sagittarius serpentarius)", img:"https://www.chapultepec.org.mx/wp-content/uploads/2020/05/aves-mas-raras-exoticas-.jpg"},
		{name:"El azulejo de las montañas", description:"(Sialia currucoides)", img:"https://www.chapultepec.org.mx/wp-content/uploads/2020/05/aves-mas-raras-exoticas-8.jpg"},
		{name:"El bigotudo ", description:"(Panurus biarmicus)", img:"https://www.chapultepec.org.mx/wp-content/uploads/2020/05/aves-mas-raras-exoticas-9.jpg" }
	]

	return (
		<div>
        <Navbar/>
		<Banner/>
		<div className="container">
			<div className="row">
		{birds.map((item, index) =>( 
				
				<Card  key={index} name={item.name} description={item.description} img={item.img} />
			))}
			</div>
			</div>
		</div>
	);
};

export default Home;