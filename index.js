let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

// Your Code Here
window.prompt(weeklyExpenseQuestions[0])

// User Answers
let answer = window.prompt(weeklyExpenseQuestions[0])
console.log(answer)


//Turn User Input from Sting to Number
let stringAnswer = window.prompt(weeklyExpenseQuestions[0])
let numberAnswer = parseFloat(stringAnswer)
console.log(numberAnswer)

