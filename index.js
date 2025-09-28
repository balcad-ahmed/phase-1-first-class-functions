function add(a,b){
    return a+b;
}


function sub(a,b){
    return a-b;
}


function didvide(a,b){
    return a/b;
}

function receivesAFunction(callback){
   callback()
}

// console.log(receivesAFunction(8,7,add));

function returnsANamedFunction(){
    return function sum(a,b){
        return a+b;
    }
}


function returnsAnAnonymousFunction(){
    return function(){
        return "Hello world!"
    }
}