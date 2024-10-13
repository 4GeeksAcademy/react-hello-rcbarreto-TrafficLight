import React, {useState} from "react";



const TrafficLight = () => {

    const   [color , setColor ] = useState("rojo");

        return (
            <div className="d-flex flex-column align-items-center ">
                
                <div className="bg-dark" style={{width: "40px", height: "250px"}}></div>
               
                <div className="bg-dark rounded-5 d-flex justify-content-evenly flex-column align-items-center " style={{width: "200px", height: "400px"}}>
                    
                    <div className= {"rounded-circle  bg-danger " + (color == "rojo"? "redLight":"")} style={{width: "100px", height: "100px"}} onClick={() => setColor("rojo")} ></div>
                    <div className= {"rounded-circle bg-warning "+ (color == "amarillo"? "yellowLight":"")} style={{width: "100px", height: "100px"}}onClick={() => setColor("amarillo")}></div>
                    <div className= {"rounded-circle bg-success "+ (color == "verde"? "greenLight":"")} style={{width: "100px", height: "100px"}} onClick={() => setColor("verde")} ></div>

                </div>
                <div>
                    
                    <button onClick={() => setColor("verde")}>
                        Cambia la luz del semaforo
                    </button>
                    <button>
                        Cambia a purpura
                    </button>
                </div>
            </div>
        );
    };
    
export default TrafficLight;