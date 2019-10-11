import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Formulario extends Component {

    // Crear los refs
    ciudadRef = React.createRef();
    paisRef = React.createRef();

    obtenerClima = (e) => {
        e.preventDefault();

        // Leer los refs y crear el objeto
        const respuesta = {
            ciudad: this.ciudadRef.current.value,
            pais: this.paisRef.current.value
        }
        // Enviar mediante props
        this.props.datosConsulta(respuesta);

        // Resetear el formulario
    }

    render() { 
        return (
            <div className="row">
                <form onSubmit={this.obtenerClima}>
                    <div className="input-field col s12 m8 l4 offset-m2">
                        <input id="ciudad" type="text" autoComplete="off" ref={this.ciudadRef}/>
                        <label htmlFor="ciudad">Ciudad:</label>
                    </div>
                    <div className="input-field col s12 m8 l4 offset-m2">
                        <select ref={this.paisRef}>
                            <option value="" defaultValue>Selecciona el pais</option>
                            <option value="AR">Argentina</option>
                            <option value="BR">Brasil</option>
                            <option value="CO">Colombia</option>
                            <option value="CR">Costa rica</option>
                            <option value="ES">España</option>
                            <option value="US">Estados unidos</option>
                            <option value="MX">Mexico</option>
                            <option value="PE">Peru</option>
                        </select>
                        <label htmlFor="ciudad">Pais:</label>
                    </div>
                    <div className="input-field col s12 m8 l4 offset-m2">
                        <button type="submit" className="waves-effect waves-light btn-large btn-buscar">Buscar</button>
                    </div>
                </form>
            </div>

         );
    }
}

Formulario.propTypes = {
    datosConsulta: PropTypes.func.isRequired
}
 
export default Formulario;