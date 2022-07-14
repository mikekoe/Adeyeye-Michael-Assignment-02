// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================



function sumOfNumbers(arrayOfNumbers) {
      let additionOfNumbers = 0;
        arrayOfNumbers.forEach(value => {
        additionOfNumbers += value;
        });
  
    return additionOfNumbers;
}
assignment.sumOfNumbers = sumOfNumbers;


function countEvenNumbers(arrayOfNumbers) {
     let counted_numbers = 0;
      for(let a=0; a < arrayOfNumbers.length; a++){
        if(arrayOfNumbers[a] % 2 == 0){
            counted_numbers++;
          
        }
      }
    return counted_numbers;
  }
assignment.countEvenNumbers = countEvenNumbers;

/**
 * Challenge - 3
 * 
 * Given an array of numbers representing temperatures in Celsius,
 * convert each number to Fahrenheit and return a new array containing the converted
 * temperatures in Fahrenheit. Decimal figures in the converted values in Fahrenheit should be removed.
 * E.g 51.21 should just be 51 (hint: Math.trunc(...) function)
 * If you did Challenge - 3, remove the comment in the line just after this function
 * 
 * See https://www.thoughtco.com/celcius-to-farenheit-formula-609227 for the conversion formula
 * 
 * @param {Array} arrayOfNumbers the array containing temperatures in Celsius to be converted
 * @returns Array the converted temperatures in Fahrenheit
 */
function celsiusToFahrenheit(arrayOfNumbers) {
    const new_unit = [];
    arrayOfNumbers.forEach(item =>
      new_unit.push(Math.trunc((item * 9/5) + 32)) 
    )

   return new_unit;
}

assignment.celsiusToFahrenheit = celsiusToFahrenheit;


// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================

