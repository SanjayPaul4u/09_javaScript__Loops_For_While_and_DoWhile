console.log("Loop tutorial...");
// Generel loops: while, do while, for📌📌📌
//for loop📌
// for(let a = 0; a<10; a++){
//     console.log(a);
// }

//while loop📌
// let b =0;
// while(b<30){
//     console.log(b+1);
//     b++;
// }

//do-while loop📌
// let c = 0;
// do{
//     console.log(c+1);
//     c++;
// }while(c<20)

//break and continue📌📌📌
// break📌
// let num = 10;
// while(num>0){
//     if(num===5){
//         break;//--------This is break statement
//     }
//     console.log(num);
//     num--;
// }


// continue📌
// let num2 = 10;
// while(num2>0){
//     if(num2===5){
//         num2--;
//         continue;//<-----continue statement is used for skip the any value
//     }
//     console.log(num2);
//     num2--;
// }

//Using loop in array and object📌📌📌
//loop for array📌
let arr = [2, 10, 100, 55, 44];
arr.forEach(function(element, index, array){
    console.log(element, index, array);
});

let myObj = {
    Name : "sanjay",
    age : 25,
    qualification : "doesn't matter"
}


//loop for object📌
for(let key in myObj){
    console.log(`The ${key} of myObj is ${myObj[key]}`);
    console.log(`The ${key} of myObj is ${myObj[key]}`);
}

console.log("The working tree is clean...");
