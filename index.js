// Write your solution here!
// Write your solution here!

let cats = ["Milo","Otis","Garfield"];

function destructivelyAppendCat(name){
      cats.push(name);
}

function destructivelyPrependCat(name){
      cats.unshift(name);
}

function destructivelyRemoveLastCat(){
      cats.pop();
}
function destructivelyRemoveFirstCat(){
      cats.shift();
}

//appendCat
function appendCat(name){
      return [...cats, name];
}

//prependCat
function prependCat(name){
      return [name, ...cats];
}

//remove
function removeLastCat(){
      return cats.slice(0, -1);
}
function removeFirstCat(){
      return cats.slice(1);
}
