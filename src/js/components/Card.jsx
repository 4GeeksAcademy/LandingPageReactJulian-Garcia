import React from "react";

const Card = (props) => {

    return (

            <div className=" m-3 col-lg-4 col-md-4 col-sm-6" style={{ width: "fit-content", }}>
                <div className="card mt-2 " style={{ width: "18rem", }}>
                    <img src={props.img} className="card-img-top" alt="..." style={{ height: "19rem", }}/>
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">{props.description}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
    

    )
}

export default Card;