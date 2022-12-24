// Code your solutions in this file
// for (let age = 30;age < 40; age++){
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//   debugger;
// }

function writeCards(names,event){
    let card = []
    for (let i=0; i< names.length; i++){
        card.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    }
    return card
}

// console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"))

function countDown(num){
    while (num > -1){
        console.log(num)
        num--;
    }
    
}
countDown(10)