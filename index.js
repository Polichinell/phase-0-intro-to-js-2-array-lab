const cats =  ["Milo", "Otis", "Garfield"]

const destructivelyAppendCat = function(name){
    cats.push(name)
}

const destructivelyPrependCat = function(name){
    cats.unshift(name)
}

const destructivelyRemoveLastCat = function(name){
    cats.pop(name)
}

const destructivelyRemoveFirstCat = function(name){
    cats.shift(name)
}

const appendCat = function(name){
    return [...cats, name]
}

const prependCat = function(name){
    return [name, ...cats]
}


const removeLastCat = function(name){
    return cats.slice(0, -1)
}

const removeFirstCat = function(name){
    return cats.slice(1)
}

