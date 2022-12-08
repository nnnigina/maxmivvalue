// Найти ту компанию которая больше всех тратит и найти ту которая меньше всех тратит 

// Найти средний расход всех компаний 

// Найти общую сумму  расходов всех компаний


let arr = [
    {
        company: 'artel',
        budget: 1000,
        expenses: 500,
        tax: 13
    },
    {
        company: 'uztelecom',
        budget: 4000,
        expenses: 1700,
        tax: 13
    },
    {
        company: 'uzmotors',
        budget: 8000,
        expenses: 3500,
        tax: 13
    },
    {
        company: 'chopar',
        budget: 5000,
        expenses: 4000,
        tax: 13
    },
]

let allExpenses = {
    expenses: []
}
let alleexpenses = 0
arr.filter(item => {
    item.expenses += item.budget / 100 * item.tax
    item.expenses * 100 / item.budget
    alleexpenses = alleexpenses + item.expenses
})
console.log(arr);
console.log(allExpenses);

for (let i of arr) {
    allExpenses.expenses.push(i.expenses)
}

const maxValue = Math.max(...allExpenses.expenses);
console.log(maxValue);

const minValue = Math.min(...allExpenses.expenses);
console.log(minValue);

arr.filter(item => {
    if (item.expenses === minValue) {
        console.log(item, 'min');
    } else if (item.expenses === maxValue) {
        console.log(item, 'max');
    }
})
console.log(alleexpenses);
console.log(alleexpenses / arr.length);