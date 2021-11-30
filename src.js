module.exports.calcularPorcentajes = (limiteCO, limiteCO2, limiteHC, limiteO2,
    valorCO, valorCO2, valorHC, valorO2) => {

    let porcentajeCO = limiteCO ? valorCO * 100 / limiteCO : 0;
    let porcentajeCO2 = limiteCO2 ? valorCO2 * 100 / limiteCO2 : 0;
    let porcentajeHC = limiteHC ? valorHC * 100 / limiteHC : 0;
    let porcentajeO2 = limiteO2 ? valorO2 * 100 / limiteO2 : 0;

    return {
        "porcentajeCO ": porcentajeCO + "%",
        "porcentajeCO2": porcentajeCO2 + "%",
        "porcentajeHC ": porcentajeHC + "%",
        "porcentajeO2 ": porcentajeO2 + "%"
    }
}

module.exports.registarCO = (value) => {
    if(value >= global.rangosCO[0].de && value <= global.rangosCO[0].hasta){
        return global.rangosCO[0].etiqueta;
    } else if(value >= global.rangosCO[1].de && value <= global.rangosCO[1].hasta){
        return global.rangosCO[1].etiqueta;
    } else{
        return "fuera_de_rango";
    }
}

module.exports.registrarCO = registarCO;

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


global.rangosCO = [
    { etiqueta: 'Parametro CO en rango estandar', de: 0, hasta: 10 },
    { etiqueta: 'Parametro CO fuera de rango', de: 11, hasta: 15 },
]

global.rangosCO2 = [
    { etiqueta: 'Parametro CO2 en rango estandar', de: 0, hasta: 20 },
    { etiqueta: 'Parametro CO2 fuera de rango', de: 21, hasta: 30 },
]

global.rangosHC = [
    { etiqueta: 'Parametro HC en rango estandar', de: 0, hasta: 1000 },
    { etiqueta: 'Parametro HC fuera de rango', de: 10001, hasta: 11000 },
]

global.rangosO2 = [
    { etiqueta: 'Parametro O2 en rango estandar', de: 0, hasta: 22 },
    { etiqueta: 'Parametro O2 fuera de rango', de: 13, hasta: 30 },
]
