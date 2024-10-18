import React, {useState} from "react";



const TrafficLight = () => {

    const   [color , setColor ] = useState("rojo");
    const [divHeight, setDivHeight] = useState("400px");
    const [nuevoDiv, setDiv] = useState(null);

        return (
            <div className="d-flex flex-column align-items-center ">
                
                <div className="bg-dark" style={{width: "40px", height: "250px"}}></div>
               
                <div className="bg-dark rounded-5 d-flex justify-content-evenly flex-column align-items-center " style={{width: "200px", height: divHeight}}>
                    
                    <div className= {"rounded-circle  bg-danger " + (color == "rojo"? "redLight":"")} style={{width: "100px", height: "100px"}} onClick={() => setColor("rojo")} ></div>
                    <div className= {"rounded-circle bg-warning "+ (color == "amarillo"? "yellowLight":"")} style={{width: "100px", height: "100px"}}onClick={() => setColor("amarillo")}></div>
                    <div className= {"rounded-circle bg-success "+ (color == "verde"? "greenLight":"")} style={{width: "100px", height: "100px"}} onClick={() => setColor("verde")} ></div>
                    {nuevoDiv}

                </div>
                <div>
                    

                <button className="btn btn-primary mt-3" onClick={() => {
        
                    setDivHeight("400px");
                    setDiv(null);
                    
                    if (color === null) {
                        setColor("rojo");
                    }else if (color === "rojo") {
                        setColor("amarillo");
                    } else if (color === "amarillo") {
                        setColor("verde");
                    } else if (color === "verde") {
                        setColor("rojo");
                    }
                    }}
                >               
                    Cambia la luz del semaforo

                </button>

                <button className="btn btn-primary mt-3" onClick={() => {
                    
                    setColor(null);
                    setDivHeight("600px"); // Cambiar altura del contenedor
                    setDiv(
                        <div
                            className="rounded-circle purpleLight"
                            style={{width: "100px", height: "100px" }}
                        ></div>
                    ); 
                }}

                > 
                    Cambia a púrpura
            </button>

        </div>
            </div>
        );
    };
    
export default TrafficLight;