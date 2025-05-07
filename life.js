alert('REMAINING LIFE!!!!!')
let age=Math.floor(Math.abs(parseInt(prompt('Please! Enter your age in years.'))));



// if we live until 90 years then the remaining years wiil be (90- current age)
remainingYears= 90 - age;
remainingWeeks= remainingYears * 52;

//as there are 52 weeks in a year

console.log(`Your age is ${age} years` ); 
console.log(`your age in weeks is ${age * 52} `);

if(isNaN(age) || age<=0 || age>90)
{
    console.log('Please! enter valid age');
    
}
else 
{
    console.log(`You have only ${remainingYears} years left!`);
    console.log(`You are left with only ${remainingWeeks} weeks!`);
}


