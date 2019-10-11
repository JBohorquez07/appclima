import React, {Component} from 'react';
import Header from './Header';
import Formulario from './Formulario';
import Error from './Error';
import Clima from './Clima';


class App extends Component {

  state = {
    error:'',
    consulta: {},
    resultado: {}
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.consulta !== this.state.consulta){
      this.consultarAPI();
    }
  }

  componentDidMount(){
    this.setState({
      error:false
    })
  }

  consultarAPI = () => {
    const {ciudad, pais} = this.state.consulta
      if(!ciudad || !pais) return null

    // query con fetch API
    const apikey = '3103b4d8ac7e1f97d4f32b40a3ac146d';
    // Leer URL y aplicar el API key
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apikey}`
    // Consultar con fetch
    fetch(url)
      .then(respuesta => {
        return respuesta.json()
      })
      .then(datos => {
        this.setState({
          resultado: datos
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  datosConsulta = respuesta => {
    if (respuesta.ciudad === '' || respuesta.pais === '') {
      this.setState({
        error:true
      })
    } else {
      this.setState({
        consulta: respuesta,
        error: false
      })
    } 
  }


  render() { 
    const error = this.state.error
    let resultado;

    if (error) {
      resultado = <Error mensaje = "Ambos campos son obligatorios"/>
    } else {
      resultado = <Clima resultado = {this.state.resultado}/>
    }
    

    return ( 
        <div className="container">
          <div className="card">
            <Header
              titulo = "App Clima"
            />
            <Formulario
              datosConsulta = {this.datosConsulta}
            />
          </div>
          {resultado}
        </div>
        
     )
  }
}
 
export default App;
