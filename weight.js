console.log("'BMI  CALCULATIONS'");

let  height=parseInt(prompt('Please! enter your height in inches.')) ;
let weight= parseFloat(prompt('please enter your weight in pounds.'));
console.log(`your height in inches is= ${height} ` );
console.log(`your weight in pounds is= ${weight} ` );
let bmi=(weight * 703) / Math.pow(height,2);
console.log(`your BMI is=  ${bmi}`);
let category;
switch(true)
{
    case (bmi < 16.0):
        category = "Severely Underweight";
        break;
    case (bmi >= 16.0 && bmi <= 18.4):
        category = "Underweight";
        break;
    case (bmi >= 18.5 && bmi <= 24.9):
        category = "Normal";
        break;
    case (bmi >= 25.0 && bmi <= 29.9):
        category = "Overweight";
        break;
    case (bmi >= 30.0 && bmi <= 34.9):
        category = "Moderately Obese";
        break;
    case (bmi >= 35.0 && bmi <= 39.9):
        category = "Severely Obese";
        break;
    default:
        category = "Morbidly Obese";
}

console.log(`Your BMI of ${bmi} makes you ${category}`);