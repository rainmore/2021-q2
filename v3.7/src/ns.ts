import A from './a';
import B from './b';
import C from './c.js';

/*
import type A from './a';
import type B from './b';
import type C from './c.js';
*/


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

// class DD extends C {
//     a = 1;   
// }

export default D;


