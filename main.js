let botton = document.querySelector('.boton');
let error = document.querySelector('.error');

class Datos_usuario{
    constructor(cuotas,interes,dinero){
        this.cuotas = cuotas;
        this.interes = interes;
        this.producto = dinero;
    }
}

let informacionDatos = []

botton.addEventListener('click', (event)=>{
    event.preventDefault();
    let ingresoDeCapital = Number(document.querySelector('.dinero').value);
    let numeroDeCuotas = Number(document.querySelector('.cuotas').value);
    let interes = Number(document.querySelector('.interes').value);
    document.querySelector('.tabla').innerHTML=''
     if(ingresoDeCapital > 1000000){
        for(let i = 1; i<=numeroDeCuotas;i++){
            let cuontasPagar = ingresoDeCapital/numeroDeCuotas;
            let puntoDecimalesCuotas = cuontasPagar.toFixed(2)
            let interesPagar = ((ingresoDeCapital*interes)/100)/numeroDeCuotas;
            let puntoDecimalesInteres = interesPagar.toFixed(2)
            let totalCuota = Math.floor(cuontasPagar + interesPagar);
            document.querySelector('.tabla').innerHTML = document.querySelector('.tabla').innerHTML + 
            `<tr>
                <td>${i}</td>
                <td>${puntoDecimalesCuotas}</td>
                <td>${puntoDecimalesInteres}</td>
                <td>${totalCuota}</td>
            </tr>`;
            let dineroCapital = ingresoDeCapital.toFixed(2);
            let datosInteresCuotas = interesPagar * numeroDeCuotas;
            let numeroDatosInteres = datosInteresCuotas.toFixed(2)
            let datosCuotas = totalCuota * numeroDeCuotas;
            let numeroDatosCuotas = datosCuotas.toFixed(2)
            document.querySelector('.tabla1').innerHTML = dineroCapital;
            document.querySelector('.tabla2').innerHTML = numeroDatosInteres;
            document.querySelector('.tabla3').innerHTML = numeroDatosCuotas;
            error.style.visibility = 'hidden';

            datosUsuario(puntoDecimalesCuotas, puntoDecimalesInteres, totalCuota)
        }
        
    }else{
    error.style.visibility = 'visible';
}
})
   

function datosUsuario(dinero, interes, cuotas){
    let datos = {dinero:dinero,interes:interes,cuotas:cuotas};
    informacionDatos.push(datos)

    
    let arregloDeDatos = JSON.stringify(informacionDatos);
    localStorage.setItem('arregloDatos', arregloDeDatos)   
}


