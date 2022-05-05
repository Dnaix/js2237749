
//Determinar si un numero es o no es primo
//Funcion flecha
numero = (num1) => {
    let cont=0
   for (let i = 1; i <= num1; i++) {
  if (num1%i==0) {
    cont++
  }
  }
  if (cont==2) {
   console.log(`el ${num1} numero es primo`)
  } else {
      console.log(`el ${num1} no numero es primo`)
  }
  }
  numero(15)