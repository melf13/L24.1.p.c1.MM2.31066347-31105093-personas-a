/* Sea el nombre y el sexo de varias personas (F-M). Se necesita un programa que lea estos 
datos y reporte al final: el porcentaje de mujeres procesadas y si hay más hombres, más 
mujeres o ambos por igual. 
Se tienen las siguientes personas: Luisa, Ana, José, Carmen, Rosa, José, María, Luz, Rafael, 
Liz, Marcos y Leo; la salida requerida presenta el siguiente formato: 

Porcentaje de mujeres procesadas: 58.33% 
Hay más mujeres */

import CL_clase from "./CL_clase.js"
import CL_personas from "./CL_personas.js"
 
let persona1 = new CL_personas ('Luisa','F')
let persona2 = new CL_personas ('Ana','F')
let persona3 = new CL_personas ('Jose','M')
let persona4 = new CL_personas ('Carmen','F')
let persona5 = new CL_personas ('Rosa','F')
let persona6 = new CL_personas ('Jose','M')
let persona7 = new CL_personas ('Maria','F')
let persona8 = new CL_personas ('Luz','F')
let persona9 = new CL_personas ('Rafael','M')
let persona10 = new CL_personas ('Liz','F')
let persona11 = new CL_personas ('Marcos','M')
let persona12 = new CL_personas ('Leo','M')
let clase = new CL_clase()

clase.procesarPersonas(persona1)
clase.procesarPersonas(persona2)
clase.procesarPersonas(persona3)
clase.procesarPersonas(persona4)
clase.procesarPersonas(persona5)
clase.procesarPersonas(persona6)
clase.procesarPersonas(persona7)
clase.procesarPersonas(persona8)
clase.procesarPersonas(persona9)
clase.procesarPersonas(persona10)
clase.procesarPersonas(persona11)
clase.procesarPersonas(persona12)

let salida = document.getElementById ("salida")
salida.innerHTML +=
'<br>Porcentaje de mujeres procesadas:'+
clase.porcMujeres();
salida.innerHTML +=
'<br>'+
clase.hayMas();