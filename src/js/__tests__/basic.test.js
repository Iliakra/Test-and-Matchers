// eslint-disable-next-line import/extensions
import sortingPlayers from '../app.js';

test('players-sorting function', () => {
  const input = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  sortingPlayers(input);
  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  expect(input).toEqual(expected);
});

test('players-sorting function', () => {
  const input = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 100 },
  ];
  sortingPlayers(input);
  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 100 },
    { name: 'мечник', health: 10 },
  ];
  expect(input).toEqual(expected);
});

test('players-sorting function', () => {
  const input = [
    { name: 'мечник', health: 200 },
    { name: 'маг', health: 80 },
    { name: 'лучник', health: 100 },
  ];
  sortingPlayers(input);
  const expected = [
    { name: 'мечник', health: 200 },
    { name: 'лучник', health: 100 },
    { name: 'маг', health: 80 },
  ];
  expect(input).toEqual(expected);
});
