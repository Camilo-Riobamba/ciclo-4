const calcularPorcentajes = (limiteCO, limiteCO2, limiteHC, limiteO2,
    valorCO, valorCO2, valorHC, valorO2) => {

    let porcentajeCO = limiteCO ? valorCO * 100 / limiteCO : 0;
    let porcentajeCO2 = limiteCO2 ? valorCO2 * 100 / limiteCO2 : 0;
    let porcentajeHC = limiteHC ? valorHC * 100 / limiteHC : 0;
    let porcentajeO2 = limiteO2 ? valorO2 * 100 / limiteO2 : 0;

    calcularPorcentajes = {
        "porcentajeCO ": porcentajeCO + "%",
        "porcentajeCO2": porcentajeCO2 + "%",
        "porcentajeHC ": porcentajeHC + "%",
        "porcentajeO2 ": porcentajeO2 + "%"
    }
}

console.log(calcularPorcentajes)

const registarCO = (value) => {


}

module.exports.registrarCO = registarCO;
module.exports.calcularPorcentajes = calcularPorcentajes;

const registarCO2 = (value) => {

    //if registrarCO > 0 , < 10 

}

module.exports.registrarCO2 = registrarCO2;
module.exports.calcularPorcentajes = calcularPorcentajes;

const registarHC = (value) => {



}

module.exports.registrarHC = registrarHC;
module.exports.calcularPorcentajes = calcularPorcentajes;

const registarO2 = (value) => {



}

module.exports.registrarO2 = registrarO2;
module.exports.calcularPorcentajes = calcularPorcentajes;

/*
global.rangosCO = [
    { etriqueta: 'Parametro CO en rango estandar', de: 0, hasta: 10 },
    { etriqueta: 'Parametro CO fuera de rango', de: 11, hasta: 15 },
]

global.rangosCO2 = [
    { etriqueta: 'Parametro CO2 en rango estandar', de: 0, hasta: 20 },
    { etriqueta: 'Parametro CO2 fuera de rango', de: 21, hasta: 30 },
]

global.rangosHC = [
    { etriqueta: 'Parametro HC en rango estandar', de: 0, hasta: 1000 },
    { etriqueta: 'Parametro HC fuera de rango', de: 10001, hasta: 11000 },
]

global.rangosO2 = [
    { etriqueta: 'Parametro O2 en rango estandar', de: 0, hasta: 22 },
    { etriqueta: 'Parametro O2 fuera de rango', de: 13, hasta: 30 },
]
*/