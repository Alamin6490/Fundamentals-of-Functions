/**
 * create function that will return only the even numbers
 * return the sum of even numbers 
 */
function evenNumbersonly(numbers){
    const evens = [];
    for(const number of numbers){
        if (number % 2 === 0){
            console.log(number);
            evens.push(number);
             
        }
         
    }
    return evens;
}

const  numbers = [5, 8, 91,24,6];
evenNumbersonly(numbers);
console.log('even numbers are' ,evens)

// another

function sumOfEvenNumbers(numbers){
    let sum = 0;
    for(const number of numbers ){
        if(number % 2 === 0){
            console.log(number);
            sum = sum + number;
        }
    }
    return sum;
}
const sum = sumOfEvenNumbers(numbers);
console.log('sum of the even numbers is', sum);


//------code explain----------
```javascript
/**
 * evenNumbersonly ফাংশন: একটি অ্যারে থেকে শুধু জোড় সংখ্যাগুলো বের করে
 * @param {Array} numbers - ইনপুট অ্যারে যেটি চেক করা হবে
 * @returns {Array} - শুধুমাত্র জোড় সংখ্যার একটি নতুন অ্যারে রিটার্ন করে
 */
function evenNumbersonly(numbers) {
    const evens = []; // জোড় সংখ্যা রাখার জন্য খালি অ্যারে তৈরি করা
    for (const number of numbers) { // numbers অ্যারের প্রতিটি উপাদান নিয়ে লুপ করা
        if (number % 2 === 0) { // যদি সংখ্যা ২ দিয়ে নিঃশেষে বিভাজ্য হয় (জোড়)
            console.log(number); // কনসোলে সেই জোড় সংখ্যা দেখানো
            evens.push(number); // জোড় সংখ্যা evens অ্যারেতে যুক্ত করা
        }
    }
    return evens; // চূড়ান্ত জোড় সংখ্যার অ্যারে রিটার্ন করা
}

const numbers = [5, 8, 91, 24, 6]; // সংখ্যার একটি অ্যারে তৈরি করা
const evens = evenNumbersonly(numbers); // ফাংশন কল করে শুধুমাত্র জোড় সংখ্যা বের করা হচ্ছে
console.log('even numbers are', evens); // জোড় সংখ্যাগুলি কনসোলে দেখানো হচ্ছে

// -------------------------------------

/**
 * sumOfEvenNumbers ফাংশন: একটি অ্যারের সব জোড় সংখ্যার যোগফল বের করে
 * @param {Array} numbers - ইনপুট অ্যারে যেটি চেক করা হবে
 * @returns {number} - যোগফল রিটার্ন করে
 */
function sumOfEvenNumbers(numbers) {
    let sum = 0; // জোড় সংখ্যার যোগফল রাখার জন্য একটি ভেরিয়েবল তৈরি এবং প্রাথমিক মান ০ সেট করা
    for (const number of numbers) { // numbers অ্যারের প্রতিটি উপাদান নিয়ে লুপ করা
        if (number % 2 === 0) { // যদি সংখ্যা জোড় হয়
            console.log(number); // কনসোলে সেই জোড় সংখ্যা দেখানো
            sum = sum + number; // জোড় সংখ্যাটি যোগফলে যোগ করা
        }
    }
    return sum; // চূড়ান্ত যোগফল রিটার্ন করা
}

const sum = sumOfEvenNumbers(numbers); // ফাংশন কল করে শুধুমাত্র জোড় সংখ্যার যোগফল বের করা হচ্ছে
console.log('sum of the even numbers is', sum); // চূড়ান্ত যোগফল কনসোলে দেখানো হচ্ছে
```

### Explanation

- `evenNumbersonly`: এই ফাংশনটি একটি অ্যারে থেকে কেবল জোড় সংখ্যাগুলি নির্বাচন করে একটি নতুন অ্যারে তৈরি করে।
- `sumOfEvenNumbers`: এই ফাংশনটি একটি অ্যারে থেকে কেবল জোড় সংখ্যাগুলি নির্বাচন করে তাদের যোগফল বের করে।

**সংশোধন:** 
- `for(cons number of numbers)` ভুল ছিল, যা সংশোধন করে `for (const number of numbers)` করা হয়েছে।

