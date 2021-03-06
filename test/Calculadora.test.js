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

    test("O cargo do funcionário é de DBA e o salário de 1700", () =>{
        let res = calculadora.calculaSalario(1700, "DBA");
        expect(res).toBe(1445);
    });

    test("O cargo do funcionário é de Testador e o salário de 2000", () =>{
        let res = calculadora.calculaSalario(2000, "Testador");
        expect(res).toBe(1500);
    });

    test("O cargo do funcionário é de Testador e o salário de 550", () =>{
        let res = calculadora.calculaSalario(550, "Testador");
        expect(res).toBe(467.50);
    });

    test("O cargo do funcionário é de Gerente e o salário de 6650", () =>{
        let res = calculadora.calculaSalario(6650, "Gerente");
        expect(res).toBe(4655);
    });

    test("O cargo do funcionário é de Gerente e o salário de 2500", () =>{
        let res = calculadora.calculaSalario(2500, "Gerente");
        expect(res).toBe(2000);
    });

    test("Quando o cargo inserido é inválido", () =>{
        expect(
            () => calculadora.calculaSalario(2500, "Designer")
        ).toThrow("O cargo inserido é inválido!!");
    });

    test("Quando o salário inserido é inválido", () =>{
        expect(
            () => calculadora.calculaSalario(0, "Gerente")
        ).toThrow("O salário inserido é inválido!!");
    });
});