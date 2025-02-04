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

// console.log(part1(final));

const part2 = (data) => {
  const days = 256;
  const ages = data.split(',').map(Number).reduce((acc, curr) => {;
    acc[curr] += 1;
    return acc; 
  }, Array.from({length: 9}).fill(0));
  // console.log(ages);
  for (let day = 0; day < days; day++) {
    const day0 = ages.shift();
    // console.log({ day0, ages });
     ages[6] += day0;
     ages.push(day0)     
  }

  return {
    ages,
    length: ages.reduce((acc, curr) => acc + curr)
  }
}

console.log(part2(final));
