import React from "react";


const Banner = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://static.nationalgeographicla.com/files/styles/image_3200/public/01-smartest-birds-NationalGeographic_2467639.webp?w=1600&h=1067&q=100" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Cacatúas sulfúreas</h5>
                            <p>Cacatua sulphurea citrinocristata)</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://static.nationalgeographicla.com/files/styles/image_3200/public/02-smartest-birds-NationalGeographic_1099221.webp?w=1190&h=794" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Cuervo americano</h5>
                            <p>(Corvus brachyrhynchos) </p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://static.nationalgeographicla.com/files/styles/image_3200/public/03-smartest-bird-NationalGeographic_1958970.jpg?w=1900&h=1267" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Loro gris.</h5>
                            <p>(Psittacus erithacus erithacus).</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>


    )
}

export default Banner;