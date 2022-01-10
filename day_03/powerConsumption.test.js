const gamma = require('./gamma.js');
const epsylon = require('./epsylon.js');
const powerConsumption = require('./powerConsumption.js');

const testInput = [
    '00100',
    '11110',
    '10110',
    '10111',
    '10101',
    '01111',
    '00111',
    '11100',
    '10000',
    '11001',
    '00010',
    '01010',
]

test('Most common bit', () => {
    expect(gamma(testInput)).toBe('10110');
})

test('Power consumption', () => {
    expect(epsylon(gamma(testInput))).toBe('01001');
})

test('Power consumption', () => {
    expect(powerConsumption(testInput)).toBe(198)
})
