class Datos_usuario{
    constructor(nombre,edad,cuotas,interes,producto){
        this.nombre = nombre;
        this.edad = edad;
        this.cuotas = cuotas;
        this.interes = interes;
        this.producto = producto;
    }
    get_datos(){
        console.log('Nombre: ', this.nombre);
        console.log('Edad: ', this.edad);
        console.log('Cuotas: ', this.cuotas);
        console.log('Interes: ', this.interes);
        console.log('Producto: ', this.producto)
    }
}

let informacionDatos = []


function simuladorGredito(){
    //Pedir informacion al cliente
    let nombre = prompt('¿Cual es tu nombre?');
    let edad = prompt('Que edad tienes')
    let producto = prompt('Que producto te interesa')
    let capital = parseInt(prompt('¿Valor del producto que necesitas?'));
    let cuotas = prompt('¿A cuántos cuotas?'); 
    let interes = 3;


    if(edad >= 18){
        if(capital >0){
            for(let i = 1; i<=1;i++){
                let cuontasPagar = capital/cuotas;
                let interesPagar = ((capital*interes)/100)/cuotas;
                let totalCuota = Math.floor(cuontasPagar + interesPagar);
                let datosUsuario = new Datos_usuario(nombre, edad, cuotas, interes,producto);
                informacionDatos.push(datosUsuario)
                console.log(informacionDatos)
                console.log(`Pagarías ${cuotas} cuotas mensuales con un interes mensual de: $${interesPagar}, con un valor de cuota mensual de: $${totalCuota} mil`)
            }
        }
else {
    alert("Falta un numero")
}
    }
    else{
        console.log('No eres mayor de edad no puedes hacer el Credito')
    }
}
simuladorGredito()

for(let datosUsuario of informacionDatos){
    datosUsuario.get_datos()
}


