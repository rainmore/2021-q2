// Example 0 with hard code property name
let foo0: {a: number};

foo0 = {'a': 1};
console.log('foo0: ', foo0);

foo0 = {a: 1};
console.log('foo0: ', foo0);

// error code
/*
foo0 = {b: 1};
console.log('foo0: ', foo0);

foo0 = {a: 1, b: 1};
console.log('foo0: ', foo0);
*/

// Example 2 with wildcard code property name
let foo1: {[x: string]: number};

foo1 = {'a': 1};
foo1 = {1: 1};
foo1 = {'a': 1, 'b': 2, 'c': 3};
foo1 = {1: 1, 2: 2, 3: 3};

// Type 'string' is not assignable to type 'number'.
foo1 = {'a': 'a', 'b': 2, 'c': 3};


// Example 2 with wildcard code property name
let foo1: {[x: string]: number};

foo1 = {'a': 1};
console.log('foo1: ', foo1);

foo1 = {1: 1};
console.log('foo1: ', foo1);

foo1 = {'a': 1, 'b': 2, 'c': 3};
console.log('foo1: ', foo1);

foo1 = {1: 1, 2: 2, 3: 3};
console.log('foo1: ', foo1);

// error code
/*
foo1 = {'a': 'a', 'b': 2, 'c': 3};
console.log('foo1: ', foo1);
*/

// https://github.com/microsoft/TypeScript/issues/7803
// Example 3 with wildcard code property name
let foo2: {[_: string]: number};

foo2 = {'a': 1};
console.log('foo2: ', foo2);

foo2 = {1: 1};
console.log('foo2: ', foo2);

foo2 = {'a': 1, 'b': 2, 'c': 3};
console.log('foo2: ', foo2);

foo2 = {1: 1, 2: 2, 3: 3};
console.log('foo2: ', foo2);


// Error Code
/*
let foo3: {[key: string]: {prop: number} };

foo3 = {'a': 1};
console.log('foo3: ', foo3);

foo3 = {1: 1};
console.log('foo3: ', foo3);

foo3 = {'a': 1, 'b': 2, 'c': 3};
console.log('foo3: ', foo3);

foo3 = {1: 1, 2: 2, 3: 3};
console.log('foo3: ', foo3);


let foo4: {[_: string]: {_: number}};

foo4 = {'a': 1};
console.log('foo4: ', foo4);

foo4 = {1: 1};
console.log('foo4: ', foo4);

foo4 = {'a': 1, 'b': 2, 'c': 3};
console.log('foo4: ', foo4);

foo4 = {1: 1, 2: 2, 3: 3};
console.log('foo4: ', foo4);
*/


// Example 5 with wildcard code property name
let foo5: {[_: string]: number} | {a: number};

foo5 = { a: 5, c: 111 }
console.log('foo5: ', foo5);

foo5 = {c: 111 }
console.log('foo5: ', foo5);

foo5 = {a: 111 }
console.log('foo5: ', foo5);

// error code
/*
foo5 = {a: 111, 'a': 11} // Duplicate identifier ''a''.
console.log('foo5: ', foo5);

foo5 = {a: 111, 'b': 'adfadsf'} // Type 'string' is not assignable to type 'number'.
console.log('foo5: ', foo5); 
*/

// Example 6 with wildcard code property name
let foo6: {[_: string]: number | string};

foo6 = {'a': 1};
console.log('foo6: ', foo6);

foo6 = {1: 1};
console.log('foo6: ', foo6);

foo6 = {'a': 1, 'b': 2, 'c': 'lala'};
console.log('foo6: ', foo6);

foo6 = {1: 1, 2: 2, 3: 'lala'};
console.log('foo6: ', foo6);

// error code 
/* 
foo6 = {1: 1, 2: 2, 3: true};
console.log('foo6: ', foo6);
*/

// Example 7 with wildcard code property name
// error code 
/* 
let foo7: {[_: string]: number } | {[_: string]: string };

foo7 = {'a': 1};
console.log('foo7: ', foo7);

foo7 = {1: 1};
console.log('foo7: ', foo7);

foo7 = {'a': 1, 'b': 2, 'c': 'lala'};
console.log('foo7: ', foo7);

foo7 = {1: 1, 2: 2, 3: 'lala'};
console.log('foo7: ', foo7);

foo7 = {1: 1, 2: 2, 3: true};
console.log('foo7: ', foo7);
*/

let foo8: {[_: string]: number } | {a: string };

foo8 = {'a': 1};
console.log('foo8: ', foo8);

foo8 = {1: 1};
console.log('foo8: ', foo8);

foo8 = {a: 'asdfsda', 'b': 2, 'c': 3};
console.log('foo8: ', foo8);

// error code
/*
foo8 = {'a': 1, 'b': 2, 'c': 'lala'};
console.log('foo8: ', foo8);

foo8 = {1: 1, 2: 2, 3: 'lala'};
console.log('foo8: ', foo8);

foo8 = {1: 1, 2: 2, 3: true};
console.log('foo8: ', foo8);
*/

let foo9: {[_: string]: number } | {a: number };

foo9 = {'a': 1};
console.log('foo9: ', foo9);

foo9 = {1: 1};
console.log('foo9: ', foo9);

// error code
/*
foo9 = {a: 'asdfsda', 'b': 2, 'c': 3};
console.log('foo9: ', foo9);

foo9 = {'a': 1, 'b': 2, 'c': 'lala'};
console.log('foo9: ', foo9);

foo9 = {1: 1, 2: 2, 3: 'lala'};
console.log('foo9: ', foo9);

foo9 = {1: 1, 2: 2, 3: true};
console.log('foo9: ', foo9);
*/

let foo10: {[_: string]: number } | {a: any };

foo10 = {'a': 1};
console.log('foo10: ', foo10);

foo10 = {1: 1};
console.log('foo10: ', foo10);

foo10 = {a: true, 'b': 2, 'c': 3};
console.log('foo10: ', foo10);

foo10 = {1: 1, 2: 2, a: 'lala'};
console.log('foo10: ', foo10);

foo10 = {1: 1, 2: 2, a: true};
console.log('foo10: ', foo10);

// error code
/*
foo10 = {'a': 1, 'b': 2, 'c': 'lala'};
console.log('foo10: ', foo10);
*/

interface Animal {
    name: string;
}

interface Dog extends Animal {
    breed: string;
}

// Error: indexing with a numeric string might get you a completely separate type of Animal!
interface NotOkay {
    [x: number]: Animal;
    // Numeric index type 'Animal' is not assignable to string index type 'Dog'.
    [x: string]: Dog;
}


let foo = {
    /** @deprecated */
    bar() {

    }
}


foo.bar()