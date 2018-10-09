import {Calculator} from './10-module';
import lala from './10-module';

let myVar: boolean;

myVar = false;

class User {
  private fullName: string;
  constructor(private firstname: string, private lastname: string) {
    this.fullName = firstname + ' ' + lastname;
  }

  public getFullName(): string {
    return this.fullName;
  }
}

const klaus = new User('Klaus', 'Müller');
klaus.getFullName();

const calc = new Calculator();
console.log(calc.add(1, 2));

console.log(lala);

interface Person {
  name: string;
  id: number;
}

function sayHello(p: Person) {
  console.log('Hello ', p.name);
}

sayHello({name: 'Rüdiger', id: 1} as Person);

class Collection<T> {
  private item: T[] = [];
  public add(i: T) {
    this.item.push(i);
  }
}

const c = new Collection<string>();
// c.add(1); no!
c.add('foo');
// c.add(false); no!