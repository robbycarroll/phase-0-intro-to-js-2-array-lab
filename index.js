const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
    return cats;
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
}

function destructivelyRemoveLastCat(name) {
    cats.pop(name);
    return cats;
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
    return cats;
}

function appendCat(name) {
    const copyCats = [...cats, name];
    return copyCats;
}

function prependCat(name) {
    const addCats = [name, ...cats];
    return addCats;
}

function removeLastCat(name) {
    const removeEndCat = [...cats];
    removeEndCat.pop();
    return removeEndCat;
}

function removeFirstCat(name) {
    const removeFrontCat = [...cats];
    removeFrontCat.shift();
    return removeFrontCat;
}
