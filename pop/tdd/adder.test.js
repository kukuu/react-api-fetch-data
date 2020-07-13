
const adder = require("./adder");

describe('adder', () => {

    it('should add two numbers', () => {
        expect(adder(1, 2)).toBe(3);
    })

    it(('should describe a soul input'), () => {
        expect(adder(5)).toBe(5);
    })

    it(('should add three numbers'), () => {
        expect(adder(1, 2, 3)).toBe(6);
    })

    it(('should return 0 if no numbers are passed'), () => {
        expect(adder()).toBe(0);
    })

    it(('should add any numbers of arguments'), () => {
        expect(adder(1, 2, 3, 4, 5, 6)).toBe(21);
    })

})