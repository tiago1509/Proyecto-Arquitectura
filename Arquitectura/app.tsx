declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');

class Head extends React.Component {
    render() {
        return (
          <div class="login-page">
            <div class="form">
              <form class="login-form">
                <input type="text" placeholder="Cédula"/>
                <input type="password" placeholder="Contraseña"/>
                <button>Entrar</button>
                <p class="message">Crea una cuenta <a href="#">aquí</a></p>
              </form>
            </div>
          </div>
        );
    }
}

class Registro extends React.Component {
    render() {
        return (
          <div>
              <form>
                  <center>
                      <h1>Registro de Usuarios</h1>
                  </center>

                  <label for="id">Cédula del usuario</label>
                  <input type="text" id="id" name="idUser" placeholder="Escriba su cédula de ciudadanía.."></input>

                  <label for="name">Nombres y apellidos</label>
                  <input type="text" id="name" name="names" placeholder="Escriba su nombre completo..."></input>

                  <label for="pas">Contraseña</label>
                  <input type="text" id="name" name="names" placeholder="Escriba la nueva contraseña..."></input>

                  <label for="name">Email</label>
                  <input type="text" id="name" name="names" placeholder="Escriba su email..."></input>

                  <label for="name">Dirección</label>
                  <input type="text" id="name" name="names" placeholder="Escriba su dirección..."></input>

                  <label for="name">Teléfono</label>
                  <input type="text" id="name" name="names" placeholder="Escriba su teléfono..."></input>

                  <center>
                      <input type="submit" value="Registrarse"></input>
                  </center>
              </form>
          </div>
          );
        }
}
class Reporte extends React.Component {
    render() {
        return (
            <div>
                <h1>Ingreso de Reporte</h1>
                <label for="id">Cédula del usuario</label>
                <input type="text" id="id" name="idUser" placeholder="Escriba la cédula.."></input>
                <label for="name">Nombre usuario</label>
                <input type="text" id="name" name="names" placeholder="Escriba el nombre..."></input>
                <label for="cuadrante">Cuadrante</label>
                <select id="cuadrante" name="cuadrante">
                    <option value="norte">Norte</option>
                    <option value="sur">Sur</option>
                    <option value="oriente">Oriente</option>
                    <option value="occidente">Occidente</option>
                </select>
                <label for="subject">Reporte</label>
                <textarea id="subject" name="subject" placeholder="Escriba el detalle del problema..." style="height:200px"></textarea>
                <input type="submit" value="Enviar"></input>
            </div>
        );
    }

}

ReactDOM.render(<Head />, document.getElementById('log'));
ReactDOM.render(<Reporte />, document.getElementById('rep'));
ReactDOM.render(<Registro />, document.getElementById('reg'));
