// This line connects the "What am I doing today?" button to the function //
document.getElementById('button').addEventListener('click', comparison)
let age = 0
let day = 0

function comparison () {
  // This line gets the user's input and converts it to an integer.//
  age = document.getElementById('age').value
  age = parseInt(age)

  day = document.getElementById('day').value

  // These lines check the user's age and what day it is. Then it uses that information to figure out what they are doing today.//
  if ((day !== 'Saturday' && day !== 'Sunday') && (age >= '18')) {
    document.getElementById('answer').innerHTML = 'Time to go to work!'
  } else if ((day !== 'Saturday' && day !== 'Sunday') && (age < '18')) {
    document.getElementById('answer').innerHTML = 'Time for School!'
  } else {
    document.getElementById('answer').innerHTML = 'Time to relax for the weekend!'
  }
}
