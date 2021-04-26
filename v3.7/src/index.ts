// import B from './b';

// let a = new B;

// console.log(a.bar);

import A from './a';
import B from './b';
import D from './ns';

/*
class Foo implements ns.C {
    a = new A;
    b = new B;
}

let bar = new Foo
console.log(bar)
*/

class Foo implements D {
    a = new A;
    b = new B;
}

let bar = new Foo
console.log(bar)