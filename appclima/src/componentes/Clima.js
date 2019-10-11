import React, { Component } from 'react'
import PropTypes from 'prop-types'


class Clima extends Component {

    mostrarResultado = () => {
        // Obtener los datos de la consulta
        const {name, weather, main} = this.props.resultado

            if(!name || !weather || !main) return null

            const k = 273.15;
            const icon = `http://openweathermap.org/img/wn/${weather[0].icon}.png`;
            let alt = `imagen de ${name}`;

            return(
               <div className="row">
                    <div className="col s12 m8 l6 offset-m2 offset-l3">
                        <h1 className="card-title">{name}<img src={icon} alt={alt}/></h1>
                        <span id="temp">{(main.temp - k).toFixed(2)} &deg;C</span>
                        <div className="row">
                            <div className="col s6">
                                <span id="max">Temp. Máx {(main.temp_max - k).toFixed(2)} &deg;C</span>
                            </div>
                            <div className="col s6">
                                <span id="min">Temp. Min {(main.temp_min - k).toFixed(2)} &deg;C</span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    
    render() { 

        return ( 
            
            <div className="container">
                <h1>{this.mostrarResultado()}</h1>
            </div>
         );
    }
}
Clima.propTypes ={
    resultado: PropTypes.object.isRequired
} 

export default Clima;