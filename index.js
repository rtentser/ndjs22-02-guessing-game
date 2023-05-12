#!/usr/bin/env node
import * as readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const number = Math.floor(Math.random() * 100) + 1;
let guess;

console.log("Please guess a number between 1 and 100");

do {
  guess = await rl.question("Your guess: ");
  if (+guess < number) console.log("Too low");
  else if (+guess > number) console.log("Too big");
} while (number != +guess);

console.log("You right!");

rl.close();
