module.exports = class Calculadora {
    calculaSalario(salario, cargo){
        if(salario >= 3000){
            return salario - ((salario * 20) / 100);
        }
    }
}