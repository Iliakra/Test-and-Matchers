// TODO: write your code here
const players = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

// eslint-disable-next-line no-shadow
export default function sortingPlayers(players) {
  players.sort((a, b) => {
    if (a.health > b.health) {
      return -1;
    }
    if (a.health < b.health) {
      return 1;
    }
    return 0;
  });
}

console.log(players);
