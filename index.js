// They give us the ability to check more than 1 condition concurrenty
// && AND (BOTH conditions must be true)
// || OR (Either condition can be true)


/*let temp = 15;

if (temp > 0 && temp < 30){
    console.log ('The weather is good!');
}
else{
    console.log('The weather is bad!');
}*/

/*
let temp =-15;

if (temp <= 0 || temp >= 30){
    console.log ('The weather is bad!');
}
else{
    console.log('The weather is good!');
}*/

let temp = 15;
let sunny = false;
 
if (temp > 0 && temp < 30 && sunny){
    console.log('The weather is good!');
}
else{
    console.log('The weather is bad!');
}