const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
fruits.set("apples", 200);
let numb = fruits.get("apples");
document.getElementById("demo0").innerHTML = "There are " + numb + " apples.";

const fruit = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

document.getElementById("demo1").innerHTML = fruit.get("apples");

const fruitss = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
fruitss.delete("apples");

document.getElementById("demo2").innerHTML = fruitss.has("apples");

const frui = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
frui.clear();
document.getElementById("demo3").innerHTML = frui.size;

const fru = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

document.getElementById("demo4").innerHTML = fru.size;

document.getElementById("demo5").innerHTML = 
"'John' is " + typeof "John" + "<br><br>" +
"('John' + 'Doe') is " + typeof ("John" + "Doe") + "<br><br>" +
"3.14 is " + typeof 3.14 + "<br><br>" +
"33 is " + typeof (33 + 66) + "<br><br>" +
"(33 + 66) is " + typeof 33 + "<br><br>" +
"NaN is " + typeof NaN + "<br><br>" +
"true is " + typeof true + "<br><br>" +
"false is " + typeof false + "<br><br>" +
"1234n is " + typeof 1234n + "<br><br>" +
"Symbol() is " + typeof Symbol() + "<br><br>" +
"x is " + typeof x;