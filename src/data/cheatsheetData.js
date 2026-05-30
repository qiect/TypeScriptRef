export const cheatSheetCategories = [
    "基础类型",
    "接口与类型别名",
    "函数",
    "类",
    "泛型",
    "枚举",
    "高级类型",
    "模块与命名空间",
    "装饰器",
    "工具类型",
];
export const cheatSheetItems = [
    {
        id: "basic-number",
        title: "number 类型声明",
        description: "使用 number 类型标注数值变量，TypeScript 中所有数字均为 number 类型。",
        category: "基础类型",
        code: `let age: number = 25;
let hex: number = 0xff00;
let binary: number = 0b1010;
let octal: number = 0o744;
let price: number = 99.99;`,
        tags: ["number", "数字", "基础类型"],
    },
    {
        id: "basic-string",
        title: "string 类型声明",
        description: "使用 string 类型标注文本变量，支持模板字符串语法。",
        category: "基础类型",
        code: `let name: string = "TypeScript";
let greeting: string = \`Hello, \${name}!\`;
let char: string = 'A';`,
        tags: ["string", "字符串", "基础类型"],
    },
    {
        id: "basic-array",
        title: "数组类型",
        description: "声明数组类型的两种方式：元素类型[] 或 Array<元素类型>。",
        category: "基础类型",
        code: `let numbers: number[] = [1, 2, 3];
let strings: Array<string> = ["a", "b", "c"];
let matrix: number[][] = [[1, 2], [3, 4]];`,
        tags: ["array", "数组", "泛型数组"],
    },
    {
        id: "basic-tuple",
        title: "元组类型",
        description: "元组允许表示一个已知元素数量和类型的数组，各元素类型不必相同。",
        category: "基础类型",
        code: `let person: [string, number] = ["Alice", 25];
let rgb: [number, number, number] = [255, 128, 0];

// 可选元素的元组
let optionalTuple: [string, number?] = ["hello"];`,
        tags: ["tuple", "元组", "固定长度数组"],
    },
    {
        id: "basic-any-unknown",
        title: "any 与 unknown 区别",
        description: "any 关闭类型检查，unknown 是类型安全的顶层类型，使用前必须收窄。",
        category: "基础类型",
        code: `let anything: any = 42;
anything = "now a string";
anything.foo(); // 编译通过，但不安全

let uncertain: unknown = 42;
uncertain = "now a string";
// uncertain.foo(); // 错误：unknown 类型上不存在 foo

// 使用前必须收窄类型
if (typeof uncertain === "string") {
  console.log(uncertain.toUpperCase()); // 安全
}`,
        tags: ["any", "unknown", "类型安全", "顶层类型"],
    },
    {
        id: "basic-void-never",
        title: "void 与 never",
        description: "void 表示函数没有返回值，never 表示永远不会到达终点的类型。",
        category: "基础类型",
        code: `// void：函数没有返回值
function log(message: string): void {
  console.log(message);
}

// never：函数永远不会返回
function throwError(msg: string): never {
  throw new Error(msg);
}

function infiniteLoop(): never {
  while (true) {}
}

// never 是所有类型的子类型
type Impossible = string & number; // never`,
        tags: ["void", "never", "返回值类型", "底层类型"],
    },
    {
        id: "interface-definition",
        title: "接口定义",
        description: "使用 interface 关键字定义对象的形状约束。",
        category: "接口与类型别名",
        code: `interface User {
  name: string;
  age: number;
  email: string;
}

const user: User = {
  name: "Alice",
  age: 25,
  email: "alice@example.com",
};`,
        tags: ["interface", "接口", "对象形状"],
    },
    {
        id: "interface-optional",
        title: "可选属性",
        description: "使用 ? 标记接口中的可选属性，可选属性可以不存在。",
        category: "接口与类型别名",
        code: `interface Config {
  host: string;
  port: number;
  timeout?: number;
  retry?: boolean;
}

const config: Config = {
  host: "localhost",
  port: 3000,
};`,
        tags: ["可选属性", "optional", "接口"],
    },
    {
        id: "interface-readonly",
        title: "只读属性",
        description: "使用 readonly 修饰符标记只读属性，赋值后不可修改。",
        category: "接口与类型别名",
        code: `interface Point {
  readonly x: number;
  readonly y: number;
}

const point: Point = { x: 10, y: 20 };
// point.x = 5; // 错误：只读属性不可赋值

// ReadonlyArray
let roArray: ReadonlyArray<number> = [1, 2, 3];
// roArray.push(4); // 错误`,
        tags: ["readonly", "只读", "不可变"],
    },
    {
        id: "interface-extends",
        title: "接口继承",
        description: "接口可以继承一个或多个接口，实现属性的复用与扩展。",
        category: "接口与类型别名",
        code: `interface Animal {
  name: string;
  move(): void;
}

interface Dog extends Animal {
  breed: string;
  bark(): void;
}

interface Pet {
  owner: string;
}

interface PetDog extends Dog, Pet {
  vaccinated: boolean;
}

const myDog: PetDog = {
  name: "Buddy",
  breed: "Golden",
  owner: "Alice",
  vaccinated: true,
  move() {},
  bark() {},
};`,
        tags: ["extends", "继承", "多继承"],
    },
    {
        id: "type-alias",
        title: "type 别名",
        description: "使用 type 关键字创建类型别名，可以给任何类型起一个新名字。",
        category: "接口与类型别名",
        code: `type ID = string | number;
type Point = { x: number; y: number };
type Callback = (data: string) => void;
type Name = string;

const id: ID = "abc123";
const point: Point = { x: 1, y: 2 };
const cb: Callback = (data) => console.log(data);`,
        tags: ["type", "类型别名", "命名类型"],
    },
    {
        id: "type-intersection",
        title: "交叉类型",
        description: "使用 & 将多个类型合并为一个类型，新类型具有所有成员。",
        category: "接口与类型别名",
        code: `type Nameable = { name: string };
type Ageable = { age: number };
type Person = Nameable & Ageable;

const person: Person = {
  name: "Alice",
  age: 25,
};

// 实用场景：合并配置
type BaseConfig = { host: string; port: number };
type SSLConfig = { ssl: boolean; cert: string };
type ServerConfig = BaseConfig & SSLConfig;`,
        tags: ["交叉类型", "intersection", "类型合并", "&"],
    },
    {
        id: "function-type",
        title: "函数类型声明",
        description: "为函数参数和返回值添加类型注解，确保类型安全。",
        category: "函数",
        code: `function add(a: number, b: number): number {
  return a + b;
}

// 函数类型表达式
type MathOperation = (a: number, b: number) => number;
const multiply: MathOperation = (a, b) => a * b;`,
        tags: ["函数", "类型注解", "返回值"],
    },
    {
        id: "function-optional-default",
        title: "可选参数与默认参数",
        description: "使用 ? 标记可选参数，使用 = 设置参数默认值。",
        category: "函数",
        code: `// 可选参数必须放在必需参数之后
function greet(name: string, title?: string): string {
  if (title) {
    return \`Hello, \${title} \${name}!\`;
  }
  return \`Hello, \${name}!\`;
}

// 默认参数
function createUser(name: string, role: string = "user"): object {
  return { name, role };
}

greet("Alice");           // "Hello, Alice!"
greet("Alice", "Dr.");    // "Hello, Dr. Alice!"
createUser("Bob");        // { name: "Bob", role: "user" }`,
        tags: ["可选参数", "默认参数", "函数参数"],
    },
    {
        id: "function-overload",
        title: "函数重载",
        description: "通过多个重载签名定义同一函数的不同调用方式。",
        category: "函数",
        code: `function format(value: string): string;
function format(value: number): string;
function format(value: string | number): string {
  if (typeof value === "string") {
    return value.trim();
  }
  return value.toFixed(2);
}

const r1 = format("  hello  "); // "hello"
const r2 = format(3.14159);     // "3.14"`,
        tags: ["重载", "overload", "多态"],
    },
    {
        id: "function-arrow",
        title: "箭头函数类型",
        description: "为箭头函数添加类型注解，常用于回调和函数式编程。",
        category: "函数",
        code: `const add = (a: number, b: number): number => a + b;

// 作为回调
const numbers = [1, 2, 3];
const doubled = numbers.map((n: number): number => n * 2);

// 类型别名
type Predicate<T> = (item: T) => boolean;
const isEven: Predicate<number> = (n) => n % 2 === 0;`,
        tags: ["箭头函数", "回调", "lambda"],
    },
    {
        id: "class-definition",
        title: "类定义与构造函数",
        description: "使用 class 关键字定义类，constructor 定义构造函数。",
        category: "类",
        code: `class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): string {
    return \`Hi, I'm \${this.name}, \${this.age} years old.\`;
  }
}

const person = new Person("Alice", 25);`,
        tags: ["class", "类", "构造函数", "constructor"],
    },
    {
        id: "class-access-modifiers",
        title: "访问修饰符",
        description: "使用 public、private、protected 控制类成员的访问权限。",
        category: "类",
        code: `class BankAccount {
  public owner: string;
  private balance: number;
  protected id: string;

  constructor(owner: string, balance: number) {
    this.owner = owner;
    this.balance = balance;
    this.id = Math.random().toString(36);
  }

  // 参数属性简写
  // constructor(public owner: string, private balance: number) {}
}

const account = new BankAccount("Alice", 1000);
console.log(account.owner);    // OK
// console.log(account.balance); // 错误：private
// console.log(account.id);      // 错误：protected`,
        tags: ["public", "private", "protected", "访问控制"],
    },
    {
        id: "class-abstract",
        title: "抽象类",
        description: "使用 abstract 定义抽象类和抽象方法，子类必须实现抽象方法。",
        category: "类",
        code: `abstract class Shape {
  abstract getArea(): number;

  describe(): string {
    return \`Area: \${this.getArea()}\`;
  }
}

class Circle extends Shape {
  constructor(public radius: number) {
    super();
  }

  getArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle extends Shape {
  constructor(public width: number, public height: number) {
    super();
  }

  getArea(): number {
    return this.width * this.height;
  }
}`,
        tags: ["abstract", "抽象类", "抽象方法"],
    },
    {
        id: "class-implements",
        title: "实现接口",
        description: "类使用 implements 关键字实现接口，确保类满足接口契约。",
        category: "类",
        code: `interface Printable {
  print(): void;
}

interface Loggable {
  log(message: string): void;
}

class Report implements Printable, Loggable {
  constructor(private title: string) {}

  print(): void {
    console.log(\`Printing: \${this.title}\`);
  }

  log(message: string): void {
    console.log(\`[\${this.title}] \${message}\`);
  }
}`,
        tags: ["implements", "接口实现", "契约"],
    },
    {
        id: "generic-function",
        title: "泛型函数",
        description: "使用泛型参数创建可复用的类型安全函数。",
        category: "泛型",
        code: `function identity<T>(value: T): T {
  return value;
}

const num = identity<number>(42);
const str = identity("hello"); // 类型推断

function first<T>(arr: T[]): T | undefined {
  return arr[0];
}

first([1, 2, 3]);       // number
first(["a", "b"]);      // string`,
        tags: ["泛型", "函数", "类型参数"],
    },
    {
        id: "generic-interface",
        title: "泛型接口",
        description: "定义带有类型参数的接口，增强接口的通用性。",
        category: "泛型",
        code: `interface Repository<T> {
  findById(id: string): T | null;
  save(entity: T): void;
  findAll(): T[];
}

interface User {
  id: string;
  name: string;
}

class UserRepository implements Repository<User> {
  private users: User[] = [];

  findById(id: string): User | null {
    return this.users.find((u) => u.id === id) ?? null;
  }

  save(entity: User): void {
    this.users.push(entity);
  }

  findAll(): User[] {
    return this.users;
  }
}`,
        tags: ["泛型", "接口", "Repository"],
    },
    {
        id: "generic-constraint",
        title: "泛型约束 (extends)",
        description: "使用 extends 约束泛型参数必须满足特定条件。",
        category: "泛型",
        code: `interface HasLength {
  length: number;
}

function logLength<T extends HasLength>(value: T): void {
  console.log(value.length);
}

logLength("hello");     // 5
logLength([1, 2, 3]);   // 3
// logLength(123);       // 错误：number 没有 length

// 使用 keyof 约束
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { name: "Alice", age: 25 };
getProperty(user, "name"); // string
// getProperty(user, "foo"); // 错误`,
        tags: ["泛型约束", "extends", "keyof"],
    },
    {
        id: "generic-default",
        title: "泛型默认值",
        description: "为泛型参数设置默认类型，未指定时使用默认值。",
        category: "泛型",
        code: `interface PaginatedResponse<T, Meta = { total: number; page: number }> {
  data: T[];
  meta: Meta;
}

const res1: PaginatedResponse<string> = {
  data: ["a", "b"],
  meta: { total: 2, page: 1 },
};

interface CustomMeta {
  total: number;
  page: number;
  pageSize: number;
}

const res2: PaginatedResponse<string, CustomMeta> = {
  data: ["a", "b"],
  meta: { total: 2, page: 1, pageSize: 10 },
};`,
        tags: ["泛型默认值", "默认类型", "泛型参数"],
    },
    {
        id: "enum-numeric",
        title: "数字枚举",
        description: "定义数字枚举类型，成员值从 0 自增或手动指定。",
        category: "枚举",
        code: `enum Direction {
  Up,      // 0
  Down,    // 1
  Left,    // 2
  Right,   // 3
}

enum HttpStatus {
  OK = 200,
  NotFound = 404,
  InternalError = 500,
}

let dir: Direction = Direction.Up;
let status: HttpStatus = HttpStatus.OK;`,
        tags: ["enum", "数字枚举", "枚举值"],
    },
    {
        id: "enum-string",
        title: "字符串枚举",
        description: "定义字符串枚举，每个成员必须显式指定字符串值。",
        category: "枚举",
        code: `enum UserRole {
  Admin = "ADMIN",
  Editor = "EDITOR",
  Viewer = "VIEWER",
}

enum Environment {
  Development = "development",
  Staging = "staging",
  Production = "production",
}

function checkRole(role: UserRole): boolean {
  return role === UserRole.Admin;
}`,
        tags: ["enum", "字符串枚举", "枚举值"],
    },
    {
        id: "enum-const",
        title: "常量枚举",
        description: "使用 const enum 定义常量枚举，编译时内联，不生成运行时代码。",
        category: "枚举",
        code: `const enum Color {
  Red,
  Green,
  Blue,
}

let c = Color.Red;   // 编译为: let c = 0
let g = Color.Green; // 编译为: let g = 1

const enum Status {
  Active = "ACTIVE",
  Inactive = "INACTIVE",
}

let s = Status.Active; // 编译为: let s = "ACTIVE"`,
        tags: ["const enum", "常量枚举", "内联", "性能优化"],
    },
    {
        id: "enum-reverse-mapping",
        title: "反向映射",
        description: "数字枚举支持从值到名的反向映射，字符串枚举不支持。",
        category: "枚举",
        code: `enum Direction {
  Up,
  Down,
  Left,
  Right,
}

// 正向映射：名 -> 值
console.log(Direction.Up);    // 0

// 反向映射：值 -> 名
console.log(Direction[0]);    // "Up"

// 字符串枚举没有反向映射
enum StringEnum {
  A = "a",
  B = "b",
}
// StringEnum["a"]; // 错误：没有反向映射`,
        tags: ["enum", "反向映射", "数字枚举"],
    },
    {
        id: "advanced-union",
        title: "联合类型",
        description: "使用 | 将多个类型组合，表示值可以是其中任意一种。",
        category: "高级类型",
        code: `type Status = "pending" | "success" | "error";
type ID = string | number;

function handleStatus(status: Status): string {
  switch (status) {
    case "pending": return "加载中...";
    case "success": return "操作成功";
    case "error":   return "出错了";
  }
}

// 可辨识联合
interface Circle { kind: "circle"; radius: number; }
interface Square { kind: "square"; side: number; }
type Shape = Circle | Square;

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle": return Math.PI * shape.radius ** 2;
    case "square": return shape.side ** 2;
  }
}`,
        tags: ["联合类型", "union", "可辨识联合"],
    },
    {
        id: "advanced-conditional",
        title: "条件类型",
        description: "使用条件类型根据类型关系选择不同的结果类型。",
        category: "高级类型",
        code: `type IsString<T> = T extends string ? "yes" : "no";

type A = IsString<string>;  // "yes"
type B = IsString<number>;  // "no"

type NonNullable<T> = T extends null | undefined ? never : T;
type C = NonNullable<string | null>; // string

// 分布式条件类型
type ToArray<T> = T extends unknown ? T[] : never;
type D = ToArray<string | number>; // string[] | number[]`,
        tags: ["条件类型", "conditional", "extends", "三元类型"],
    },
    {
        id: "advanced-mapped",
        title: "映射类型",
        description: "基于旧类型创建新类型，通过遍历键来转换属性。",
        category: "高级类型",
        code: `type Stringify<T> = {
  [K in keyof T]: string;
};

interface Point { x: number; y: number; }
type StringPoint = Stringify<Point>; // { x: string; y: string }

// 修改属性为可选
type MyPartial<T> = {
  [K in keyof T]?: T[K];
};

// 修改属性为只读
type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};

// 移除 readonly 修饰符
type Mutable<T> = {
  -readonly [K in keyof T]: T[K];
};`,
        tags: ["映射类型", "mapped", "keyof", "属性转换"],
    },
    {
        id: "advanced-infer",
        title: "infer 关键字",
        description: "在条件类型中推断类型变量，用于提取嵌套类型信息。",
        category: "高级类型",
        code: `// 提取函数返回值类型
type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
type R1 = MyReturnType<() => string>;  // string
type R2 = MyReturnType<() => number>;  // number

// 提取函数参数类型
type MyParameters<T> = T extends (...args: infer P) => any ? P : never;
type P1 = MyParameters<(a: string, b: number) => void>; // [string, number]

// 提取 Promise 内部类型
type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;
type U1 = UnwrapPromise<Promise<string>>; // string
type U2 = UnwrapPromise<number>;          // number`,
        tags: ["infer", "类型推断", "条件类型", "提取类型"],
    },
    {
        id: "advanced-template-literal",
        title: "模板字面量类型",
        description: "使用模板字面量语法创建基于字符串的类型操作。",
        category: "高级类型",
        code: `type EventName = "click" | "focus" | "blur";
type EventHandler = \`on\${Capitalize<EventName>}\`;
// "onClick" | "onFocus" | "onBlur"

type CSSProperty = "margin" | "padding";
type CSSDirection = "top" | "right" | "bottom" | "left";
type CSSKey = \`\${CSSProperty}-\${CSSDirection}\`;
// "margin-top" | "margin-right" | ... | "padding-left"

// 内置字符串操作类型
type Upper = Uppercase<"hello">;     // "HELLO"
type Lower = Lowercase<"HELLO">;     // "hello"
type Cap = Capitalize<"hello">;      // "Hello"
type Uncap = Uncapitalize<"Hello">;  // "hello"`,
        tags: ["模板字面量", "template literal", "字符串类型", "Uppercase"],
    },
    {
        id: "module-named-export",
        title: "命名导出",
        description: "使用 export 关键字导出变量、函数、类等，支持按名导入。",
        category: "模块与命名空间",
        code: `// utils.ts
export const PI = 3.14159;

export function add(a: number, b: number): number {
  return a + b;
}

export interface Config {
  name: string;
  value: number;
}

// 导入方式
// import { PI, add, Config } from "./utils";
// import { add as sum } from "./utils";
// import * as Utils from "./utils";`,
        tags: ["export", "命名导出", "模块"],
    },
    {
        id: "module-default-export",
        title: "默认导出",
        description: "使用 export default 导出模块的默认成员，每个模块只能有一个默认导出。",
        category: "模块与命名空间",
        code: `// Logger.ts
export default class Logger {
  constructor(private prefix: string) {}

  log(message: string): void {
    console.log(\`[\${this.prefix}] \${message}\`);
  }
}

// 也可以导出默认函数
// export default function greet(name: string): string {
//   return \`Hello, \${name}!\`;
// }

// 导入方式
// import Logger from "./Logger";
// import MyLogger from "./Logger"; // 可以自定义名称`,
        tags: ["default", "默认导出", "模块"],
    },
    {
        id: "module-namespace",
        title: "命名空间",
        description: "使用 namespace 组织代码，避免全局命名冲突。",
        category: "模块与命名空间",
        code: `namespace Validation {
  export interface StringValidator {
    isValid(s: string): boolean;
  }

  const lettersRegexp = /^[A-Za-z]+$/;

  export class LettersOnlyValidator implements StringValidator {
    isValid(s: string): boolean {
      return lettersRegexp.test(s);
    }
  }
}

const validator = new Validation.LettersOnlyValidator();
console.log(validator.isValid("hello")); // true`,
        tags: ["namespace", "命名空间", "代码组织"],
    },
    {
        id: "module-dynamic-import",
        title: "动态导入",
        description: "使用 import() 实现按需加载模块，返回 Promise。",
        category: "模块与命名空间",
        code: `async function loadModule() {
  const { default: Logger } = await import("./Logger");
  const logger = new Logger("App");
  logger.log("模块已加载");
}

// 条件加载
if (condition) {
  import("./heavy-module").then((module) => {
    module.doSomething();
  });
}

// 配合类型使用
type ModuleType = typeof import("./utils");
async function getUtils(): Promise<ModuleType> {
  return import("./utils");
}`,
        tags: ["动态导入", "import()", "按需加载", "代码分割"],
    },
    {
        id: "decorator-class",
        title: "类装饰器",
        description: "类装饰器在类声明前声明，用于观察、修改或替换类定义。",
        category: "装饰器",
        code: `function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@sealed
class Greeter {
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  greet() {
    return "Hello, " + this.greeting;
  }
}

// 带参数的类装饰器
function logClass(target: Function) {
  console.log(\`类 \${target.name} 已创建\`);
}

@logClass
class MyClass {}`,
        tags: ["类装饰器", "decorator", "元编程"],
    },
    {
        id: "decorator-method",
        title: "方法装饰器",
        description: "方法装饰器声明在方法声明前，可观察、修改或替换方法定义。",
        category: "装饰器",
        code: `function enumerable(value: boolean) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.enumerable = value;
  };
}

function log(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(\`调用 \${propertyKey}，参数: \${JSON.stringify(args)}\`);
    return originalMethod.apply(this, args);
  };
}

class Calculator {
  @log
  @enumerable(false)
  add(a: number, b: number): number {
    return a + b;
  }
}`,
        tags: ["方法装饰器", "decorator", "AOP", "日志"],
    },
    {
        id: "decorator-property",
        title: "属性装饰器",
        description: "属性装饰器声明在属性声明前，可观察属性的定义方式。",
        category: "装饰器",
        code: `function format(formatString: string) {
  return function (target: any, propertyKey: string) {
    Reflect.defineMetadata("format", formatString, target, propertyKey);
  };
}

class User {
  @format("Hello, %s")
  name: string;

  @format("Age: %d")
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

// 简单的属性验证装饰器
function required(target: any, propertyKey: string) {
  console.log(\`属性 \${propertyKey} 标记为必填\`);
}

class Form {
  @required
  username!: string;

  @required
  password!: string;
}`,
        tags: ["属性装饰器", "decorator", "元数据", "验证"],
    },
    {
        id: "decorator-parameter",
        title: "参数装饰器",
        description: "参数装饰器声明在参数声明前，可观察参数的定义方式。",
        category: "装饰器",
        code: `function logParameter(
  target: any,
  propertyKey: string,
  parameterIndex: number
) {
  const existingParameters: number[] =
    Reflect.getOwnMetadata("log:parameters", target, propertyKey) || [];
  existingParameters.push(parameterIndex);
  Reflect.defineMetadata(
    "log:parameters",
    existingParameters,
    target,
    propertyKey
  );
}

class UserService {
  greet(@logParameter name: string, @logParameter age: number): string {
    return \`Hello \${name}, you are \${age} years old\`;
  }
}`,
        tags: ["参数装饰器", "decorator", "参数元数据"],
    },
    {
        id: "utility-partial",
        title: "Partial<T>",
        description: "将类型 T 的所有属性变为可选，常用于对象更新的场景。",
        category: "工具类型",
        code: `interface User {
  name: string;
  age: number;
  email: string;
}

type PartialUser = Partial<User>;
// { name?: string; age?: number; email?: string; }

function updateUser(user: User, updates: Partial<User>): User {
  return { ...user, ...updates };
}

const user: User = { name: "Alice", age: 25, email: "a@b.com" };
const updated = updateUser(user, { age: 26 });
// { name: "Alice", age: 26, email: "a@b.com" }`,
        tags: ["Partial", "工具类型", "可选"],
    },
    {
        id: "utility-required",
        title: "Required<T>",
        description: "将类型 T 的所有属性变为必选，与 Partial 相反。",
        category: "工具类型",
        code: `interface Config {
  host?: string;
  port?: number;
  debug?: boolean;
}

type RequiredConfig = Required<Config>;
// { host: string; port: number; debug: boolean; }

const config: RequiredConfig = {
  host: "localhost",
  port: 3000,
  debug: false,
};`,
        tags: ["Required", "工具类型", "必选"],
    },
    {
        id: "utility-pick",
        title: "Pick<T, K>",
        description: "从类型 T 中选取一组属性 K 构成新类型。",
        category: "工具类型",
        code: `interface User {
  id: string;
  name: string;
  email: string;
  age: number;
  address: string;
}

type UserPreview = Pick<User, "id" | "name">;
// { id: string; name: string; }

type UserContact = Pick<User, "name" | "email" | "address">;
// { name: string; email: string; address: string; }

const preview: UserPreview = {
  id: "1",
  name: "Alice",
};`,
        tags: ["Pick", "工具类型", "选取属性"],
    },
    {
        id: "utility-omit",
        title: "Omit<T, K>",
        description: "从类型 T 中移除一组属性 K 构成新类型，与 Pick 互补。",
        category: "工具类型",
        code: `interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
}

type UserPublic = Omit<User, "password" | "createdAt">;
// { id: string; name: string; email: string; }

type CreateUserDTO = Omit<User, "id" | "createdAt">;
// { name: string; email: string; password: string; }

const publicUser: UserPublic = {
  id: "1",
  name: "Alice",
  email: "alice@example.com",
};`,
        tags: ["Omit", "工具类型", "移除属性"],
    },
    {
        id: "utility-record",
        title: "Record<K, V>",
        description: "构造一个键类型为 K、值类型为 V 的对象类型。",
        category: "工具类型",
        code: `type Role = "admin" | "editor" | "viewer";
type Permissions = Record<Role, string[]>;

const permissions: Permissions = {
  admin: ["read", "write", "delete"],
  editor: ["read", "write"],
  viewer: ["read"],
};

// 常见用法：字典映射
type StatusCode = Record<number, string>;
const httpStatus: StatusCode = {
  200: "OK",
  404: "Not Found",
  500: "Internal Server Error",
};

// 键为 string 的通用对象
type StringMap<T> = Record<string, T>;
const scores: StringMap<number> = {
  alice: 95,
  bob: 87,
};`,
        tags: ["Record", "工具类型", "字典", "映射"],
    },
    {
        id: "utility-returntype",
        title: "ReturnType<T>",
        description: "提取函数类型 T 的返回值类型。",
        category: "工具类型",
        code: `function getUser() {
  return { name: "Alice", age: 25, email: "a@b.com" };
}

type UserType = ReturnType<typeof getUser>;
// { name: string; age: number; email: string; }

function fetchData(): Promise<string[]> {
  return Promise.resolve(["a", "b"]);
}

type DataType = ReturnType<typeof fetchData>;
// Promise<string[]>

// 配合 Awaited 使用
type ResolvedData = Awaited<ReturnType<typeof fetchData>>;
// string[]`,
        tags: ["ReturnType", "工具类型", "返回值类型"],
    },
    {
        id: "utility-parameters",
        title: "Parameters<T>",
        description: "提取函数类型 T 的参数类型，以元组形式返回。",
        category: "工具类型",
        code: `function createUser(name: string, age: number, active: boolean) {
  return { name, age, active };
}

type UserParams = Parameters<typeof createUser>;
// [string, number, boolean]

// 获取单个参数类型
type NameParam = Parameters<typeof createUser>[0]; // string

// 实用场景：转发参数
function wrapper(...args: Parameters<typeof createUser>) {
  console.log("创建用户...");
  return createUser(...args);
}`,
        tags: ["Parameters", "工具类型", "参数类型", "元组"],
    },
    {
        id: "utility-readonly",
        title: "Readonly<T>",
        description: "将类型 T 的所有属性变为只读，赋值后不可修改。",
        category: "工具类型",
        code: `interface Config {
  host: string;
  port: number;
  debug: boolean;
}

type ReadonlyConfig = Readonly<Config>;
// { readonly host: string; readonly port: number; readonly debug: boolean; }

const config: ReadonlyConfig = {
  host: "localhost",
  port: 3000,
  debug: false,
};
// config.host = "127.0.0.1"; // 错误：只读属性不可赋值

// 冻结对象
function freezeConfig<T>(obj: T): Readonly<T> {
  return Object.freeze(obj);
}`,
        tags: ["Readonly", "工具类型", "只读", "不可变"],
    },
];
