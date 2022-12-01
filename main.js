function simuladorGredito(){
    //Pedir informacion al cliente
    let capital = parseInt(prompt('¿Cuánto dinero necesitas?'));
    let cuotas = prompt('¿A cuántos cuotas?');
    let interes = 3;


if(capital >0){
    for(let i = 1; i<=1;i++){
        let cuontasPagar = capital/cuotas;
        let interesPagar = ((capital*interes)/100)/cuotas;
        let totalCuota = Math.floor(cuontasPagar + interesPagar);
        console.log(`Pagarías ${cuotas} cuotas mensuales con un interes mensual de: $${interesPagar}, con un valor de cuota mensual de: $${totalCuota} mil`)
    }
}
else {
    alert("Falta un numero")
}
}
simuladorGredito()


