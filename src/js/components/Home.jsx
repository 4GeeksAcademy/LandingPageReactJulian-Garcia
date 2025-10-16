import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import Navbar from "./Navbar.jsx"
import Banner from "./Banner.jsx"
import Card from "./Card.jsx"
import Footer from "./Footer.jsx"

//create your first component


const Home = () => {

	const birds = [
		{ name: "El secretario", description: "(Sagittarius serpentarius)", button: "Ver más", img: "https://www.chapultepec.org.mx/wp-content/uploads/2020/05/aves-mas-raras-exoticas-.jpg" },
		{ name: "El azulejo de las montañas", description: "(Sialia currucoides)", button: "Conoce más", img: "https://www.chapultepec.org.mx/wp-content/uploads/2020/05/aves-mas-raras-exoticas-8.jpg" },
		{ name: "El bigotudo ", description: "(Panurus biarmicus)", button: "Mira más de su bigote", img: "https://www.chapultepec.org.mx/wp-content/uploads/2020/05/aves-mas-raras-exoticas-9.jpg" },
		{ name: "Quetzal", description: "(Pharomachrus)", button: "Conoce sus detalles", img: "https://desinformemonos.org/wp-content/uploads/2017/11/El-Quetzal.jpg" },
	]

	return (
		<div>
			<Navbar />
			<Banner />
			<div className="container-fluid text-center m-auto " >
				<div className="row" style={{ justifyContent: "space-between" }}>
					{birds.map((item, index) => (

						<Card key={index} name={item.name} description={item.description} img={item.img} button={item.button} />
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;