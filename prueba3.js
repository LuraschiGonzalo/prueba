var num1 = 27
var num2 = 2
var simbolo = "+"

function calcular (num1,num2,simbolo){
var resultado 

       if (simbolo === "*"){
        resultado = num1 * num2 
        }
        
        if (simbolo ==="+"){
        resultado = num1 + num2    
        }
        
        if (simbolo === "-"){
        resultado = num1 - num2
        }
        
        if (simbolo === "/"){
        resultado = num1 / num2
        }
    
        return resultado


}

console.log(calcular(num1,num2,simbolo))

console.log(calcular(10,6,"*"))


