## Welcome gamblers, nerds and mathematicians 🎲


- Kata Interactive Studios, needs a digital dice-rolling feature for the company's new virtual tabletop casino roll playing game. 



## Your Mission 😎
### First Set up

1. Clone the repo from github
2. Run <code>npm install</code> to install vitest
3. Run npm test to start the test suite

### Dice Rolling Simulation
In this challenge, you will implement two functions that simulate the rolling of dice, commonly used in tabletop games like Dungeons & Dragons. These functions will generate random outcomes based on the number of sides on the dice and the number of dice rolled. You will also handle some basic input validation.

#### Task 1: rollDice(sides)
Implement a function rollDice that simulates rolling a single die with a given number of sides. The function should return a random integer between 1 and sides (inclusive).

#### Task 2: rollMultipleDice(sides, count, modifier = 0)
Implement a function rollMultipleDice that simulates rolling multiple dice of the same type. This function should accept three parameters:

- sides: The number of sides on each die.<br>
- count: The number of dice to roll.<br>
- modifier (optional): A number to be added to each roll's result. Defaults to 0. <br>

The function should return an object with the following properties:<br>
- rolls: An array of individual roll results (each modified by the modifier).<br>
- sum: The sum of all the roll results.<br>
- average: The average of all the roll results.

### Requirements:
1. Input Validation:

    The count parameter must be a positive integer. If it is less than 1 or not an integer, the function should throw an error with the message 'Invalid count'.
2. Default Modifier:

    If no modifier is provided, it should default to 0.

<br>

## Notes:
The rollDice function is a helper function used within rollMultipleDice.
The results are expected to be random, so your outputs will differ each time you run the functions.
Ensure your solution is robust to handle various edge cases such as invalid inputs.


Good luck 🤞
