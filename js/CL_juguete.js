import CL_articulo from "./CL_articulo.js";
export default class CL_juguete extends CL_articulo{
    constructor(nombre,cantidad,precioBase,edad){
        super(nombre,cantidad,precioBase);
        this.edad=edad;
    }

    set edad(e){
        return this._edad=+e;
        }
        
        get edad(){
        return this._edad;
        }

descuento(){
    if(this.edad===1)
    return 10/100;
    else
    return 0;
}

montoPagar(){
    return this.precioBase*this.cantidad-this.descuento()
}

}