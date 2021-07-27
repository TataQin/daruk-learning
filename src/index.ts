import { DarukServer, controller, get, DarukContext } from "daruk";
import { Container } from './container'
(async () => {
  const myapp = DarukServer();

  @controller()
  class Index {
    @get("/")
    public async index(ctx: DarukContext) {
      ctx.body = "hello world";
      console.log('ctx=')
      console.log(ctx)
    }
  }

  await myapp.binding();
  //   // b.ts
  // class B {
  //   p;
  //   constructor(p: number) {
  //       this.p = p;
  //   }
  // }

  // // a.ts
  // class A {
  //   b:B;
  //   constructor() {
  //       this.b = container.get('b');
  //   }
  // }

  // // main.ts
  
  // const container = new Container();
  // container.bind('a', A, []);
  // container.bind('b', B, [10]);

  // // 从容器中取出a
  // const a = container.get('a');
  // const b = container.get('b')
  // console.log(a); // A => { b: B { p: 10 } }
  // console.log(b)
  myapp.listen(3000);
})();
