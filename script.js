// Create a program that asks the user for two numbers and prints their sum.

    let a = 5;
    let b = 6;

    let sum = a+b;
    console.log("sum=",sum);


// Implement a program that calculates the area of a rectangle using given length and width.
    // input leangth
    // input width
    // formula= leangth*width

    let leangth = 20;
    let width = 30;

    let area = leangth*width
    console.log("Area of rectangle: " + area);


// Create a program that asks the user for their age and determines if they are eligible to vote (considering a voting age of 18).
// getting input 

    var age = ("17");

    // if-else statement 

    if(age >= 18)
    console.log("Eligible to Vote"); 
    else 
    console.log("Not eligible to vote");


// Write a script that takes a user's grade as input and outputs whether they passed or failed (assuming the passing grade is 60 or above).
// getting input 

    var grade = ("50");

    // if-else statement 

    if(grade >= 60)
    console.log("Passed"); 
    else 
    console.log("Failed");

// Implement a program that checks if a user's entered number is positive, negative, or zero.
    // input from the user
    var number = ("-20");

    // check if number is greater than 0
    if (number > 0) 
    console.log("The number is Positive");

    // check if number is 0
    else if (number == 0) 
    console.log("The number is Zero");

    // if number is less than 0
    else 
    console.log("The number is Negative");


// Write a script that takes a user's age and checks if they are a child (0-12), teenager (13-19), adult (20-59), or senior (60 and above).

    var age = ("52");

    if (age <= 0 && age <= 12) 
    console.log("The person is Child");

    else if (age > 12 && age <= 19) 
    console.log("The person is Teanager");

    else if (age >19 && age <= 59) 
    console.log("The person is Adult");

    else if (age >59) 
    console.log("The person is Senior");


// Find the square of each number in an array=[1,3,9,12,15,18,21] using loop

    let arr=[1,3,9,12,15,18,21]
    for(i=0;i<7;i++)

    arr[i]=arr[i]*arr[i]
    console.log("square of array elments= ",arr)


// Write a program to find the sum of all the odd numbers for a given limit (if you choose limit as 10 then need to find the sum of all odd numbers in between 1 and 10 )

    function sumOfOddNumbers(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            sum += arr[i];
            }
        }
        return sum;
    }

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const oddSum = sumOfOddNumbers(numbers);
    console.log("Sum of odd numbers:", oddSum);
