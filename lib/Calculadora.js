module.exports = class Calculadora {
    calculaSalario(salario, cargo){
        switch(cargo){
            case "Desenvolvedor":
                if(salario >= 3000){
                    return this.obterSalarioFinal(salario, 20);
                }
                return this.obterSalarioFinal(salario, 10);
            break;

            case "DBA":
                if(salario >= 2000){
                    return this.obterSalarioFinal(salario, 25);
                }
                return this.obterSalarioFinal(salario, 15);
            break;

            case "Testador":
                return salario - ((salario * 25) / 100);
            break;
        }
    }

    obterSalarioFinal(salario, porcentagem){
       return salario - ((salario * porcentagem) / 100);
    }
}