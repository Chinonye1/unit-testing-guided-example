const { multiply } = require('./../calculator.js');

describe('Multiply', () => {
    test('should multiply two positive integers correctly', () => {
        const result = multiply(1, 2);
        expect(result).toBe(2);
    });
    
    test('should multiply two floating point numbers correctly', () => {
        const result = multiply(4.5, 2.5);
        expect(result).toBe(11.25);
    });
    
    test('should multiply a positive and a negative number correctly', () => {
        const result = multiply(3, -2);
        expect(result).toBe(-6);
    });
    
    test('should multiply two negative numbers correctly', () => {
        const result = multiply(-3, -2);
        expect(result).toBe(6);
    });
    
    test('should multiply a number by 0 correctly', () => {
        const result = multiply(3, 0);
        expect(result).toBe(0);
    });
    });