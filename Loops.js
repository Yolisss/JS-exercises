// Exercise 1. Write a 'while' loop that prints the integers (whole numbers) between 1 and 5 (inclusive).

let i = 1; 
while(i <= 5){
  console.log(i);
  i++
}

// Exercise 2. Write a 'do while' loop that prints the integers (whole numbers)
//between 1 and 5 (inclusive).

let num = 1; 
do{
  console.log(num);
  num++;
}
  while(num <= 5); 

// Exercise 3. Write a 'for' loop that prints the integers (whole numbers) between 1 and 5 (inclusive). 

for(let i = 1; i <= 5; i++){
  console.log(i); 
}

//Exercise 4. Now we want a loop that prints the integers
//counting DOWN from 10 to 1 (inclusive). Write three loops that do this, to practice writing loops in all 3 ways -- as a 'while', 'do while', and 'for' loop.

//For Loop 
for(let i = 10; i >= 1; i--){
  console.log(i); 
}

//While Loop

let j = 10; 
while( j >= 1){
  console.log(j);
  j--
}

//Do While loop

let k = 10; 
do{
  console.log(k); 
  k--;
}
  while( k >= 1); 

//Exercise 5. Write a loop that prints the integers from 7 to 27. Write this
// // loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

//For Loop
for(let i = 7; i <= 27; i++){
  console.log(i);
}

//While Loop
let l = 7; 
while ( l <= 27){
  console.log(l); 
  l++
}

//Do While
let m = 7; 
do{
  console.log(m); 
  m++
}
  while( m <= 27); 


//Exercise 6. Write a loop that prints numbers between 0 and 100, counting by tens.
// I.e. it will print 10, then 20, then 30, etc.
// Write this loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

//For Loop 
for(let i = 10; i <= 100; i+= 10){
  console.log(i); 
}

//While Loop 

let n = 10; 
while(n <=100){
  console.log(n); 
  n+=10; 
}

//Do while loop 

let o = 10; 
do{
  console.log(o); 
  o+=10;
}
  while(o <= 100); 

//Exercise 7. Add a comment as to why the following loop is an infinite loop (will run without ever stopping). Then fix the loop so that it stops when counterFour is equal to -100.

//counterFour is defined as 1. The loop runs as long as counter for is less than 2. Since 1 is less than 2 and counter four will continue to decrement from 1, the loop will continue to run. 

// let counterFour = 1;
// while (counterFour < 2) {
//    console.log("HELP ME!");
//    counterFour--;
//  }

let counterFour = 0; 
while(counterFour >= -100){
  console.log("HELP ME!");
  counterFour--;
}

//Exercise 8. Make a variable that contains your favorite integer. Write a loop (your choice which type) that prints the integers from 0 to that number.

const myFavInt = 7; 
for(let i = 0; i <= myFavInt; i++){
  console.log(i);
}

//Exercise 9. Make a variable that contains your favorite integer (this time make sure it's less than 100). Write a loop (your choice which type) that prints the integers from 0 to 100.
// Next to each number it should print "not my favorite number". But next to your favorite number it should print "my favorite number!". Example output (if your favorite number was 2):
// 0 not my favorite number
// 1 not my favorite number
// 2 my favorite number!
// 3 not my favorite number
//  ...
// (Hint - use an if statement in your loop)

let myFavoriteNumber = 7; 
for(let i = 0; i <= 100; i++){
  if( i !== myFavoriteNumber){
    console.log( i + " not my favorite number");
  }else{
    console.log(myFavoriteNumber + " is my favorite number!"); 
  }
}

//Exercise 10. In some of the exercises above, we had you write all 3 types of loops, for practice. But in real life, how would you decide which type of loop to use? You might not have an exact answer, but spend a few minutes thinking about the different types of loops and/or doing some research and write down your thoughts in a comment below:

//I would choose a for loop if I want the loop to iterate through an array. 
//I would chose a while loop if I wanted the loop to run as long a specifice condition is true. 
//I would use a do while loop if I wanted to loop to run at least one time before the condition is met. 

// Exercise 11. Now we'll practice using nested loops (a loop inside another loop)! Update the nested loops below to so that for each value of outsideCounter, the inside loop will show a countdown

// /*
// counting down from 0
// *********************************** 
// counting down from 1
// inside 1
// *********************************** 
// counting down from 2
// inside 2
// inside 1
// *********************************** 
// counting down from 3
// inside 3
// inside 2
// inside 1
// *********************************** 
// // */

for (let outsideCounter = 0; outsideCounter <= 3; outsideCounter++ ) {
  console.log("counting down from", outsideCounter);
  for (let insideCounter = outsideCounter; insideCounter >= 1; insideCounter--) {
     console.log("inside", insideCounter);
  }
}
  console.log("***********************************");
