export default class CL_articulo{
    constructor(nombre,cantidad,precioBase){
        this.nombre=nombre;
        this.cantidad=cantidad;
        this.precioBase=precioBase;
    }
    set nombre(n){
        return this._nombre=n;
        }
        
        get nombre(){
        return this._nombre;
        }
    
        set cantidad(c){
            return this._cantidad=+c;
            }
            
            get cantidad(){
            return this._cantidad;
            }
    
            set precioBase(p){
                return this._precioBase=+p;
                }
                
                get precioBase(){
                return this._precioBase;
                }

    
}