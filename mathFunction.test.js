const addFunction = require('./mathFunction');
describe('returning sum of addFunction', () => {
    test('addFunction(1,1) => 2', () => {
        expect(addFunction.addFunction(1,1)).toEqual(2);
    });
});


const subFunction = require('./mathFunction');
describe('returning sum of subFunction', () => {
    test('subFunction(1,1) => 0', () => {
        expect(subFunction.subFunction(1,1)).toEqual(0);
    });
});

const multFunction = require('./mathFunction');

describe('returning sum of multFunction', () => {
    test('multFunction(1,1) => 0', () => {
        expect(multFunction.multFunction(5,5)).toEqual(25);
    });
});

const divFunction = require('./mathFunction');

describe('returning sum of divFunction', () => {
    test('divFunction(25,5) => 0', () => {
        expect(divFunction.divFunction(25,5)).toEqual(5);
    });
});
