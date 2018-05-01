declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');

class Head extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <h1>Renderizando en React!</h1>

                    <label for="id">Last Name</label>
                    <input type="text" id="id" name="idUser" placeholder="Escriba la cédula.."></input>

                    <label for="name">Nombre usuarios</label>
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
                </form>
            </div>

        );
    }
}

ReactDOM.render(<Head />, document.getElementById('root'));
