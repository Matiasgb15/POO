// Clase Puerta
class Puerta {
  constructor(color, tamaño) {
    this.color = color;
    this.tamaño = tamaño;
    this.estado = "cerrada";
    this.diaApertura = null;
    this.horaApertura = null;
  }

  abrir(dia, hora) {
    this.estado = "abierta";
    this.diaApertura = dia;
    this.horaApertura = hora;
  }

  cerrar() {
    this.estado = "cerrada";
    return `Puerta cerrada. Estuvo abierta el ${this.diaApertura} a las ${this.horaApertura}`;
  }
}

// Objeto puerta1 - instancia de la clase Puerta
const puerta1 = new Puerta("rojo", "grande");

// Ejemplo de ejecución
puerta1.abrir("lunes", "09:00");
console.log(puerta1.cerrar());