# Todo

ความแตกต่างของการ export module Javascript ในแบบต่างๆ
ใน Javascript มีหลายวิธีในการ export modules ขึ้นอยู่กับว่าต้องการ export อะไร และต้องการใช้งานอย่างไร

วิธีหลักๆ ในการ export module Javascript มีดังนี้:
1. Export Named:

ใช้คำสั่ง `export` ตามด้วยชื่อตัวแปร ฟังก์ชัน หรือ class ที่ต้องการ export

ตัวอย่าง:

```javascript 
// myModule.js
export function add(a, b) {
  return a + b;
}

export const PI = 3.14159;

export class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}
```

ใช้โค้ดอย่างระมัดระวัง
การ Import:

```javascript
// app.js
import { add, PI } from './myModule';
import { Person } from './myModule';

const sum = add(5, 3);
console.log(sum); // Output: 8

console.log(PI); // Output: 3.14159

const person = new Person('John Doe', 30);
person.greet(); // Output: Hello, my name is John Doe and I am 30 years old.
```

ใช้โค้ดอย่างระมัดระวัง
2. Export Default:

ใช้คำสั่ง `export default`

ตัวอย่าง:

```javascript
// myModule.js
export default function add(a, b) {
  return a + b;
}
```

ใช้โค้ดอย่างระมัดระวัง
การ Import:
0
```javascript
// app.js
import add from './myModule';

const sum = add(5, 3);
console.log(sum); // Output: 8
```

ใช้โค้ดอย่างระมัดระวัง
3. Export All:

ใช้คำสั่ง `export *`

ตัวอย่าง:

```JavaScript
// myModule.js
export function add(a, b) {
  return a + b;
}

export const PI = 3.14159;

export class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

export * from './otherModule'; // Import all exports from another module
```

ใช้โค้ดอย่างระมัดระวัง
การ Import:

```javascript
// app.js
import * as myModule from './myModule';

const sum = myModule.add(5, 3);
console.log(sum); // Output: 8

console.log(myModule.PI); // Output: 3.14159

const person = new myModule.Person('John Doe', 30);
person.greet(); // Output: Hello, my name is John Doe and I am 30 years old.
```

ใช้โค้ดอย่างระมัดระวัง
4. Dynamic Export:

ใช้ bracket notation to export dynamically

ตัวอย่าง:

```javascript
// myModule.js
const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
};

export default operations;

```

ใช้โค้ดอย่างระมัดระวัง
การ Import:

```JavaScript
// app.js
import operations from './myModule';

const sum = operations.add(5, 3);
console.log(sum); // Output: 8

const difference = operations.subtract(10, 5);
console.log(difference); // Output: 5
```
