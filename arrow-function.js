function apresentar(){
   return `Meu nome é ${nome}` 
}

const apresentarArrow = nome => `Meu nome é ${nome}`;

const soma = (num1,num2) => num1 + num2;


//Arrow com mais de uma linha de instrução

const somaNumeros = (num1, num2) => {
    if(num1 > 10 || num2 > 10 ){
        return "somente numeros de 1 a 9";
    } else{
        return num1 + num2;
    }
}