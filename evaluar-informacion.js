function evaluarInformacion(tieneFuente, estaRevisada) {
    if (tieneFuente === true && estaRevisada === true) {
      return "La información puede enviarse con responsabilidad a la comunidad."
    } else {
      return "La información debe revisarse  con criterio antes de compartirlo a los démas."
    }
  }
  
  const resultado = evaluarInformacion(true, false)
  
  console.log("Evaluación y revisión de información:")
  console.log(resultado)
  
