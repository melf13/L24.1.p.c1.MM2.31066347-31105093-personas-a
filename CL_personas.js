export default class CL_personas {
constructor(n, s) {
    this.nombre = n 
    this.sexo = s
    }
set nombre (n) {
    return this._nombre = n 
}
get nombre () {
    return this._nombre
}
set sexo (s) {
    return this._sexo = s
}
get sexo () {
    return this._sexo
 }
}