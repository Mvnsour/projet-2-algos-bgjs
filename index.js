import { readFileSync } from 'fs';

const test = readFileSync('test.txt', 'utf8');
const final = readFileSync('final.txt', 'utf8');

// console.log({ test, final });

const part1 = (data) => {
  const days = 80;
  const fishes = data.split(',').map(Number);
  
  for (let day = 0; day < days; day++) {
    const saveLength = fishes.length
    for (let i = 0; i < saveLength; i++) {
      if (fishes[i] === 0 ) {
        fishes[i] = 6;
        fishes.push(8)
      } else {
        fishes[i]--;
      }
    }
  }
  return {
    fishes,
    length: fishes.length,
  };
}

console.log(part1(final));
