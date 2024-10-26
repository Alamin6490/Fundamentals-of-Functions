/**
 * objective: write a function to give me the sum of all numbers in an array
 * step-1: declare a function
 * step-2: call check whether the function is called properly
 * step-3: set a parameter(s)
 * step-4: pas the parameter(s), check whether parameter is passed in a proper format
 * step-5: do the function tasks (step by step)
 */

function sumofNumbers(numbers){
    let sum = 0;
    for(const number of numbers){
        console.log(numbers);
        sum = sum + number;
         
    }
    return sum;
}
const numbs = [54, 63, 12,9];
const sum = sumofNumbers(numbs);
console.loog('sum of numbers is', sum);



//-------explain the code---------
```javascript
/**
 * sumofNumbers ফাংশন: একটি অ্যারের সব সংখ্যার যোগফল বের করে
 * @param {Array} numbers - ইনপুট অ্যারে যেটির সব সংখ্যার যোগফল নির্ণয় করা হবে
 * @returns {number} - যোগফল রিটার্ন করে
 */
function sumofNumbers(numbers) {
    let sum = 0; // যোগফল রাখার জন্য একটি ভেরিয়েবল তৈরি এবং প্রাথমিক মান ০ সেট করা
    for (const number of numbers) { // numbers অ্যারের প্রতিটি উপাদান নিয়ে লুপ করা
        console.log(numbers); // প্রতিবার অ্যারের কনটেন্ট দেখানো (আউটপুট চেক করার জন্য)
        sum = sum + number; // বর্তমান সংখ্যা যোগফলে যোগ করা
    }
    return sum; // চূড়ান্ত যোগফল রিটার্ন করা
}

const numbs = [54, 63, 12, 9]; // সংখ্যা সম্বলিত একটি অ্যারে তৈরি করা
const sum = sumofNumbers(numbs); // ফাংশন কল করে যোগফল বের করা হচ্ছে

console.log('sum of numbers is', sum); // চূড়ান্ত যোগফল কনসোলে দেখানো
```

### Errors Fixed
- `console.loog` ছিল, এটি ঠিক করে `console.log` করা হয়েছে।

### Explanation
এই কোডে একটি `sumofNumbers` ফাংশন তৈরি করা হয়েছে, যা একটি অ্যারের সকল সংখ্যার যোগফল নির্ণয় করে। `for...of` লুপের মাধ্যমে প্রতিটি উপাদান যোগফলে যোগ করা হয়, এবং শেষে ফাংশনটি চূড়ান্ত যোগফল রিটার্ন করে।

