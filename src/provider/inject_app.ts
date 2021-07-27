import { Provider  } from "./provider";
import { Container } from "./container";
import { Inject } from "./inject";
import { load } from './load'
// b.ts
@Provider('b', [10])
export class B {
    p;
    constructor(p: number) {
        this.p = p;
    }
}

// c.ts
@Provider('c', [100])
export class C {
    p;
    constructor(p: number) {
        this.p = p;
    }
}

// a.ts
@Provider('a')
export class A {
    @Inject()
    private b:B;
    @Inject()
    private c: C;
}

// main.ts
const container = new Container();
load(container);
// A {}
console.log(container.get('a'));  // => A { b: B { p: 10 } }
