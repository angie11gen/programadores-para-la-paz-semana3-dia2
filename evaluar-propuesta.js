function evaluarPropuestaComunitaria(tieneLenguajeClaro, pideSoloDatosNecesarios) {
    if (tieneLenguajeClaro === true && pideSoloDatosNecesarios === true) {
      return "La propuesta está adaptada para ser compartida con la comunidad a trabajar."
    } else {
      return "La propuesta requiere ajustes de lenguaje antes de publicarse para ser respondido por el grupo de interes."
    }
}

const resultado = evaluarPropuestaComunitaria(false, true)

console.log("Evaluación de propuesta, sugerencias y seguimiento comunitario:")
console.log(resultado)
