var opcion
var opcionNumerosPeI
let contador=0
let contadorFactorial=0

do{
    /* console.log("estudiante ingresado") */
     opcion=Number(prompt("___________________|| Calculadora especial ||______________________\n 1- Contador de numeros pares e impares"+
    " \n 2- Calculadora Factorial \n 3- Validacion de contraseña \n 4- Generador de tablas de multiplicar \n 5- Suma de Numeros Primos"+
    "\n 6- Secuencia Fibonacci \n 7- Convertidor de Temperatura \n 8- Calculadora de Potencia \n 9 Salir del Sistema"))
   
        switch(opcion){
            case 1:
                console.log("1- Contador de numeros pares e impares")

                do{
                    
                opcionNumerosPeI=Number(prompt("1- Realizar Calculo\n2- Salir"))
                
                switch(opcionNumerosPeI){
                    case 1:
                        contador++                       
                        let numeroIngresado=Number(prompt("Ingresa el numero a calcular"))
                        
                        if(numeroIngresado>0){
                            console.log("\n Numero ingresado: "+numeroIngresado+"\n ")
                        let contadoPar=0
                        let contadoImpar=0
                        for(let i=2;i<=numeroIngresado;i+=2){
                            console.log(i) 
                            contadoPar++                              
                        }
                        console.log("\nCantidad de numeros Pares: "+contadoPar+"\n ")
                        for(let i=1;i<=numeroIngresado;i+=2){
                            console.log(i)
                            contadoImpar++   
                        }
                        console.log("\nCantidad de numeros Impares: "+contadoImpar+"\n ")

                         }else if(numeroIngresado<0){
                            console.log("\n Numero ingresado: "+numeroIngresado+"\n ")
                            let contadoPar=0
                            let contadoImpar=0
                            for(let i=-2;i>=numeroIngresado;i-=2){
                                console.log(i) 
                                contadoPar++                              
                            }
                            console.log("\nCantidad de numeros Pares negativos: "+contadoPar+"\n ")

                            for(let i=-1;i>=numeroIngresado;i-=2){
                                console.log(i)
                                contadoImpar++   
                            }
                            console.log("\nCantidad de numeros Impares negativos: "+contadoImpar+"\n ")
                         
                        }else{
                            console.log("\nNumero invalido: "+numeroIngresado+"\n ")   
                        }
                                                
                        console.log("Numero de ejecuciones realizadas: "+contador)
                        break;
                    case 2:
                        console.log("\nHas elegido salir de contador de numeros pares e impares\n")
                        break;
                        
                        default:
                        console.log("OPCION INVALIDA")
                        break;                                               
                }
                }while(opcionNumerosPeI!=2)
                console.log("\nSaliendo al Menu Principal\n")
                break;
//*********************************************************************************************************************************************************************
            case 2:
                console.log("2- Calculadora Factorial")

                do{
                    
                opcionNumerosPeI=Number(prompt("1- Deseas hallar el factorial de un numero\n2- Salir"))
                
                switch(opcionNumerosPeI){
                    case 1:
                        let factorial=1
                        contadorFactorial++                       
                        let numeroIngresado=Number(prompt("Ingresa el numero a calcular"))
                        console.log("\n Numero ingresado: "+numeroIngresado+"\n ")
                        if(numeroIngresado>0){
                            for(let i=1;i<=numeroIngresado;i++){
                                factorial*=i                                                                                   
                             }
                             console.log("El numero factorial de: "+numeroIngresado+" es "+factorial+"\n ")
                             factorial=1
                        }else if(numeroIngresado==0){
                            console.log("El numero factorial de: "+numeroIngresado+" es 1\n ")
                        }else if(numeroIngresado<0){ 
                            console.log("Has elegido un numero negativo ("+numeroIngresado+
                            ")  *****NO ES POSIBLE CALCULARLO*****, porque la función factorial se define sobre el conjunto de los números naturales.\n ") 
                        }else{

                            console.log("Numero invalido: "+numeroIngresado+"\n ")
                        }
                       
                        console.log("Numero de operaciones realizadas: "+contadorFactorial)
                        break;
                    case 2:
                        console.log("\nHas elegido salir de calculadora factorial\n")
                        break;
                        
                        default:
                        console.log("OPCION INVALIDA")
                        break;                                               
                }
                }while(opcionNumerosPeI!=2)
                console.log("\nSaliendo al Menu Principal\n")
                break;
//************************************************************************************************************************************************* 
            case 3:
                console.log("3")
                break;

            case 4:
                console.log("4")
                break;

            case 5:
                console.log("5")
                break;
            case 6:
                console.log("6")
                break;
            case 7:
                console.log("7")
                break;
            case 8:
                console.log("8")
                break;
            case 9:
                console.log("\nHas elegido salir del sistema\n")
                break;
            default:
                console.log("OPCION INVALIDA")
                break;
          
        }
            
}while(opcion!=9);
    console.log("\nHas ejecutado la calculadora de numeros Pares e Impares: "+contador+" veces\n")
    console.log("\nHas ejecutado la calculadora de factorial: "+contadorFactorial+" veces\n")
    console.log("HASTA PRONTO")

