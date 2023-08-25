// LOOPS 

// for(init, conditon, changer){
    // code we want to iterate 
//}

// for (let index = 0; index < 5; index++) {
//     console.log('Index value is ${index}')
    
// // }
// for (let index = 0; index < 5; index++) {
//     console.log('${Index} * ${index} =  ${index}');
    
// }


const heros = ["superman", "naagraj", "batman", "flash", "thor", "hulk"]

// for (let index = 0; index < heros.length; index++) {
//     const element = heros[index];
//     console.log('Hero is ${element}');

// }

// let anotherHeros =[]
// for (let index = 0; index < heros.length; index++) {
//     let anotherHeros =[]
//     const element = heros[index];
//     console.log('Hero is ${element}');
//     anotherHeros.push(element.toUpperCase());
// }
// console.log(anotherHeros);


let i = 0 

while (i < 5){
console.log('Value is ${i}');
i = i + 1;
}

do {
    console.log('THE values is ${i}');
    i++;
} while (i < 5);


for (const element of heros){
    console.log('Hero is ${element}');
}

const language = ["python", "java", "javascript", "rust", "cpp"]

// for (const element of language){
//     console.log('language is ${lan.toUpperCase()}');
// }

// for (let i = 0; i < language.length; i++) {
//     if (i == 2){
//         break
//     }
//     const lan = language[i];
//     console.log('New language is ${lan}');
// }
for (let i = 0; i < language.length; i++) {
    if (i == 2){
       continue;
    }
    const lan = language[i];
    console.log('New language is ${lan}');
}


console.log('I am outside of any block');