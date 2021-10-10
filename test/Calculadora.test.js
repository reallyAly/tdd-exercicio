const Calculadora = require("../lib/Calculadora.js");
const calculadora = new Calculadora();

describe("Calculadora de salário", () =>{
    
    test("O cargo do funcionário é de desenvolvedor e o salário de 5000", () =>{
        let res = calculadora.calculaSalario(5000, "Desenvolvedor");
        expect(res).toBe(4000);
    });

    test("O cargo do funcionário é de desenvolvedor e o salário de 1500", () =>{
        let res = calculadora.calculaSalario(1500, "Desenvolvedor");
        expect(res).toBe(1350);
    });

    test("O cargo do funcionário é de DBA e o salário de 3000", () =>{
        let res = calculadora.calculaSalario(3000, "DBA");
        expect(res).toBe(2250);
    });
});