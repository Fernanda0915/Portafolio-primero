//NOTA: Para parentesis es crl+shift+7
//NOTA: Si quiero usar read en ubuntu buscar los comandos

//const obj = {
//    name: "Foo Bar",
//    age: 23,
//    city: "TJ"
//}

//for(let Key of Object.keys(obj)) {
//  console.log(key + " :" + obj(key))
//}

// console.log("----------------------")

// for (let key in obj){
//   console.log(key + " :" + obj(key))
// }
 
// var i = 1000

// while (i<1000){
//     console.log(i)
//     i += 5
// }

// do{
// console.log(i)
// i += 5
// }while(i<1000)



// var animal = "Kitty"
// if (animal === "Kutty"){
//     console.log("yes, is it and is a pretty Kitty")
// }else{
//     console.log("no, is not a pretty Kitty")
// }

// var animal = "Kitty"

// var cat = (animal==="Kitty") ? "yes, is it and is a pretty Kitty" : "no, is not a pretty Kitty"

// console.log(cat)


// var classroom = 1

// switch (classroom) {
//     case 1:
//         console.log("classroom 1")
//         break;
//     case 2:
//         console.log("classroom 2")
//         break;
//     default:
//         console.log("classroom not found")
//         break;
// }

// var base = 89
// var altura = 56

// function area(base,altura){
//     return (base * altura)/2
// }

// console.log("El area del triangulo: " + area(base,altura))

// var l = 89
// var w = 23
// var h = 12

// function prism(l){
//     return function(w){
//         return function(h){
//             return l * w * h
//         }
//     }
// }

// console.log("El volumen del prisma es : " + prism(l)(w)(h))

// (function(){
//     console.log("I am the Annonymous Fuction" + msg)
//     return msg
// }("Foo"));

// console.log(f)
// const fx = function sum(x, y){
//     return x + y
// }

// const fy = function(){
//     return g + h              
// }

// console.log("fx: " + fx(45, 221) + "fy: " + fy(65,89))


// var sumTwoNumbers = function sum (a, b){
//     return a + b;
// }

// sum(1, 3);

//HACER PRUEVA HASTA SAYHELLO(12)
// var say = function (times){
//     if (times > 0){
//         console.log("Hello word")
//         say(times-1)
//     }
// }

// var sayhello =say
// sayhello(12)

// function personLogsSomeThings(person, ...msg){
//     msg.forEach(arg => {
//         console.log(person, 'says', arg);
//     });
// }

// personLogsSomeThings('John', 'hola','bienvenido');   


// const logarg = (...args) => console.log(args)
// const list = [1, 2, 3, 4]

// logarg("a", "b", "c", ...list)

function funstr(str2){
    return str2 + "Hola"
}

person = funstr("Foo")

function personSay(person, ...msg){
    msg.forEach(arg =>{
        console.log(person + "say:" + arg)
    })

}

personSay("Foo", "Hola", "WORD", "JS", "REACT", "REAC NATIVE", "ETC")