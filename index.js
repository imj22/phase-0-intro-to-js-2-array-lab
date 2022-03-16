// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"]; 

function destructivelyAppendCat(name) {
    cats.push(name);
} 

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat(name) {
    cats.pop(name);
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
}

function appendCat(name) {
    const newArr = [...cats, name];
    return newArr;
}

function prependCat(name) {
    const newArr = [name, ...cats];
    return newArr;
}

function removeLastCat() {
    const newArr = cats.slice(0,2);
    return newArr;
}

function removeFirstCat() {
    const newArr = cats.slice(1,3)
    return newArr;
}