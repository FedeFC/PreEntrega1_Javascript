// Ejercicio 1 - Algoritmo con un condicional


alert("Bienvenido al simulador de inversiones")
let inversionesNumero = Number(prompt("Cuantas inversiones desea analizar ?"))

for(i = 0; i < inversionesNumero; i++){

    let montoUsuario = parseFloat(prompt("Ingrese el monto que desea invertir para la inversión N° " + (i+1)))
    let tasadeInteresA = parseFloat(prompt("Cual es la tasa de interes anual para la inversión N° " + (i +1))) / 100 
    let tiempo =  Number(prompt("Cuanto tiempo desea invertir su dinero en la inversion N° " + (i+1) +" ?: Indique que opcion corresponde \n 1 - Plazo menor a un año \n 2 - Plazo igual o mayor a un año"))

    let plazoInversion = undefined
    let tasaInteresMensual = undefined
    let retornoInversion = undefined 
    
    
    if (tiempo == 1){
        plazoInversion = Number(prompt("Indique cuantos meses desea invertir su dinero en la inversión N°: " + (i+1) ))
        tasaInteresMensual = parseFloat((tasadeInteresA / 12) )
        
        retornoInversion = Number((tasaInteresMensual * plazoInversion) * 1000)
        alert(`Para la inverion N°  ${i+1} la ganancia total seria de $ ${retornoInversion}`)
         
    }else if (tiempo == 2) {
        plazoInversion = Number(prompt("Indique cuantos años desea invertir su dinero"))
        retornoInversion = Number((montoUsuario * tasadeInteresA) * plazoInversion)
        alert( `Para la inverion N° ${i+1}  la ganancia total seria de $ ${retornoInversion}`)
        
    }
} 


    
