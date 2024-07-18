export default class CL_clase {
    constructor() {
        this.contHom = 0;
        this.contMuj = 0;
        this.contPer = 0;
        
    }
    procesarPersonas(per) { 
        this.contPer++;
    if (per.sexo == "F") {
        this.contMuj++;
    }
    if (per.sexo == "M") {
        this.contHom++;
    }
    }
 hayMas() {
     if (this.contHom > this.contMuj) {
        return 'Hay mas hombres'
       }
    else {
        return 'Hay mas mujeres'
    }
}
    porcMujeres() {
        return (this.contMuj /this.contPer) * 100
    }
    }