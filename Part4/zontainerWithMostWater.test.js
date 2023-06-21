let waterContainer = require('./zontainerWithMostWater.js');
describe('zontainerWithMostWater', () => {
    test('should return 49', () => {
        expect(waterContainer([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
    });
});

describe('zontainerWithMostWater', () => {
    test('should return 16', () => {
        expect(waterContainer([4, 3, 2, 1, 4])).toBe(16);
    });
});

describe('zontainerWithMostWater', () => {
    test('should return 2', () => {
        expect(waterContainer([12,1])).toBe(2);
    });
});