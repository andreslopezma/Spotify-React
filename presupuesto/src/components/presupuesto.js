import React, { Fragment, useState } from "react";
import Error from "./error";
import PropTypes from 'prop-types';


const Pregunta = ({ guardarPresupuesto, guardarRestante, actulizarPregunta }) => {
    // definir el state
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    // Funcion que lee el presupuesto
    const definirPresupuesto = e => {
        guardarCantidad(parseInt(e.target.value, 10));
    }

    // submit para definir el presupuesto
    const agregarpresupuesto = e => {
        e.preventDefault();
        // Validar 
        if (cantidad < 1 || isNaN(cantidad)) {
            guardarError(true);
            return;
        }
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actulizarPregunta(false);
    }

    return (
        <Fragment>
            <h2>Coloca tu Presupuesto</h2>

            {error ? <Error mensaje="El Presupuesto es Incorrecto" /> : null}

            <form onSubmit={agregarpresupuesto}>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="coloca tu presupuesto"
                    onChange={definirPresupuesto}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir presupuesto"
                />
            </form>
        </Fragment>
    );
}

Pregunta.propTypes = {
    guardarPresupuesto: PropTypes.func.isRequired,
    guardarRestante: PropTypes.func.isRequired,
    actulizarPregunta: PropTypes.func.isRequired
}
export default Pregunta;