import type A from './a';
import type B from './b';
import CC from './c.js';
import type C from './c.js';

/*
namespace ns {
    export interface C {
        a: A;
        b: B;
    }
}

export default ns;
*/

/*
export interface D {
    a: A;
    b: B;
}

export default D;
*/

// export type { C };

export interface D {
    a: A;
    b: B;
}

export class DD extends CC {
    a = 1;   
    d: C;
    constructor(d: C) {
        super();
        this.d = d;
    }
}

// export class DDD extends CC {
//     a = 1;   
// }

export default D;


