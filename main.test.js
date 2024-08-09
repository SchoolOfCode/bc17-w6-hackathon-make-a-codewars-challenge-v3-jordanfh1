import { test, expect } from 'vitest';
import { rollDice , rollMultipleDice } from './main.js';

// test('test', () => {
//   expect(1).toBe(1);
// });

test('rollDice function', () => {
  expect(rollDice(6)).toBeGreaterThanOrEqual(1);
  expect(rollDice(6)).toBeLessThanOrEqual(6);
});

test('rollMultipleDice function', () => {
    let result = rollMultipleDice(6, 3);
    expect(result.rolls.length).toBe(3);
    expect(result.sum).toBeGreaterThanOrEqual(3);
    expect(result.sum).toBeLessThanOrEqual(18);
    expect(result.average).toBeGreaterThanOrEqual(1);
    expect(result.average).toBeLessThanOrEqual(6);
});

test('rollmultiple dice with modifier', () => {
    let result = rollMultipleDice(6, 3, 2);
    expect(result.rolls.length).toBe(3);
    expect(result.sum).toBeGreaterThanOrEqual(5);

})




// test('rollMultipleDice with modifier', () => {
//     let result = rollMultipleDice(6, 3, 2);
//     expect(result.rolls.length).toBe(3);
//     expect(result.sum).toBeGreaterThanOrEqual(5);
//     expect(result.sum).toBeLessThanOrEqual(20);
//     expect(result.average).toBeGreaterThanOrEqual(1);
//     expect(result.average).toBeLessThanOrEqual(8);
//     expect(result.criticals.max.length).toBeGreaterThanOrEqual(0);
//     expect(result.criticals.min.length).toBeGreaterThanOrEqual(0);
//     });

// test('rollMultipleDice for errors', () => {
//     expect(() => rollMultipleDice(6, 0)).toThrow();
//     expect(() => rollMultipleDice(6, -1)).toThrow();
//     expect(() => rollMultipleDice(6, 1.5)).toThrow();
//     });
