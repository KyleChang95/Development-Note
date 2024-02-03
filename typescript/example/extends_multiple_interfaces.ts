interface A {
  propA: string;
}

interface B {
  propB: number;
}

interface C extends A, B { }

const myObj: C = {
  propA: 'hello',
  propB: 123
}