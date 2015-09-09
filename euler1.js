// Find the sum of all natural numbers below 1000, that are multiples of 3 or 5

// Find the primes from 1 to 10
// - Go through each number
// - Check to see if the number is divisible by any other number.
// - If it isn't, mark it as primes

// Find all the numbers under 1000 that can be divded by 3 or 5
// Add all the numbers under 1000 that can be divded by 3 or 5

loop
i++ // i = i + 1
for (i = 0; i < cars.length; i++) {
    console.log(i);
}


sum = 0
for (i=1; i <= 1000; i++) {
  if (i%3 == 0 || i%5 == 0) {
    console.log(i);  // whats i?
  }
  sum + i;
}

sum = 0
for (i=1; i < 1000; i++) {
  if (i%3 == 0 || i%5 == 0) {
    sum = sum + i;
    console.log(sum)  // sum of i printed
    }
}
