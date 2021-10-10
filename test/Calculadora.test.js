const Calculadora = require("../lib/Calculadora.js");
const calculadora = new Calculadora();

describe("Calculadora de salário", () =>{
    
    test("O cargo do funcionário é de desenvolvedor e o salário de 5000", () =>{
        let res = calculadora.calculaSalario(5000, "Desenvolvedor");
        expect(res).toBe(4000);
    });

});