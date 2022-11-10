// console.log ("hello g")

let FirstName: string = "Gianna"
let age: number=  18
let good: boolean = true


// console.log (`
// First Name: ${FirstName}
// Your Age: ${age}
// you have many ${fruits} fruits
// `)

enum taxForm{
    standard =  "1040",
    childCredit = "1065",
    SCorpv = "1121S",
    CCorp = "1120"
}

// console.log (`
// you need form ${taxForm.childCredit}
// `)




let fruits: string[] = [
    "banana",
    " apple"
]
// retuns a stirng 
 function getFruit(index: number): string {
   return fruits [index]

 }

function debug (message: string): void{
    // console.log(message)
    //no return here
}
// debug(" OMG NO RETURN ")

 let chosenFruit: string = getFruit(0)
//   console.log (`you chose a ${getFruit(0)}`)


interface teacher {
    name: string,
    years: number,
    subject: string[],
    age: number,
}


let gianna: teacher = {
    name: 'gianna',
    years: 19,
    subject: ["javascript",
              "typescript"],
    age: 49
}


console.log(gianna)