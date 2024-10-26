/**
 * fo a given string tell me whether it has even number of characters or not
 */

function evenSizedString(str){
    const size = str.length;
    console.log(str,size);

    if (size % 2 === 0){
        console.log('even size');
        return true;
    }
     else{
        console.log('odd size')
        return false;
     }
}

evenSizedString('Dhaka');
evenSizedString('faka');

function doubleorTriple(number, doDouble ){
    if(doDouble === true){
        const result = number * 2;
        return result;
    }
    else{
        const result = number *3;
        return result;
    }
}
//  console.log(doubleorTriple(5, true));
//  console.log(doubleorTriple(5, false));

// another array parameter example
 function numberofElements(number){
    const len = numbers.length;
    return len;
 }

 numberofElements([12, 45, 78, 45,13,2,8])


 //---------explain the code-------//
 ```javascript
/**
 * evenSizedString ফাংশন: একটি স্ট্রিং-এর দৈর্ঘ্য জোড় নাকি বিজোড় তা নির্ধারণ করে
 * @param {string} str - ইনপুট স্ট্রিং যার দৈর্ঘ্য চেক করা হবে
 * @returns {boolean} - জোড় হলে true, বিজোড় হলে false
 */
function evenSizedString(str) {
    const size = str.length; // স্ট্রিং-এর দৈর্ঘ্য বের করা হচ্ছে
    console.log(str, size); // কনসোলে স্ট্রিং ও এর দৈর্ঘ্য দেখানো হচ্ছে

    if (size % 2 === 0) {
        console.log('even size'); // যদি দৈর্ঘ্য জোড় হয়, মেসেজ দেখাবে
        return true; // জোড় হলে true রিটার্ন করবে
    } else {
        console.log('odd size'); // যদি দৈর্ঘ্য বিজোড় হয়, মেসেজ দেখাবে
        return false; // বিজোড় হলে false রিটার্ন করবে
    }
}

evenSizedString('Dhaka'); // "Dhaka" স্ট্রিং এর দৈর্ঘ্য চেক করা হচ্ছে
evenSizedString('faka'); // "faka" স্ট্রিং এর দৈর্ঘ্য চেক করা হচ্ছে

/**
 * doubleorTriple ফাংশন: একটি সংখ্যা দ্বিগুণ বা ত্রিগুণ করবে
 * @param {number} number - ইনপুট সংখ্যা যা গুণ করা হবে
 * @param {boolean} doDouble - true হলে দ্বিগুণ, false হলে ত্রিগুণ করবে
 * @returns {number} - প্রাপ্ত ফলাফল
 */
function doubleorTriple(number, doDouble) {
    if (doDouble === true) {
        const result = number * 2; // doDouble সত্য হলে সংখ্যা দ্বিগুণ
        return result;
    } else {
        const result = number * 3; // doDouble মিথ্যা হলে সংখ্যা ত্রিগুণ
        return result;
    }
}

// console.log(doubleorTriple(5, true)); // doDouble সত্য, তাই ৫ এর দ্বিগুণ হবে
// console.log(doubleorTriple(5, false)); // doDouble মিথ্যা, তাই ৫ এর ত্রিগুণ হবে

/**
 * numberofElements ফাংশন: একটি অ্যারেতে মোট কতগুলো উপাদান আছে তা বের করবে
 * @param {Array} numbers - ইনপুট অ্যারে যার দৈর্ঘ্য নির্ণয় করা হবে
 * @returns {number} - অ্যারেতে উপাদানের সংখ্যা
 */
function numberofElements(numbers) {
    const len = numbers.length; // অ্যারের দৈর্ঘ্য বের করা হচ্ছে
    return len; // দৈর্ঘ্য রিটার্ন করা হচ্ছে
}

numberofElements([12, 45, 78, 45, 13, 2, 8]); // অ্যারে দেয়া হচ্ছে এবং উপাদান সংখ্যা রিটার্ন করছে
```

### Summary
এই কোডে তিনটি ফাংশন রয়েছে:

1. `evenSizedString`: কোনো স্ট্রিং-এর দৈর্ঘ্য জোড় বা বিজোড় তা চেক করে।
2. `doubleorTriple`: একটি সংখ্যা দ্বিগুণ বা ত্রিগুণ করবে, কন্ডিশন অনুযায়ী।
3. `numberofElements`: কোনো অ্যারেতে কতগুলো উপাদান আছে তা রিটার্ন করবে।

