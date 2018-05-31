var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var React = require('react');
var ReactDOM = require('react-dom');
var Head = /** @class */ (function (_super) {
    __extends(Head, _super);
    function Head() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Head.prototype.render = function () {
        return (React.createElement("div", { class: "login-page" },
            React.createElement("div", { class: "form" },
                React.createElement("form", { class: "login-form" },
                    React.createElement("input", { type: "text", placeholder: "C\u00E9dula" }),
                    React.createElement("input", { type: "password", placeholder: "Contrase\u00F1a" }),
                    React.createElement("button", null, "Entrar"),
                    React.createElement("p", { class: "message" },
                        "Crea una cuenta ",
                        React.createElement("a", { href: "#" }, "aqu\u00ED"))))));
    };
    return Head;
}(React.Component));
var Registro = /** @class */ (function (_super) {
    __extends(Registro, _super);
    function Registro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Registro.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("form", null,
                React.createElement("center", null,
                    React.createElement("h1", null, "Registro de Usuarios")),
                React.createElement("label", { for: "id" }, "C\u00E9dula del usuario"),
                React.createElement("input", { type: "text", id: "id", name: "idUser", placeholder: "Escriba su c\u00E9dula de ciudadan\u00EDa.." }),
                React.createElement("label", { for: "name" }, "Nombres y apellidos"),
                React.createElement("input", { type: "text", id: "name", name: "names", placeholder: "Escriba su nombre completo..." }),
                React.createElement("label", { for: "pas" }, "Contrase\u00F1a"),
                React.createElement("input", { type: "text", id: "name", name: "names", placeholder: "Escriba la nueva contrase\u00F1a..." }),
                React.createElement("label", { for: "name" }, "Email"),
                React.createElement("input", { type: "text", id: "name", name: "names", placeholder: "Escriba su email..." }),
                React.createElement("label", { for: "name" }, "Direcci\u00F3n"),
                React.createElement("input", { type: "text", id: "name", name: "names", placeholder: "Escriba su direcci\u00F3n..." }),
                React.createElement("label", { for: "name" }, "Tel\u00E9fono"),
                React.createElement("input", { type: "text", id: "name", name: "names", placeholder: "Escriba su tel\u00E9fono..." }),
                React.createElement("center", null,
                    React.createElement("input", { type: "submit", value: "Registrarse" })))));
    };
    return Registro;
}(React.Component));
var Reporte = /** @class */ (function (_super) {
    __extends(Reporte, _super);
    function Reporte() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Reporte.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("h1", null, "Ingreso de Reporte"),
            React.createElement("label", { for: "id" }, "C\u00E9dula del usuario"),
            React.createElement("input", { type: "text", id: "id", name: "idUser", placeholder: "Escriba la c\u00E9dula.." }),
            React.createElement("label", { for: "name" }, "Nombre usuario"),
            React.createElement("input", { type: "text", id: "name", name: "names", placeholder: "Escriba el nombre..." }),
            React.createElement("label", { for: "cuadrante" }, "Cuadrante"),
            React.createElement("select", { id: "cuadrante", name: "cuadrante" },
                React.createElement("option", { value: "norte" }, "Norte"),
                React.createElement("option", { value: "sur" }, "Sur"),
                React.createElement("option", { value: "oriente" }, "Oriente"),
                React.createElement("option", { value: "occidente" }, "Occidente")),
            React.createElement("label", { for: "subject" }, "Reporte"),
            React.createElement("textarea", { id: "subject", name: "subject", placeholder: "Escriba el detalle del problema...", style: "height:200px" }),
            React.createElement("input", { type: "submit", value: "Enviar" })));
    };
    return Reporte;
}(React.Component));
ReactDOM.render(React.createElement(Head, null), document.getElementById('log'));
ReactDOM.render(React.createElement(Reporte, null), document.getElementById('rep'));
ReactDOM.render(React.createElement(Registro, null), document.getElementById('reg'));
//# sourceMappingURL=app.js.map