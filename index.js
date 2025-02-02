import { readFileSync } from 'fs';

const test = readFileSync('test.txt', 'utf8');
const final = readFileSync('final.txt', 'utf8');

console.log({ test, final });
