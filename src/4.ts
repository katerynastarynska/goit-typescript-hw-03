class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  private key: Key;

  constructor(key: Key) {
    this.key = key;
  }
  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  door: boolean = false;
  key: Key;
  tenants: Person[] = [];

  comeIn(person: Person): void {
    if (
      this.door &&
      this.key &&
      this.key.getSignature() === person.getKey().getSignature()
    ) {
      this.tenants.push(person);
      console.log(`person ${person.getKey().getSignature()} can came in`);
    }
  }

  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  constructor(key: Key) {
    super();
    this.openDoor(key);
  }
  openDoor(key: Key): void {
    this.key = key;
    this.door = true;
  }
}

const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
