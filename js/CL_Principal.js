import CL_juguete from "./CL_juguete.js";

let juguete= new CL_juguete("Carrito",2,10,2)

let salida=document.getElementById("salida")

salida.innerHTML=`
Nombre del juguete: ${juguete.nombre}
<br>cantidad: ${juguete.cantidad}
<br>Precio Base: $${juguete.precioBase}
<br>Edad recomendada del juguete: ${juguete.edad}
<br>Monto a pagar por ${juguete.nombre}: $${juguete.montoPagar()}
`